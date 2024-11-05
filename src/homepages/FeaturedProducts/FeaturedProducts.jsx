import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import image1 from "../../component/AllDatas/ProductImages/Biochemistry/ichemManga/product1.jpg";
import image2 from "../../component/AllDatas/ProductImages/Hematology/DYNACOUNT 5D/product1.png";
import image3 from "../../images/featured/product3.png";
import image4 from "../../component/AllDatas/ProductImages/Point of Care/ichroma™ III/product1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../../component/magneticButton/Magnetic";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".products",
      {
        opacity: 0,
        scale: 0.8,
        background: "black",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        background: "white",
        scrollTrigger: ".products",
        stagger: {
          amount: 1,
        },
      }
    );
  }, []);

  return (
    <div className="laptop:mb-20">
      <div className="mb-2 flex h-10 items-center tablet:pl-24 flex-col tablet:gap-4 heading p-2 text-center">
        <span className=" font-semibold text-xl tablet:text-4xl uppercase  font-poppins text-custom-green">
          Featured Products
        </span>
        <p className="tablet:text-xl   font-poppins text-gray-500 ">
          Explore Our Best-in-Class Diagnostic Equipment
        </p>
      </div>
      <div className="hidden tablet:block ">
        <HorizontalScrollCarousel cards={featuredCards} />
      </div>
      {/* Add a mobile-friendly version if needed */}
      <div className="tablet:hidden px-3 mb-4">
        <div className="scrollable-container flex overflow-x-scroll space-x-4 py-4">
          {featuredCards.map((product, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center w-32 h-fit"
            >
              <div className="h-44 flex items-center justify-center">
                <img src={product.url} className="w-32 object-cover" alt="" />
              </div>
              <p className="text-center font-bold">{product.title}</p>
              <p className="text-center line-clamp-3">{product.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust these values based on your needs for mobile responsiveness
  const x = useTransform(scrollYProgress, [0, 1.6], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[70vh] tablet:h-[300vh] ">
      <div className="sticky top-0 flex tablet:h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 tablet:gap-8">
          {cards.slice(0, 7).map((card) => (
            <Card card={card} key={card.id} />
          ))}
          <AllProductsCard />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      className={`laptop:mt-10 font-poppins relative h-[250px] w-[150px] tablet:h-[400px] tablet:w-[350px] overflow-hidden  rounded-2xl border-1 border-custom-green ${
        card.id > 1 ? "products" : ""
      }`}
    >
      <div className="flex justify-center items-center w-full tablet:mt-10 h-32">
        <img className="tablet:w-[200px] w-[100px]" src={card.url} alt="" />
      </div>
      <div className="absolute tablet:top-56 tablet:left-10 tablet:right-10 p-0">
        <div className="flex justify-center tablet:justify-start">
          <p className="tablet:text-xl font-poppins font-bold ">{card.title}</p>
        </div>
        <p className="text-xs tablet:text-base line-clamp-3 px-1">
          {card.content}
        </p>
      </div>
      <div className="absolute laptop:bottom-4 tablet:bottom-6 w-full">
        <div className="flex justify-center items-center">
          <Magnetic>
            <button
              className="text-xs laptop:text-base w-fit tablet:w-72 border-1
             p-0.5 tablet:px-3 tablet:py-2 rounded-lg text-custom-green border-custom-green"
            >
              <Link to={`/productinfo/${card.category}/${card.id}`}>
                View Product
              </Link>
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

const AllProductsCard = () => {
  return (
    <div className="group relative h-[400px] w-[100px]  tablet:w-[200px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Magnetic>
          <div className="mr-10 text-xs tablet:text-xl font-black text-custom-green p-2 rounded-xl cursor-pointer">
            <Link to="/product">
              <span className="hidden tablet:block">All Products</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default FeaturedProducts;

const featuredCards = [
  {
    url: image1,
    title: "Turbochem Magna",
    category: "Biochemistry",
    content:
      " Experience unparalleled precision in clinical chemistry with Turbochem Magna, designed for accurate and efficient biochemical analysis. ",
    id: 1,
  },
  {
    url: image2,
    title: " Dynacount 5D",
    category: "Biochemistry",
    content:
      "With advanced hematology analysis at your fingertips, the Dynacount 5D offers comprehensive blood profiling with unmatched reliability.",
    id: 2,
  },
  {
    url: image3,
    title: " Dynacount 3D Plus",
    category: "Biochemistry",
    content:
      " The Dynacount 3D Plus delivers precise 3D blood analysis, providing crucial insights for accurate diagnosis and treatment planning.",
    id: 3,
  },
  {
    url: image4,
    title: "Ichroma 3",
    category: "Biochemistry",
    content:
      "Fast and reliable immunoassay testing with Ichroma 3 is ideal for rapid diagnostics and point-of-care applications.",
    id: 4,
  },
];
