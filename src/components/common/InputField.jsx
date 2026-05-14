import PropTypes from 'prop-types';

const InputField = ({
  label,
  type,
  id,
  placeholder = 'Enter your email address',
  value,
  onChange,
  autoComplete,
}) => {
  return (
    <div className="mb-6">
      <label
        className="block mb-3 text-sm font-semibold text-gray-700 uppercase tracking-wide"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
};

export default InputField;
