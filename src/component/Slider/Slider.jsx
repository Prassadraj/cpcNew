import React, { useEffect, useState } from "react";
import "./slider.css";
import image1 from "../../images/image1.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: image1, category: "Biochemistry", id: "1" },
    { url: image3, category: "Biochemistry", id: "2" },
    { url: image4, category: "Biochemistry", id: "3" },
    { url: image5, category: "Biochemistry", id: "4" },
    { url: image6, category: "Biochemistry", id: "5" },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change image every 4 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [currentIndex]); // Re-run effect if currentIndex changes

  return (
    <div className="max-w-full h-[300px] md:h-[400px] relative m-auto w-full">
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-full w-full duration-500 bg-center bg-cover rounded-md"
      >
        <div className="absolute w-full h-full">
          <Link
            to={`/productinfo/${slides[currentIndex].category}/${slides[currentIndex].id}`}
          >
            {" "}
            <img
              src={`${slides[currentIndex].url}`}
              className=" "
              alt=""
              title="viewProduct"
            />
          </Link>
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/5 cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/5 cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
