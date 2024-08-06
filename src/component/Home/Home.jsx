import React, { useEffect } from "react";
import Transition from "../Transition/Transition";
import "./home.css";
import ZoomEffect from "../ZoomEffect/ZoomEffect";
import Section2 from "../../homepages/Section2/Section2";
import Section3 from "../../homepages/Section3/Section3";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import FeaturedProducts from "../../homepages/FeaturedProducts/FeaturedProducts";
import TestimonialSlider from "../../homepages/TestimonialSlider/TestimonialSlider";
import Footer from "../../homepages/Footer/Footer";
import Blog from "../../homepages/Blog/Blog";
import ContactUs from "../../homepages/ContactUs/ContactUs";
import Organisation from "../../homepages/Organisation/Organisation";
import ProductCategaries from "../../homepages/ProductCategaries/ProductCategaries";

import Section1 from "../../homepages/Section1/Section1";
import New from "../../homepages/Organisation/New";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-poppins ">
      <Section1 />
      <Section2 />
      <Section3 />
      <ProductCategaries />
      {/* <Organisation /> */}
      <New />
      <TestimonialSlider />
      <FeaturedProducts />
      <Blog />
      <ContactUs />
      <ZoomEffect />
      <Footer />
    </div>
  );
}

export default Home;
