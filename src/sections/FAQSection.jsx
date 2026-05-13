import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is the average ROI for luxury real estate investments?',
      answer:
        'Our luxury properties typically deliver 12-18% annual returns, depending on location and market conditions. Historical data shows strong appreciation in premium markets like Dubai, Miami, and London.',
    },
    {
      id: 2,
      question: 'How long does the property acquisition process take?',
      answer:
        'The typical timeline is 30-60 days from offer to closing, including inspections, appraisals, and financing. Our experienced team expedites the process while ensuring all due diligence is completed.',
    },
    {
      id: 3,
      question: 'Do you offer financing options for international buyers?',
      answer:
        'Yes, we partner with leading international lenders offering competitive financing solutions for non-resident investors. We can facilitate up to 70-80% LTV depending on your profile and the property type.',
    },
    {
      id: 4,
      question: 'What are the tax implications for luxury property ownership?',
      answer:
        'Tax implications vary by location, property type, and investor status. We recommend consulting with our tax specialists who can provide personalized guidance based on your specific circumstances.',
    },
    {
      id: 5,
      question: 'Can I lease my property to generate rental income?',
      answer:
        'Absolutely. Many of our clients generate 4-7% annual rental yields from their luxury properties. We offer comprehensive property management services including tenant screening and maintenance.',
    },
    {
      id: 6,
      question:
        'What makes your properties different from other luxury listings?',
      answer:
        'Our portfolio features hand-selected properties in prime locations with verified provenance, exclusive amenities, and strong appreciation potential. Each listing undergoes rigorous vetting and our team provides white-glove service.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Questions & Answers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Find answers to common questions about our luxury real estate
            investments, financing options, and property management services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 tracking-tight pr-4">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Didn&apos;t find your answer? Our experts are ready to help.
          </p>
          <button className="px-8 py-4 bg-secondary text-gray-900 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 text-sm whitespace-nowrap">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
