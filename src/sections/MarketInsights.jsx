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
    <section id="market-insights" className="py-12 sm:py-16 md:py-20 bg-ghost">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Market Analysis
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Luxury Market Insights
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Stay informed with the latest trends and data from the global luxury
            real estate market. Our analysis helps you make informed investment
            decisions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="flex flex-col items-center p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 text-secondary">
                {insight.icon}
              </div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                {insight.metric}
              </p>
              <p className="text-4xl font-bold text-secondary mb-3">
                {insight.value}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trending Markets */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
            Top Trending Markets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingMarkets.map((market, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 rounded-xl hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">
                    {market.city}
                  </h4>
                  <span className="text-lg font-bold text-secondary">
                    {market.growth}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{market.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want a personalized market analysis for your investment goals?
          </p>
          <button className="px-8 py-4 bg-secondary text-gray-900 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 text-sm whitespace-nowrap">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
