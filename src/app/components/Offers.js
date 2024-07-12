import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const offers = [
  {
    id: 1,
    title: '10% off Haircuts if you shop in our store',
    description: 'Get Fresh Head 2 Toe ',
  },
  {
    id: 2,
    title: '2 B Stylez Events Coming Soon',
    description: 'Special deal for this weekend only.',
  },
  {
    id: 3,
    title: 'Free shipping on orders over $50',
    description: 'Click "shop" and see all our latest fashion',
  },
  // Add more offers as needed
];

const OffersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="offers-slider">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="offer">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersSlider;
