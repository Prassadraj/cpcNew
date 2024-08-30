import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images, settings }) => {
  const defaultSettings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const carouselSettings = { ...defaultSettings, ...settings };

  return (
    <Slider {...carouselSettings}>
      {images.map((image, index) => (
        <div key={index} className="px-2 text-black">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className=" w-full h-full rounded border-1"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
