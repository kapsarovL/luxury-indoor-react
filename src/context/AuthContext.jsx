import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { comparePassword } from '../utils/passwordUtils';
import { neonService } from '../services/neonService';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const SESSION_KEY = 'userId';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUserId = sessionStorage.getItem(SESSION_KEY);
        if (storedUserId) {
          const userData = await neonService.getUserById(storedUserId);
          if (userData) {
            setUser(userData);
            setIsAuthenticated(true);
          } else {
            sessionStorage.removeItem(SESSION_KEY);
          }
        }
      } catch (err) {
        console.error('Auth check error:', err);
        sessionStorage.removeItem(SESSION_KEY);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signup = async (email, username, password) => {
    try {
      setError(null);

      const existingUser = await neonService.getUserByEmail(email);
      if (existingUser) {
        throw new Error('Email already registered');
      }

      const newUser = await neonService.createUser({
        email,
        username,
        password,
      });

      setUser(newUser);
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, newUser.id);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);

      const userData = await neonService.getUserByEmail(email);
      if (!userData) {
        throw new Error('User not found');
      }

      const isValidPassword = await comparePassword(
        password,
        userData.password
      );
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      setUser(userData);
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, userData.id);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem(SESSION_KEY);
  };

  const updateProfile = async (updates) => {
    try {
      setError(null);
      if (!user) throw new Error('Not authenticated');

      const updatedUser = await neonService.updateUser(user.id, updates);
      if (!updatedUser) throw new Error('User not found');

      setUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        error,
        signup,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
