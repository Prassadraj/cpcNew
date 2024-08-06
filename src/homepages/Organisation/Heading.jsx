import gsap from "gsap";
import React, { useEffect } from "react";
import AOS from "aos";

function Heading() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center md:h-[30vh] gap-2">
      <p className="text-lg md:text-3xl text-custom-green font-semibold title1 uppercase">
        Our Sister Organizations
      </p>
      <p
        data-aos="zoom-in-up"
        className="font-poppins text-sm md:text-xl max-w-xl text-center title2"
      >
        Explore our network of affiliated companies that enhance healthcare
        globally.
      </p>
    </div>
  );
}

export default Heading;
