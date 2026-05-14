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

export const createUser = async (userData) => {
  try {
    return await neonService.createUser(userData);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await neonService.getUserByEmail(email);
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const getUserByUsername = async (username) => {
  try {
    return await neonService.getUserByUsername(username);
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    return await neonService.getUserById(id);
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const updateUser = async (id, updates) => {
  try {
    return await neonService.updateUser(id, updates);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await neonService.deleteUser(id);
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
