// Neon database service
// This service provides database operations using Neon serverless PostgreSQL

const API_BASE =
  (typeof process !== 'undefined' && process.env?.VITE_API_URL) ||
  'http://localhost:3001/api';

export const neonService = {
  // Properties
  async getProperties() {
    const response = await fetch(`${API_BASE}/properties`);
    if (!response.ok) throw new Error('Failed to fetch properties');
    return response.json();
  },

  async getPropertyById(id) {
    const response = await fetch(`${API_BASE}/properties/${id}`);
    if (!response.ok) throw new Error('Failed to fetch property');
    return response.json();
  },

  async createProperty(property) {
    const response = await fetch(`${API_BASE}/properties`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property),
    });
    if (!response.ok) throw new Error('Failed to create property');
    return response.json();
  },

  async updateProperty(id, updates) {
    const response = await fetch(`${API_BASE}/properties/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update property');
    return response.json();
  },

  async deleteProperty(id) {
    const response = await fetch(`${API_BASE}/properties/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete property');
    return response.json();
  },

  // Users
  async createUser(userData) {
    const response = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
  },

  async getUserByEmail(email) {
    const response = await fetch(
      `${API_BASE}/users/email/${encodeURIComponent(email)}`
    );
    if (!response.ok) return null;
    return response.json();
  },

  async getUserByUsername(username) {
    const response = await fetch(
      `${API_BASE}/users/username/${encodeURIComponent(username)}`
    );
    if (!response.ok) return null;
    return response.json();
  },

  async getUserById(id) {
    const response = await fetch(`${API_BASE}/users/${id}`);
    if (!response.ok) return null;
    return response.json();
  },

  async updateUser(id, updates) {
    const response = await fetch(`${API_BASE}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
  },

  async deleteUser(id) {
    const response = await fetch(`${API_BASE}/users/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete user');
    return response.json();
  },

  // Subscriptions
  async subscribeEmail(subscriptionData) {
    const response = await fetch(`${API_BASE}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscriptionData),
    });
    if (!response.ok) throw new Error('Failed to subscribe');
    return response.json();
  },

  async getSubscriptionByEmail(email) {
    const response = await fetch(
      `${API_BASE}/subscriptions/email/${encodeURIComponent(email)}`
    );
    if (!response.ok) return null;
    return response.json();
  },

  async getAllSubscriptions() {
    const response = await fetch(`${API_BASE}/subscriptions`);
    if (!response.ok) return [];
    return response.json();
  },

  async updateSubscription(id, updates) {
    const response = await fetch(`${API_BASE}/subscriptions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update subscription');
    return response.json();
  },

  async deleteSubscription(id) {
    const response = await fetch(`${API_BASE}/subscriptions/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete subscription');
    return response.json();
  },

  async unsubscribeEmail(email) {
    const url = `${API_BASE}/subscriptions/email/${encodeURIComponent(email)}`;
    const response = await fetch(url, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to unsubscribe');
    return response.json();
  },
};
