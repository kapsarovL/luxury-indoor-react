import { useState } from 'react';
import Map from '../components/ui/Map';
import { isValidEmail, isRequired } from '../utils/validators';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!isRequired(formData.name)) {
      errors.name = 'Name is required';
    }
    if (!isRequired(formData.email)) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!isRequired(formData.message)) {
      errors.message = 'Message is required';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Form submitted', formData);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-semibold text-center">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="contact-name" className="block text-gray-700">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your name"
              required
            />
            {fieldErrors.name && (
              <p
                id="contact-name-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {fieldErrors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-gray-700">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
            {fieldErrors.email && (
              <p
                id="contact-email-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {fieldErrors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="contact-message"
              autoComplete="off"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              rows="5"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              required
            ></textarea>
            {fieldErrors.message && (
              <p
                id="contact-message-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {fieldErrors.message}
              </p>
            )}
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
