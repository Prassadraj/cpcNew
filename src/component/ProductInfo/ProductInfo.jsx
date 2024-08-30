import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductData";
import Transition from "../Transition/Transition";
import image1 from "../../images/image1.jpg";
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
  faBars,
  faEnvelopesBulk,
  faMessage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import frame1 from "../../images/products/frame1.png";

import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import SideMenu from "../Product/SideMenu";
import Loader from "../Loader/Loader";

function ProductInfo() {
  const { data } = useContext(ProductDataContext);
  const { category, id } = useParams();

  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const images = [frame1, frame1, frame1, frame1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const productCategory = data.find((cat) => cat.category === category);
  const product = productCategory?.items.find((item) => item.id === id);
  const relatedProduct = productCategory.items.filter(
    (related) => related.id !== id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const [expanded, setExpanded] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

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
    FAQ: [
      "Q: How to use TURBOCHEM MAGNA?",
      "A: Follow the user manual for step-by-step instructions.",
      "Q: What is the warranty period?",
      "A: The warranty period is one year from the date of purchase.",
    ],
    Enquiry: [
      "For more information, contact our sales team at sales@example.com.",
      "For technical support, email support@example.com or call 123-456-7890.",
    ],
  };

  const tabs = [
    {
      name: "Product overview",
      submenu: [
        {
          menuName: "Description",
          content: product.shortdescription,
        },
        {
          menuName: "Work Principle",
          content: product.workPrinciple,
        },
        {
          menuName: "Advantages",
          content: product.advantages,
        },
        {
          menuName: "Benefits",
          content: product.benefits,
        },
        {
          menuName: "Main And Care",
          content: product.mainAndCare,
        },
      ],
    },
    {
      name: "Technical specification",
      content: "Technical specification content",
    },
    {
      name: "Resource",
      submenu: [
        {
          menuName: "Work Services",
          content: product.workServices,
        },
        {
          menuName: "Product Brochure df",
          content: product.productBrochure,
        },
        {
          menuName: "Detailed Specification",
          content: product.detailedSpecification,
        },
        {
          menuName: "Offer or Discounts",
          content: product.offerOrDiscounts,
        },
      ],
    },
    { name: "Product Video", content: "Product Video content" },
    { name: "Product Testimonials", content: "Product Testimonials content" },
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
  const [imgUrl, setImgUrl] = useState(product.image[0]);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="product-info text-black overflow-hidden mt-2 font-poppins">
          <div className="hidden mb-3 text-base md:text-xl cursor-pointer  px-5 w-full md:px-5">
            <span className="">
              <Link to="/product">Product</Link>
            </span>
            <Link to="/product" onClick={() => setSelectedCategory(category)}>
              <span>/ {category}</span>
            </Link>
            <span className="">/ {product.title}</span>
          </div>
          {/* mobile */}
          <div className=" mb-3 text-xl cursor-pointer  px-2 w-full sm:hidden">
            <span className="">
              <Link to="/product">Product</Link>
            </span>
            <Link to="/product" onClick={() => setSelectedCategory(category)}>
              <span>/ {category}</span>
            </Link>
            <span>/ {product.title}</span>
          </div>
          <div className="flex px-5 gap-5">
            <div
              className={`sm:w-[25%] bg-white border rounded-md shadow-md  p-1 md:py-2 md:px-4 md:sticky top-16 h-[90vh] overflow-y-auto z-10  ${
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
              <div className="w-full mx-auto">
                {data.map((dropdown, index) => (
                  <div key={index} className="rounded mb-2">
                    <button
                      className="flex justify-between items-center px-1 md:px-2 py-3 w-full cursor-pointer"
                      onClick={() => {
                        toggleDropdown(index);
                        setSelectedCategory(dropdown.category);
                      }}
                    >
                      <p className="text-base font-poppins font-semibold">
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
                            <p className="font-poppins px- text-gray-700 py-2 text-sm capitalize hover:bg-custom-green hover:text-light-green cursor-pointer">
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
              <div className="flex flex-col md:flex-row items-center justify-start mb-2 md:pr-10 md:gap-4">
                <div className="hidden md:block w-1/4 md:px-2">
                  {product.image.map((img, idx) => (
                    <img
                      key={idx}
                      className="mb-2 h-20"
                      src={img}
                      onClick={() => setImgUrl(img)}
                      alt={`Image ${idx + 1}`}
                      style={{
                        cursor: "pointer",
                        borderStyle: "double",
                        border:
                          imgUrl === img ? "4px solid lightgreen" : "none",
                        borderRadius: "10px",
                      }}
                    />
                  ))}
                </div>
                <div className="md:w-[60%] md:h-[60%] flex justify-center">
                  <img
                    src={imgUrl}
                    alt="Descriptive text"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="hidden md:flex justify-center mt-4">
                <div className="w-full flex flex-col text-xl text-justify">
                  <p className="font-bold">{product.title}</p>
                  <p className="font-medium">Overview:</p>
                  <p className="">{product.description}</p>
                  <div className="items-center gap-2 text-xl hidden md:flex mt-2 ">
                    <p>Share:</p>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="sm:hidden flex justify-center mt-4 px-2">
            <div className="w-full flex flex-col text-base ">
              <p className="font-bold">{product.title}</p>
              <p className="font-medium">Overview:</p>
              <p className="mb-2">{product.description}</p>
              <div className="items-center gap-2 text-lg hidden md:flex ">
                <p>Share:</p>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </div>
          </div>

          <div className="p-5 md:block hidden mb-4">
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
            <div className="flex items-center gap-2 text-xl px-2 sm:hidden">
              <p>Share:</p>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
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
            <div className="px-2  md:mx-5 mt-4 mb-4 max-h-[500px] ">
              <div className="flex justify-between items-center mb-4 ">
                <p className="text-left text-lg truncate md:text-2xl mb-2 font-semibold">
                  Related Products
                </p>
                <Link
                  to="/product"
                  onClick={() => setSelectedCategory("Biochemistry")}
                  className="no-underline"
                >
                  <p className="text-left text-sm md:text-xl mb-2 bg-custom-green text-white p-1 md:px-2 md:py-1 rounded-lg">
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
                        className="min-w-[200px] h-72 p-4 flex flex-col items-center border border-gray-300 rounded-md"
                      >
                        <img
                          src={related.image[0]}
                          alt=""
                          className="rounded-md h-40 object-cover w-full"
                        />
                        <p className="text-center text-gray-700 capitalize mt-2 line-clamp-3 text-sm md:text-lg">
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
                    to="/product"
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
          <div className="py-4 border-1 bg-[#EEEEEE] mb-4">
            <p className="text-center text-2xl mb-4">
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
                      className="flex justify-between items-center text-xl bg-[#F5F7FA] p-2 rounded cursor-pointer"
                      onClick={() => toggleInfo(index)}
                    >
                      <p>{faq.question}</p>
                      <button className="text-black font-bold text-2xl">
                        {showInfo === index ? "-" : "+"}
                      </button>
                    </div>
                    {showInfo === index && (
                      <ul className="list-disc list-inside ml-4 mt-2 text-lg">
                        {faq.answers.map((answer, i) => (
                          <li key={i}>{answer}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactUs />
          <Footer />
        </div>
      )}
    </>
  );
}

export default ProductInfo;
