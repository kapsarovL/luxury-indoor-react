import { useState, useContext } from 'react';
import {
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/solid';
import { SubscriptionContext } from '../context/SubscriptionContext';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [localError, setLocalError] = useState(null);
  const [success, setSuccess] = useState(false);
  const {
    subscribe,
    loading,
    error: contextError,
  } = useContext(SubscriptionContext);

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
      icon: <SparklesIcon className="w-5 h-5" />,
      title: 'Exclusive Listings',
      description: 'Early access to premium properties before public launch.',
    },
    {
      icon: <BoltIcon className="w-5 h-5" />,
      title: 'Weekly Insights',
      description: 'Market trends and expert analysis delivered weekly.',
    },
    {
      icon: <ShieldCheckIcon className="w-5 h-5" />,
      title: 'Privacy Protected',
      description: 'Your information stays secure. Unsubscribe anytime.',
    },
    {
      icon: <CheckCircleIcon className="w-5 h-5" />,
      title: 'VIP Benefits',
      description: 'Exclusive offers and personalized recommendations.',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <span className="inline-block px-5 py-2.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
                  Stay Connected
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Never Miss an{' '}
                <span className="bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent">
                  Exclusive Opportunity
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
                Join our VIP community and get instant access to luxury property
                listings, market insights, and investment opportunities before
                they become public.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="mb-14">
                <div className="mb-3">
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email address
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative flex flex-col sm:flex-row gap-4 bg-gray-900/90 backdrop-blur-sm p-2 rounded-xl border border-gray-800 group-hover:border-secondary/50 transition-all">
                      <input
                        id="newsletter-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 min-w-0 bg-transparent px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none font-medium text-base"
                        aria-invalid={!!localError || !!contextError}
                        aria-describedby={(localError || contextError) ? 'email-error' : undefined}
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-shrink-0 bg-gradient-to-r from-secondary to-yellow-300 hover:from-yellow-300 hover:to-secondary text-gray-900 px-9 py-4 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-secondary/50"
                      >
                        {loading ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                {(localError || contextError) && (
                  <p id="email-error" role="alert" aria-live="polite" className="mt-5 text-sm font-medium text-red-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {localError || contextError}
                  </p>
                )}
                {success && (
                  <p role="status" aria-live="polite" className="mt-5 text-sm font-medium text-green-400 flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    Thank you for subscribing! Check your inbox.
                  </p>
                )}
              </form>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-secondary/30 hover:bg-gray-800/70 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1 text-secondary group-hover:text-yellow-300 transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Card */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Card with gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/40 via-secondary/20 to-secondary/40 rounded-2xl blur-xl opacity-75" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -ml-16 -mb-16" />

                  {/* Content */}
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary/20 to-yellow-300/20 border border-secondary/30 mb-6 mx-auto">
                      <SparklesIcon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      Premium Access
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Join luxury investors and premium property seekers gaining
                      exclusive early access to the world's most coveted
                      estates.
                    </p>
                    <div className="space-y-3">
                      {[
                        'Instant Notifications',
                        'Expert Analysis',
                        'VIP Support',
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center gap-2 text-sm text-gray-300"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
