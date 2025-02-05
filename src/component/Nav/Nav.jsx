import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";
import { CategoryContext } from "../Context/CategoryContext";
import { SectionCategory } from "../Context/SectionCategory";
import MenuBtn from "./MenuBtn/MenuBtn";
import {
  FaChevronDown,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BtnContextProvider } from "../Context/MobileContext";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState({
    about: false,
    products: false,
    apply: false,
  });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { setIsToggled } = useContext(BtnContextProvider);
  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("home");
        break;
      case "/about":
        setSelected("about");
        break;
      case "/csr":
        setSelected("csr");
        break;
      case "/brand":
        setSelected("brand");
        break;
      case "/career":
        setSelected("career");
        break;
      // case "/whychooseus":
      //   setSelected("apply");
      //   break;
      case "/success":
        setSelected("success");
        break;
      case "/blog":
        setSelected("blog");
        break;
      case "/contact":
        setSelected("contact");
        break;
      default:
        // Check if the path matches the product path with a regex
        if (/^\/product\/[^ -]+$/.test(location.pathname)) {
          setSelected("product");
        } else if (/^\/productinfo\/[^ -]+$/.test(location.pathname)) {
          setSelected("product");
        } else {
          setSelected("");
        }
        break;
    }
  }, [location.pathname]);

  const toggleDropdown = (dropdown) => {
    setShowDropdown((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };
  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMobileMenu]);

  return (
    <div className="md:flex sticky p-2  bg-white border-b border-b-custom-green top-0 whitespace-nowrap h-fit w-full z-50 items-center justify-around shadow-md overflow-visible">
      <div className="left flex items-center ">
        <div className="block md:hidden w-fit bg-white">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2"
          >
            <MenuBtn />
          </button>
        </div>
        <Link to="/">
          <img
            className="tablet:w-[140px]  tablet:h-[70px] w-[100px]"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${showMobileMenu ? "flex" : "hidden"
          } flex-col md:hidden  bg-white absolute top-16 left-0 w-full px-4 py-1 shadow-md border-t-2 h-screen  font-lato`}
      >
        <div className="h-96 overflow-y-scroll border-b-2 flex flex-col gap-1">
          <div>
            <Link
              className=" text-xl  font-semibold py-2 "
              to="/"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
                setIsToggled((e) => !e);
              }}
            >
              Home
            </Link>
            <div
              className="text-xl font-semibold  py-2 mt-2 flex items-center justify-between"
              onClick={() => toggleDropdown("about")}
            >
              <p>About</p>
              {showDropdown.about ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {showDropdown.about && (
              <div className="text-base font-lato ">
                <li className="">
                  <Link
                    onClick={() => {
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                    to="/csr"
                  >
                    CSR Policy
                  </Link>
                </li>
              </div>
            )}
          </div>
          <Link
            className=" text-xl font-semibold py-2"
            to="/brand"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Our Brands
          </Link>
          <div className="">
            <div
              className="text-xl font-semibold  py-2 flex items-center justify-between"
              onClick={() => {
                {
                  toggleDropdown("products");
                }
              }}
            >
              Products
              {showDropdown.products ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {showDropdown.products && (
              <div className="text-base font-lato ">
                <li>
                  <Link
                    className=" "
                    to={`/product/Biochemistry/top`}
                    onClick={() => {
                      setSelectedCategory("Biochemistry");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Biochemistry
                  </Link>
                </li>
                <li>
                  <Link
                    className=""
                    to={`/product/ClinicalMicrobiology/top`}
                    onClick={() => {
                      setSelectedCategory("Molecular Diagnostics");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Molecular Diagnostics
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className=""
                    to={`/product/ClinicalMicrobiology/top`}
                    onClick={() => {
                      setSelectedCategory("Clinical Microbiology");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Clinical Microbiology
                  </Link>
                </li> */}
                {/* <li>
                  {" "}
                  <Link
                    className=""
                    to={`/product/COVID-19/top`}
                    onClick={() => {
                      setSelectedCategory("COVID-19");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    COVID-19
                  </Link>
                </li> */}
                <li>
                  {" "}
                  <Link
                    className=""
                    to={`/product/ElectrolyteAnalyzer/top`}
                    onClick={() => {
                      setSelectedCategory("Electrolyte Analyzer");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Electrolyte Analyzer
                  </Link>
                </li>
                <li>
                  <Link
                    className=""
                    to={`/product/Hematology/top`}
                    onClick={() => {
                      setSelectedCategory("Hematology");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Hematology
                  </Link>
                </li>
                <li>
                  <Link
                    className=""
                    to={`/product/Immunology/top`}
                    onClick={() => {
                      setSelectedCategory("Immunology");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Immunology
                  </Link>
                </li>
                <li>
                  <Link
                    className=""
                    to={`/product/PointofCare/top`}
                    onClick={() => {
                      setSelectedCategory("Point of Care");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Point of Care
                  </Link>
                </li>
                <li>
                  <Link
                    className=""
                    to={`/product/Pre-AnalyticalAutomation/top`}
                    onClick={() => {
                      setSelectedCategory("Pre-Analytical Automation");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Pre-Analytical Automation
                  </Link>
                </li>
              </div>
            )}
          </div>
          <Link
            className="text-xl font-semibold py-2"
            to="/career"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Career
          </Link>
          <Link
            className="text-xl font-semibold py-2"
            to="/success"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Our Success
          </Link>
          <Link
            className="text-xl font-semibold py-2"
            to="/blog"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Blog
          </Link>
          <Link
            className="text-xl font-semibold py-2"
            to="/contact"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-evenly  mt-4 text-3xl">
          <Link
            target="_blank"
            to="https://www.facebook.com/EverlifeCPC"
            className="text-sky-600 "
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/everlife_cpc_diagnostics/"
          >
            <FontAwesomeIcon className="text-red-500" icon={faInstagram} />
          </Link>
          <Link
            to="https://www.linkedin.com/company/everlife-cpc-diagnostics/"
            className="text-sky-600"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            target="_blank"
            to="https://www.youtube.com/@everlife-cpcdiagnostics"
          >
            <FontAwesomeIcon className="text-red-500" icon={faYoutube} />
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className="tablet:flex hidden tablet:space-x-4  laptop:space-x-16 md:text-[15px] largeLaptop:text-[20px] "
        style={{ fontWeight: "500" }}
      >
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${selected === "home" ? "selected" : ""
              }`}
            to="/"
          >
            Home
          </Link>
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => toggleDropdown("about")}
          onMouseLeave={() => toggleDropdown("about")}
        >
          <Link
            className={`cursor-pointer ${selected === "about" || selected === "csr" ? "selected" : ""
              }`}
            to="/about"
          >
            About
          </Link>
          {showDropdown.about && (
            <div className="dropdown-menu w-fit mt-0">
              <Link className="dropdown-item" to="/about">
                About Us
              </Link>
              <Link className="dropdown-item" to="/csr">
                CSR Policy
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${selected === "brand" ? "selected" : ""
              }`}
            to="/brand"
          >
            Our Brands
          </Link>
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => toggleDropdown("products")}
          onMouseLeave={() => toggleDropdown("products")}
        >
          <Link
            className={`cursor-pointer ${selected === "product" ? "selected" : ""
              }`}
            onClick={() => {
              setSelectSectionCategory("top");
              setSelectedCategory("Biochemistry");
            }}
            to={`/product/${selectedCategory}/${selecteSectionCategory}`}
          >
            Products
          </Link>
          {showDropdown.products && (
            <div className="dropdown-menu w-fit">
              <Link
                className="dropdown-item"
                to="/product/Biochemistry/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Biochemistry");
                }}
              >
                Biochemistry
              </Link>
              {/* <Link
                className="dropdown-item"
                to="/product/ClinicalMicrobiology/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Clinical Microbiology");
                }}
              >
                Clinical Microbiology
              </Link> */}
              {/* <Link
                className="dropdown-item"
                to={`/product/COVID-19/top`}
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("COVID-19");
                }}
              >
                COVID-19
              </Link> */}
              <Link
                className="dropdown-item"
                to="/product/MolecularDiagnostics/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Molecular Diagnostics");
                }}
              >
                Molecular Diagnostics
              </Link>
              <Link
                className="dropdown-item"
                to="/product/ElectrolyteAnalyzer/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Electrolyte Analyzer");
                }}
              >
                Electrolyte Analyzer
              </Link>
              <Link
                className="dropdown-item"
                to="/product/Hematology/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Hematology");
                }}
              >
                Hematology
              </Link>
              <Link
                className="dropdown-item"
                to="/product/Immunology/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Immunology");
                }}
              >
                Immunology
              </Link>
              <Link
                className="dropdown-item"
                to="/product/PointofCare/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Point of Care");
                }}
              >
                Point of Care
              </Link>
              <Link
                className="dropdown-item"
                to="/product/Pre-AnalyticalAutomation/top"
                onClick={() => {
                  setSelectSectionCategory("top");
                  setSelectedCategory("Pre-Analytical Automation");
                }}
              >
                Pre-Analytical Automation
              </Link>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => toggleDropdown("career")}
          onMouseLeave={() => toggleDropdown("career")}
        >
          <Link
            className={`cursor-pointer ${selected === "career" ? "selected" : ""
              }`}
            to="/career"
          >
            Career
          </Link>
          {/* {showDropdown.apply && (
            <div className="dropdown-menu w-fit mt-0">
              <Link className="dropdown-item" to="/apply">
                Apply
              </Link>
              <Link className="dropdown-item" to="/whychooseus">
                WhyChooseUs
              </Link>
            </div>
          )} */}
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${selected === "success" ? "selected" : ""
              }`}
            to="/success"
          >
            Our Success
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${selected === "blog" ? "selected" : ""
              }`}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${selected === "contact" ? "selected" : ""
              }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 ">
        <Link to="/googleadd">
          <p className="tablet:w-2 tablet:h-2 bg-black/80 rounded-es-3xl"></p>
        </Link>
      </div>
      <div className="absolute top-0 left-0 ">
        <Link to="/googlelanding">
          <p className="tablet:w-2 tablet:h-2 bg-black/80 rounded-ee-3xl"></p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
