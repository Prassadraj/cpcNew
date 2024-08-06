import React, { useContext } from "react";
import "./menuBtn.css";
import { BtnContextProvider } from "../../Context/MobileContext";

const MenuBtn = () => {
  const { isToggled, setIsToggled } = useContext(BtnContextProvider);

  return (
    <svg
      className="svgburg"
      width="45"
      height="43"
      viewBox="0 0 45 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsToggled((prev) => !prev)}
    >
      <path
        className={`path1 ${isToggled ? "cross" : ""}`}
        d="M1.5 7L27.5 33C27.5 33 30.5 36 36.5 40.5C42.5 45 48 33.5 41.5 33C35 32.5 2 33 2 33"
        stroke="black"
        strokeWidth="2"
      />
      <path
        className={`path2 ${isToggled ? "cross" : ""}`}
        d="M2 33L28 7C28 7 33.5 1 37 1C40.5 1 43 6.20692 40 7C37 7.79308 1 7 1 7"
        stroke="black"
        strokeWidth="2"
      />
      <path
        className={`mline ${isToggled ? "hide" : ""}`}
        d="M1.5 20H28.5"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default MenuBtn;
