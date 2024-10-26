

function Button({ children, onClick, className }) {

  return (
    <button
   
      onClick={onClick}
      className={`py-4 px-4 w-44 text-white transition duration-300 ease-in-out transform rounded-md bg-primary hover:bg-primary-dark hover:-translate-y-1 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
