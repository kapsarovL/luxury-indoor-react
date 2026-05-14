import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';

const InvestmentCalculatorSection = () => {
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [propertyValue, setPropertyValue] = useState(1000000);
  const [expectedROI, setExpectedROI] = useState(15);
  const [investmentYears, setInvestmentYears] = useState(5);

  const downPayment = investmentAmount;
  const loanAmount = propertyValue - investmentAmount;
  const annualReturn = (propertyValue * expectedROI) / 100;
  const totalReturn = annualReturn * investmentYears;
  const totalInvestment = investmentAmount + totalReturn;
  const profitMargin =
    ((totalInvestment - investmentAmount) / investmentAmount) * 100;

  const rentalYield = ((propertyValue * 0.05) / propertyValue) * 100;
  const annualRentalIncome = propertyValue * 0.05;

  return (
    <section
      id="calculator"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-ghost"
    >
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28 max-w-3xl mx-auto">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Financial Planning
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Investment Calculator
          </h2>
          <div className="h-2"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Calculate your potential returns and explore different investment
            scenarios with our interactive luxury real estate investment
            calculator.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Input Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <FaCalculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Investment Parameters
                </h3>
              </div>

              <div className="space-y-8">
                {/* Investment Amount */}
                <div>
                  <label
                    htmlFor="investmentAmount"
                    className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3"
                  >
                    Initial Investment
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-600 font-semibold">
                      $
                    </span>
                    <input
                      id="investmentAmount"
                      name="investmentAmount"
                      type="number"
                      min="0"
                      step="50000"
                      autoComplete="off"
                      value={investmentAmount}
                      onChange={(e) =>
                        setInvestmentAmount(Number(e.target.value))
                      }
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    />
                  </div>
                  <input
                    id="investmentAmountRange"
                    name="investmentAmountRange"
                    type="range"
                    min="50000"
                    max="2000000"
                    step="50000"
                    autoComplete="off"
                    value={investmentAmount}
                    onChange={(e) =>
                      setInvestmentAmount(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                    aria-label="Initial Investment Range Slider"
                  />
                </div>

                {/* Property Value */}
                <div>
                  <label
                    htmlFor="propertyValue"
                    className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3"
                  >
                    Total Property Value
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-600 font-semibold">
                      $
                    </span>
                    <input
                      id="propertyValue"
                      name="propertyValue"
                      type="number"
                      min="0"
                      step="50000"
                      autoComplete="off"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    />
                  </div>
                  <input
                    id="propertyValueRange"
                    name="propertyValueRange"
                    type="range"
                    min="100000"
                    max="5000000"
                    step="100000"
                    autoComplete="off"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                    aria-label="Total Property Value Range Slider"
                  />
                </div>

                {/* Expected ROI */}
                <div>
                  <label
                    htmlFor="expectedROI"
                    className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-2"
                  >
                    Expected Annual ROI
                  </label>
                  <div className="relative">
                    <input
                      id="expectedROI"
                      name="expectedROI"
                      type="number"
                      min="0"
                      max="100"
                      step="0.5"
                      autoComplete="off"
                      value={expectedROI}
                      onChange={(e) => setExpectedROI(Number(e.target.value))}
                      className="w-full pr-8 pl-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-3 text-gray-600 font-semibold">
                      %
                    </span>
                  </div>
                  <input
                    id="expectedROIRange"
                    name="expectedROIRange"
                    type="range"
                    min="0"
                    max="30"
                    step="0.5"
                    autoComplete="off"
                    value={expectedROI}
                    onChange={(e) => setExpectedROI(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                    aria-label="Expected Annual ROI Range Slider"
                  />
                </div>

                {/* Investment Period */}
                <div>
                  <label
                    htmlFor="investmentYears"
                    className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-2"
                  >
                    Investment Period
                  </label>
                  <div className="relative">
                    <input
                      id="investmentYears"
                      name="investmentYears"
                      type="number"
                      min="1"
                      max="30"
                      autoComplete="off"
                      value={investmentYears}
                      onChange={(e) =>
                        setInvestmentYears(Number(e.target.value))
                      }
                      className="w-full pr-8 pl-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-3 text-gray-600 font-semibold">
                      yrs
                    </span>
                  </div>
                  <input
                    id="investmentYearsRange"
                    name="investmentYearsRange"
                    type="range"
                    min="1"
                    max="30"
                    autoComplete="off"
                    value={investmentYears}
                    onChange={(e) => setInvestmentYears(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                    aria-label="Investment Period Range Slider"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Main Results Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-10 lg:p-12">
                <h3 className="text-lg font-bold text-gray-900 mb-8 tracking-tight">
                  Investment Summary
                </h3>

                <div className="space-y-5">
                  <div className="p-6 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-2">
                      Down Payment
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      $
                      {downPayment.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-2">
                      Financing Required
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      $
                      {loanAmount.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-2">
                      Annual Return
                    </p>
                    <p className="text-2xl font-bold text-secondary">
                      $
                      {annualReturn.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-2">
                      Total Profit ({investmentYears} years)
                    </p>
                    <p className="text-2xl font-bold text-secondary">
                      $
                      {totalReturn.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-10 lg:p-12">
                <h3 className="text-lg font-bold text-gray-900 mb-8 tracking-tight">
                  Performance Metrics
                </h3>

                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-sm font-semibold text-gray-600">
                      Total Investment Value
                    </span>
                    <span className="text-xl font-bold text-gray-900 flex-shrink-0">
                      $
                      {totalInvestment.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                    <span className="text-sm font-semibold text-gray-600">
                      Profit Margin
                    </span>
                    <span className="text-xl font-bold text-secondary flex-shrink-0">
                      {profitMargin.toFixed(1)}%
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-sm font-semibold text-gray-600">
                      Est. Annual Rental Income
                    </span>
                    <span className="text-xl font-bold text-gray-900 flex-shrink-0">
                      $
                      {annualRentalIncome.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-sm font-semibold text-gray-600">
                      Rental Yield
                    </span>
                    <span className="text-xl font-bold text-gray-900 flex-shrink-0">
                      {rentalYield.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full px-8 py-5 bg-secondary text-gray-900 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculatorSection;
