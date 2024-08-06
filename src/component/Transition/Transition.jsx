import React from "react";
import { motion } from "framer-motion";
import "./transition.css";

const calc = (rowIndex, totalIndex) => {
  const blockDelay = Math.random() * 0.4;
  const rowDelay = (totalIndex - rowIndex - 1) * 0.02;
  return blockDelay + rowDelay;
};

const Transition = (Page) => {
  return () => (
    <>
      <Page />
      <div className="blocks-container transition-in">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block"
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calc(rowIndex, 5),
                }}
                initial={{ scaleY: 1 }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="blocks-container transition-out">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block"
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calc(rowIndex, 5),
                }}
                initial={{ scaleY: 0 }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;
