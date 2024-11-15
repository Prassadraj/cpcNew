import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import testimonial from "../../assets/testimonials.jpg";
import whychose from "../../assets/image/ourvalue.png";
import { TiTickOutline } from "react-icons/ti";
import yhlo from "../../assets/yhlo.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import yhlo1 from "../../assets/yhlo-1.jpg";
import yhlo2 from "../../assets/yhlo-2.jpg";
import yhlo3 from "../../assets/yhlo-3.jpg";
import trial from "../../assets/trial.png";
import rental from "../../assets/rental.png";
import "../../App.css";
import Footer from "../../homepages/Footer/Footer";

// Custom SlotCounter Component
function SlotCounter({ endValue, label }) {
  const [count, setCount] = useState(0);

  // Counting animation logic
  useEffect(() => {
    let start = 0;
    const increment = endValue / 100; // Adjust this for smoother/slower increments
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 20); // Update every 20ms
    return () => clearInterval(timer); // Cleanup on unmount
  }, [endValue]);

  return (
    <div className="flex flex-col items-center justify-center w-64 h-32 rounded-lg shadow-md m-2 ">
      {/* Counter with "+" symbol */}
      <span className="text-4xl font-bold">{count}+</span>
      {/* Label for the counter */}
      <span className="text-lg mt-2">{label}</span>
    </div>
  );
}
function GoogleLandingpageOne() {
  const counters = [
    { endValue: 350, label: "Installations" },
    { endValue: 150, label: " Key corporates & institutes" },
    { endValue: 100, label: "Menu" },
    { endValue: 25, label: "States footprint" },
    { endValue: 4, label: "Prime consumables only" },
    { endValue: 2, label: " Tests/ min everyday" },
  ];

  const [showPopup, setShowPopup] = useState(null);

  // Function to open the corresponding popup
  const openPopup = (popupId) => {
    setShowPopup(popupId);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(null);
  };

  return (
    <div>
      <div
        className="p-7"
        style={{
          backgroundImage: "url(src/assets/image/contact-us-banner.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      >
        <h2 className="text-5xl text-white text-left mt-7">iFlash 1200</h2>
        <p className="text-lg mt-4 text-white">
          Best Chemiluminescence Immunoassay Analyzer Machine in India <br />
          Experience fast, accurate, and reliable immunoassay testing with{" "}
          <br /> the iFlash 1200. Enhance your lab's efficiency today!
        </p>
        <button className="text-lg bg-white shadow-md p-2 mt-4 text-black hover:scale-105 transition-all ease-in-out">
          Request Quote
        </button>
        <button className="text-lg border-white border-2 ml-4 shadow-md p-1 mt-4 text-slate-100 hover:bg-slate-50 hover:text-black transition-all ease-in-out">
          Download Brochure
        </button>
      </div>

      {/* Custom SlotCounter Section */}
      <div className="grid grid-cols-3 gap-4 mt-24 ml-24 text-center">
        {counters.map((counter, index) => (
          <SlotCounter
            key={index}
            endValue={counter.endValue}
            label={counter.label}
          />
        ))}
      </div>

      <div className="usp">
        <h2 className="text-black text-center text-3xl mt-10 p-4"> USP</h2>
      </div>

      <div className="bg-gray-100 p-4">
        <h2 className="text-black text-center text-3xl mt-10 p-4 bg-gray-100">
          {" "}
          Comprehensive Test Panels{" "}
        </h2>
        <p className="text-center text-lg ">
          iFlash 1200 provides an expansive test menu to cover multiple health
          conditions
        </p>

        <div className="flex justify-around mt-4">
          <button
            className=" border shadow-md p-4 w-52 max-w-52 rounded-lg bg-white"
            onClick={() => openPopup(1)}
          >
            Diabetes{" "}
          </button>
          <button
            className=" border shadow-md p-4 w-52 max-w-52 rounded-lg bg-white"
            onClick={() => openPopup(2)}
          >
            Reproductive Health{" "}
          </button>
          <button
            className=" border shadow-md p-4 w-52 max-w-52 rounded-lg bg-white"
            onClick={() => openPopup(3)}
          >
            APS Markers{" "}
          </button>
        </div>

        <div className="flex justify-around mt-4">
          <button
            className=" border shadow-md p-4 w-52 max-w-52 rounded-lg bg-white"
            onClick={() => openPopup(4)}
          >
            Tumor Markers{" "}
          </button>
          <button
            className=" border shadow-md p-4 w-52 max-w-52 rounded-lg bg-white"
            onClick={() => openPopup(5)}
          >
            Rheumatoid Arthritis{" "}
          </button>
          <button
            className=" border shadow-md p-4 w-52 max-w-52 rounded-lg bg-white"
            onClick={() => openPopup(6)}
          >
            Thyroid{" "}
          </button>
        </div>
        <div className="text-center mt-14">
          <p className="text-lg">
            Your lab will be equipped to handle a wide range of diagnostic
            needs, improving patient outcomes.
          </p>
          <div className="flex justify-center p-2">
            <a href="">
              <button className="flex items-center justify-center border shadow-md p-2 w-full rounded-lg mt-7 text-lg bg-maincol text-white">
                Know more
                <FaArrowCircleRight className="ml-2 " />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Popup Components */}
      {showPopup === 1 && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup 1</h2>
            <p>This is the content of Popup 1</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {showPopup === 2 && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup 2</h2>
            <p>This is the content of Popup 2</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {showPopup === 3 && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup 3</h2>
            <p>This is the content of Popup 3</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {showPopup === 4 && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup 4</h2>
            <p>This is the content of Popup 4</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {showPopup === 5 && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup 5</h2>
            <p>This is the content of Popup 5</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {showPopup === 6 && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup 6</h2>
            <p>This is the content of Popup 6</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <div className="bg-maincol mt-4">
        <div className="grid grid-cols-2 p-14">
          <div className="">
            <h2 className="text-2xl text-left">
              Discover More About iFlash 1200{" "}
            </h2>
            <p className="text-lg text-white mt-4 text-justify">
              Gain in-depth insights into the technical specifications and see
              how iFlash 1200 can boost your lab’s performance. Download now for
              full details!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-xl border-white border-2 p-3 text-slate-100 transition-all ease-in-out hover:bg-slate-100 hover:text-black">
              Download Insights
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-2 p-7">
          <div>
            <h2 className="text-black text-4xl">Why Choose CPC Diagnostics?</h2>
            <img src={whychose} alt="" className="h-80 mt-8 mx-auto" />
          </div>

          <div>
            <div className="flex  gap-2 text-xl mt-20">
              <TiTickOutline size={24} className="mt-1" />
              37 Years of Expertise in delivering reliable diagnostic solutions.
            </div>
            <div className="flex  gap-2 text-xl mt-4">
              <TiTickOutline size={24} className="mt-1" />
              Wide Product Range covering immunoassay, hematology, and more.
            </div>
            <div className="flex  gap-2 text-xl mt-4">
              <TiTickOutline size={24} className="mt-1" />
              Advanced Technology with flexible ownership options.
            </div>
            <div className="flex  gap-2 text-xl mt-4">
              <TiTickOutline size={24} className="mt-1" />
              24x7 Support to keep your lab running smoothly.
            </div>
            <div className="flex  gap-2 text-xl mt-4">
              <TiTickOutline size={24} className="mt-1" />
              Nationwide Reach for fast delivery and reliable service.
            </div>
          </div>
        </div>
        <p className="text-center text-3xl mt-4 font-bold">
          Perfect diagnostics, delivered!
        </p>
      </div>

      <div className="bg-gray-100 p-4 mt-16">
        <div className="grid grid-cols-2 gap-4 p-10">
          <div>
            <h3 className="text-4xl font-bold">Why Choose YHLO?</h3>
            <div className="flex mt-4 items-start justify-start">
              <IoIosCheckmarkCircleOutline size={70} />
              <p className="text-lg mt-3 ml-3">
                {" "}
                Since its inception in 2008, YHLO has become a leader in the
                in-vitro diagnostics industry, driven by a passion for
                innovation and quality.{" "}
              </p>
            </div>
            <div className="flex">
              <IoIosCheckmarkCircleOutline size={70} />
              <p className="text-lg mt-3 ml-3">
                {" "}
                With a dedicated team of scientists and engineers, we specialize
                in CLIA immunoassay solutions designed for the most accurate and
                reliable results.
              </p>
            </div>
          </div>
          <div>
            <img src={yhlo} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-black text-4xl mt-10">
          Explore Our iFlash Series of Analyzers
        </h2>
        <div className="grid grid-cols-3 p-10 ">
          <div className="shadow-md p-4 m-2">
            <img src={yhlo1} alt="" className="h-44 mx-auto" />
            <h2 className="text-black text-2xl">iFlash 1200</h2>
            <p className="pl-6 pr-6 mt-4 text-justify text-sm">
              The iFlash 1200 is ideal for medium-sized labs that need reliable
              results in a space-saving design. Perfect for labs that want high
              performance without the bulk.
            </p>
            <a href="">
              <button className="bg-maincol text-white p-2 w-48 ml-6 text-lg mt-4">
                Explore iFlash 1200
              </button>
            </a>
          </div>
          <div className="shadow-md p-4 m-2">
            <img src={yhlo2} alt="" className="h-44 mx-auto" />
            <h2 className="text-black text-2xl">iFlash 1800</h2>
            <p className="pl-6 pr-6 mt-4 text-justify text-sm">
              Built for larger labs, the iFlash 1800 balances speed and
              efficiency, making it an ideal choice for high-demand
              environments.
            </p>
            <a href="">
              <button className="bg-maincol text-white p-2 w-48 ml-6 text-lg mt-4">
                Explore iFlash 1800
              </button>
            </a>
          </div>
          <div className="shadow-md p-4 m-2">
            <img src={yhlo3} alt="" className="h-44 mx-auto" />
            <h2 className="text-black text-2xl">iFlash 3000</h2>
            <p className="pl-6 pr-6 mt-4 text-justify text-sm">
              Designed for labs that handle massive test volumes, the iFlash
              3000 delivers unmatched capacity and accuracy for high-volume
              operations.
            </p>
            <a href="">
              <button className="bg-maincol text-white p-2 w-48 ml-6 text-lg mt-4">
                Explore iFlash 3000
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 m-7 rounded-2xl">
        <h2 className="text-3xl text-black">
          Flexible Ownership & Rental Options
        </h2>
        <p className="mt-4 text-center text-lg pl-44 pr-44">
          We understand that every lab has different needs. Whether you want to
          own or rent, we offer flexible options to match your budget and
          requirements.
        </p>
        <div className="flex justify-evenly items-center mt-7 ml-10">
          <div className="text-center mt-2">
            <img src={rental} alt="" className="mx-auto" />
            <div>
              <h3 className="text-2xl mt-4">Rental Offer</h3>
              <p className="  text-sm ">
                Choose a rental plan that works best for your lab, <br />{" "}
                ensuring you get the technology you need without the <br />{" "}
                upfront investment.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="">
            <button className="text-lg bg-maincol text-white p-2 ml-8 rounded-lg">
              Interested? Request a Demo Now!
            </button>
          </a>
        </div>
      </div>

      <div className="bg-maincol p-10">
        <h3 className="text-center text-2xl text-white ">Next Steps</h3>
        <div className="h-1 w-52 bg-white relative left-2/4 mt-2 -ml-24"></div>
        <div className="flex justify-evenly items-center">
          <a href="">
            <div className="hover:scale-105 transition-all ease-in-out">
              <h3 className="text-2xl text-left text-white mt-4 ">
                Need Expert Support?
              </h3>
              <p className="text-sm text-white mt-2">
                Get instant help 24/7 from our specialists.
              </p>
            </div>
          </a>
          <a href="">
            <div className="hover:scale-105 transition-all ease-in-out">
              <h3 className="text-2xl text-left text-white mt-4">
                Ready for High-Performance?{" "}
              </h3>
              <p className="text-sm text-white mt-2">
                Upgrade to iFlash 1200 for faster, reliable results.
              </p>
            </div>
          </a>
          <a href="">
            <div className="hover:scale-105 transition-all ease-in-out">
              <h3 className="text-2xl text-left text-white mt-4">
                Get a Quote Now{" "}
              </h3>
              <p className="text-sm text-white mt-2">
                Instant quotes for iFlash 1200 available.
              </p>
            </div>
          </a>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default GoogleLandingpageOne;
