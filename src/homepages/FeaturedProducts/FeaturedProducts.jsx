import React, { useContext, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import image1 from "../../component/AllDatas/ProductImages/Hematology/3D PLUS/product1.webp";
import image2 from "../../component/AllDatas/ProductImages/Hematology/SedratePro/product1.png";
import image3 from "../../component/AllDatas/ProductImages/Immunology/Iflash1200/product1.png";
import image4 from "../../component/AllDatas/ProductImages/Immunology/Plexmat4/product1.webp";
import image5 from "../../component/AllDatas/ProductImages/Point of Care/ichroma™ II/product1.webp";
import image6 from "../../component/AllDatas/ProductImages/Point of Care/ichroma™ III/product1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../../component/magneticButton/Magnetic";
import { Link } from "react-router-dom";
import { SectionCategory } from "../../component/Context/SectionCategory";
import { CategoryContext } from "../../component/Context/CategoryContext";

const FeaturedProducts = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
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
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="">
      <div className="mb-2 flex h-10 items-center tablet:pl-24 flex-col tablet:gap-4 heading p-2 text-center">
        <span className=" font-semibold text-xl tablet:text-4xl uppercase  font-poppins text-custom-green">
          Featured Products
        </span>
        <p className="tablet:text-xl   font-poppins text-gray-500 ">
          Explore Our Best-in-Class Diagnostic Equipment
        </p>
      </div>
      <div className="hidden laptop:block ">
        <HorizontalScrollCarousel cards={featuredCards} />
      </div>
      {/* Add a mobile-friendly version if needed */}
      <div className="laptop:hidden px-3 mb-4">
        <div className="scrollable-container flex overflow-x-scroll space-x-4 gap-4 py-4  tablet:my-20">
          {featuredCards.map((product, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center w-44 tablet:w-60 h-fit"
            >
              <div className="h-52 tablet:h-60 flex items-center justify-center">
                <img
                  src={product.url}
                  className="w-44 object-cover tablet:w-[300px]"
                  alt=""
                />
              </div>
              <p className="text-center font-bold tablet:text-lg">
                {product.title}
              </p>
              <p className="text-center line-clamp-3 tablet:text-lg">
                {product.content}
              </p>
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
    <section ref={targetRef} className="relative  h-[70vh] tablet:h-[300vh]">
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
      className={`laptop:mt-10  largeLaptop:mt-0 font-poppins relative largeLaptop:h-[500px] h-[250px] w-[150px] tablet:h-[400px] tablet:w-[350px] largeLaptop:w-[450px] overflow-hidden  rounded-2xl border-1 border-custom-green 
     
      `}
    >
      <div
        className="flex justify-center items-center w-full tablet:mt-8 h-32 largeLaptop:h-40
      largeLaptop:mt-14"
      >
        <img
          loading="lazy"
          className={`tablet:w-[200px] largeLaptop:w-[300px] w-[100px]  ${
            card.title == "I chroma™ III" ? "scale-75" : ""
          }  ${card.title == "Dynacount 3D Plus" ? "scale-75" : ""}`}
          src={card.url}
          alt=""
        />
      </div>
      <div className="absolute tablet:top-52 largeLaptop:top-64 tablet:left-10 tablet:right-10 p-0">
        <div className="flex justify-center tablet:justify-start">
          <p className="tablet:text-xl largeLaptop:text-2xl font-poppins font-bold mb-2">
            {card.title}
          </p>
        </div>
        <p className="text-xs largeLaptop:text-xl tablet:text-base line-clamp-3 px-1">
          {card.content}
        </p>
      </div>
      <div className="absolute laptop:bottom-4 largeLaptop:bottom-8 tablet:bottom-6 w-full">
        <div className="flex justify-center items-center">
          <Magnetic>
            <button
              onClick={() => setSelectedCategory(card.category)}
              className="text-xs laptop:text-base largeLaptop:text-xl w-fit tablet:w-72 border-1
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
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);
  return (
    <div className="group relative  h-[400px] w-[100px]  tablet:w-[200px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* <Magnetic>  */}
        <div className="mr-10 text-xs largeLaptop:text-2xl text-nowrap tablet:text-xl font-black text-custom-green p-2 rounded-xl cursor-pointer">
          <Link
            to="/product/Biochemistry/top"
            onClick={() => {
              setSelectSectionCategory("top");
              setSelectedCategory("Biochemistry");
            }}
          >
            <span className="hidden tablet:block">All Products</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
        {/* </Magnetic> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;

const featuredCards = [
  {
    url: image1,
    title: "DYNACOUNT 3D Plus",
    category: "Hematology",
    content:
      "Enhanced version of the 3D model, providing more detailed and faster blood cell analysis with advanced features.",
    id: 2,
    animation: "1",
  },
  {
    url: image2,
    title: "SEDRATE PRO",
    category: "Hematology",
    content:
      "An advanced ESR analyzer for accurate and rapid erythrocyte sedimentation rate (ESR) testing",
    id: 5,
    animation: "2",
  },
  {
    url: image3,
    title: "iFlash 1200",
    category: "Immunology",
    content:
      "The iFlash 1200 is a state-of-the-art Chemiluminescence Immunoassay (CLIA) analyzer that provides high sensitivity and specificity in immunoassay testing. This fully automated system simplifies complex diagnostic procedures, offering a user-friendly interface and robust performance to meet the demands of modern laboratories.",
    id: 4,
    animation: "3",
  },
  {
    url: image4,
    title: "PlexMAT 4",
    category: "Immunology",
    content:
      "The PlexMAT 4 is an advanced immunoblot analyzer designed for high throughput and reliable results in various immunological assays.",
    id: 1,
    animation: "4",
  },
  {
    url: image5,
    title: "ichroma™ II",
    category: "Point%20of%20Care",
    content:
      "The ichroma™ II is a versatile and reliable POCT hormone analyzer, designed to deliver fast and precise measurements of hormone levels, facilitating effective clinical decision-making..",
    id: 1,
    animation: "5",
  },
  {
    url: image6,
    title: "ichroma™ III",
    category: "Point%20of%20Care",
    content:
      "The ichroma™ III is a high-performance point-of-care testing (POCT) hormone analyzer, providing accurate and rapid results for various hormone assays, essential for timely diagnosis and treatment.",
    id: 2,
    animation: "6",
  },
];
