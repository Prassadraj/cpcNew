import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductData";
import bgImage from "./bgImage/23.png";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ContactUs from "../../homepages/ContactUs/ContactUs";
import Footer from "../../homepages/Footer/Footer";
import { CategoryContext } from "../Context/CategoryContext";
import "./productInfo.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faEnvelopesBulk,
  faMessage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowForward } from "react-icons/io";
import frame1 from "../../images/products/frame1.png";

import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import SideMenu from "../Product/SideMenu";
import Loader from "../Loader/Loader";
import { SectionCategory } from "../Context/SectionCategory";

function ProductInfo() {
  const { data } = useContext(ProductDataContext);
  const [loadedImages, setLoadedImages] = useState({}); // Tracks loading state of each image

  const handleImageLoad = (idx) => {
    setLoadedImages((prev) => ({ ...prev, [idx]: true }));
  };
  console.log(loadedImages);
  const { category, id } = useParams();
  const decodedCategory = decodeURIComponent(category).replace(" ", "");
  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const productCategory = data.find((cat) => cat.category === category);
  const product = productCategory?.items.find((item) => item.id === id);
  const images = product.image || [];
  const relatedProduct = productCategory.items.filter(
    (related) => related.id !== id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const [expanded, setExpanded] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [showLine, setShowLine] = useState(true);

  const toggleExpand = (section) => {
    setExpanded((prevExpanded) => (prevExpanded === section ? null : section));
  };

  const sectionData = {
    Features: [
      "TURBOCHEM MAGNA",
      "Feature 1: High precision in chemical analysis.",
      "Feature 2: User-friendly interface for easy operation.",
    ],
    Technology: [
      "Advanced sensor technology for accurate readings.",
      "Seamless integration with laboratory information systems (LIS).",
    ],
    Assay: [
      "Wide range of assays for various applications.",
      "High sensitivity and specificity in results.",
    ],
    // FAQ: [
    //   "Q: How to use TURBOCHEM MAGNA?",
    //   "A: Follow the user manual for step-by-step instructions.",
    //   "Q: What is the warranty period?",
    //   "A: The warranty period is one year from the date of purchase.",
    // ],
    Enquiry: [
      "For more information, contact our sales team at sales@example.com.",
      "For technical support, email support@example.com or call 123-456-7890.",
    ],
  };

  const tabs = [
    {
      name: "Product overview",
      submenu: [
        product.shortdescription && {
          menuName: "Description",
          content: product.shortdescription,
        },
        product.workPrinciple && {
          menuName: "Work Principle",
          content: product.workPrinciple,
        },
        product.advantages && {
          menuName: "Advantages",
          content: product.advantages,
        },
        product.benefits && {
          menuName: "Benefits",
          content: product.benefits,
        },
        product.mainAndCare && {
          menuName: "Maintenance And Care",
          content: product.mainAndCare,
        },
        // product.testMenu && {
        //   menuName: "Test Menu",
        //   content: product.testMenu,
        // },
      ].filter(Boolean), // ✅ removes undefined/null entries
    },
  ];

  const [showInfo, setShowInfo] = useState(null);

  const toggleInfo = (index) => {
    setShowInfo((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "What is a Payment Gateway?",
      answers: [
        "A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.",
        "It securely processes payment information and ensures funds are transferred to the merchant's account.",
      ],
    },
    {
      question:
        "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      answers: [
        "No, you do not need to pay if there are no transactions.",
        "You only pay for the transactions that occur.",
      ],
    },
    {
      question: "What platforms does ACME payment gateway support?",
      answers: [
        "ACME payment gateway supports multiple platforms including e-commerce websites, mobile apps, and in-store point of sale systems.",
      ],
    },
    {
      question: "Does ACME provide international payments support?",
      answers: [
        "Yes, ACME provides international payment support.",
        "You can accept payments from customers worldwide.",
      ],
    },
  ];

  // Scroll to top when component mounts
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);
  const [imgUrl, setImgUrl] = useState(0);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const handleNextImage = () => {
    setImgUrl((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setImgUrl((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <div
            className="product-info text-black overflow-hidden mt-2 font-poppins
        container"
          >
            <div className="hidden tablet:flex mb-3 laptop:mt-4 text-base tablet:text-base cursor-pointer  px-5 w-full md:px-5">
              <span className="">
                <Link
                  onClick={() => {
                    setSelectSectionCategory("top");
                    setSelectedCategory("Biochemistry");
                  }}
                  to={`/product/${selectedCategory}/${selecteSectionCategory}`}
                >
                  Product
                </Link>
              </span>
              <Link
                to={`/product/${decodedCategory}/top`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>/ {category}/ </span>
              </Link>
              <span className="font-medium"> {product.title}</span>
            </div>
            {/* mobile */}
            <div className=" mb-3 text-lg cursor-pointer  px-2 w-full sm:hidden">
              <span className="">
                <Link
                  onClick={() => {
                    setSelectSectionCategory("top");
                    setSelectedCategory("Biochemistry");
                  }}
                  to={`/product/${selectedCategory}/${selecteSectionCategory}`}
                >
                  Product
                </Link>
              </span>
              <Link
                to={`/product/${selectedCategory}/top`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>/ {category}</span>
              </Link>
              <span>/ {product.title}</span>
            </div>
            {/* img for mobile */}
            <div className="laptop:w-[80%] sm:hidden px-10 w-full tablet:w-[70%]  md:h-[60%] flex justify-center">
              <img
                src={images[imgUrl]}
                alt="Descriptive text"
                className="rounded-md w-full h-full object-cover"
              />
            </div>
            {/* /sidemenu */}
            <div className="flex px-5 gap-5 sidebar">
              <div
                className={`sm:w-[25%] sidebar bg-white border rounded-md shadow-md  p-2 tablet:py-2 md:px-4 md:sticky top-2
                 laptop:h-[80vh] largeLaptop:h-[50vh] tablet:h-[60vh] overflow-y-auto z-10  ${
                   open
                     ? "fixed top-16 inset-0 w-[80%] h-full overflow-y-auto z-20"
                     : "hidden sm:block"
                 }`}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-xl mt-2 sm:hidden"
                  onClick={() => setOpen(false)}
                />
                <div className="w-full mx-auto h-fit">
                  {data.map((dropdown, index) => (
                    <div key={index} className="rounded mb-2 list-group-item">
                      <button
                        className="flex justify-between  rounded-md  items-center px-1 tablet:px-2 py-1.5  w-full cursor-pointer"
                        onClick={() => {
                          toggleDropdown(index);
                          setSelectedCategory(dropdown.category);
                        }}
                      >
                        <p className="tablet:text-sm  laptop:text-sm largeLaptop:text-xl font-poppins text-left font-medium">
                          {dropdown.category}
                        </p>
                        {openDropdown === index ? (
                          <FaChevronDown />
                        ) : (
                          <FaChevronRight />
                        )}
                      </button>
                      {openDropdown === index && (
                        <div className="border-t border-gray-300">
                          {dropdown.items.map((item) => (
                            <Link
                              to={`/productinfo/${dropdown.category}/${item.id}`}
                              key={item.id}
                              className="no-underline"
                            >
                              <p
                                className={`${
                                  product.title == item.title
                                    ? "bg-custom-green text-white"
                                    : ""
                                } font-poppins px- text-gray-700 py-2 laptop:text-sm tablet:text-xs capitalize hover:bg-custom-green hover:text-light-green cursor-pointer px-2`}
                              >
                                {item.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[75%]">
                <div className="flex flex-col md:flex-row items-center tablet:justify-start mb-2  md:gap-4">
                  <div className="hidden md:block w-1/4 md:px-2 tablet:mt-2">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative">
                        {!loadedImages[idx] && (
                          <div className="mb-3 h-16 w-[100px] bg-gray-200 animate-pulse rounded-lg"></div>
                        )}
                        <img
                          key={idx}
                          className={`mb-3 h-fit w-[100px] object-contain cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 ${
                            !loadedImages[idx] ? "hidden" : ""
                          }`}
                          onLoad={() => handleImageLoad(idx)}
                          src={img}
                          onClick={() => setImgUrl(idx)}
                          alt={`Image ${idx + 1}`}
                          style={{
                            border:
                              imgUrl === idx ? "4px solid #00A786" : "none",
                            borderRadius: "10px",
                            imageRendering: "auto",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="hidden relative laptop:w-[60%] w-full tablet:w-[70%] laptop:h-[300px]  tablet:flex justify-center">
                    <IoIosArrowForward
                      onClick={handlePrevImage}
                      className=" text-xl absolute top-1/2 rotate-180 -left-10 cursor-pointer"
                    />
                    <img
                      src={images[imgUrl]}
                      alt="Descriptive text"
                      className="rounded-md h-full object-cover"
                    />

                    <IoIosArrowForward
                      onClick={handleNextImage}
                      className="text-xl absolute top-1/2 -right-10 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="hidden md:flex justify-center mt-4 tablet:mb-10 laptop:mb-[6rem]">
                  <div className="w-full flex flex-col  text-xl text-justify ">
                    <p className="font-medium text-2xl largeLaptop:text-4xl tablet:mb-4">
                      {product.title}
                    </p>
                    {product.tagline && (
                      <p
                        className={`text-lg largeLaptop:text-xl laptop:mb-4 text-start`}
                      >
                        <span className="font-medium">Tagline : </span>
                        {product.tagline}
                      </p>
                    )}

                    <p className="font-medium tablet:mb-1 largeLaptop:text-2xl largeLaptop:mb-3">
                      Overview:
                    </p>
                    <p
                      className={`text-xs tablet:text-base largeLaptop:text-2xl ${
                        showLine ? "line-clamp-2" : "line-clamp-none"
                      }`}
                    >
                      {product.description}
                    </p>
                    <p
                      className={`text-custom-green text-base cursor-pointer`}
                      onClick={() => setShowLine((prev) => !prev)}
                    >
                      {showLine ? "read more" : "read less"}
                    </p>
                    {/* <div className="items-center gap-2 text-xl hidden md:flex mt-2 ">
                    <p>Share:</p>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className="sm:hidden flex justify-center mt-4 px-2">
              <div className="w-full flex flex-col text-base ">
                <p className="font-bold mb-2">{product.title}</p>
                <p className="font-medium mb-2">Overview:</p>
                <p className="mb-2 ">{product.description}</p>
                <div className="items-center gap-2 text-lg hidden md:flex ">
                  <p>Share:</p>
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </div>
            </div>
            <div className=" md:block productSection   laptop:mb-20">
              <div className="flex justify-around  tablet:text-lg border p-2">
                {tabs.map((header, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedTab(index);
                      setSelectedMenuItem(0); // Reset submenu item on tab change
                    }}
                    className={`cursor-pointer text-base tablet:text-2xl largeLaptop:text-4xl ${
                      selectedTab === index
                        ? "font-semibold text-3xl text-custom-green"
                        : "text-gray-600"
                    }`}
                  >
                    {header.name}
                  </p>
                ))}
              </div>

              <div className="flex border-2 laptop:mb-[4rem]">
                {tabs[selectedTab].submenu && (
                  <div className="w-44 tablet:px-2 p-3 px-2 tablet:text-base text-sm flex flex-col items-start border-r tablet:pr-4">
                    {tabs[selectedTab].submenu.map((submenuItem, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedMenuItem(index)}
                        className={`cursor-pointer 
                        largeLaptop:text-2xl  py-2 ${
                          selectedMenuItem === index
                            ? "font-bold text-custom-green"
                            : "text-gray-600"
                        }`}
                      >
                        {submenuItem.menuName}
                      </div>
                    ))}
                  </div>
                )}
                <div
                  className={` ${
                    tabs[selectedTab].submenu
                      ? "w-3/4 text-start"
                      : "w-full text-center"
                  } text-base largeLaptop:text-2xl`}
                >
                  {tabs[selectedTab].submenu ? (
                    <p className="rounded tablet:p-4 p-4">
                      {tabs[selectedTab].submenu[selectedMenuItem].content}
                    </p>
                  ) : (
                    <p className="rounded tablet:p-4 p-2">
                      {tabs[selectedTab].content}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row items-center justify-start gap-5 px-5  mb-2">
        <div className="hidden md:block w-1/4 md:px-5">
          {product.image.map((img, idx) => (
            <img
              key={idx}
              className="mb-2"
              src={img}
              onClick={() => setImgUrl(img)}
              alt={`Image ${idx + 1}`}
              style={{
                cursor: "pointer",
                borderStyle: "double",
                border: imgUrl === img ? "4px solid lightgreen" : "none",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <img src={imgUrl} alt="Descriptive text" className="rounded-md" />
        </div>
        <div className="w-full flex flex-col text-xl text-justify">
          <p>{product.title}</p>
          <p className="font-semibold">Overview:</p>
          <p className="sm:max-w-xl">{product.description}</p>
          <div className="items-center gap-2 text-xl hidden md:flex mt-4">
            <p>Share:</p>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
      </div> */}
            <div>
              {/* for mobile */}
              {/* <div className="flex items-center gap-2 text-xl px-2 sm:hidden">
              <p>Share:</p>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div> */}
              <div className="sm:hidden">
                <div className="w-full">
                  {Object.keys(sectionData).map((section, index) => (
                    <div key={index} className="border-b border-gray-300">
                      <div
                        className="flex text-xl justify-between px-2 py-4 cursor-pointer"
                        onClick={() => toggleExpand(section)}
                      >
                        <p>{section}</p>
                        <p>{expanded === section ? "-" : "+"}</p>
                      </div>
                      {expanded === section && (
                        <div className="py-1 px-4">
                          <table className="table-auto w-full">
                            <tbody>
                              {sectionData[section].map((item, idx) => (
                                <tr key={idx}>
                                  <td className="p-2 text-lg">{item}</td>
                                  {/* Render the extra item here */}
                                  {section === "Features" && idx === 2 ? (
                                    <td className="p-2">
                                      {sectionData[section][3]}
                                    </td>
                                  ) : null}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* for laptop */}
              {/* <div className="p-5 md:block hidden mb-4">
          <div className="flex justify-around text-lg border p-4">
            {tabs.map((header, index) => (
              <p
                key={index}
                onClick={() => {
                  setSelectedTab(index);
                  setSelectedMenuItem(0); // Reset submenu item on tab change
                }}
                className={`cursor-pointer ${
                  selectedTab === index
                    ? "font-bold text-custom-green"
                    : "text-gray-600"
                }`}
              >
                {header.name}
              </p>
            ))}
          </div>

          <div className="flex border-2">
            {tabs[selectedTab].submenu && (
              <div className="w-1/4 text-lg flex flex-col items-center border-r pr-4">
                {tabs[selectedTab].submenu.map((submenuItem, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedMenuItem(index)}
                    className={`cursor-pointer py-2 ${
                      selectedMenuItem === index
                        ? "font-bold text-custom-green"
                        : "text-gray-600"
                    }`}
                  >
                    {submenuItem.menuName}
                  </div>
                ))}
              </div>
            )}
            <div
              className={`p-4 ${
                tabs[selectedTab].submenu
                  ? "w-3/4 text-start"
                  : "w-full text-center"
              } text-xl`}
            >
              {tabs[selectedTab].submenu ? (
                <p className="rounded p-4">
                  {tabs[selectedTab].submenu[selectedMenuItem].content}
                </p>
              ) : (
                <p className="rounded p-4">{tabs[selectedTab].content}</p>
              )}
            </div>
          </div>
        </div> */}
            </div>
            {/* related products */}
            {relatedProduct.length > 0 ? (
              <div className=" productSection  mt-4 mb-4 tablet:mb-0 max-h-[500px] ">
                <div className="flex justify-between items-center mb-4 ">
                  <p className="text-left text-lg largeLaptop:text-3xl truncate md:text-2xl mb-2 font-semibold">
                    Related Products
                  </p>
                  <Link
                    to={`/product/${category}/top`}
                    className="no-underline"
                  >
                    <p className="text-left largeLaptop:text-3xl text-sm md:text-xl mb-2 bg-custom-green text-white p-1 md:px-3 md:py-2 rounded-lg">
                      View Products
                    </p>
                  </Link>
                </div>
                <div className="w-full overflow-x-auto custom-scrollbar">
                  <div className="flex gap-4">
                    {relatedProduct.map((related, idx) => (
                      <Link
                        to={`/productinfo/${category}/${related.id}`}
                        key={idx}
                        className="no-underline"
                      >
                        <div
                          key={idx}
                          className="relative min-w-[200px] h-60 tablet:h-60 tablet:p-0 p-3 flex flex-col items-center border-[1px] border-custom-green rounded-md mb-2"
                        >
                          <div className="absolute inset-0 animate-moveUp flex justify-center">
                            <img
                              src={bgImage}
                              className="h-full w-full object-cover -z-10 opacity-10"
                              alt=""
                            />
                          </div>
                          <img
                            src={related.image[0]}
                            alt=""
                            className="rounded-md z-10 h-40 object-cover w-full"
                          />
                          <p className="text-center z-10 font-medium text-gray-700  mt-2 line-clamp-2 text-sm tablet:text-sm">
                            {related.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-full flex justify-center mt-4 sm:hidden">
                  <button className="text-sm md:text-xl py-2 px-4 bg-custom-green text-white rounded-lg">
                    <Link
                      to={`/product/Biochemistry/top`}
                      onClick={() => setSelectedCategory("Biochemistry")}
                    >
                      View All Products
                    </Link>
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Frequently Asked Questions */}
            {/* <div className="py-6 border-1 bg-[#EEEEEE] mb-4 tablet:mt-32">
              <p className="text-center text-xl font-semibold mb-4">
                Frequently Asked Questions
              </p>
              <div className="flex justify-center">
                <div className="w-full md:w-[50vw]">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-2 mb-2 rounded bg-white shadow-md"
                    >
                      <div
                        className="flex justify-between items-center text-base bg-[#F5F7FA] p-2 rounded cursor-pointer"
                        onClick={() => toggleInfo(index)}
                      >
                        <p>{faq.question}</p>
                        <button className="text-black font-bold text-xl">
                          {showInfo === index ? "-" : "+"}
                        </button>
                      </div>
                      {showInfo === index && (
                        <ul className="list-disc list-inside ml-4 mt-2 text-base">
                          {faq.answers.map((answer, i) => (
                            <li key={i}>{answer}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            <ContactUs />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default ProductInfo;
