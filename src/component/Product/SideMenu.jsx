import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { CategoryContext } from "../Context/CategoryContext";
import { ProductDataContext } from "../Context/ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SideMenu({ setOpen, open, toggleDropdown, openDropdown }) {
  const { setSelectedCategory } = useContext(CategoryContext);
  const { data } = useContext(ProductDataContext);

  return (
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
              {openDropdown === index ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {openDropdown === index && (
              <div className="border-t border-gray-300">
                {dropdown.items.map((item) => (
                  <Link
                    to={`/productinfo/${dropdown.category}/${item.id}`}
                    key={item.id}
                    className="no-underline"
                  >
                    <p className="font-mont px-4 py-2 capitalize text-sm  hover:bg-custom-green hover:text-light-green cursor-pointer">
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
  );
}

export default SideMenu;
