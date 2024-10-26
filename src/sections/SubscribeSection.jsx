// src/sections/SubscribeSection.jsx
import { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import InputField from '../components/common/InputField';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError(null);
      // Handle successful subscription
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <>
      <section className="py-20">
        <div className="relative py-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32"> 
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h4 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h4>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex max-w-md mt-6 gap-x-4">
              <div
                onSubmit={handleSubscribe}
                className="flex max-w-md mt-6 gap-x-4"
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <InputField />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
        </div>
          
        <div
          aria-hidden="true"
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#fffc63] to-[#e3fc89] opacity-30"
          />
        </div>
                     
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
      </section>
    </>
  );
};

export default SubscribeSection;
