import Slider from 'react-slick';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-96"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
