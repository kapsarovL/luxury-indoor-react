import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from '../db/database';
import { hashPassword, comparePassword } from '../utils/passwordUtils';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
          const userData = await getUserById(storedUserId);
          if (userData) {
            setUser(userData);
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('userId');
          }
        }
      } catch (err) {
        console.error('Auth check error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signup = async (email, username, password) => {
    try {
      setError(null);
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        throw new Error('Email already registered');
      }

      const hashedPassword = await hashPassword(password);
      const newUser = await createUser({
        email,
        username,
        password: hashedPassword,
      });
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('userId', newUser.id);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const userData = await getUserByEmail(email);

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
      localStorage.setItem('userId', userData.id);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userId');
  };

  const updateProfile = async (updates) => {
    try {
      setError(null);
      if (!user) throw new Error('Not authenticated');

      await updateUser(user.id, updates);
      const updatedUser = { ...user, ...updates };
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
