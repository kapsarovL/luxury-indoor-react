import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

function Button({
  children,
  onClick,
  className = '',
  style,
  variant = 'primary',
  showArrow = false,
}) {
  const baseStyles =
    'font-bold uppercase tracking-wider py-4 px-8 transition-all duration-300 ease-in-out transform rounded-lg inline-flex items-center justify-center gap-3 relative overflow-hidden group slide-up';

  const variants = {
    primary: `bg-secondary text-gray-900 hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-yellow-400 before:opacity-0 group-hover:before:opacity-10 before:transition-opacity`,
    secondary: `bg-white text-gray-900 border-2 border-white hover:bg-secondary hover:border-secondary hover:shadow-xl hover:-translate-y-1`,
    dark: `bg-gray-900 text-white border-2 border-white hover:bg-white hover:text-gray-900 hover:shadow-xl hover:-translate-y-1`,
  };

  return (
    <button
      onClick={onClick}
      style={style}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <FaArrowRight className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['primary', 'secondary', 'dark']),
  showArrow: PropTypes.bool,
};

export default Button;
