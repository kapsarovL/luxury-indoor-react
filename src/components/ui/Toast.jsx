import { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { ToastContext } from '../../context/ToastContext';

const iconMap = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  info: InformationCircleIcon,
  warning: ExclamationCircleIcon,
};

const colorMap = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
};

const iconColorMap = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-yellow-400',
};

export const ToastContainer = () => {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col gap-0 pointer-events-none w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Toast = ({ toast, onClose }) => {
  const Icon = iconMap[toast.type] || iconMap.info;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4 }}
      className={`w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 shadow-2xl flex items-center gap-4 pointer-events-auto border-b ${
        colorMap[toast.type]
      }`}
    >
      <Icon
        className={`w-6 h-6 flex-shrink-0 ${iconColorMap[toast.type]}`}
      />
      <p className="flex-1 text-sm sm:text-base font-semibold">{toast.message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-60 transition-opacity"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

Toast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ToastContainer;
