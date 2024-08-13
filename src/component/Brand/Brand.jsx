import React, { useEffect } from "react";
import sachika from "../../images/itrack/itrack1.png";
import frame from "../../images/itrack/itrack3.png";
import jeev from "../../images/itrack/itrack4.png";
import cpc from "../../images/itrack/itrack3.png";
import itracklogo from "../../images/itrack/itrack3.png";
import itrack from "../../images/itrack/itrack3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../homepages/Footer/Footer";

const content = {
  heading1: "First-of-its-kind initiative by ECPC",
  inner1:
    "Sachika is a first-of-its-kind initiative by ECPC in the medical diagnostics industry to bridge the ‘skill-divide’ for trained manpower. It is an initiative that is meant to empower clinicians through knowledge management. With rigorous testing and post-training certification, it provides clinicians an opportunity to learn and upgrade their skills in modern techniques of the biosciences.",

  heading2: "Programmes covered at Sachika",
  inner2:
    "Hematology, Clinical Biochemistry, Immunodiagnostics, Bio Medical Instrumentation and quality management.",

  heading3: "Exclusive programs",
  inner3:
    "Sachika also conducts first of its kind, exclusive programs on Entry Level Automation in Clinical Chemistry, Autoimmune diagnostics based on Immunofluorescence, Pattern Identification, Recombinant Immunoblot and ELISA techniques.",
};

const jeevcon = {
  heading1: "Jeev Diagnostics Pvt. Ltd",
  content1:
    "Jeev Diagnostics is a wholly owned subsidiary of Everlife CPC Diagnostics Pvt. Ltd., Chennai, India, manufactures high quality state-of-the-art in-vitro clinical chemistry reagents to cater to clinical laboratories, hospitals and diagnostic centres.",

  heading2: "Fully Automated Instruments",
  content2:
    "The clinical chemistry range of world class IVD reagents manufactured by JEEV Diagnostics includes regular packs for semi-automated instruments, as also system packs for fully automated instruments such as Turbochem100, ChemWell and Biolis 50i.",

  heading3: "Stringent Quality Control",
  content3: "Production norms are the hall mark of JEEV Diagnostics",
};

const cpccon = {
  heading1: "Field of indigenous manufacturing",
  content1:
    "CPC’s move to bestride the two worlds of instruments and reagents, and its commitment to backward integration, will be a catalyst to conferring higher levels of empowerment, reliability and innovation in the field of indigenous manufacturing.",

  heading2: "Popular Models of CPC include:",
  content2: "PlexMat 4/ 8/16 – Automated Line Immuno Assay processor",

  heading3:
    "CPC manufacturing unit – Manufacturing arm of diagnostic instruments.",
  content3: "100% indigenous",
};

const itrackcon = {
  heading1: "About i-track",
  content1:
    "In yet another pioneering venture ECPC created i-track, our home grown design for remote maintenance of instruments. Using innovative technology i-track connects to users across India, Sri Lanka and Nepal offering online solutions to a host of customer needs in real time. Combining analytics with effective preventive and predictive maintenance, ECPC is rapidly decreasing maintenance requirements by increasing mean-time-between-failures (MTBF). Your instrument is at its most productive when you have i-track backing you!",

  heading2: "Power of Remote Connectivity",
  content2: "Real time Fault Detection",
  content3: "Online remote connectivity ensuring immediate service support",
  content4: "Dedicated technical team supporting with 7 language",
};

function OurMilestones() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <h2 className="text-center text-maincol text-4xl font-semibold mt-2">
        Our Brands – Everlife CPC Diagnostics Products
      </h2>
      <h3
        className="text-maincol text-4xl font-semibold text-center mt-10"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <u className="underline-offset-8">Sachika</u>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 bg-gray-100 p-10 gap-5">
        {/* content 1 */}

        <div
          className="text-justify"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
        >
          <h4 className="text-maincol text-2xl mt-10 font-semibold">
            {content.heading1}
          </h4>
          <p className="mt-5 leading-7">{content.inner1}</p>
        </div>
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
        >
          <img src={sachika} alt="" className="w-10/12 rounded-lg shadow-lg " />
        </div>

        {/* content 2 */}
        <div
          className="flex justify-center mt-20"
          data-aos="flip-right"
          data-aos-easing="ease-in-out"
        >
          <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
        </div>

        <div
          className="text-justify"
          data-aos="flip-right"
          data-aos-easing="ease-in-out"
        >
          <h4 className="text-maincol text-2xl mt-40 font-semibold">
            {content.heading2}
          </h4>
          <p className="mt-5 leading-7">{content.inner2}</p>
        </div>

        {/* content 3 */}
        <div
          className="text-justify"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
        >
          <h4 className="text-maincol text-2xl mt-40 font-semibold">
            {content.heading3}
          </h4>
          <p className="mt-5 leading-7">{content.inner3}</p>
        </div>

        <div
          className="flex justify-center mt-20"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
        >
          <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
        </div>
      </div>

      {/* jeev diagonositcs */}
      <h3
        className="text-maincol text-4xl font-semibold mt-10 text-center"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
      >
        <u className="underline-offset-8">Jeev Diagnostics</u>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5">
        {/* content 1 */}
        <div
          className="text-justify"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
        >
          <h4 className="text-maincol text-2xl mt-28 font-semibold">
            {jeevcon.heading1}
          </h4>
          <p className="mt-5 leading-7">{jeevcon.content1}</p>
        </div>

        <div
          className="flex justify-center mt-20"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
        >
          <img src={jeev} alt="" className="w-10/12 rounded-lg shadow-lg " />
        </div>
        {/* content 2 */}
        <div
          className="flex justify-center mt-20 "
          data-aos="flip-right"
          data-aos-easing="ease-in-out"
        >
          <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
        </div>

        <div
          className="text-justify"
          data-aos="flip-right"
          data-aos-easing="ease-in-out"
        >
          <h4 className="text-maincol text-2xl mt-28 font-semibold">
            {jeevcon.heading2}
          </h4>
          <p className="mt-5 leading-7">{jeevcon.content2}</p>
        </div>

        {/* content 3 */}

        <div
          className="text-justify"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
        >
          <h4 className="text-maincol text-2xl mt-28 font-semibold">
            {jeevcon.heading3}
          </h4>
          <p className="mt-5 leading-7">{jeevcon.content3}</p>
        </div>

        <div
          className="flex justify-center mt-20"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
        >
          <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
        </div>
      </div>

      <div className="bg-gray-200 p-4">
        <h3
          className="text-maincol text-4xl font-semibold mt-10 text-center"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
        >
          <u className="underline-offset-8">CPC manufacturing unit</u>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5 bg-gray-200 ">
          {/* content 1 */}
          <div
            className="text-justify"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <h4 className="text-maincol text-2xl mt-28 font-semibold">
              {cpccon.heading1}
            </h4>
            <p className="mt-5 leading-7">{cpccon.content1}</p>
          </div>

          <div
            className="flex justify-center mt-20"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <img src={cpc} alt="" className="w-10/12 rounded-lg shadow-lg " />
          </div>
          {/* content 2 */}
          <div
            className="flex justify-center mt-20"
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
          >
            <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
          </div>

          <div
            className="text-justify"
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
          >
            <h4 className="text-maincol text-2xl mt-28 font-semibold">
              {cpccon.heading2}
            </h4>
            <p className="mt-5 leading-7">
              {cpccon.content2}
              <br />
              <p className="mt-4">
                FluoroMAT 50 – AutomatedIn direct Immunofluorescence slide
                processor
              </p>
            </p>
          </div>

          {/* content 3 */}

          <div
            className="text-justify"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <h4 className="text-maincol text-2xl mt-28 font-semibold">
              {cpccon.heading3}
            </h4>
            <p className="mt-5 leading-7">{cpccon.content3}</p>
            <p className="mt-5 leading-7">CE and ISO certified</p>
            <p className="mt-5 leading-7">
              CPC – First to roll out indigenously designed and manufactured
              Hematology Analyzer Xcyte.
            </p>
            <p className="mt-5 leading-7">Stringent Quality Control</p>
          </div>

          <div
            className="flex justify-center mt-20"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
        >
          <img src={itracklogo} alt="" className="w-44 " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5 ">
          {/* content 1 */}
          <div
            className="text-justify"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <h4 className="text-maincol text-2xl mt-28 font-semibold">
              {itrackcon.heading1}
            </h4>
            <p className="mt-5 leading-7">{itrackcon.content1}</p>
          </div>

          <div
            className="flex justify-center mt-20"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <img
              src={itrack}
              alt=""
              className="w-10/12 rounded-lg shadow-lg "
            />
          </div>
          {/* content 2 */}
          <div
            className="flex justify-center mt-20"
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
          >
            <img src={frame} alt="" className="w-10/12 rounded-lg shadow-lg " />
          </div>

          <div
            className="text-justify"
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
          >
            <h4 className="text-maincol text-2xl mt-28 font-semibold">
              {itrackcon.heading2}
            </h4>
            <p className="mt-5 leading-7">{itrackcon.content2}</p>
            <p className="mt-5 leading-7">{itrackcon.content3}</p>
            <p className="mt-5 leading-7">{itrackcon.content4}</p>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurMilestones;
