import gsap from "gsap";
import React, { useEffect } from "react";
import AOS from "aos";

function Heading() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center tablet:h-[30vh] gap-4">
      <p className="text-lg tablet:text-3xl text-custom-green font-semibold title1 uppercase">
        Our Sister Organizations
      </p>
      <p className="font-poppins text-sm tablet:text-xl max-w-xl text-center title2">
        Explore our network of affiliated companies that enhance healthcare
        globally.
      </p>
    </div>
  );
}

export default Heading;
