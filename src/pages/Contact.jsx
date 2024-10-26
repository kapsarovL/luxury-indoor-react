import { useState } from 'react';
import Map from '../components/ui/Map';
import { isValidEmail, isRequired } from '../utils/validators';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRequired(formData.name)) {
      setError('Name is required');
      return;
    }
    if (!isRequired(formData.email)) {
      setError('Email is required');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError('Invalid email address');
      return;
    }
    // Handle form submission
    setError('');
    console.log('Form submitted', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h4 className="mb-12 text-3xl font-semibold text-center">
          Get in Touch
        </h4>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button
            type="submit"
            className="px-4 py-3 text-white transition duration-300 rounded-md bg-primary hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
        <Map />
      </div>
    </section>
  );
};

export default Contact;
