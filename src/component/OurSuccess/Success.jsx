import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../App.css";
import "./success.css";
import Footer from "../../homepages/Footer/Footer";
import Loader from "../Loader/Loader";
function Success() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
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
        <div className=" mt-4">
          <h2 className="text-maincol text-3xl font-semibold text-center">
            Milestone – Medical Laboratory Equipment Manufacturers
          </h2>
          <br />
          <br />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2022</strong>
              </h3>
              <p>Launched ichroma II & ichroma III</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2021</strong>
              </h3>
              <p>Launched Dynacount 3D & RNA Extraction kit</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2020</strong>
              </h3>
              <p>
                Indigenously Developed identi – VTM (Viral Transport Medium)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2019</strong>
              </h3>
              <p>
                Launched i-flash 1800 (advanced Chemiluminescence immunoassay
                analyser) TURBOCHEM PRIME (mid-throughput chemistry analyser)
                and VISION Pro (Automated ESR analyser)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2016</strong>
              </h3>
              <p>
                Designed and developed Plexmat 4 – Automated Line immunoassay
                processor
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2015</strong>
              </h3>
              <p>Commenced Export operations</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2014</strong>
              </h3>
              <p>Indigenously developed ATL-60 (Automated Phlebotomy system)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2011</strong>
              </h3>
              <p>
                Developed i-track – in-house remote diagnostic support system
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2010</strong>
              </h3>
              <p>
                High Performance Chemistry reagents manufacturing in India
                through Jeev Diagnostics
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2009</strong>
              </h3>
              <p>Inaugurated Sachika – Our exclusive training centre</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2005</strong>
              </h3>
              <p>
                Design & Development of 3 Part Haemotology analyser in India –
                2005
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2003</strong>
              </h3>
              <p>
                Introduced Procalcitonin (early stage sepsis Marker) to India
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>2000</strong>
              </h3>
              <p>
                Entered into Autoimmune diagnosis through EUROIMMUN Launched
                identi brand of reagents for biochemistry
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>1999</strong>
              </h3>
              <p>
                Launched a high throughput Analyser in India – Olympus AU series
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>1990</strong>
              </h3>
              <p>
                Launch of Stat Fax series – Our brand of Semi-Automated
                analysers
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              iconStyle={{ background: "black", color: "gray" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
            >
              <h3 className=" text-2xl">
                <strong>1987</strong>
              </h3>
              <p>Launch of Enzymatic chemistry reagent kits</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Success;
