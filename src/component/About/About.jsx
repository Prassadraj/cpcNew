import React, { useEffect, useRef, useState } from "react";

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
import Carousel from "../Carousel/Carousel";

import Loader from "../Loader/Loader";

const About = () => {
  const [visiblePopups, setVisiblePopups] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
  });

  const togglePopup = (card) => {
    setVisiblePopups((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

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
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="scroll-smooth">
          <div className="grid grid-cols-1">
            <div className="">
              <img src={bannerimage} alt="bannerimage" className="mx-auto " />
            </div>
            <header className="md:absolute md:top-32 md:ml-20 md:text-white">
              <h1 className="md:text-6xl md:font-bold md:text-center md:ml-0 text-2xl mt-4 md:text-white lg:text-white xl:text-white">
                About us
              </h1>
              <div className="md:w-40 md:h-1 md:ml-28  md:bg-white bg-white w-40 h-1  mt-2"></div>
              <p className="mt-2 text-fontextra md:text-left text-center">
                We are a leading Medical Laboratory Equipment <br />{" "}
                Manufacturer and Supplier.
              </p>
            </header>
          </div>

          <div className="grid md:grid-cols-12 sm:grid-cols-2 md:mt-10 sm:mt-28 animate-fade-up ">
            <img
              src={sec}
              alt="second section banner image"
              className=" rounded-tr-[40%] rounded-bl-[40%] rounded-br-[5px] col-span-5 md:h-3/4 md:ml-10 md:mt-5 mt-20 md:w-5/6 h-3/4 "
            />
            <div className="p-4 col-span-7 ">
              <button className="bg-maincol text-white p-2 rounded-lg font-semibold shadow-custom-shadow mt-4">
                since-1987
              </button>
              <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
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
              <div className="md:pl-10 md:pr-10 mt-2 text-justify">
                <p className="text-fontextra">
                  We are dedicated to revolutionizing the healthcare industry
                  through advanced diagnostic solutions and unparalleled
                  expertise. As a leading distributor and manufacturer of
                  medical devices and laboratory equipment in South Asia, we
                  strive to improve access to advanced healthcare technologies
                  and enhance patient outcomes.
                </p>
              </div>
              <div className="p-4 ">
                <div className="flex items-start  text-justify leading-7">
                  <SiTicktick size={20} color="#02a884" className="mr-4" />
                  <h3 className="text-lg text-maincol font-semibold">
                    Comprehensive Solutions for Clinical Diagnostics
                  </h3>
                </div>
                <p className="text-fontextra md:pl-12 mt-2 text-justify">
                  With a diverse portfolio spanning clinical chemistry,
                  immunology, hematology, and molecular diagnostics, Everlife
                  CPC delivers comprehensive solutions tailored to meet the
                  unique needs of healthcare providers.
                </p>
              </div>
              <div className="p-4 ">
                <div className="flex items-start  text-justify leading-7">
                  <SiTicktick size={20} color="#02a884" className="mr-4" />
                  <h3 className="text-lg text-maincol font-semibold">
                    Regional Expertise and Global Reach
                  </h3>
                </div>
                <p className="text-fontextra md:pl-12 mt-2 text-justify">
                  Operating in 7 countries with over 1,000 employees, we serve
                  more than 17,000 hospitals and labs, ensuring timely and
                  efficient delivery of high-quality products and services
                  across South Asia.
                </p>
              </div>
              <div className="p-4 ">
                <div className="flex items-start  text-justify leading-7">
                  <SiTicktick size={20} color="#02a884" className="mr-4" />
                  <h3 className="text-lg text-maincol font-semibold">
                    Robust Partner Network
                  </h3>
                </div>
                <p className="text-fontextra md:pl-12 mt-2 text-justify">
                  Our extensive network of 470+ channel partners in India
                  enables us to reach a broader audience and provide timely
                  support, ensuring our innovative solutions are accessible to
                  healthcare providers nationwide.
                </p>
              </div>
              <div className="p-4 ">
                <div className="flex items-start  text-justify leading-7">
                  <SiTicktick size={20} color="#02a884" className="mr-4" />
                  <h3 className="text-lg text-maincol font-semibold">
                    Commitment to Quality and Innovation
                  </h3>
                </div>
                <p className="text-fontextra md:pl-12 mt-2 text-justify">
                  Our advanced manufacturing facilities and dedicated R&D teams
                  are committed to developing innovative products that drive
                  better health outcomes, supported by our award-winning
                  customer service and extensive training programs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-12  gap-2  p-20 animate-fade-up delay-100">
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
              <h2 className="text-maincol font-semibold md:text-3xl text-2xl font-poppins">
                Our Belief System
              </h2>{" "}
              <br />
              <p className="text-lg md:pl-40 md:pr-40 text-center">
                We are committed to delivering high-quality diagnostic solutions
                with an unwavering focus on innovation and affordability. By
                fostering strong customer connections and ensuring access to
                advanced health technology, we aim to build everlasting
                relationships and improve health and quality of life across
                Asia.
              </p>
            </div>
            <div className="md:col-span-6 col-span-12  bg-white text-black p-4 mt-4 z-20 shadow-custom-shadow leading-6">
              <div className=" md:p-10 sm:p-10 text-justify">
                <div>
                  <FaGlobeAsia size={40} color="#02a884" className="mr-4" />

                  <h3 className="font-bold text-lg mt-2 text-left text-maincol">
                    Our Vision
                  </h3>
                </div>
                <p className="text-fontextra">
                  To advance health and quality of life in Asia by improving
                  access to innovative health technology and scientific
                  advancements.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 bg-white text-black p-4 mt-4 md:z-20 shadow-custom-shadow">
              <div className=" md:p-10 sm:p-10 text-justify">
                <TbTargetArrow size={40} color="#02a884" className="mr-4" />

                <h3 className="font-bold text-lg text-left mt-2 text-maincol">
                  Our Mission
                </h3>
                <p className="text-fontextra">
                  To improve access to diagnostic and scientific technology that
                  enhances health, quality, environmental, and safety outcomes.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-12 sm:grid-cols-2  gap-2 mt-10 animate-fade-up delay-200">
              <div className="col-span-5 p-4 w-full flex items-center justify-center">
                <img
                  src={ourvalue}
                  alt="our core value"
                  className="w-2/3 h-auto"
                />
              </div>

              <div className="col-span-7 p-4 mt-20">
                <h3 className="text-maincol font-semibold md:text-3xl text-2xl">
                  Our Core Values
                </h3>
                <p className="ml-2 mt-6 text-justify text-md text-fontextra">
                  Our core values shape our identity and drive our actions every
                  day. By embodying these principles, we strive to foster a
                  culture that nurtures long-term relationships and delivers
                  lasting value to our suppliers, customers, employees, and
                  stakeholders. Our commitments include:
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
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <p className="text-fontextra">
                    Providing our customers with top-tier products and
                    exceptional services.
                  </p>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <p className="text-fontextra">
                    Building a robust and sustainable business grounded in solid
                    principles.
                  </p>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <p className="text-fontextra">
                    Cultivating a high-performing, motivated, and engaged
                    workforce.
                  </p>
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
                  <div className="ml-3">
                    <p className="text-fontextra">
                      {" "}
                      Adhering to strict compliance standards that ensure
                      quality, regulatory, environmental, and ethical business
                      practices.
                    </p>
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
                  <div className="ml-3">
                    {" "}
                    <p className="text-fontextra">
                      Investing in projects and initiatives that benefit both
                      the company and the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:p-20 p-5 mt-10 animate-fade-up ">
            <h2 className="text-maincol font-semibold md:text-3xl text-2xl text-center font-poppins">
              Our Suppliers
            </h2>
            <div className="mt-8">
              <Carousel images={images} settings={settings} />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -scroll-mt-20 mt-20 ">
            <h2 className="text-maincol md:text-3xl text-2xl font-semibold ml-4 sm:ml-10 font-poppins">
              Our Directors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
              <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
                <img
                  src={md1} // replace with appropriate image path or import
                  alt="R. Panchanath Chairman & Managing Director"
                  className="w-full h-auto rounded-md"
                />
                <div className="border-t-4 border-maincol">
                  <h2 className="font-bold text-xl mt-4 text-left text-black">
                    R. Panchanath
                  </h2>
                  <p className="text-maincol text-sm mt-1 font-semibold">
                    Chairman & Managing Director
                  </p>
                  <p className="mt-2 text-fontextra">
                    Mr. R. Panchanath joined CPC after an eight-year stint in
                    Indian Bank as an officer......
                  </p>
                  <button
                    className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all animate-bounce"
                    onClick={() => togglePopup("card1")}
                  >
                    Read more
                  </button>
                </div>

                {visiblePopups.card1 && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                      <h2 className="text-xl font-bold mb-4 text-black">
                        More About R. Panchanath
                      </h2>
                      <p className="text-lg text-justify">
                        Mr. R. Panchanath joined CPC after an eight-year stint
                        in Indian Bank as an officer. He has guided the firm for
                        its financial needs, while using his marketing skills to
                        good use in establishing substantial business for the
                        company in Tamil Nadu & Andhra Pradesh. He is a
                        self-taught electronics expert who nurtured and
                        developed our customer support division.
                      </p>
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => togglePopup("card1")}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* card and popup2 */}

              <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
                <img
                  src={md2} // replace with appropriate image path or import
                  alt="Raman Gandotra director"
                  className="w-full h-auto rounded-md"
                />
                <div className="border-t-4 border-maincol">
                  <h2 className="font-bold text-xl mt-4 text-left text-black">
                    Raman Gandotra,
                  </h2>
                  <p className="text-maincol text-sm mt-1 font-semibold">
                    Director
                  </p>
                  <p className="mt-2 text-fontextra">
                    Raman will provide leadership in the overall performance of
                    the Everlife platform.......
                  </p>
                  <button
                    className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all animate-bounce"
                    onClick={() => togglePopup("card2")}
                  >
                    Read more
                  </button>
                </div>

                {visiblePopups.card2 && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                      <h2 className="text-xl font-bold mb-4 text-black">
                        More About Raman Gandotra
                      </h2>
                      <p className="text-lg">
                        Raman will provide leadership in the overall performance
                        of the Everlife platform, including M&A strategy,
                        driving company and principal performance and realizing
                        synergies across Everlife’s portfolio of companies.
                        <br />
                        <br />
                        Raman has over 25 years of experience across the
                        Pharmaceutical, Hospital Healthcare and Medical Device
                        sectors with leading healthcare MNCs in Asia.
                        <br />
                        <br />
                        In his previous position as Senior Vice President for
                        India & South-East Asia with Smith & Nephew, Raman built
                        a foundation of strong growth, sustainably gaining
                        shares across businesses in five years while increasing
                        margins.
                        <br />
                        <br />
                        Raman brings expertise in developing and executing
                        business growth strategies across industry segments and
                        geographies.
                        <br />
                        <br />
                        Over the course of two decades he has built strong teams
                        in complex dynamic environments, delivering sustainable
                        financial and operating success. Prior to Smith &
                        Nephew, he held leadership roles at Baxter and Allergan.
                      </p>
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => togglePopup("card2")}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* card and popup3 */}

              <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
                <img
                  src={md3} // replace with appropriate image path or import
                  alt="Chermayn Chan director"
                  className="w-full h-auto rounded-md"
                />
                <div className="border-t-4 border-maincol">
                  <h2 className="font-bold text-xl mt-4 text-left text-black">
                    Chermayn Chan,
                  </h2>
                  <p className="text-maincol text-sm mt-1 font-semibold">
                    Director
                  </p>
                  <p className="mt-2 text-fontextra">
                    Chermayn has spent 14 years working in the healthcare
                    industry throughout the region....
                  </p>
                  <button
                    className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all animate-bounce"
                    onClick={() => togglePopup("card3")}
                  >
                    Read more
                  </button>
                </div>

                {visiblePopups.card3 && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                      <h2 className="text-xl font-bold mb-4 text-black">
                        More About Chermayn Chan
                      </h2>
                      <p className="text-lg">
                        Chermayn has spent 14 years working in the healthcare
                        industry throughout the region. She started her career
                        in market research, before joining the Sanofi Business
                        Development team leading regional asset licensing
                        projects.
                        <br />
                        <br />
                        In 2010, she moved to China to manage Sanofi’s
                        outsourced portfolio and lead license-in projects. Prior
                        to joining Everlife, she was Director of Operations for
                        a genetic testing start-up in Shanghai.
                        <br />
                        <br />
                        Chermayn graduated from the University of Pennsylvania
                        with a double major in Biology and Economics.
                      </p>
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => togglePopup("card3")}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* card and popup4 */}

              <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
                <img
                  src={md4} // replace with appropriate image path or import
                  alt="Bhuvana Panchanath director"
                  className="w-full h-auto rounded-md"
                />
                <div className="border-t-4 border-maincol">
                  <h2 className="font-bold text-xl mt-4 text-left text-black">
                    Bhuvana Panchanath,
                  </h2>
                  <p className="text-maincol text-sm mt-1 font-semibold">
                    Director
                  </p>
                  <p className="mt-2 text-fontextra">
                    Ms. Bhuvana Panchanath joined CPC after many years of
                    managing bunches....
                  </p>
                  <button
                    className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all animate-bounce"
                    onClick={() => togglePopup("card4")}
                  >
                    Read more
                  </button>
                </div>

                {visiblePopups.card4 && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                      <h2 className="text-xl font-bold mb-4 text-black">
                        More About Bhuvana Panchanath,
                      </h2>
                      <p className="text-lg">
                        Ms. Bhuvana Panchanath joined CPC after many years of
                        managing bunches of ebullient school children. With her
                        skills in interpersonal relationships she has
                        efficiently built an effective and “quick response”
                        team. With her vast experience in the business for more
                        than 3 decades, Ms. Bhuvana drives the team to achieve
                        and uphold the values of the organisation.
                      </p>
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => togglePopup("card4")}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* card and popup2 */}

              <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
                <img
                  src={md5} // replace with appropriate image path or import
                  alt="Fabian Chua director"
                  className="w-full h-auto rounded-md"
                />
                <div className="border-t-4 border-maincol">
                  <h2 className="font-bold text-xl mt-4 text-left text-black">
                    Fabian Chua,
                  </h2>
                  <p className="text-maincol text-sm mt-1 font-semibold">
                    Director
                  </p>
                  <p className="mt-2 text-fontextra">
                    Fabian has experience across private equity and M&A in Asia
                    Pacific......
                  </p>
                  <button
                    className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all animate-bounce"
                    onClick={() => togglePopup("card5")}
                  >
                    Read more
                  </button>
                </div>

                {visiblePopups.card5 && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                      <h2 className="text-xl font-bold mb-4 text-black">
                        More About Fabian Chua
                      </h2>
                      <p className="text-lg">
                        Fabian has experience across private equity and M&A in
                        Asia Pacific.
                        <br />
                        <br />
                        Prior to joining Everlife, he was an associate with Hera
                        Capital Partners, a Singapore-based private equity firm
                        focused on investments in the consumer retail, media,
                        and digital sectors of Southeast Asia.
                        <br />
                        <br />
                        He has a Bachelor’s Degree in Business Administration
                        from National University of Singapore and is a CFA
                        Charterholder.
                      </p>
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => togglePopup("card5")}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 animate-fade-up delay-500">
            <h2 className="text-maincol md:text-3xl text-2xl font-semibold ml-4 sm:ml-10 font-poppins">
              Key Management Person
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
              <div className="border-solid border-2 border-black p-5 bg-cover bg-no-repeat">
                <img
                  src={md6} // replace with appropriate image path or import
                  alt="Chermayn Chan director"
                  className="w-full h-auto rounded-md"
                />
                <div className="border-t-4 border-maincol">
                  <h2 className="font-bold text-xl mt-4 text-left text-black">
                    Dr. Pramod Kabra
                  </h2>
                  <p className="text-maincol text-sm mt-1 font-semibold">
                    Director
                  </p>
                  <p className="mt-2 text-fontextra">
                    Dr. Pramod Kabra is a qualified internist (MD, Internal
                    Medicine) with management education.....
                  </p>
                  <button
                    className="border-maincol border-2 text-maincol p-2 rounded-md float-right mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all animate-bounce"
                    onClick={() => togglePopup("card6")}
                  >
                    Read more
                  </button>
                </div>

                {visiblePopups.card6 && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                      <h2 className="text-xl font-bold mb-4 text-black">
                        More About Dr. Pramod Kabra
                      </h2>
                      <p className="text-lg">
                        Dr. Pramod Kabra is a qualified internist (MD, Internal
                        Medicine) with management education from IIM Ahmedabad,
                        and having 20+ years of experience in Business
                        Management, Strategic Management, Drug Development,
                        Pharma Marketing, and Clinical Research across Asia
                        Pacific.
                        <br />
                        <br />
                        Before joining CPC as Chief Executive Officer, Pramod
                        worked on various assignments at Thermo Fisher
                        Scientific for almost ten years. His last assignment was
                        Director of Healthcare (Specialty Diagnostic) business
                        for South Asia. He built a strong team that led to
                        turning around business, resulting in a high
                        double-digit CAGR for five years. In addition to this,
                        he has been managing the EU GMP-approved manufacturing
                        and supply chain facility for clinical trial supplies in
                        the capacity of Managing Director of business. He also
                        worked Govt Relationship and Corporate Account
                        Management role at Thermo Fisher.
                        <br />
                        <br />
                        Before Thermo Fisher, Pramod has been managing Clinical
                        Research operations for PRA Health Sciences, Reliance
                        Life Sciences, and various senior management roles in
                        Cadila Pharma.
                      </p>
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => togglePopup("card6")}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
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
              <h2 className="text-maincol md:text-3xl text-2xl font-semibold mt-20 font-poppins">
                Awards
              </h2>
              <p className="leading-8 mt-4 text-fontextra">
                Our commitment to excellence and innovation has earned us
                numerous prestigious awards. These accolades honor our
                pioneering advancements in diagnostic technology, exceptional
                customer service, and rigorous quality standards. Our
                achievements highlight our commitment to delivering top-tier
                diagnostic solutions and outstanding support to our clients.
                Each award reinforces our position as a leader in the medical
                laboratory and equipment manufacturing industry, symbolizing our
                relentless pursuit of quality, integrity, and innovation.
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
      )}
    </>
  );
};

export default About;
