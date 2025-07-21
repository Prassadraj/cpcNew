import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../App.css";
import "./success.css";
import { GiAchievement } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import { HiMiniRocketLaunch } from "react-icons/hi2";
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
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid gray" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2025 </strong>
              </h3>
              <p> Launched AFIAS, Dynacount 5D Pro & Dynacount 5D Elite</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "gray",
                color: "white",
                transform: "scaleX(-1)",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2024</strong>
              </h3>
              <p>Turbochem optima, SEDRATE PRO & EC 60</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid gray" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2023</strong>
              </h3>
              <p>Launched Dynacount 3D Plus</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "gray",
                color: "white",
                transform: "scaleX(-1)",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2022</strong>
              </h3>
              <p>Acquisition of POCT from Weldon (Boditech)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<GiAchievement />}
            >
              <h3 className=" text-2xl">
                <strong>2020</strong>
              </h3>
              <p>
                Indigenously Developed identi - VTM (Viral Transport Medium)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2018</strong>
              </h3>
              <p>Launched i-Flash 1800 (Gold Standard Immunoassay Analyzer)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<GrAchievement />}
            >
              <h3 className=" text-2xl">
                <strong>2018</strong>
              </h3>
              <p>
                Inked strategic investment partnership with private equity firm
                Everstone
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<GiAchievement />}
            >
              <h3 className=" text-2xl">
                <strong>2017</strong>
              </h3>
              <p>Entered into 5 Part Hematology Segment</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<GrAchievement />}
            >
              <h3 className=" text-2xl">
                <strong>2015</strong>
              </h3>
              <p>Product Innovation ATL 60 Automated Tube Labeller</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<GrAchievement />}
            >
              <h3 className=" text-2xl">
                <strong>2011</strong>
              </h3>
              <p>Manufacturing Reagents - JEEV Diagnostics</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<GrAchievement />}
            >
              <h3 className=" text-2xl">
                <strong>2008</strong>
              </h3>
              <p>First Indian Hematology Analyzer - Xcyte Plus</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2003</strong>
              </h3>
              <p>Introduced BRAHMS Sepsis Markers in INDIA</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#10b981",
                color: "white",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{
                background: "#D6FFF5",
                color: "black",
                border: "2px",
              }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>2000</strong>
              </h3>
              <p>Launched identi & Autoimmune Diagnosis from EUROIMMUN</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#eeeeee",
                color: "#10b981",
                border: "",
                borderRadius: "10px",
                padding: "50px",
              }}
              iconStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "5px solid black" }}
              icon={<HiMiniRocketLaunch />}
            >
              <h3 className=" text-2xl">
                <strong>1990</strong>
              </h3>
              <p>Launch of Stat Fax Series</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Success;
