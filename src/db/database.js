import { neonService } from '../services/neonService';
import { properties as propertyData } from '../data/propertyData';

console.info(
  'Static propertyData loaded:',
  propertyData?.length || 0,
  'properties'
);

export const initializeDatabase = async () => {
  try {
    const properties = await neonService.getProperties();
    if (!properties || properties.length === 0) {
      console.info('No properties found. Using static data as fallback.');
    }
  } catch {
    console.info('Property fetch failed. Using static data as fallback.');
  }
};

export const getProperties = async () => {
  try {
    const apiProperties = await neonService.getProperties();
    console.info('API returned:', apiProperties?.length || 0, 'properties');
    if (!apiProperties || apiProperties.length === 0) {
      console.info(
        'Using static propertyData:',
        propertyData?.length || 0,
        'properties'
      );
      return propertyData;
    }
    return apiProperties;
  } catch (error) {
    console.error('Error fetching properties:', error);
    console.info(
      'Fallback to static propertyData:',
      propertyData?.length || 0,
      'properties'
    );
    return propertyData;
  }
};

export const getPropertyById = async (id) => {
  try {
    return await neonService.getPropertyById(id);
  } catch (error) {
    console.error('Error fetching property:', error);
    return propertyData.find((p) => p.id === id);
  }
};

export const addProperty = async (property) => {
  try {
    return await neonService.createProperty(property);
  } catch (error) {
    console.error('Error adding property:', error);
  }
};

export const updateProperty = async (id, updates) => {
  try {
    return await neonService.updateProperty(id, updates);
  } catch (error) {
    console.error('Error updating property:', error);
  }
};

export const deleteProperty = async (id) => {
  try {
    return await neonService.deleteProperty(id);
  } catch (error) {
    console.error('Error deleting property:', error);
  }
};

const USERS_STORAGE_KEY = 'luxury_users';

export const createUser = async (userData) => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    const users = usersData ? JSON.parse(usersData) : [];

    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    return newUser;
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    const users = usersData ? JSON.parse(usersData) : [];
    return users.find((u) => u.email === email) || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const getUserByUsername = async (username) => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    const users = usersData ? JSON.parse(usersData) : [];
    return users.find((u) => u.username === username) || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    const users = usersData ? JSON.parse(usersData) : [];
    return users.find((u) => u.id === id) || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const updateUser = async (id, updates) => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    const users = usersData ? JSON.parse(usersData) : [];
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    users[userIndex] = { ...users[userIndex], ...updates };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    return users[userIndex];
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const deleteUser = async (id) => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    const users = usersData ? JSON.parse(usersData) : [];
    const filtered = users.filter((u) => u.id !== id);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export const subscribeEmail = async (subscriptionData) => {
  try {
    return await neonService.subscribeEmail(subscriptionData);
  } catch (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }
};

export const getSubscriptionByEmail = async (email) => {
  try {
    return await neonService.getSubscriptionByEmail(email);
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return null;
  }
};

export const getAllSubscriptions = async () => {
  try {
    return await neonService.getAllSubscriptions();
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return [];
  }
};

export const updateSubscription = async (id, updates) => {
  try {
    return await neonService.updateSubscription(id, updates);
  } catch (error) {
    console.error('Error updating subscription:', error);
  }
};

export const deleteSubscription = async (id) => {
  try {
    return await neonService.deleteSubscription(id);
  } catch (error) {
    console.error('Error deleting subscription:', error);
  }
};

export const unsubscribeEmail = async (email) => {
  try {
    return await neonService.unsubscribeEmail(email);
  } catch (error) {
    console.error('Error unsubscribing:', error);
  }
};
