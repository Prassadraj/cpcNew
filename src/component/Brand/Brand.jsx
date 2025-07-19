import React, { useEffect, useState } from "react";
import sachika from "../../assets/image/sachika-timeline.jpg";
import frame from "../../assets/image/Frame-md.png";
import jeev from "../../assets/image/jeev.jpg";

import cpc from "../../assets/image/cpc-manufacturing.jpg";
import itracklogo from "../../assets/image/i-track-logo.png";
import itrack from "../../assets/image/i-track-parallex.png";
import sachika1 from "../../../src/images/sachika-2.jpg";
import sachika2 from "../../../src/images/sachika-3.jpg";
import sachika3 from "../../../src/images/sachika-4.jpg";
import jeev1 from "../../../src/images/jeev-1.jpg";
import jeev2 from "../../../src/images/jeev-2.jpg";
import jeev3 from "../../../src/images/jeev-3.jpg";
import PlexMAT from "../AllDatas/ProductImages/Immunology/Plexmat4/PlexMAT4.webp";

import itrack1 from "../../../src/images/itrack1.jpg";
import itracknew from "../../assets/i-track.png";
import cpcmanufacturingunit from "../../../src/assets/image/cpcmanufacturingunit.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import { SiTicktick } from "react-icons/si";

import Footer from "../../homepages/Footer/Footer";
import Loader from "../Loader/Loader";

const content = {
  heading1: "Everlife CPC’s Groundbreaking Initiative",
  inner1: (
    <>
      <p>
        Sachika, a dedicated training facility by Everlife CPC Diagnostics, is a
        trailblazing initiative aimed at empowering healthcare professionals
        through hands-on training and advanced knowledge. It is the
        <b> first-of-its-kind </b> platform in the industry, designed to bridge
        the gap between theoretical knowledge and practical applications. With a
        focus on <b> immunofluorescence, automation,</b> and other critical
        diagnostic techniques, Sachika plays a pivotal role in elevating the
        standards of laboratory practices across South Asia. By offering
        world-class infrastructure and training programs, Sachika ensures that
        professionals are well-equipped to meet the growing demands of modern
        healthcare.
      </p>
    </>
  ),

  heading2: "Programmes Covered at Sachika",
  inner2: (
    <>
      <ul>
        <li>
          <strong>Basic Level Immunofluorescence:</strong> This foundational
          course provides participants with essential knowledge and skills in
          immunofluorescence techniques, preparing them for diagnostic accuracy
          and efficiency.
        </li>
        <li>
          <strong>Advanced Immunofluorescence & Immunology Training:</strong>{" "}
          For professionals looking to specialize, this advanced course covers
          cutting-edge immunofluorescence techniques and in-depth training in
          immunology, allowing participants to handle complex diagnostic
          challenges.
        </li>
        <li>
          <strong>Clinical Lab Practices & Automation:</strong> Focusing on
          clinical automation and laboratory best practices, this program equips
          professionals with the expertise to optimize workflow and improve
          operational efficiency in labs.
        </li>
      </ul>
    </>
  ),

  heading3: "Exclusive programs",
  inner3: (
    <>
      <p>
        At Sachika, the exclusive programs stand out for their{" "}
        <b>high-impact training</b> and <b>widespread reach.</b> In the past
        year alone,<b>700+ doctors </b> have undergone specialized training in
        <b> Immunofluorescence,</b> making Sachika a go-to center for hands-on
        learning. Additionally, <b>over 55</b> webinars were conducted, reaching
        more than 2,500+ participants in areas like <b>Autoimmunity</b> and
        <b> COVID-19 </b>management. These exclusive programs ensure that
        healthcare professionals across the country are well-versed in both
        traditional and modern diagnostic techniques, empowering them to deliver
        better patient care.
      </p>
    </>
  ),
};

const jeevcon = {
  heading1: "Reagent Manufacturing Facility",
  content1: (
    <>
      Reagent manufacturing facility, a wholly owned subsidiary of Everlife CPC
      Diagnostics Pvt. Ltd., is dedicated to manufacturing high-quality in-vitro
      clinical chemistry reagents. Operating since <b>2011</b> and headquartered
      in Chennai, India, Reagent manufacturing facility caters to clinical
      laboratories, hospitals, and diagnostic centers across the region. With a
      reputation for producing reliable reagents in{" "}
      <b>
        Biochemistry, Immunoturbidimetry, Hematology, and Molecular Diagnostics,
      </b>{" "}
      Reagent manufacturing facility products ensure accuracy and quality in
      critical diagnostic applications.
    </>
  ),

  heading2: "Fully Automated Instruments",
  content2: (
    <>
      Reagent manufacturing facility produces a wide range of{" "}
      <b>IVD reagents </b>compatible with both <b>semi-automated</b> and{" "}
      <b>fully automated instruments.</b> These reagents support advanced
      systems like <b> Turbochem100, ChemWell,</b> and
      <b> Biolis 50i.</b> With fully automated capabilities, Reagent
      manufacturing facility ensures that laboratories can achieve
      high-throughput, efficiency, and precision, seamlessly integrating into
      diagnostic workflows for accurate, consistent results.
    </>
  ),

  heading3: "Stringent Quality Control",
  content3: (
    <>
      <p>
        Reagent manufacturing facility is committed to upholding stringent
        quality standards across its entire manufacturing process. Each reagent
        undergoes rigorous testing to meet <b> international quality norms,</b>{" "}
        ensuring reliable and high-performance products. By adhering to strict
        production protocols, Reagent manufacturing facility guarantees that its
        reagents offer unparalleled consistency and accuracy, empowering
        healthcare providers to deliver better patient outcomes.
      </p>
    </>
  ),
};

const cpccon = {
  heading1: "Field of indigenous manufacturing",
  content1:
    "Everlife CPC Diagnostics takes pride in its commitment to indigenous manufacturing, bridging the gap between instruments and reagents. By embracing backward integration, CPC ensures empowerment, reliability, and innovation in the field of local manufacturing. This dedication enables CPC to pioneer solutions that meet the specific needs of healthcare diagnostics, fostering trust and quality in every product..",

  heading2:
    " Instruments Manufacturing Facility – Manufacturing Arm of Diagnostic Instruments",
  content2:
    "Everlife Instruments manufacturing facility is 100% indigenous, certified with CE and ISO standards. As the manufacturing arm of diagnostic instruments, CPC is known for its stringent quality control measures, ensuring every product meets the highest industry standards. The unit is the first to design and manufacture the revolutionary Hematology Analyzer Xcyte, a testament to CPC's leadership in the field of diagnostics.",

  heading3: " Popular Models of CPC",
  content3: (
    <>
      <ul>
        <li>
          Everlife CPC's dedication to innovation is reflected in its popular
          product models, including:
        </li>
        <li>
          <strong>PlexMAT 4/8/16:</strong> An Automated Line Immuno Assay
          processor designed for flexibility and precision.
        </li>
        <li>
          <strong>FluoroMAT 50:</strong> A cutting-edge Automated Indirect
          Immunofluorescence slide processor, ensuring accuracy and reliability
          in diagnostic processes.
        </li>
      </ul>
    </>
  ),
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

function Brand() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="">
          <h2 className="text-center text-maincol text-4xl font-semibold mt-10">
            Our Brands – Everlife CPC Diagnostics Products
          </h2>
          <h3
            className="text-maincol text-4xl font-semibold text-center mt-10"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            <u className="underline-offset-8">Sachika</u>
          </h3>
          <div className="grid grid-cols-1 tablet:grid-cols-2 mt-10  p-10 gap-5">
            {/* content 1 */}

            <div
              className="text-justify"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <h4 className="text-maincol text-2xl mt-10 font-semibold">
                {content.heading1}
              </h4>
              <div className="flex gap-4">
                <SiTicktick size={170} color="#02a884" className="" />
                <p className="mt-5 leading-7 text-fontextra">
                  {content.inner1}
                </p>
              </div>
            </div>
            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <img
                src={sachika1}
                alt=""
                className="w-full mt-5 rounded-lg shadow-lg "
              />
            </div>

            {/* content 2 */}
            <div
              className="flex justify-center items-center mt-20"
              data-aos="flip-right"
              data-aos-easing="ease-in-out"
            >
              <img
                src={sachika2}
                alt=""
                className="w-full h-96 mt-5 rounded-lg shadow-lg "
              />
            </div>

            <div
              className="text-justify"
              data-aos="flip-right"
              data-aos-easing="ease-in-out"
            >
              <h4 className="text-maincol text-2xl mt-40 font-semibold">
                {content.heading2}
              </h4>
              <div className="flex gap-4">
                <SiTicktick size={80} color="#02a884" className="mt-4" />
                <p className=" mt-4 leading-8 text-fontextra">
                  {content.inner2}
                </p>
              </div>
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

              <div className="flex gap-4">
                <SiTicktick size={150} color="#02a884" className="" />
                <p className="mt-3 leading-7 text-fontextra">
                  {content.inner3}
                </p>
              </div>
            </div>

            <div
              className="flex justify-center items-center mt-32"
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
            >
              <img
                src={sachika3}
                alt=""
                className="w-full h-96 rounded-lg shadow-lg "
              />
            </div>
          </div>

          {/* jeev diagonositcs */}
          <h3
            className="text-maincol text-4xl font-semibold mt-10 text-center"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
          >
            <u className="underline-offset-8 capitalize">
              Reagent manufacturing facility
            </u>
          </h3>
          <div className="grid grid-cols-1 tablet:grid-cols-2 p-10 gap-5">
            {/* content 1 */}
            <div
              className="text-justify"
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
            >
              <h4 className="text-maincol text-2xl mt-28 font-semibold">
                {jeevcon.heading1}
              </h4>
              <div className="flex gap-4">
                <SiTicktick size={140} color="#02a884" className="" />
                <p className="mt-3 leading-7 text-fontextra">
                  {jeevcon.content1}
                </p>
              </div>
            </div>

            <div
              className="flex justify-center mt-20"
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
            >
              <img
                src={jeev1}
                alt=""
                className="w-full rounded-lg shadow-lg "
              />
            </div>
            {/* content 2 */}
            <div
              className="flex justify-center mt-20 "
              data-aos="flip-right"
              data-aos-easing="ease-in-out"
            >
              <img
                src={jeev2}
                alt=""
                className="w-full rounded-lg shadow-lg "
              />
            </div>

            <div
              className="text-justify"
              data-aos="flip-right"
              data-aos-easing="ease-in-out"
            >
              <h4 className="text-maincol text-2xl mt-28 font-semibold">
                {jeevcon.heading2}
              </h4>
              <div className="flex gap-4">
                <SiTicktick size={120} color="#02a884" className="" />
                <p className="mt-3 leading-7 text-fontextra">
                  {jeevcon.content2}
                </p>
              </div>
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
              <div className="flex gap-4">
                <SiTicktick size={120} color="#02a884" className="mt-6" />
                <p className="mt-4 leading-7 text-fontextra">
                  {jeevcon.content3}
                </p>
              </div>
            </div>

            <div
              className="flex justify-center mt-20"
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
            >
              <img
                src={jeev3}
                alt=""
                className="w-full rounded-lg shadow-lg "
              />
            </div>
          </div>

          <div className=" p-4">
            <h3
              className="text-maincol text-4xl font-semibold mt-10 text-center"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-out"
            >
              <u className="underline-offset-8 capitalize">
                Instruments manufacturing facility
              </u>
            </h3>
            <div className="grid grid-cols-1 tablet:grid-cols-2 p-10 gap-5  ">
              {/* content 1 */}
              <div
                className=""
                data-aos="flip-left"
                data-aos-easing="ease-in-out"
              >
                <h4 className="text-maincol text-2xl mt-28 font-semibold">
                  {cpccon.heading1}
                </h4>

                <div className="flex gap-4">
                  <SiTicktick size={105} color="#02a884" className="" />
                  <p className="mt-3 leading-7 text-fontextra">
                    {cpccon.content1}
                  </p>
                </div>
              </div>

              <div
                className="flex justify-center mt-20"
                data-aos="flip-left"
                data-aos-easing="ease-in-out"
              >
                <img
                  src={cpc}
                  alt=""
                  className="w-full rounded-lg shadow-lg "
                />
              </div>
              {/* content 2 */}
              <div
                className="flex justify-center mt-20"
                data-aos="flip-right"
                data-aos-easing="ease-in-out"
              >
                <img
                  src={cpcmanufacturingunit}
                  alt=""
                  className="w-full rounded-lg shadow-lg "
                />
              </div>

              <div
                className=""
                data-aos="flip-right"
                data-aos-easing="ease-in-out"
              >
                <h4 className="text-maincol text-2xl mt-28 font-semibold">
                  {cpccon.heading2}
                </h4>
                <div className="flex gap-4">
                  <SiTicktick size={115} color="#02a884" className="mt-6" />
                  <p className="mt-4 leading-7 text-fontextra">
                    {cpccon.content2}
                  </p>
                </div>
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
                <div className="flex gap-4">
                  <SiTicktick size={47} color="#02a884" className="mt-6" />{" "}
                  <p className="mt-4 leading-7 text-fontextra">
                    {cpccon.content3}
                  </p>
                </div>
              </div>

              <div
                className="flex justify-center mt-0"
                data-aos="flip-left"
                data-aos-easing="ease-in-out"
              >
                <img
                  src={PlexMAT}
                  alt=""
                  className="w-full h-[350px] object-contain mt-10 rounded-lg bg-transparent"
                />
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
            <div className="grid grid-cols-1 tablet:grid-cols-2 p-10 gap-5 ">
              {/* content 1 */}
              <div
                className="text-justify"
                data-aos="flip-left"
                data-aos-easing="ease-in-out"
              >
                <h4 className="text-maincol text-2xl mt-28 font-semibold">
                  {itrackcon.heading1}
                </h4>
                <div className="flex gap-4">
                  <SiTicktick size={70} color="#02a884" className="" />{" "}
                  <p className="mt-4 leading-7 text-fontextra">
                    {itrackcon.content1}
                  </p>
                </div>
              </div>

              <div
                className="flex justify-center mt-20"
                data-aos="flip-left"
                data-aos-easing="ease-in-out"
              >
                <img src={itracknew} alt="" className="w-full rounded-lg  " />
              </div>
              {/* content 2 */}
              <div
                className="flex justify-center mt-20"
                data-aos="flip-right"
                data-aos-easing="ease-in-out"
              >
                <img
                  src={itrack1}
                  alt=""
                  className="w-full rounded-lg shadow-lg "
                />
              </div>

              <div
                className="text-justify"
                data-aos="flip-right"
                data-aos-easing="ease-in-out"
              >
                <h4 className="text-maincol text-2xl mt-28 font-semibold">
                  {itrackcon.heading2}
                </h4>
                <div className="flex gap-4">
                  <SiTicktick size={20} color="#02a884" className="mt-6" />
                  <p className="mt-4 leading-7 text-fontextra">
                    {itrackcon.content2}
                  </p>
                </div>
                <div className="flex gap-4">
                  <SiTicktick size={20} color="#02a884" className="mt-6" />
                  <p className="mt-4 leading-7 text-fontextra">
                    {itrackcon.content3}
                  </p>
                </div>
                <div className="flex gap-4">
                  <SiTicktick size={20} color="#02a884" className="mt-6" />
                  <p className="mt-4 leading-7 text-fontextra">
                    {itrackcon.content4}
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Brand;
