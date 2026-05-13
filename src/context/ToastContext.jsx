import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = 'info', duration = 3000) => {
      const id = Date.now();
      const newToast = { id, message, type };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [removeToast]
  );

  const success = useCallback(
    (message, duration = 3000) => addToast(message, 'success', duration),
    [addToast]
  );

  const error = useCallback(
    (message, duration = 3000) => addToast(message, 'error', duration),
    [addToast]
  );

  const info = useCallback(
    (message, duration = 3000) => addToast(message, 'info', duration),
    [addToast]
  );

  const warning = useCallback(
    (message, duration = 3000) => addToast(message, 'warning', duration),
    [addToast]
  );

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        success,
        error,
        info,
        warning,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastProvider;
