import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { CategoryContext } from "../Context/CategoryContext";
import { ProductDataContext } from "../Context/ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SectionCategory } from "../Context/SectionCategory";

function SideMenu({ setOpen, open, toggleDropdown, openDropdown }) {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { data } = useContext(ProductDataContext);
  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);
  const navigate = useNavigate();

  const handleNavigation = (category, section) => {
    const formattedSection = encodeURIComponent(
      section.split(" ").join("").toLowerCase()
    );
    setSelectSectionCategory(formattedSection);
    navigate(`/product/${category.split(" ").join("")}/${formattedSection}`);
  };

  const handleToggleDropdown = (index) => {
    toggleDropdown(openDropdown === index ? null : index); // Toggle dropdown for the selected index
  };

  return (
    <div
      className={`sidebar tablet:w-[25vw] bg-white border rounded-md shadow-md p-2x tablet:py-2 tablet:px-4 tablet:sticky top-16 tablet:top-24 tablet:h-fit largeLaptop:top-32 laptop:h-[80vh] h-[80vh] largeLaptop:h-[50vh] overflow-y-auto z-10 ${
        open
          ? "fixed top-16 inset-0 w-[80%] h-full overflow-y-auto z-20"
          : "hidden sm:block"
      }`}
    >
      {/* <FontAwesomeIcon icon={faXmark} /> */}
      <p
        className="text-4xl font-thin ml-2 mt-4 sm:hidden"
        onClick={() => setOpen(false)}
      >
        X
      </p>

      <div className="w-full mx-auto">
        {data.map((dropdown, index) => (
          <div key={dropdown.category} className="rounded mb-2 list-group-item">
            <div
              className="flex justify-between  rounded-md  items-center px-1 tablet:px-2 py-1.5  w-full cursor-pointer"
              onClick={() => {
                handleToggleDropdown(index); // Toggle dropdown on click
                setSelectedCategory(dropdown.category);
                setSelectSectionCategory("all");
                // navigate(
                //   `/product/${dropdown.category
                //     .split(" ")
                //     .join("")}/${selecteSectionCategory}`
                // );
              }}
            >
              <p className="tablet:text-sm  laptop:text-sm largeLaptop:text-xl font-poppins text-left font-medium">
                {dropdown.category}
              </p>
              {openDropdown === index ? <FaChevronDown /> : <FaChevronRight />}
            </div>

            {openDropdown === index && (
              <div className="border-t border-gray-300">
                {dropdown.subsection && dropdown.subsection.length > 0 ? (
                  dropdown.subsection.map((item, subIndex) => (
                    <div
                      onClick={() => handleNavigation(dropdown.category, item)}
                      key={subIndex}
                      className="no-underline"
                    >
                      <p
                        className="text-gray-800 px-4 py-2 capitalize tablet:text-base laptop:text-sm hover:bg-custom-green hover:text-light-green cursor-pointer font-poppins
                      largeLaptop:text-lg"
                      >
                        {item}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="no-underline">
                    <p className="text-gray-800 px-4 text-center py-2 text-sm cursor-default font-poppins">
                      -
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
