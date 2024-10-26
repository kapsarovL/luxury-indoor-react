import TestimonialsCard from '../components/cards/TestimonialsCard';
import { testimonials } from '../data/data';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-ghost">
      <div className="container px-4 mx-auto">
        <h3 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-6xl">
          What Our Clients Say
        </h3>

        <p className="w-3/4 m-auto mt-4 text-xl leading-relaxed text-center info-text">
          Our clients in the luxury real estate market trust us to create
          exceptional websites that highlight their properties’ unique qualities
          and appeal to affluent buyers. Hear from those who have experienced
          success with our service:
        </p>
        <div className="flex items-center gap-10 px-4 mt-24 justify-evenly max-lg:flex-col">
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
