import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaRegUserCircle,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import blogbanner from "../../assets/image/blogbanner.png";
import blog1 from "../../assets/image/blog1.png";
import blog2 from "../../assets/image/blog2.png";
import blog3 from "../../assets/image/blog3.png";
import Footer from "../../homepages/Footer/Footer";
import Loader from "../Loader/Loader";

const blogs = [
  //this is first blog
  {
    id: 1,
    title: "Hematology Analyzer Machine:Its Working principle, Uses and Price",
    date: "May 25,2024",
    image: blog1,
    content: "Full content of the first blog...",
    sections: [
      {
        startcontent:
          "Ever wondered what happens to your blood sample after a checkup? A key player behind the scenes is the hematology analyzer. This medical marvel automates the process of counting and identifying your blood cells, giving doctors a vital glimpse into your health. From routine blood work to complex diagnoses, hematology analyzers play a crucial role in keeping you healthy.",
      },
      {
        id: "ha",
        title: "Hematology Analyzer",
        content:
          "A hematology analyzer, also known as a CBC or complete blood count machine, is the most important equipment in a medical laboratory. This equipment measures and assesses the elements of blood: red and white blood cells, platelets, hemoglobin, and hematocrit. These measurements are crucial for the diagnosis of conditions, patient monitoring, and guiding the choice of therapy.There exist two major types of hematology analyzers: 3 part and 5 part hematology analyzers.",
        content1:
          "A 3 part hematology analyzer is a standard model in which the classification of white blood cells is into three types: lymphocytes, monocytes, and granulocytes. Generally, most of the small laboratories use 3-part hematology analyzers because of their ease of handling and cost.",
        content2:
          "On the other hand, the 5 part hematology analyzer focuses deeper into categorizing blood cells and identifies five different types of white blood cells as follows: neutrophils, lymphocytes, monocytes, eosinophils, and basophils. This technology is considered a fully automatic hematology analyzer and can be applied in bigger medical facilities, because the results are more elaborate and thus it is good for more complicated diagnostic needs.",
      },
      {
        id: "hwp",
        title: "Hematology Analyzer Working Principle",
        content:
          "The working principle of a hematology analyzer depends on the type and technique of the device. Here is a brief overview of how each technique works. Electrical impedance: This technique uses an electric current to detect the presence and size of the cells as they pass through a small opening (orifice) in a container filled with an electrolyte solution. The cells cause a temporary change in the electrical resistance of the solution, which is measured and converted into cell counts and volumes. This technique can differentiate between RBCs, WBCs. Flow cytometry: This technique uses a laser beam to illuminate the cells as they flow through a narrow channel (flow cell) in a fluid stream. The cells scatter the light in different directions and intensities depending on their shape, structure, and composition. The scattered light is detected by sensors at various angles and converted into signals that indicate the cell type and properties. This technique can differentiate between different types of WBCs (neutrophils, lymphocytes, monocytes, eosinophils, and basophils) based on their granularity, diameter, and inner complexity.",
      },
      {
        id: "hau",
        title: "Hematology Analyzer Uses",
        content3:
          "Hematology analyzers are very critical to the medical diagnosing process, and they do execute so many important functions. Here are five key uses",
        content4:
          "1. Disease Diagnosis: Diagnose and identify a range of conditions, including anemia, infection, and leukemia, in blood analysis component levels.",
        content5:
          "2. Monitoring: Monitor the course of disease and treatment over time, particularly in diseases with a chronic course, such as sickle cell disease and other hematological disorders.",
        content6:
          "3. Blood Count: Perform full blood count tests, with comprehensive reports on red cells, white cells, platelet counts, and hemoglobin levels needed for routine health checkups.",
        content7:
          "4. Therapeutic Monitoring: Blood cells and their functions are routinely measured to monitor the efficacy of the treatments given, such as chemotherapy or other drug therapies.",
        content8:
          "5. Research Applications: Helps in medical research as the availability of precise counts and classifications in blood cells thus facilitating further advancements in studies in hematology and other medical research.",
      },
      {
        id: "hapin",
        title: "Hematology Analyzer Price in India",
        topic1: "3-Part Hematology Analyzers price",
        content9: "Approximate Price Range: ₹2,10,000 to ₹2,75,000 per piece",

        content10:
          "The fully automatic 3-part hematology analyzers offer an economical solution for clinical settings, providing key functionalities to analyze white blood cells, red blood cells, and platelets. These systems are ideal for small to medium-sized labs looking for cost-effective options.",
        topic2: "5-Part Hematology Analyzers price",
        content11: "Approximate Price Range: ₹3,00,000 to ₹5,00,000 per piece",
        content12:
          "The fully automatic 5-part hematology analyzers deliver a more comprehensive cell count, including individual counts for five different types of white blood cells. They are perfect for larger laboratories or hospitals needing extensive and high-volume analysis capabilities.",
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      },
    ],
  },
  //this is second blog
  {
    id: 2,
    title: "Difference Between 3 Part and 5 Part Hematology Analyzer",
    date: "June 10, 2024",
    image: blog2,
    content: "Full content of the second blog...",
    sections: [
      {
        startcontent:
          "Hematology analyzers, also known as CBC machines, are classified into fully automatic and semi-automatic models currently available on the market. The primary difference between the 3-part and 5-part hematology analyzers lies in their methods for counting and classifying white blood cells (WBCs), which are essential for combating diseases and infections. While low-volume laboratories typically use 3-part differential hematology analyzers, there is an increasing trend towards adopting 5-part differential hematology analyzers. Explore the reasons behind this shift",
      },
      {
        id: "ha",
        title: "Hematology analyzer/ CBC Machine",
        content:
          "A CBC machine, or hematology analyzer, is an essential instrument in medical laboratories for performing complete blood counts. These devices examine different elements of blood, such as red blood cells, white blood cells, and platelets. By delivering comprehensive details about the composition of blood, hematology analyzers are instrumental in diagnosing various medical issues, including infections, anemia, and leukemia. Their significance in contemporary healthcare is crucial, as they provide prompt and precise diagnoses that influence the direction of patient treatment and care.",
      },
      {
        id: "hwp",
        title: "3-Part Differential Hematology Analyzer- CBC Machine",
        content:
          "A Fully Automated 3 Part Differential hematology analyzer counts three kinds of WBCs, RBCs, hemoglobin, hematocrit, and platelets using the electrical impedance method. It is simple, fast, and cheap. It is good for basic blood tests and screening. Dynacount 3D and Dynacount 3D PLUS are the two products of the 3-part differential hematology analyzers from Everlife CPC Diagnostics. They can process 60 samples per hour and measure 24 and 23 parameters, respectively. They have a large LCD touchscreen, a smart counting mode, one-touch error removal, and bidirectional LIS connectivity. The Dynacount 3D PLUS also has a research mode that can calculate the neutrophil-to-lymphocyte ratio (NLR) and platelet-to-lymphocyte ratio (PLR) for inflammation and prognosis.",
        topic2: "3 Part hematology analyzer price",
        content11:
          "3-Part Hematology Analyzers Approximate Price Range: ₹2,10,000 to ₹2,75,000 per piece",
        content12:
          "The 3-part hematology analyzers offer an economical solution for clinical settings, providing key functionalities to analyze white blood cells, red blood cells, and platelets. These systems are ideal for small to medium-sized labs looking for cost-effective options.",
      },
      {
        id: "hau",
        title: "5-Part Differential Hematology Analyzer- CBC Machine",
        content:
          "A Fully Automated 5 Part Differential hematology analyzer counts five kinds of WBCs, RBCs, haemoglobin, hematocrit, platelets, and other parameters using electrical impedance and flow cytometry methods. It is advanced, accurate, and comprehensive. It can show the shape and function of blood cells. It can also find immature or abnormal cells. It is good for diagnosing complex blood diseases and monitoring treatment.",
        content4:
          "Dynacount 5D is a 5-part hematology analyzer from Everlife CPC Diagnostics that can analyze up to 60 samples per hour. It uses four scattergrams and two histograms to derive 28 parameters + 8 research parameters. It employs laser scatter flow cytometry to differentiate all types of WBCs with high precision. It also includes a robust system that manages and assures the quality of the data.",
        topic1: "5 Part hematology analyzer price",
        content10:
          "5-Part Hematology Analyzers Approximate Price Range: ₹3,00,000 to ₹5,00,000 per piece",
      },
      {
        content7:
          "The 5-part hematology analyzers deliver a more comprehensive cell count, including individual counts for five different types of white blood cells. They are perfect for larger laboratories or hospitals needing extensive and high-volume analysis capabilities.",
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      },
    ],
  },
  //this is third blog
  {
    id: 3,
    title: "Biochemistry Analyzer: It's working principle, uses and price",
    date: "July 15, 2024",
    image: blog3,
    content: "Full content of the third blog...",
    sections: [
      {
        startcontent:
          "From routine checkups to complex diseases, there's a hidden force behind your diagnosis. Let's explore the world of biochemistry analyzers and learn how they work and empower doctors to make the best decisions for your health",
      },
      {
        id: "ha",
        title: "What is a Biochemistry Analyzer?",
        content:
          "Biochemistry analyzer/ clinical chemistry analyzer is the modern lab tool of high importance for both research and diagnostics in medicine. They evaluate samples such as blood, urine and cerebrospinal fluid to acquire vital health information which aids in diagnosing disease, monitoring treatment and making patient care decisions.",
      },
      {
        id: "hau",
        title: "The working principle of the biochemistry analyzer",
        content:
          "A biochemistry analyzer works by the principle of spectrophotometry, a phenomenon that identifies the reaction of a biological sample with certain reagents. This analyzer operates in stages: sampling preparation, sample analysis, detection, and Data analysis.",
        content1:
          "1. In sample preparation, the sample undergoes centrifugation and reaction with required reagents.",
        content2:
          "2.  Lastly, cuvettes containing reagents and enzymes are used to analyze the sample that produces forms of detectable signals.",
        content3:
          "3. Detection also involves the measurement of those signals and comparing them to a standard curve.",
        content4:
          "4. Lastly, data analysis formulates a report that describes analyte concentrations and reference levels.",
        content5:
          "The process enables reliable quantification of biochemical parameters and thus assists in making diagnoses of diseases and monitoring treatment. ",
      },
      {
        id: "hwp",
        title: "Uses of biochemistry analyzer",
        content:
          "Biochemistry analyzers indeed display widespread usefulness within medical areas and facilities, facilitating doctors and practitioners in the treatment of diseases as well as the management of critical health problems.",
        content6:
          "These tools are widely used in referral laboratories to conduct various investigations, such as albumin concentration, fasting blood sugar levels, cholesterin, and so on. Interestingly, highly specialized types of biochemistry analyzers are applied in clinics for the analysis of antigen-antibody binding within biochemical reactions. Furthermore, advanced biochemistry analysers have become integral parts of the pharmaceutical sector, enabling the diagnosis of severe diseases.",
        content7:
          "However, beyond medical areas biochemistry analyzers play a key role in life science research which covers a range of investigations like cell metabolism, protein synthesis, genetics, and some clinical laboratories. Medical researchers use such analyzers in the exploration of the structure and functionality of a wide range of biomolecules inside cells; these biomolecules include lipids, enzymes, nucleic acids and many others.",
        content8:
          "The chemistry analyzers, as an applied medical device, play the principal role in medical research and pharmaceuticals, supporting drug findings, advancing clinical research, and providing the tools for diagnostic and therapeutic purposes. In brief, they are the products for laboratory staff, physicians, and patients as well, and they are indispensable game-changers for modern healthcare practices and better outcomes for patients.",
      },

      {
        id: "hapin",
        title: "Biochemistry analyzer price in India",
        content:
          "The pricing of Biochemistry analyzers in India can vary due to factors like the features, level of automation, and brand. At CPC Diagnostics, we provide a range of analyzers to suit your needs, including semi-auto analyzer options like the Turbostat and Turbostat Plus, as well as fully automatic analyzer models such as the Turbochem Magna and Turbochem Prime.",
        topic1: "Semi-Automatic Biochemistry Analyzer Price:",
        content9:
          "1. These are particularly developed for budget-constrained multi-purpose labs and private hospitals.",
        content10:
          "2. The prices start from around 65,000 rupees and go up to 8,50,000 rupees.",
        topic2: "Fully Automated Biochemistry Analyzer Price:",
        content11:
          "1. These are the advanced instruments which are more efficient and perfect for large-scale hospitals and diagnostic centres.",
        content12:
          "2. Prices are a variable factor, depending on the specific division ranging from around 3,00,000 rupees to several lakhs.",
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      },
    ],
  },
  //this is fourth blog
  {
    id: 4,
    title: "What a Hemo-globin is and Common Types of Blood Disorder?",
    date: "July 15, 2024",
    image: blog3,
    content: "Full content of the third blog...",
    sections: [
      {
        startcontent:
          "Blood disorders occur when the cells in the blood do not function as they should, causing certain symptoms and related issues. The most common blood abnormalities are as follows: ",
      },

      {
        id: "hau",

        content:
          "1. Anemia: People with anemia have a low number of red blood cells. Mild anemia often causes no symptoms. More severe anemia can cause fatigue, pale skin, and shortness of breath with exertion.",
        content1:
          "2. Thalassemia: This is a genetic form of anemia which affects the body’s ability to produce hemoglobin and red blood cells. These patients may need regular blood transfusions to relieve anemia symptoms. ",
        content2:
          "3.  Sickle cell anemia: A genetic condition that causes the red blood cells to be sticky and stiff, which obstructs proper blood flow. Severe pain and organ damage can occur. ",
        content3:
          "4. Polycythemia vera: The body produces too many red blood cells, from an unknown cause. The excess red blood cells usually create no problems, but may cause blood clots in some people and can turn fatal. ",
        content4:
          "5. Lymphoma: A form of blood cancer that develops in the lymph system. In lymphoma, a white blood cell becomes malignant, multiplying and spreading abnormally. Treatment with chemotherapy and/or radiation can often extend life with lymphoma, and sometimes cure it. ",
        content5:
          "6. Leukemia: A form of blood cancer in which a white blood cell becomes malignant and multiplies inside bone marrow. Leukemia may be acute (rapid and severe) or chronic (slowly progressing). Chemotherapy and/or stem cell transplantation (bone marrow transplant) can be used to treat leukemia, and may result in a cure.  ",
        content6:
          "7. Multiple myeloma: A blood cancer in which a white blood cell called a plasma cell becomes malignant. The plasma cells multiply and release damaging substances that eventually cause organ damage. Multiple myeloma has no cure, but stem cell transplant and/or chemotherapy can improve longevity. ",
        content7:
          "8. Thrombocytopenia: A low number of platelets in the blood; numerous conditions can cause thrombocytopenia, but most are not severe and do not result in abnormal bleeding. ",
        content8:
          "9. Purpura: A condition causing a persistently low number of platelets in the blood, due to an unknown cause; usually, there are no symptoms, yet abnormal bruising, small red spots on the skin, or abnormal bleeding can result.",
        content9:
          "10. Von Willebrand disease: It is an inherited bleeding disorder. People with von Willebrand disease can have heavier-than-normal bleeding after an injury, surgery, menstrual flow and childbirth. In rare cases, this condition can be fatal.",
        content10:
          "11. Hemophilia: Hemophilia is a rare, inherited bleeding disorder in which blood cannot clot normally at the site of a wound or injury. The disorder occurs because certain blood clotting factors are missing or do not work properly. Because a clot does not form, extensive bleeding can be caused from a cut or wound. This is called external bleeding. Bleeding inside the body, called internal bleeding, can occur as well, especially in muscles and in joints like the hips and knees.",
      },

      {
        final: "CPC Diagnostics Pvt Ltd ",
      },
    ],
  },
  //this is fifth blog
  {
    id: 5,
    title: "An Introduction to a Fully Automated Immunoassay Analyzer",
    date: "July 15, 2024",
    image: blog3,
    content: "Full content of the third blog...",
    sections: [
      {
        startcontent:
          "An introduction to a fully automated immunoassay (IA) analyzer. A detailed description of how the machine works, including how it’s controlled and automated.",
      },
      {
        content:
          "An immunoassay analyzer is a laboratory instrument that automates an assay which can be performed manually. This is done using an automated platform and does not require any operator intervention during the analysis of each sample.",
      },
      {
        content:
          "As the word “analyzer” suggests, fully automated assays or immunoassays use automation to separate and analyze the components of a test sample. This type of analyzer looks and acts like an immunoassay chromatography instrument, with extremely high-speed electrophoresis.",
      },
      {
        title: "Fully Automated Immunoassay Analyzer",
        content:
          "An Immunoassay analyzer (IA) is a test for the presence of specific antibodies in samples of human blood or other body fluids. When done properly, immunoassays are extremely sensitive and specific. An IA can detect hundreds or even thousands of different antibodies in a single sample, compared to an ELISA that contains only a few hundred antigens. With modern IA technology, it is now possible (using commercially-available instrumentation) to detect analytes (substances of interest) from a variety of specimens as small as a few micrometers using only single cells and/or very few samples.",
        content1:
          "The application of immunoassays has evolved tremendously over the years. These tools have been instrumental in detecting the presence or absence of a specific substance within the body, or as in the case of ELISA and RIA, measuring levels of substances in biological fluids. The term “analyzer” is used to describe either a device or software that performs such an assay. Analyzers are used by many different industries because they help improve production and quality control while also reducing overall cost by reducing labor input.",
      },

      {
        content9:
          "An immunoassay is used to detect the presence of a specific analyte in a sample. Here we will discuss the unit operation of an assay and how it works.",
      },
      {
        final: "CPC Diagnostics Pvt Ltd ",
      },
    ],
  },
];

function SingleBlog() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className=" mt-10 p-10 text-center">
            <div>
              <h1 className="text-4xl text-maincol font-semibold">
                {blog.title}
              </h1>
            </div>

            <div className="flex justify-center items-center mt-10">
              <FaRegUserCircle size={25} color="#02a884" className="mr-4" /> By
              admin &nbsp; {blog.date} <br />
              <div className="w-20 bg-maincol h-1 relative top-8 right-32"></div>
            </div>

            <div className="mt-14 flex items-center justify-center">
              <img src={blogbanner} alt="blog banner " />
            </div>
          </div>
          <div className="grid grid-cols-12 p-10 scroll-smooth transition-all ease-in-out">
            <div className="col-span-4 md:block lg:block xl:block hidden">
              <div className="sticky top-24">
                <h2 className="text-maincol font-semibold text-left  text-2xl">
                  Share this article
                </h2>
                <div className="flex gap-4 items-center mt-4">
                  <a
                    href=""
                    className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href=""
                    className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href=""
                    className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href=""
                    className="hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
                  >
                    <FaYoutube size={23} />
                  </a>
                </div>

                <div className="mt-8 ">
                  {blog.sections.map((section) => (
                    <div key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="mt-4 hover:text-maincol hover:scale-110 hover:transition-all hover ease-in-out"
                      >
                        <span className="text-fontptag"> {section.title}</span>
                      </a>{" "}
                      <br />
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-8 xl:col-span-8 col-span-12 text-justify leading-8">
              {blog.sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <p className="text-fontextra">{section.startcontent}</p>
                  <h2 className="text-2xl text-maincol font-semibold mt-10">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-fontextra">{section.content}</p>
                  <p className="mt-4 text-fontextra">{section.content1}</p>
                  <p className="mt-4 text-fontextra">{section.content2}</p>
                  <p className="mt-4 text-fontextra">{section.content3}</p>
                  <p className="mt-4 text-fontextra">{section.content4}</p>
                  <p className="mt-4 text-fontextra">{section.content5}</p>
                  <p className="mt-4 text-fontextra">{section.content6}</p>
                  <p className="mt-4 text-fontextra">{section.content7}</p>
                  <p className="mt-4 text-fontextra">{section.content8}</p>
                  <h2 className="mt-4 text-fontextra text-black text-left">
                    {section.topic1}
                  </h2>
                  <p className="mt-4 text-fontextra">{section.content9}</p>
                  <p className="mt-4 text-fontextra">{section.content10}</p>
                  <h2 className="mt-4 text-fontextra text-black text-left">
                    {section.topic2}
                  </h2>
                  <p className="mt-4 text-fontextra">{section.content11}</p>
                  <p className="mt-4 text-fontextra"> {section.content12}</p>
                  <p className="mt-4 text-fontextra"> {section.final}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default SingleBlog;
