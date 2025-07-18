import gsap from "gsap";
import React, { useEffect } from "react";
import AOS from "aos";

function Heading() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center tablet:h-fit laptop:h-fit  tablet:mt-[100px]
    tablet:mb-[50px] largeLaptop:h-fit gap-4"
    >
      <p className="text-lg tablet:text-3xl largeLaptop:text-4xl text-custom-green font-semibold title1 uppercase">
        Sachika
      </p>
      {/* <p
        className="font-poppins text-sm tablet:text-xl max-w-xl text-center title2 largeLaptop:text-3xl
      largeLaptop:max-w-3xl"
      >
        Explore our network of affiliated companies that enhance healthcare
        globally.
      </p> */}
    </div>
  );
}

export default Heading;
