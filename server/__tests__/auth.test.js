import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Pool } from '@neondatabase/serverless';

jest.mock('@neondatabase/serverless');

describe('Authentication API', () => {
  let app;
  let mockPool;
  const JWT_SECRET = 'test-secret';

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();

    mockPool = {
      query: jest.fn(),
      end: jest.fn(),
    };

    Pool.mockImplementation(() => mockPool);

    process.env.JWT_SECRET = JWT_SECRET;

    app = express();
    app.use(express.json());

    const authenticateToken = (req, res, next) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({ error: 'Access token required' });
      }

      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
      });
    };

    // Auth signup endpoint
    app.post('/api/auth/signup', async (req, res) => {
      try {
        const { email, username, password } = req.body;

        if (!email || !username || !password) {
          return res
            .status(400)
            .json({ error: 'Email, username, and password required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await mockPool.query(
          'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, email, username',
          [email, username, hashedPassword]
        );

        const token = jwt.sign(
          { id: result.rows[0].id, email: result.rows[0].email },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        res.status(201).json({ user: result.rows[0], token });
      } catch (error) {
        if (error.code === '23505') {
          res.status(409).json({ error: 'Email or username already exists' });
        } else {
          res.status(500).json({ error: 'Failed to sign up' });
        }
      }
    });

    // Auth login endpoint
    app.post('/api/auth/login', async (req, res) => {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password required' });
        }

        const result = await mockPool.query(
          'SELECT * FROM users WHERE email = $1',
          [email]
        );

        if (result.rows.length === 0) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
          expiresIn: '24h',
        });

        res.json({
          user: { id: user.id, email: user.email, username: user.username },
          token,
        });
      } catch {
        res.status(500).json({ error: 'Failed to log in' });
      }
    });

    // Protected endpoint example
    app.post('/api/properties', authenticateToken, async (req, res) => {
      res.json({ authenticated: true, user: req.user });
    });
  });

  describe('POST /api/auth/signup', () => {
    it('should signup a new user successfully', async () => {
      const newUser = {
        id: 1,
        email: 'test@example.com',
        username: 'testuser',
      };

      mockPool.query.mockResolvedValue({ rows: [newUser] });

      const response = await request(app).post('/api/auth/signup').send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      });

      expect(response.status).toBe(201);
      expect(response.body.user.email).toBe('test@example.com');
      expect(response.body.token).toBeDefined();
      expect(typeof response.body.token).toBe('string');
    });

    it('should return 400 if email is missing', async () => {
      const response = await request(app).post('/api/auth/signup').send({
        username: 'testuser',
        password: 'password123',
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(
        'Email, username, and password required'
      );
    });

    it('should return 400 if username is missing', async () => {
      const response = await request(app).post('/api/auth/signup').send({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(
        'Email, username, and password required'
      );
    });

    it('should return 400 if password is missing', async () => {
      const response = await request(app).post('/api/auth/signup').send({
        email: 'test@example.com',
        username: 'testuser',
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(
        'Email, username, and password required'
      );
    });

    it('should return 409 if email already exists', async () => {
      const error = new Error('Duplicate key');
      error.code = '23505';
      mockPool.query.mockRejectedValue(error);

      const response = await request(app).post('/api/auth/signup').send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      });

      expect(response.status).toBe(409);
      expect(response.body.error).toBe('Email or username already exists');
    });

    it('should return 500 on database error', async () => {
      mockPool.query.mockRejectedValue(new Error('Database error'));

      const response = await request(app).post('/api/auth/signup').send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      });

      expect(response.status).toBe(500);
      expect(response.body.error).toBe('Failed to sign up');
    });

    it('should hash password before storing', async () => {
      const newUser = {
        id: 1,
        email: 'test@example.com',
        username: 'testuser',
      };
      mockPool.query.mockResolvedValue({ rows: [newUser] });

      await request(app).post('/api/auth/signup').send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      });

      const [, args] = mockPool.query.mock.calls[0];
      const hashedPassword = args[2];

      expect(hashedPassword).not.toBe('password123');
      expect(await bcrypt.compare('password123', hashedPassword)).toBe(true);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login successfully with valid credentials', async () => {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const user = {
        id: 1,
        email: 'test@example.com',
        username: 'testuser',
        password: hashedPassword,
      };

      mockPool.query.mockResolvedValue({ rows: [user] });

      const response = await request(app).post('/api/auth/login').send({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(response.status).toBe(200);
      expect(response.body.user.email).toBe('test@example.com');
      expect(response.body.token).toBeDefined();
    });

    it('should return 400 if email is missing', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ password: 'password123' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Email and password required');
    });

    it('should return 400 if password is missing', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@example.com' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Email and password required');
    });

    it('should return 401 if user not found', async () => {
      mockPool.query.mockResolvedValue({ rows: [] });

      const response = await request(app).post('/api/auth/login').send({
        email: 'nonexistent@example.com',
        password: 'password123',
      });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid email or password');
    });

    it('should return 401 if password is incorrect', async () => {
      const user = {
        id: 1,
        email: 'test@example.com',
        username: 'testuser',
        password: await bcrypt.hash('correctpassword', 10),
      };

      mockPool.query.mockResolvedValue({ rows: [user] });

      const response = await request(app).post('/api/auth/login').send({
        email: 'test@example.com',
        password: 'wrongpassword',
      });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid email or password');
    });

    it('should return 500 on database error', async () => {
      mockPool.query.mockRejectedValue(new Error('Database error'));

      const response = await request(app).post('/api/auth/login').send({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(response.status).toBe(500);
      expect(response.body.error).toBe('Failed to log in');
    });
  });

  describe('Authentication Middleware', () => {
    it('should allow access with valid token', async () => {
      const token = jwt.sign({ id: 1, email: 'test@example.com' }, JWT_SECRET, {
        expiresIn: '24h',
      });

      const response = await request(app)
        .post('/api/properties')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(response.status).toBe(200);
      expect(response.body.authenticated).toBe(true);
      expect(response.body.user.id).toBe(1);
    });

    it('should return 401 if token is missing', async () => {
      const response = await request(app).post('/api/properties').send({});

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Access token required');
    });

    it('should return 403 if token is invalid', async () => {
      const response = await request(app)
        .post('/api/properties')
        .set('Authorization', 'Bearer invalid-token')
        .send({});

      expect(response.status).toBe(403);
      expect(response.body.error).toBe('Invalid or expired token');
    });

    it('should return 403 if token is expired', async () => {
      const expiredToken = jwt.sign(
        { id: 1, email: 'test@example.com' },
        JWT_SECRET,
        { expiresIn: '0s' }
      );

      await new Promise((resolve) => setTimeout(resolve, 10));

      const response = await request(app)
        .post('/api/properties')
        .set('Authorization', `Bearer ${expiredToken}`)
        .send({});

      expect(response.status).toBe(403);
      expect(response.body.error).toBe('Invalid or expired token');
    });

    it('should extract bearer token correctly', async () => {
      const token = jwt.sign({ id: 1, email: 'test@example.com' }, JWT_SECRET);

      const response = await request(app)
        .post('/api/properties')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(response.status).toBe(200);
    });
  });
});
