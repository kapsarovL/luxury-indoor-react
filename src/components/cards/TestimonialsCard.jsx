//import { star } from '../../public/images';
import PropTypes from 'prop-types';

const TestimonialsCard = ({ image, name, rating, feedback }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 py-5 mx-auto border border-slate-400">
        <img
          src={image}
          alt="custom"
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <div className="mt-3 flex justify-center items-center gap-2.5">
            <img
              src={image}
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <p className="mb-4 text-xl text-slate-gray">{rating}</p>
            <h5 className="text-lg font-semibold">{name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

TestimonialsCard.propTypes = {
  image: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TestimonialsCard;
