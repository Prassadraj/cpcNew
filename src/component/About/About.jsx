import React, { useEffect } from "react";

import bannerimage from "../../assets/image/banner-image.png";
import sec from "../../assets/image/second-sec-image.png";
import { SiTicktick } from "react-icons/si";
import { FaGlobeAsia } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
// In your main JavaScript or CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import md1 from "../../assets/image/panchanath.png";
import md2 from "../../assets/image/raman.png";
import md3 from "../../assets/image/chermayn.png";
import md4 from "../../assets/image/bhuvana.png";
import md5 from "../../assets/image/fabian.png";
import md6 from "../../assets/image/pramod.png";
import ourvalue from "../../assets/image/ourvalue.png";
import awards from "../../assets/image/awards.webp";
import award1 from "../../assets/image/award1.png";
import award2 from "../../assets/image/award2.png";
import award3 from "../../assets/image/award3.png";
import { motion } from "framer-motion";
import CarouselComponent from "../Carousel/Carousel";
import image1 from "../../assets/image/behnk1.png";
import image2 from "../../assets/image/asp1.png";
import image3 from "../../assets/image/buhlmann1.png";
import image4 from "../../assets/image/euroimmune1.png";
import image5 from "../../assets/image/jokoh1.png";
import image6 from "../../assets/image/thermo1.png";
import image8 from "../../assets/image/yhlo1.png";
import awards1 from "../../assets/image/awards1.png";
import mainaward from "../../assets/image/main-awards.png";
import Footer from "../../homepages/Footer/Footer";

const About = () => {
  const text =
    "Asia’s leading platform solutions platform for the diagnostics, research and analytical lab markets".split(
      " "
    );
  const text1 = "Our Belief System";
  const images = [image1, image2, image3, image4, image5, image6, image8];
  const settings = {
    slidesToShow: 4,
    autoplaySpeed: 2500,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scroll-smooth font-poppins">
      <div className="grid grid-cols-1">
        <div className="">
          <img src={bannerimage} alt="bannerimage" className="mx-auto " />
        </div>
        <header className="md:absolute lg:absolute xl:absolute md:top-24 md:ml-20 md:text-white  ">
          <h1 className="md:text-6xl md:font-bold md:text-left md:ml-0 text-4xl text-center mt-4">
            About us
          </h1>
          <div className="md:w-40 md:h-1 md:ml-0 md:bg-white bg-black w-40 h-1 ml-28 mt-5"></div>
          <p className="md:text-xl mt-2 text-base text-center ml-4 md:ml-0 md:text-left">
            We are the leading Medical laboratory
            <br /> Equipment Manufactures
          </p>
        </header>
      </div>

      <div className="grid md:grid-cols-12 sm:grid-cols-2 md:mt-10 sm: mt-28 animate-fade-up ">
        <img
          src={sec}
          alt="second section banner image"
          className=" rounded-tr-[40%] rounded-bl-[40%] rounded-br-[5px] col-span-5 md:h-3/4 md:ml-10 md:mt-5 mt-20 "
        />
        <div className="p-4 col-span-7 ">
          <button className="bg-maincol text-white p-2 rounded-lg font-semibold shadow-custom-shadow mt-4">
            since-1987
          </button>
          <h2 className="text-xl mt-4 font-medium leading-normal text-custom-green text-left">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h2>

          <div className="flex items-start p-4 text-justify">
            <SiTicktick size={100} color="#02a884" className="mr-4" />
            <p>
              CPC Diagnostics Pvt. Ltd. is a dedicated provider of products and
              services to the in-vitro diagnostics industry in India, Sri Lanka
              and Bangladesh. The experience and expertise that we have gained
              since we began in 1987 have made us a respected and trusted
              organization.
            </p>
          </div>
          <div className="flex items-start p-4 text-justify">
            <SiTicktick size={100} color="#02a884" className="mr-4" />
            <p>
              We derive our strength through enduring relationships with
              customers, based on our commitment to deliver valuable products
              and timely end-user support. Our motto is to grow our business on
              sustainable values, contributing to the well being of our
              customers, suppliers, technology partners and employees.
            </p>
          </div>
          <div className="flex items-start p-4 text-justify">
            <SiTicktick size={100} color="#02a884" className="mr-4" />
            <p>
              The success of CPC Diagnostics owes a lot to its dynamic team of
              management, staff and advisers who together have worked to provide
              their customers with outstanding support be it Products,
              Post-Sales Service or Guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 grid-cols-12  gap-2  animate-fade-up delay-100">
        <div className="md:block sm: hidden">
          <div className="md:absolute md:left-2/3 md:mt-24 ">
            <svg
              width="260"
              height="265"
              viewBox="0 0 260 415"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M162.821 414.621L0 7.7688L97.1056 0.680463L259.927 407.533L162.821 414.621Z"
                fill="#BBBBBD"
              />
            </svg>
          </div>
          <div className="md:absolute md:left-3/4 ">
            <svg
              width="260"
              height="265"
              viewBox="0 0 239 399"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M239.001 0L97.3805 398.307H0.0166016L141.637 0H239.001Z"
                fill="#01AB86"
              />
            </svg>
          </div>
        </div>
        <div className="md:col-span-12 col-span-12 md:text-center z-20 ">
          <h2 className="text-maincol font-poppins font-semibold md:text-3xl text-2xl">
            Our Belief System
          </h2>{" "}
          <br />
          <p className="font-poppins">
            We believe in providing high quality diagnostic solutions to our
            believers, <br /> through highest level of customer connect by
            ensuring innovative and <br /> affordable products for an
            everlasting relationship
          </p>
        </div>
        <div className="md:col-span-6 col-span-12  bg-white text-black p-4 mt-4 z-20 shadow-custom-shadow">
          <div className=" md:p-10 sm:p-10 text-justify">
            <FaGlobeAsia size={40} color="#02a884" className="mr-4" />

            <h2 className="font-bold text-xl">Our Vision</h2>
            <p>
              To advance health and quality of life in Asia by improving access
              to health technology and science.
            </p>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 bg-white text-black p-4 mt-4 md:z-20 shadow-custom-shadow">
          <div className=" md:p-10 sm:p-10 text-justify">
            <TbTargetArrow size={40} color="#02a884" className="mr-4" />

            <h2 className="font-bold text-xl ">Our Mission</h2>
            <p>
              To improve access to the diagnostic and scientific technology that
              improves health, quality, environmental and safety outcomes.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-12 sm:grid-cols-2  gap-2 mt-10 animate-fade-up delay-200">
          <div className="col-span-5 p-4 w-full flex items-center justify-center">
            <img src={ourvalue} alt="our core value" className="w-2/3 h-auto" />
          </div>

          <div className="col-span-7 p-4 mt-20">
            <h2 className="text-maincol font-poppins font-semibold md:text-3xl text-2xl">
              Our Core Values
            </h2>
            <p className="ml-2 mt-6 text-justify">
              Our values define who we are. By living these values day-by-day,
              we aim to build a culture that will nurture long-term
              relationships and bring lasting value to our suppliers, customers,
              employees and stakeholders. We are committed to:
            </p>
            <div className="flex mt-4">
              <svg
                width="23"
                height="14"
                viewBox="0 0 23 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M1.73438 8.23438L5.64062 12.1406M11.1094 5.89062L15.0156 1.98438M7.98438 8.23438L11.8906 12.1406L21.2656 1.98438"
                  stroke="#01AB86"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;Providing the best possible products and
              services to our customers.
            </div>

            <div className="flex mt-4">
              <svg
                width="23"
                height="14"
                viewBox="0 0 23 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M1.73438 8.23438L5.64062 12.1406M11.1094 5.89062L15.0156 1.98438M7.98438 8.23438L11.8906 12.1406L21.2656 1.98438"
                  stroke="#01AB86"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;Building a robust and sustainable business
              based on strong fundamentals.
            </div>

            <div className="flex mt-4">
              <svg
                width="23"
                height="14"
                viewBox="0 0 23 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M1.73438 8.23438L5.64062 12.1406M11.1094 5.89062L15.0156 1.98438M7.98438 8.23438L11.8906 12.1406L21.2656 1.98438"
                  stroke="#01AB86"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;Cultivating a high-performing, motivated
              and engaged workforce.
            </div>

            <div className="flex mt-4">
              <div>
                <svg
                  width="23"
                  height="14"
                  viewBox="0 0 23 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M1.73438 8.23438L5.64062 12.1406M11.1094 5.89062L15.0156 1.98438M7.98438 8.23438L11.8906 12.1406L21.2656 1.98438"
                    stroke="#01AB86"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="ml-4">
                Operating under strict compliance rules that govern quality,
                regulatory, environmental and ethical business practices.
              </div>
            </div>

            <div className="flex mt-4">
              <div>
                <svg
                  width="23"
                  height="14"
                  viewBox="0 0 23 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M1.73438 8.23438L5.64062 12.1406M11.1094 5.89062L15.0156 1.98438M7.98438 8.23438L11.8906 12.1406L21.2656 1.98438"
                    stroke="#01AB86"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="ml-4">
                {" "}
                Investing in projects and improvements that will benefit the
                company and community.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:p-20 p-5 mt-10 animate-fade-up ">
        <h2 className="text-maincol font-poppins font-semibold md:text-3xl text-2xl text-center">
          Our Suppliers
        </h2>
        <div className="mt-8">
          <CarouselComponent images={images} settings={settings} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -scroll-mt-20 mt-20 ">
        <h2 className="text-maincol md:text-3xl text-2xl font-poppins font-semibold ml-4 sm:ml-10">
          Our Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-10">
          <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat ">
            <img
              src={md1}
              alt="Chairman & Managing Director"
              className="w-full h-auto rounded-md drop-shadow-custom-drop-shadow"
            />
            <div className="border-t-4 border-maincol">
              <h2 className="font-bold text-left text-black text-xl mt-4">
                R. Panchanath,
              </h2>
              <p className="text-maincol text-sm mt-1 font-semibold">
                Chairman & Managing Director
              </p>
              <p className="mt-2">
                Mr. R. Panchanath joined CPC after an eight-year stint in Indian
                Bank as an officer.....
              </p>
              <button className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:border-maincol hover:bg-maincol hover:text-white hover:transition-all animate-bounce">
                Read more
              </button>
            </div>
          </div>

          <div className="border-solid border-2 border-black p-5  bg-cover bg-no-repeat">
            <img
              src={md2}
              alt="Chairman & Managing Director"
              className="w-full h-auto rounded-md"
            />
            <div className="border-t-4 border-maincol">
              <h2 className="font-bold text-left text-black  text-xl mt-4">
                Raman Gandotra,{" "}
              </h2>
              <p className="text-maincol text-sm mt-1 font-semibold">
                Director
              </p>
              <p className="mt-2">
                Raman will provide leadership in the overall performance of the
                Everlife platform.......
              </p>
              <button className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:border-maincol hover:bg-maincol hover:text-white hover:transition-all animate-bounce">
                Read more
              </button>
            </div>
          </div>

          <div className="border-solid border-2 border-black p-5  bg-cover bg-no-repeat">
            <img
              src={md3}
              alt="Chairman & Managing Director"
              className="w-full h-auto rounded-md"
            />
            <div className="border-t-4 border-maincol">
              <h2 className="font-bold text-left text-black  text-xl mt-4">
                Chermayn Chan,
              </h2>
              <p className="text-maincol text-sm mt-1 font-semibold">
                Director
              </p>
              <p className="mt-2">
                Chermayn has spent 14 years working in the healthcare industry
                throughout the region.
              </p>
              <button className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:border-maincol hover:bg-maincol hover:text-white hover:transition-all animate-bounce">
                Read more
              </button>
            </div>
          </div>

          <div className="border-solid border-2 border-black p-5  bg-cover bg-no-repeat">
            <img
              src={md4}
              alt="Chairman & Managing Director"
              className="w-full h-auto rounded-md"
            />
            <div className="border-t-4 border-maincol">
              <h2 className="font-bold text-left text-black  text-xl mt-4">
                Bhuvana Panchanath,{" "}
              </h2>
              <p className="text-maincol text-sm mt-1 font-semibold">
                Director
              </p>
              <p className="mt-2">
                Ms. Bhuvana Panchanath joined CPC after many years of managing
                bunches of ebullient school children...
              </p>
              <button className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:border-maincol hover:bg-maincol hover:text-white hover:transition-all animate-bounce">
                Read more
              </button>
            </div>
          </div>

          <div className="border-solid border-2 border-black p-5  bg-cover bg-no-repeat">
            <img
              src={md5}
              alt="Chairman & Managing Director"
              className="w-full h-auto rounded-md"
            />
            <div className="border-t-4 border-maincol">
              <h2 className="font-bold text-left text-black  text-xl mt-4">
                Fabian Chua,{" "}
              </h2>
              <p className="text-maincol text-sm mt-1 font-semibold">
                Director
              </p>
              <p className="mt-2">
                Fabian has experience across private equity and M&A in Asia
                Pacific.....
              </p>
              <button className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:border-maincol hover:bg-maincol hover:text-white hover:transition-all animate-bounce">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 animate-fade-up delay-500">
        <h2 className="text-maincol md:text-3xl text-2xl font-poppins font-semibold ml-4 sm:ml-10">
          Key Management Person
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
          <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
            <img
              src={md6}
              alt="Chairman & Managing Director"
              className="w-full h-auto rounded-md"
            />
            <div className="border-t-4 border-maincol">
              <h2 className="font-bold text-left text-black  text-xl mt-4">
                Dr. Pramod Kabra,{" "}
              </h2>
              <p className="text-maincol text-sm mt-1 font-semibold">CEO</p>
              <p className="mt-2">
                Dr pramod kabra is a qualified internist (MD, internal
                medicine).....
              </p>
              <button className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:border-maincol hover:bg-maincol hover:text-white hover:transition-all animate-bounce">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='mt-20 bg-gray-100 p-10 animate-fade-up delay-700'>
  <h2 className='text-maincol text-3xl font-semibold  text-center'>Get a glimpse of life at CPC!</h2>
  <div className=' rounded-lg mt-10 flex justify-center items-center'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/mNYxQo9i7gc?si=YU-uCPFqkHFv2bzj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div> */}

      <div className="grid md:grid-cols-12 sm:grid-cols-2  gap-2 mt-10 animate-fade-up delay-200  overflow-x-hidden">
        <div className="md:col-span-6 col-span-12 md:ml-10 p-3 text-justify">
          <h2 className="text-maincol text-left font-poppins  md:text-3xl text-2xl font-semibold mt-20 ">
            Awards
          </h2>
          <p className="leading-8 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in
            sit ratione adipisci molestiae temporibus, eveniet eum iusto aut
            saepe dicta assumenda nobis, fugiat sapiente cupiditate nihil
            voluptate reprehenderit fuga. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae ipsum exercitationem labore porro
            necessitatibus illo maxime impedit officia architecto culpa a
            cupiditate autem optio ex id, nisi praesentium suscipit doloremque.
          </p>
        </div>

        <div className="md:col-span-6 col-span-12 flex justify-center rotate-6 animate-floating ">
          <img src={mainaward} alt="" />
        </div>

        <div className="col-span-12  w-full  mb-4">
          <div className="flex justify-evenly items-center ">
            <img src={award1} alt="awards" />
            <img src={award2} alt="awards" />
            <img src={award3} alt="awards" />
            <img src={award1} alt="awards" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
