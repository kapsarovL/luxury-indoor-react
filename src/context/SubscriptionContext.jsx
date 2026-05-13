import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  subscribeEmail,
  getSubscriptionByEmail,
  unsubscribeEmail,
  updateSubscription,
} from '../db/database';

// eslint-disable-next-line react-refresh/only-export-components
export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscribedEmails, setSubscribedEmails] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const subscribe = async (subscriptionData) => {
    try {
      setError(null);
      setLoading(true);

      const existing = await getSubscriptionByEmail(subscriptionData.email);
      if (existing) {
        throw new Error('Email already subscribed');
      }

      const subscription = await subscribeEmail(subscriptionData);
      setSubscribedEmails((prev) => new Set([...prev, subscription.email]));
      return subscription;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const unsubscribe = async (email) => {
    try {
      setError(null);
      setLoading(true);

      await unsubscribeEmail(email);
      setSubscribedEmails((prev) => {
        const newSet = new Set(prev);
        newSet.delete(email);
        return newSet;
      });
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (email, preferences) => {
    try {
      setError(null);
      const subscription = await getSubscriptionByEmail(email);
      if (!subscription) {
        throw new Error('Subscription not found');
      }

      await updateSubscription(subscription.id, { preferences });
      return subscription;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const isSubscribed = (email) => {
    return subscribedEmails.has(email);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        subscribedEmails,
        loading,
        error,
        subscribe,
        unsubscribe,
        updatePreferences,
        isSubscribed,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

SubscriptionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubscriptionProvider;
