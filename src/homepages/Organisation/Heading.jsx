import gsap from "gsap";
import React, { useEffect } from "react";
import AOS from "aos";
import sachika from "../../images/organisation/sachikaNew.png";

function Heading() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center tablet:h-fit laptop:h-fit
     largeLaptop:h-fit gap-4"
    >
      {/* <p className="text-lg tablet:text-3xl largeLaptop:text-4xl text-custom-green font-semibold title1 uppercase">
        Sachika
      </p> */}
      <div className="">
        <img
          src={sachika}
          alt="img"
          className="w-[120px] tablet:w-[180px] object-contain rounded-lg"
        />
      </div>
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
