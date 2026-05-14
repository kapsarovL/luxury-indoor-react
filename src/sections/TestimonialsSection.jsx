import TestimonialsCard from '../components/cards/TestimonialsCard';
import { testimonials } from '../data/data';

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-ghost"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 sm:mb-20 md:mb-28 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            What Our Clients Say
          </h2>
          <div className="h-2"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our clients in the luxury real estate market trust us to create
            exceptional websites that highlight their properties&apos; unique
            qualities and appeal to affluent buyers. Hear from those who have
            experienced success with our service:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              feedback={testimonial.feedback}
              svg={testimonial.svg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
