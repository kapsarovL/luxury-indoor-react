import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Luxury Indoor React API',
      description:
        'REST API for the Luxury Indoor React property browsing platform',
      version: '1.0.0',
      contact: {
        name: 'API Support',
        email: 'support@luxuryindoor.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description:
            'JWT access token. Prefix with "Bearer " in Authorization header.',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'Unique user identifier' },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email address',
            },
            username: { type: 'string', description: 'Unique username' },
            password: {
              type: 'string',
              description: 'Hashed password (not returned in responses)',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Account creation timestamp',
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp',
            },
          },
          required: ['email', 'username', 'password'],
        },
        AuthResponse: {
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
              },
            },
            token: {
              type: 'string',
              description: 'JWT access token (24h expiry)',
            },
          },
        },
        Property: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'Unique property identifier' },
            title: { type: 'string', description: 'Property name or title' },
            location: { type: 'string', description: 'Property location' },
            price: {
              type: 'string',
              description: 'Price as string (e.g., "$5,000,000")',
            },
            bedrooms: { type: 'integer', description: 'Number of bedrooms' },
            bathrooms: { type: 'integer', description: 'Number of bathrooms' },
            area: {
              type: 'string',
              description: 'Property area (e.g., "5,000 sq ft")',
            },
            description: {
              type: 'string',
              description: 'Detailed property description',
            },
            type: {
              type: 'string',
              description: 'Property type (e.g., "apartment", "villa")',
            },
            images: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of image URLs',
            },
            amenities: {
              type: 'array',
              items: { type: 'string' },
              description: 'List of amenities',
            },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' },
          },
          required: [
            'title',
            'location',
            'price',
            'bedrooms',
            'bathrooms',
            'area',
            'description',
          ],
        },
        Subscription: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Unique subscription identifier',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Subscriber email address',
            },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' },
          },
          required: ['email'],
        },
        Error: {
          type: 'object',
          properties: {
            error: { type: 'string', description: 'Error message' },
          },
        },
      },
      responses: {
        UnauthorizedError: {
          description: 'Access token is missing or invalid',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Error' },
            },
          },
        },
        ForbiddenError: {
          description: 'Access token is expired or invalid',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Error' },
            },
          },
        },
        NotFoundError: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Error' },
            },
          },
        },
      },
    },
  },
  apis: ['./index.js'],
};

export const swaggerSpec = swaggerJsdoc(options);
