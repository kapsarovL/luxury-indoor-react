import NumberTicker from './NumberTicker';

const Stats = () => {
  return (
    <div className="py-20 sm:py-32">
      <div className="px-6 mx-auto lg:px-4">
        <dl className="grid grid-cols-1 text-center gap-x-12 gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-sm font-semibold uppercase tracking-widest text-gray-600 leading-7">
              Transactions every 24 hours
            </dt>
            <dd className="order-first text-4xl sm:text-5xl font-bold tracking-tight text-secondary">
              <NumberTicker value="44 million" />
            </dd>
          </div>
          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-sm font-semibold uppercase tracking-widest text-gray-600 leading-7">
              Assets under holding
            </dt>
            <dd className="order-first text-4xl sm:text-5xl font-bold tracking-tight text-secondary">
              <NumberTicker value="$119 trillion" />
            </dd>
          </div>

          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-sm font-semibold uppercase tracking-widest text-gray-600 leading-7">
              New users annually
            </dt>
            <dd className="order-first text-4xl sm:text-5xl font-bold tracking-tight text-secondary">
              <NumberTicker value="46,000" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default Stats;
