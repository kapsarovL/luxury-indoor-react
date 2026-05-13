import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const TestimonialsCard = ({ image, name, rating, feedback }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex flex-col items-center justify-between h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-secondary/30">
      {/* Testimonial Text */}
      <p className="text-center text-gray-700 leading-relaxed mb-8 text-sm font-medium line-clamp-4">
        &quot;{feedback}&quot;
      </p>

      {/* Star Rating */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 transition-colors duration-300 ${
                i < fullStars
                  ? 'text-secondary'
                  : i === fullStars && hasHalfStar
                    ? 'text-secondary/50'
                    : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-gray-700 ml-2">
          {rating}
        </span>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4 w-full">
        <img
          src={image}
          alt={name}
          className="rounded-full object-cover w-16 h-16 border-2 border-secondary/20"
        />
        <div className="text-center">
          <h5 className="text-lg font-bold text-gray-900 tracking-tight">
            {name}
          </h5>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mt-1">
            Verified Customer
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  image: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TestimonialsCard;
