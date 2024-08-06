import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";
import { CategoryContext } from "../Context/CategoryContext";
import MenuBtn from "./MenuBtn/MenuBtn";
import {
  FaChevronDown,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BtnContextProvider } from "../Context/MobileContext";

function Nav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState({
    about: false,
    products: false,
  });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { setSelectedCategory } = useContext(CategoryContext);
  const { setIsToggled } = useContext(BtnContextProvider);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("home");
        break;
      case "/about":
        setSelected("about");
        break;
      case "/brand":
        setSelected("brand");
        break;
      case "/product":
        setSelected("product");
        break;
      case "/career":
        setSelected("career");
        break;
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
        setSelected("");
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
    <div className="px-2 md:flex sticky bg-white top-0 h-fit w-full z-50 items-center justify-between md:pl-3 md:pr-20 shadow-md overflow-visible">
      <div className="left py-2 flex items-center md:px-10">
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
            className="md:w-[140px] md:h-[70px] w-[100px]"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMobileMenu ? "flex" : "hidden"
        } flex-col md:hidden bg-white absolute top-16 left-0 w-full px-4 py-1 shadow-md border-t-2 h-screen  font-lato`}
      >
        <div className="h-96 overflow-y-scroll border-b-2 flex flex-col gap-1">
          <div>
            <Link
              className=" text-xl font-semibold py-2 "
              to="/"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
                setIsToggled((e) => !e);
              }}
            >
              Home
            </Link>
            <div
              className="text-xl font-semibold py-2 mt-2 flex items-center justify-between"
              onClick={() => toggleDropdown("about")}
            >
              <p
                onClick={() => {
                  setShowMobileMenu(!showMobileMenu);
                  setIsToggled((e) => !e);
                }}
              >
                About
              </p>
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
                    to="/product"
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
                    to="/product"
                    onClick={() => {
                      setSelectedCategory("Clinical Microbiology");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    Clinical Microbiology
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className=""
                    to="/product"
                    onClick={() => {
                      setSelectedCategory("COVID-19");
                      setShowMobileMenu(!showMobileMenu);
                      setIsToggled((e) => !e);
                    }}
                  >
                    COVID-19
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className=""
                    to="/product"
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
                    to="/product"
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
                    to="/product"
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
                    to="/product"
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
                    to="/product"
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
        <div className="flex justify-evenly mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className="md:flex hidden md:gap-14 md:text-[15px] pr-20"
        style={{ fontWeight: "500" }}
      >
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "home" ? "selected" : ""
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
            className={`cursor-pointer ${
              selected === "about" ? "selected" : ""
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
            className={`cursor-pointer ${
              selected === "brand" ? "selected" : ""
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
            className={`cursor-pointer ${
              selected === "product" ? "selected" : ""
            }`}
            to="/product"
          >
            Products
          </Link>
          {showDropdown.products && (
            <div className="dropdown-menu w-fit">
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Biochemistry")}
              >
                Biochemistry
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Clinical Microbiology")}
              >
                Clinical Microbiology
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("COVID-19")}
              >
                COVID-19
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Electrolyte Analyzer")}
              >
                Electrolyte Analyzer
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Hematology")}
              >
                Hematology
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Immunology")}
              >
                Immunology
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Point of Care")}
              >
                Point of Care
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Pre-Analytical Automation")}
              >
                Pre-Analytical Automation
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "career" ? "selected" : ""
            }`}
            to="/career"
          >
            Career
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "success" ? "selected" : ""
            }`}
            to="/success"
          >
            Our Success
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "blog" ? "selected" : ""
            }`}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "contact" ? "selected" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
