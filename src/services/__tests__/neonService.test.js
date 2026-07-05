import { neonService } from '../neonService';

describe('neonService', () => {
  beforeEach(() => {
    global.fetch.mockClear();
  });

  describe('Properties API', () => {
    it('should fetch all properties', async () => {
      const mockProperties = [
        {
          id: '1',
          title: 'Modern Villa',
          type: 'villa',
          price: '$4,500,000',
        },
      ];

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockProperties,
      });

      const result = await neonService.getProperties();

      expect(result).toEqual(mockProperties);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/properties'),
        expect.any(Object)
      );
    });

    it('should throw error when fetch fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
      });

      await expect(neonService.getProperties()).rejects.toThrow(
        'Failed to fetch properties'
      );
    });

    it('should fetch property by id', async () => {
      const mockProperty = { id: '1', title: 'Modern Villa' };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockProperty,
      });

      const result = await neonService.getPropertyById('1');

      expect(result).toEqual(mockProperty);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/properties/1'),
        expect.any(Object)
      );
    });

    it('should create a property', async () => {
      const newProperty = {
        title: 'New Villa',
        location: 'Los Angeles',
        price: '$5,000,000',
        type: 'villa',
      };

      const mockResponse = { id: '1', ...newProperty };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.createProperty(newProperty);

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/properties'),
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(newProperty),
        })
      );
    });

    it('should delete a property', async () => {
      const mockResponse = { id: '1', title: 'Deleted Villa' };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.deleteProperty('1');

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/properties/1'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });
  });

  describe('Subscriptions API', () => {
    it('should subscribe an email', async () => {
      const subscriptionData = { email: 'test@example.com' };
      const mockResponse = { id: 1, email: 'test@example.com' };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.subscribeEmail(subscriptionData);

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/subscriptions'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(subscriptionData),
        })
      );
    });

    it('should get subscription by email', async () => {
      const mockResponse = { id: 1, email: 'test@example.com' };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result =
        await neonService.getSubscriptionByEmail('test@example.com');

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/subscriptions/email/test%40example.com'),
        expect.any(Object)
      );
    });

    it('should unsubscribe an email', async () => {
      const mockResponse = { id: 1, email: 'test@example.com' };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.unsubscribeEmail('test@example.com');

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/subscriptions/email/test%40example.com'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });

    it('should get all subscriptions', async () => {
      const mockResponse = [
        { id: 1, email: 'test1@example.com' },
        { id: 2, email: 'test2@example.com' },
      ];

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.getAllSubscriptions();

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/subscriptions'),
        expect.any(Object)
      );
    });
  });

  describe('Users API', () => {
    it('should create a user', async () => {
      const userData = {
        email: 'user@example.com',
        username: 'testuser',
        password: 'hashed_password',
      };

      const mockResponse = { id: 1, ...userData };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.createUser(userData);

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/users'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(userData),
        })
      );
    });

    it('should get user by email', async () => {
      const mockResponse = { id: 1, email: 'user@example.com' };

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await neonService.getUserByEmail('user@example.com');

      expect(result).toEqual(mockResponse);
    });

    it('should return null when user not found', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
      });

      const result = await neonService.getUserByEmail('notfound@example.com');

      expect(result).toBeNull();
    });
  });
});
