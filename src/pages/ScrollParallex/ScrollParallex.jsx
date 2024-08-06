import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialSlider from "../../homepages/TestimonialSlider/TestimonialSlider";
import ContactUs from "../../homepages/ContactUs/ContactUs";
import Blog from "../../homepages/Blog/Blog";

function ScrollParallax() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create ScrollTriggers for each panel to pin them in place
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    // Animate the scaling of panel2
    gsap.fromTo(
      "#panel2",
      { scale: 0, borderRadius: "50%" },
      {
        scale: 1,
        scrollTrigger: {
          trigger: "#panel2",

          start: "top bottom", // Start animation when top of panel2 hits bottom of viewport
          end: "top center", // End animation when top of panel2 hits top of viewport
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="panel h-screen flex justify-center items-center">
        {/* <TestimonialSlider /> */}
      </div>
      <div id="panel2"></div>
    </div>
  );
}

export default ScrollParallax;
