// src/components/ContactForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ propertyTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: `I am interested in ${propertyTitle}. Please contact me.`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent!');
    onClose(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute text-2xl text-gray-600 top-2 right-2 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Contact Agent</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
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
              required
            />
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
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-300 rounded-md bg-primary hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  propertyTitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactForm;
