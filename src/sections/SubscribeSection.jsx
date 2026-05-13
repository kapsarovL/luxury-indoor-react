import { useState, useContext } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { SubscriptionContext } from '../context/SubscriptionContext';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [localError, setLocalError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { subscribe, loading, error: contextError } = useContext(
    SubscriptionContext
  );

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setLocalError('Please enter a valid email address.');
      return;
    }

    try {
      setLocalError(null);
      await subscribe({ email });
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setLocalError(err.message);
    }
  };

  const benefits = [
    {
      icon: <CalendarDaysIcon className="w-6 h-6" />,
      title: 'Weekly Updates',
      description:
        'Get the latest luxury property listings and market insights delivered to your inbox.',
    },
    {
      icon: <HandRaisedIcon className="w-6 h-6" />,
      title: 'No Spam',
      description:
        'We respect your privacy. Unsubscribe anytime with a single click.',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#fffc63] to-[#e3fc89]"
        />
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest luxury property
              listings, market insights, and exclusive investment opportunities.
            </p>

            <form onSubmit={handleSubscribe} className="mb-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 rounded-lg border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-gray-400 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-medium"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 rounded-lg bg-secondary px-8 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {(localError || contextError) && (
                <p className="mt-3 text-sm font-medium text-red-300">
                  {localError || contextError}
                </p>
              )}
              {success && (
                <p className="mt-3 text-sm font-medium text-green-300">
                  Thank you for subscribing!
                </p>
              )}
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-5 p-4 bg-secondary/10 rounded-xl w-fit text-secondary border border-secondary/20">
                    <div className="w-6 h-6">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center shadow-2xl">
              <div className="text-7xl mb-6 text-secondary">✉</div>
              <h3 className="text-2xl font-bold text-white text-center mb-4 tracking-tight">
                Exclusive Insights
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Get early access to new luxury properties and expert advice from
                industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
