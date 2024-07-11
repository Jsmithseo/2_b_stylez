import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const offers = [
  {
    id: 1,
    title: '50% off on all items!',
    description: 'Limited time offer. Grab it now!',
  },
  {
    id: 2,
    title: 'Buy one get one free!',
    description: 'Special deal for this weekend only.',
  },
  {
    id: 3,
    title: 'Free shipping on orders over $50',
    description: 'Shop more, save more on shipping.',
  },
  // Add more offers as needed
];

const OffersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
