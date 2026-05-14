import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { hashPassword, comparePassword } from '../utils/passwordUtils';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const STORAGE_KEY = 'luxury_users';

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
          const usersData = localStorage.getItem(STORAGE_KEY);
          const users = usersData ? JSON.parse(usersData) : [];
          const userData = users.find((u) => u.id === storedUserId);
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
      const usersData = localStorage.getItem(STORAGE_KEY);
      const users = usersData ? JSON.parse(usersData) : [];

      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        throw new Error('Email already registered');
      }

      const hashedPassword = await hashPassword(password);
      const newUser = {
        id: Date.now().toString(),
        email,
        username,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

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
      const usersData = localStorage.getItem(STORAGE_KEY);
      const users = usersData ? JSON.parse(usersData) : [];

      const userData = users.find((u) => u.email === email);
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

      const usersData = localStorage.getItem(STORAGE_KEY);
      const users = usersData ? JSON.parse(usersData) : [];
      const userIndex = users.findIndex((u) => u.id === user.id);

      if (userIndex === -1) throw new Error('User not found');

      const updatedUser = { ...user, ...updates };
      users[userIndex] = updatedUser;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

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
