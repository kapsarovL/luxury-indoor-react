import PropTypes from 'prop-types';

function Button({ children, onClick, className = '', style }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`py-4 px-4 w-44 text-white transition duration-300 ease-in-out transform rounded-md bg-primary hover:bg-primary-dark hover:-translate-y-1 ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
