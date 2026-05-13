import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-4">
        <FaExclamationTriangle className="mx-auto mb-6 text-6xl text-red-500" />
        <h1 className="mb-4 text-5xl font-bold text-gray-800">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-600 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 text-white transition duration-300 rounded-md bg-primary hover:bg-primary-dark"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
