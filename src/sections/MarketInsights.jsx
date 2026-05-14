import { FaArrowUp, FaChartBar, FaGlobe, FaChartLine } from 'react-icons/fa';

const MarketInsights = () => {
  const insights = [
    {
      id: 1,
      icon: <FaArrowUp className="w-8 h-8" />,
      metric: 'Market Growth',
      value: '23.5%',
      description: 'Year-over-year growth in luxury property values worldwide',
      trend: 'up',
    },
    {
      id: 2,
      icon: <FaChartBar className="w-8 h-8" />,
      metric: 'Investment Returns',
      value: '18.2%',
      description: 'Average annual return on luxury real estate investments',
      trend: 'up',
    },
    {
      id: 3,
      icon: <FaGlobe className="w-8 h-8" />,
      metric: 'Global Demand',
      value: '89%',
      description:
        'Increase in international buyer interest in premium properties',
      trend: 'up',
    },
    {
      id: 4,
      icon: <FaChartLine className="w-8 h-8" />,
      metric: 'Market Volatility',
      value: 'Low',
      description: 'Luxury real estate showing resilience and stability',
      trend: 'stable',
    },
  ];

  const trendingMarkets = [
    {
      city: 'Dubai',
      growth: '+35%',
      description: 'Ultra-luxury developments leading market expansion',
    },
    {
      city: 'Miami',
      growth: '+28%',
      description: 'Strong international investment and residential demand',
    },
    {
      city: 'London',
      growth: '+22%',
      description:
        'Historic properties and modern developments attracting investors',
    },
    {
      city: 'Singapore',
      growth: '+31%',
      description:
        'Rapid growth in high-end residential and commercial sectors',
    },
    {
      city: 'Tokyo',
      growth: '+19%',
      description: 'Expanding luxury market with premium urban developments',
    },
    {
      city: 'Paris',
      growth: '+25%',
      description: 'Classic elegance attracting global wealth and collectors',
    },
  ];

  return (
    <section
      id="market-insights"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-ghost"
    >
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28 max-w-3xl mx-auto">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Market Analysis
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Luxury Market Insights
          </h2>
          <div className="h-2"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Stay informed with the latest trends and data from the global luxury
            real estate market. Our analysis helps you make informed investment
            decisions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-28">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="flex flex-col items-center p-8 sm:p-10 lg:p-12 text-center bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group h-full"
            >
              <div className="mb-6 p-6 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 text-secondary">
                {insight.icon}
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-600 mb-3 font-semibold">
                {insight.metric}
              </p>
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-5 leading-tight">
                {insight.value}
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trending Markets */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12 md:p-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 tracking-tight">
            Top Trending Markets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trendingMarkets.map((market, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 rounded-xl hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    {market.city}
                  </h4>
                  <span className="text-lg font-bold text-secondary">
                    {market.growth}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 sm:mt-24 text-center">
          <p className="text-gray-600 mb-8">
            Want a personalized market analysis for your investment goals?
          </p>
          <button className="px-9 py-5 bg-secondary text-gray-900 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
