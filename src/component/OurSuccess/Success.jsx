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
                <strong>2024 </strong>
              </h3>
              <p> Started manufacturing ESR analysers with collabaration from YHLO</p>
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
              <p>Started R&D for CLIA reagents</p>
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
                <strong>2022 </strong>
              </h3>
              <p> Entered into POCT Segment incollbarartion with Boditech</p>
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
                <strong>2021</strong>
              </h3>
              <p>In collaboration with Thermo Fisher, launched the One Lambda range of products</p>
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
                <strong>2021</strong>
              </h3>
              <p>Started manufacturing IFA slide processors for Euroimmun</p>
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
                <strong>2020</strong>
              </h3>
              <p>Indigenously developed identi – Viral Transport Medium (VTM)</p>
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
                <strong>2017</strong>
              </h3>
              <p>
                Started exporting biochemistry reagents (Awareness) to Saudi Arabia, Nigeria, Nepal, and other emerging markets
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
                <strong>2016</strong>
              </h3>
              <p>Designed and developed PlexMat 4, an automated line immunoassay processor</p>
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
                <strong>2014</strong>
              </h3>
              <p>
                Started manufacturing LIA processors for Euroimmun
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
                <strong>2011</strong>
              </h3>
              <p>Manufacturing and supply of biochemistry reagents across India with Awareness (open-system)</p>
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
                <strong>2010</strong>
              </h3>
              <p>i-Track initiated: Strengthening remote support for faster, smarter service delivery.</p>
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
                <strong>2009</strong>
              </h3>
              <p>Inaugurated Sachika, CPC’s exclusive training centre</p>
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
                <strong>2005</strong>
              </h3>
              <p>Designed and developed India’s first 3‑part haematology analyser</p>
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
              <p>Entered autoimmune diagnostics through EUROIMMUN</p>
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
              <p>Launched identi brand of biochemistry reagents</p>
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
              <p>Launched Stat Fax series </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Success;
