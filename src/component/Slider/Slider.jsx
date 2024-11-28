import React, { useEffect, useState } from "react";
import "./slider.css";
import image1 from "../../component/AllDatas/ProductImages/Hematology/3D PLUS/product1.webp";
import image2 from "../../component/AllDatas/ProductImages/Hematology/SedratePro/product1.webp";
import image3 from "../../component/AllDatas/ProductImages/Immunology/Iflash1200/product1.webp";
import image4 from "../../component/AllDatas/ProductImages/Immunology/Plexmat4/product1.webp";
import image5 from "../../component/AllDatas/ProductImages/Point of Care/ichroma™ II/product1.webp";
import image6 from "../../component/AllDatas/ProductImages/Point of Care/ichroma™ III/product1.webp";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: image1, category: "Hematology", id: "2" },
    { url: image2, category: "Hematology", id: "5" },
    { url: image3, category: "Immunology", id: "4" },
    { url: image4, category: "Immunology", id: "1" },
    { url: image5, category: "Point%20of%20Care", id: "1" },
    { url: image6, category: "Point%20of%20Care", id: "2" },
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
    <div className="max-w-full h-[300px] tablet:h-[400px] relative m-auto w-full">
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
              className={`h-[300px] w-full object-contain ${
                (slides[currentIndex].category === "Immunology" &&
                  slides[currentIndex].id === "1") ||
                (slides[currentIndex].category === "Point%20of%20Care" &&
                  slides[currentIndex].id === "1")
                  ? "scale-125"
                  : ""
              }`}
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
