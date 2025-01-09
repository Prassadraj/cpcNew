import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelopesBulk,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryContext } from "../Context/CategoryContext";
import { ProductDataContext } from "../Context/ProductData";
import SideMenu from "./SideMenu";
import Footer from "../../homepages/Footer/Footer";
import frame1 from "../../images/products/frame1.png";
import "./product.css";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import Loader from "../Loader/Loader";
import { SectionCategory } from "../Context/SectionCategory";

function Product() {
  const { data } = useContext(ProductDataContext);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const images = [frame1, frame1, frame1, frame1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { section } = useParams();
  

  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);
  useEffect(() => {
    if (section == "top") {
      window.scrollTo(0, 0);
      setLoad(true);
    }

    setTimeout(() => {
      setLoad(false);
    }, 800);
  }, [section]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const selectedCategoryItems = data
    ? data.find((category) => category.category === selectedCategory)?.items ||
      []
    : [];
  const headingSection = data
    ? data.find((category) => category.category === selectedCategory)
        ?.subsection || []
    : [];

  const sectionCategoryItems = selectedCategoryItems.filter(
    (sectionItems) => sectionItems.section === selecteSectionCategory
  );
  const final =
    selecteSectionCategory === "all" || selecteSectionCategory === "top"
      ? selectedCategoryItems
      : sectionCategoryItems;

  const description =
    data
      ?.find((category) => category.category === selectedCategory)
      ?.about?.find((subsection) => subsection[selecteSectionCategory])?.[
      section.toLowerCase()
    ] || "Description not available for this section";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (category, section) => {
    const formattedSection = encodeURIComponent(
      section.split(" ").join("").toLowerCase()
    );
    setSelectSectionCategory(formattedSection);

    navigate(`/product/${category.split(" ").join("")}/${formattedSection}`, {
      replace: true,
    });
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="font-poppins ">
          <header className="sm:block mb-2 tablet:mb-4">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-1000"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="slider-slide"
                  />
                ))}
              </div>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-3 py-1"
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + images.length) % images.length
                  )
                }
              >
                &#10094;
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-3 py-1"
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % images.length
                  )
                }
              >
                &#10095;
              </button>
            </div>
          </header>
          <section className="px-3 tablet:px-4 py-2 text-base text-gray-700">
            <div className="mb-2">
              <p>
                <Link to="/" className="no-underline">
                  Home
                </Link>
                <span> / </span>
                <span className="font-semibold">{selectedCategory}</span>
              </p>
            </div>
            <div
              className="flex items-center gap-2 text-xl justify-end sm:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              <p>Select Equipment</p>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="flex flex-col sm:flex-row">
              <SideMenu
                open={open}
                setOpen={setOpen}
                toggleDropdown={toggleDropdown}
                openDropdown={openDropdown}
              />
              <div className="sm:w-[75%] bg-white p-1 tablet:p-4 text-center overflow-y-auto">
                <h1 className="text-2xl font-poppins font-bold mb-3 text-left text-black">
                  {selectedCategory}
                </h1>
                <div className="grid  justify-around items-center tablet:grid-cols-3 tablet:gap-2 grid-cols-2 laptop:grid-cols-5 tablet:mb-4">
                  {headingSection.map((sectionCategoryItem, i) => (
                    <p
                      key={i}
                      onClick={() =>
                        handleNavigation(selectedCategory, sectionCategoryItem)
                      }
                      className={`${
                        selecteSectionCategory ==
                        sectionCategoryItem.split(" ").join("").toLowerCase()
                          ? "font-extrabold text-custom-green"
                          : "font-semibold"
                      }   text-xs hover:text-custom-green transition-all ease-in duration-75 hover:font-bold tablet:text-base capitalize  cursor-pointer mb-2`}
                    >
                      {sectionCategoryItem}
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 laptop:grid-cols-3 gap-4 mb-4">
                  {final?.length > 0 ? (
                    final.map((item) => (
                      <Link
                        to={`/productinfo/${selectedCategory}/${item.id}`}
                        key={item.id}
                        className="no-underline"
                      >
                        <div className="bg-white border rounded-lg overflow-hidden relative group h-[200px] tablet:h-[300px] transition duration-300 ease-in-out transform hover:scale-105">
                          <img
                            src={item.image[0]}
                            alt={item.title}
                            className="w-full h-20  tablet:h-44 object-cover"
                          />
                          <div className="px-2 py-2 text-gray-600">
                            <h2 className="text-xs tablet:text-base font-semibold text-gray-600 text-left">
                              {item.title}
                            </h2>
                            <p className="text-xs text-gray-600 text-left line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <div className="hidden absolute inset-0 bg-custom-green/80 justify-center items-center text-white text-xl group-hover:flex transition-opacity duration-300">
                            View Product
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="">
                      <span className="text-[red]">*</span> Product Not
                      Available
                    </div>
                  )}
                </div>

                {/* <div className="p-2 tablet:p-4 bg-gray-200 rounded-md"> */}
                  {/* <p className="text-left text-sm font-semibold tablet:text-2xl mb-2">
                    Short note of {selectedCategory}
                  </p>
                  <p className="text-sm tablet:text-lg mb-2 tablet:text-left">
                    {description}
                  </p> */}

                  {/* <p className="px-4 py-2 bg-custom-green text-left w-fit text-white rounded-md">
              Read More
            </p> */}
                {/* </div> */}
                {/* <div className="p-2 tablet:p-4 bg-gray-200 mt-4 rounded-md">
                  <p className="text-left text-lg tablet:text-2xl mb-2">
                    Why choose us for {selectedCategory} products
                  </p>
                  <ul className="text-left list-disc list-inside tablet:text-lg text-sm">
                    <li>Cost effective prices</li>
                    <li>Durable construction</li>
                    <li>Highly performed products</li>
                    <li>Great after sale services</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-2 mt-4 tablet:px-10 py-5">
            <div className="p-4 bg-[#D9D7F1] text-gray-500 rounded-md flex flex-col gap-1">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-2xl text-[#533E85]"
                  />
                </div>
                <div className="text-lg">Need Help?</div>
              </div>
              <div>Get concise assistance here</div>
            </div>
            <div className="p-4 bg-[#D9D7F1] text-gray-500 rounded-md flex flex-col gap-1">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelopesBulk}
                    className="text-2xl text-[#533E85]"
                  />
                </div>
                <div className="text-lg">Enquiry mail us?</div>
              </div>
              <div>Mail us today for Enquiries</div>
            </div>
            <div className="p-4 bg-[#D9D7F1] text-gray-500 rounded-md flex flex-col gap-1">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBloggerB}
                    className="text-2xl text-[#533E85]"
                  />
                </div>
                <div className="text-lg">Our blogs</div>
              </div>
              <div>Get our latest blogs</div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Product;
