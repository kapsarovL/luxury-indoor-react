const InputField = ({
  label,
  type,
  id,
  placeholder = "Enter your email address",
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
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
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default InputField;
