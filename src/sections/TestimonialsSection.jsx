import TestimonialsCard from '../components/cards/TestimonialsCard';
import { testimonials } from '../data/data';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-ghost">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            What Our Clients Say
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Our clients in the luxury real estate market trust us to create
            exceptional websites that highlight their properties&apos; unique
            qualities and appeal to affluent buyers. Hear from those who have
            experienced success with our service:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
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
