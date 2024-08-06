import React, { useEffect } from "react";
import "./Brand.css"; // Import the CSS file
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../homepages/Footer/Footer";

function Brand() {
  useEffect(() => {
    AOS.init({ duration: "2000" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-poppins">
      <div>
        <h2
          className="px-5 py-2 text-maincol text-4xl font-semibold text-center"
          data-aos="flip-up"
        >
          Our Brands – Everlife CPC Diagnostics Products
        </h2>
      </div>
      <section className="section-background parallax mt-10">
        <h2
          className="text-9xl opacity-100 font-bold animation"
          data-aos="fade-up"
        >
          Sachika
        </h2>
      </section>
      <section className="text-bloc text-justify ">
        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-14">
          First-of-its-kind initiative by ECPC
        </h2>
        <p>
          Sachika is a first-of-its-kind initiative by ECPC in the medical
          diagnostics industry to bridge the ‘skill-divide’ for trained
          manpower. It is an initiative that is meant to empower clinicians
          through knowledge management. With rigorous testing and post-training
          certification, it provides clinicians an opportunity to learn and
          upgrade their skills in modern techniques of the biosciences.
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          Programmes covered at Sachika
        </h2>
        <p>
          Hematology, Clinical Biochemistry, Immunodiagnostics, Bio Medical
          Instrumentation and quality management.
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          Exclusive programs
        </h2>
        <p>
          Sachika also conducts first of its kind, exclusive programs on Entry
          Level Automation in Clinical Chemistry, Autoimmune diagnostics based
          on Immunofluorescence, Pattern Identification, Recombinant Immunoblot
          and ELISA techniques.
        </p>
      </section>

      <section className="section-background parallax1">
        <h2
          className="text-9xl opacity-100 font-bold animation"
          data-aos="fade-up"
        >
          Jeev
        </h2>
      </section>
      <section className="text-bloc">
        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-14">
          Jeev Diagnostics Pvt. Ltd
        </h2>
        <p>
          Jeev Diagnostics is a wholly owned subsidiary of Everlife CPC
          Diagnostics Pvt. Ltd., Chennai, India, manufactures high quality
          state-of-the-art in-vitro clinical chemistry reagents to cater to
          clinical laboratories, hospitals and diagnostic centres.
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          Fully Automated Instruments
        </h2>
        <p>
          The clinical chemistry range of world class IVD reagents manufactured
          by JEEV Diagnostics includes regular packs for semi-automated
          instruments, as also system packs for fully automated instruments such
          as Turbochem100, ChemWell and Biolis 50i.
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          Stringent Quality Control
        </h2>
        <p>Production norms are the hall mark of JEEV Diagnostics</p>
      </section>

      <section className="section-background parallax2">
        <h2
          className="text-8xl opacity-100 font-bold animation"
          data-aos="fade-up"
        >
          CPC manufacturing unit
        </h2>
      </section>
      <section className="text-bloc">
        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-14">
          Field of indigenous manufacturing
        </h2>
        <p>
          CPC’s move to bestride the two worlds of instruments and reagents, and
          its commitment to backward integration, will be a catalyst to
          conferring higher levels of empowerment, reliability and innovation in
          the field of indigenous manufacturing.
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          CPC manufacturing unit – Manufacturing arm of diagnostic instruments.
        </h2>
        <p>
          100% indigenous
          <br></br>
          CE and ISO certified
          <br></br>
          CPC – First to roll out indigenously designed and manufactured
          Hematology Analyzer Xcyte.
          <br></br>
          Stringent Quality Control.
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          Popular Models of CPC include:
        </h2>
        <p>
          PlexMat 4/ 8/16 – Automated Line Immuno Assay processor
          <br />
          FluoroMAT 50 – AutomatedIn direct Immunofluorescence slide processor
        </p>
      </section>

      <section className="section-background parallax3">
        <h2
          className="text-9xl opacity-100 font-bold animation"
          data-aos="fade-up"
        >
          I Track
        </h2>
      </section>
      <section className="text-bloc">
        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-14">
          About i-track
        </h2>
        <p>
          In yet another pioneering venture ECPC created i-track, our home grown
          design for remote maintenance of instruments. Using innovative
          technology i-track connects to users across India, Sri Lanka and Nepal
          offering online solutions to a host of customer needs in real time.
          Combining analytics with effective preventive and predictive
          maintenance, ECPC is rapidly decreasing maintenance requirements by
          increasing mean-time-between-failures (MTBF). Your instrument is at
          its most productive when you have i-track backing you!
        </p>

        <h2 className="text-2xl text-maincol font-semibold ml-5 mt-7">
          Power of Remote Connectivity
        </h2>
        <p>
          Real time Fault Detection
          <br />
          Online remote connectivity ensuring immediate service support
          <br />
          Dedicated technical team supporting with 7 language
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default Brand;
