import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const SubscriptionContext = createContext();

const STORAGE_KEY = 'luxury_subscriptions';

export const SubscriptionProvider = ({ children }) => {
  const [subscribedEmails, setSubscribedEmails] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSubscribedEmails(new Set(JSON.parse(stored)));
      } catch (err) {
        console.error('Failed to load subscriptions:', err);
      }
    }
  }, []);

  const subscribe = async (subscriptionData) => {
    try {
      setError(null);
      setLoading(true);

      if (subscribedEmails.has(subscriptionData.email)) {
        throw new Error('Email already subscribed');
      }

      setSubscribedEmails((prev) => {
        const updated = new Set([...prev, subscriptionData.email]);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(updated)));
        return updated;
      });

      return { email: subscriptionData.email };
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

      setSubscribedEmails((prev) => {
        const updated = new Set(prev);
        updated.delete(email);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(updated)));
        return updated;
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
      if (!subscribedEmails.has(email)) {
        throw new Error('Email not subscribed');
      }
      return { email, preferences };
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
