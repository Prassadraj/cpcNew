import React, { useState, useEffect } from "react";
import "./career.css";
const Carousel = ({
  images,
  contents,
  autoSlide = true,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, slideInterval);
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [currentIndex, autoSlide, slideInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-64 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <div className="grid grid-cols-2 gap-2 ">
              <div className="flex items-center">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" w-full p-4 bg-white">
                <h2 className="text-2xl text-cpccol font-semibold">
                  {contents[index].topic}
                </h2>
                <p className="mt-5 text-justify">{contents[index].content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      {/* Uncomment these buttons if you want manual control */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        Next
      </button> */}
    </div>
  );
};

export default Carousel;
