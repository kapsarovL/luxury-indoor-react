// Neon database service
// This service provides database operations using Neon serverless PostgreSQL

const getApiBase = () => {
  if (typeof window === 'undefined') return '/api';
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3001/api';
  }
  return '/api';
};

const API_BASE = getApiBase();

const isLocalAddress = (url) => {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    return (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.local') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.')
    );
  } catch {
    return false;
  }
};

const getFetchOptions = (url, options = {}) => {
  if (isLocalAddress(url)) {
    return {
      ...options,
      targetAddressSpace: 'local',
    };
  }
  return options;
};

export const neonService = {
  // Properties
  async getProperties() {
    const url = `${API_BASE}/properties`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) {
      const error = new Error('Failed to fetch properties');
      error.status = response.status;
      throw error;
    }
    return response.json();
  },

  async getPropertyById(id) {
    const url = `${API_BASE}/properties/${id}`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) {
      const error = new Error('Failed to fetch property');
      error.status = response.status;
      throw error;
    }
    return response.json();
  },

  async createProperty(property) {
    const url = `${API_BASE}/properties`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property),
    }));
    if (!response.ok) {
      const error = new Error('Failed to create property');
      error.status = response.status;
      throw error;
    }
    return response.json();
  },

  async updateProperty(id, updates) {
    const url = `${API_BASE}/properties/${id}`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    }));
    if (!response.ok) throw new Error('Failed to update property');
    return response.json();
  },

  async deleteProperty(id) {
    const url = `${API_BASE}/properties/${id}`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'DELETE',
    }));
    if (!response.ok) throw new Error('Failed to delete property');
    return response.json();
  },

  // Users
  async createUser(userData) {
    const url = `${API_BASE}/users`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }));
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
  },

  async getUserByEmail(email) {
    const url = `${API_BASE}/users/email/${encodeURIComponent(email)}`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) return null;
    return response.json();
  },

  async getUserByUsername(username) {
    const url = `${API_BASE}/users/username/${encodeURIComponent(username)}`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) return null;
    return response.json();
  },

  async getUserById(id) {
    const url = `${API_BASE}/users/${id}`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) return null;
    return response.json();
  },

  async updateUser(id, updates) {
    const url = `${API_BASE}/users/${id}`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    }));
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
  },

  async deleteUser(id) {
    const url = `${API_BASE}/users/${id}`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'DELETE',
    }));
    if (!response.ok) throw new Error('Failed to delete user');
    return response.json();
  },

  // Subscriptions
  async subscribeEmail(subscriptionData) {
    const url = `${API_BASE}/subscriptions`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscriptionData),
    }));
    if (!response.ok) throw new Error('Failed to subscribe');
    return response.json();
  },

  async getSubscriptionByEmail(email) {
    const url = `${API_BASE}/subscriptions/email/${encodeURIComponent(email)}`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) return null;
    return response.json();
  },

  async getAllSubscriptions() {
    const url = `${API_BASE}/subscriptions`;
    const response = await fetch(url, getFetchOptions(url));
    if (!response.ok) return [];
    return response.json();
  },

  async updateSubscription(id, updates) {
    const url = `${API_BASE}/subscriptions/${id}`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    }));
    if (!response.ok) throw new Error('Failed to update subscription');
    return response.json();
  },

  async deleteSubscription(id) {
    const url = `${API_BASE}/subscriptions/${id}`;
    const response = await fetch(url, getFetchOptions(url, {
      method: 'DELETE',
    }));
    if (!response.ok) throw new Error('Failed to delete subscription');
    return response.json();
  },

  async unsubscribeEmail(email) {
    const url = `${API_BASE}/subscriptions/email/${encodeURIComponent(email)}`;
    const response = await fetch(url, getFetchOptions(url, { method: 'DELETE' }));
    if (!response.ok) throw new Error('Failed to unsubscribe');
    return response.json();
  },
};
