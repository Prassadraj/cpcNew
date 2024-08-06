import "./footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

function Footer({ open }) {
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  return (
    <div className={`h-fit  bg-light-green md:block ${open && "hidden"}`}>
      <div
        className="flex justify-around gap-2
     "
      >
        {/* col 1 */}
        <div className="flex items-center flex-col gap-3 mt-28 col1">
          <div className="glassy-effect-container">
            <img src={logo} alt="Logo" className="md:w-[200px]  w-[50px]" />
          </div>
          <p className="text-xs md:text-lg md:text-md max-w-xs text-center font-poppins md:font-semibold ">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>
        {/* col 2 */}
        <div
          className="flex flex-col items-start mt-16 font-poppins gap-2 col2"
          ref={col2Ref}
        >
          <h1 className="text-xs md:text-lg  text-custom-green font-poppins">
            Quick Links
          </h1>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>About</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Contact</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Career</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>CSR Policy</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Our Brand</p>
          </Link>
        </div>
        {/* col 3 */}
        <div
          className="flex flex-col items-start mt-16 font-poppins gap-2 col3"
          ref={col3Ref}
        >
          <h1 className="text-xs md:text-lg text-custom-green font-poppins">
            Products
          </h1>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Biochemistry</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Hematology</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>POC</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Electrolyte</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Clinical Microbiology</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Pre Analytical Automation</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>COVID-19</p>
          </Link>
        </div>
        {/* col 4 */}
        <div
          className="flex flex-col items-start mt-16 font-poppins gap-2 col4"
          ref={col4Ref}
        >
          <h1 className="text-xs md:text-lg text-custom-green font-poppins">
            Others
          </h1>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Help and Support</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Resources</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Residential Address</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Cookie Preferences</p>
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg hover:underline hover:text-black"
          >
            <p>Corporate Address</p>
          </Link>
        </div>
      </div>

      <div className="h-[1px] w-[90%] flex justify-center items-center text-center bg-custom-green mx-auto mt-4"></div>
      <div className="mt-2 flex justify-around  md:justify-between md:mt-4 md:pl-16 md:pr-16">
        <div className="text-sm md:text-3xl text-custom-green flex gap-2 md:gap-3 lg:gap-3">
          <Link className="hover:text-sky-600">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link>
            <FontAwesomeIcon
              className="hover:text-red-500"
              icon={faInstagram}
            />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link>
            <FontAwesomeIcon className="hover:text-red-500" icon={faYoutube} />
          </Link>
        </div>
        <div className="text-xs md:text-lg font-poppins font-semibold">
          <p>Everlife CPC 2024 © All Rights Reserved</p>
        </div>
      </div>
      <p className="text-[1px] md:text-[6px] relative bottom-0 flex justify-center items-center text-name ">
        Prassad Raj
      </p>
    </div>
  );
}

export default Footer;
