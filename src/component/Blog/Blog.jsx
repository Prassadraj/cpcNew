import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/image/banner-image.png";
import blog1 from "../../assets/image/Hematology-analyzer-blog.png";
import blog2 from "../../assets/image/Difference-Between-3-Part-and-5-Part-Hematology-Analyzer.png";
import blog3 from "../../assets/image/Biochemistry-Analyzer-Its-working-principle-uses-and-price.jpg";
import blogcommon from "../../assets/image/Frame-md.png";
import blog4 from "../../assets/image/blog-4.jpg";
import blog5 from "../../assets/image/blog-5.jpg";
import blog6 from "../../assets/image/blog-7.png";
import blog7 from "../../assets/image/dnynacount.png";
import blog8 from "../../assets/image/Membrane_740x480.png";
import blog9 from "../../assets/image/hypersensive-european-man-suffers-from-allergy-has-red-swelling-eyes-inflammation-nose-sick-man-caught-cold-uses-nasal-drops-holds-handkerchief-symptoms-flu-fever-needs-treatment-768x512.jpg";
import blog10 from "../../assets/image/woman-patient-receives-thyroid-diagnostics-treatment-thyrotoxicosis-hypothyroidism-ultrasound-diagnostics-endocrine-system-thyroid-768x512.jpg";
import blog11 from "../../assets/image/medium-shot-woman-looking-through-microscope-768x549.jpg";
import blog12 from "../../assets/image/blog-12.jpg";
import blog13 from "../../assets/image/blog-13.jpg";
import blog14 from "../../assets/image/blog-14.jpg";
import blog15 from "../../assets/image/blog-15.jpg";
import blog16 from "../../assets/image/blog-16.jpg";
import blog17 from "../../assets/image/blog-17.webp";
import blog18 from "../../assets/image/blog-18.png";

import Footer from "../../homepages/Footer/Footer";
import Loader from "../Loader/Loader";

const blogs = [
  //first blog
  {
    id: 1,
    title: "Hematology Analyzer Machine:Its Working principle, Uses and Price",
    admin: "by admin",
    date: "May 31, 2024",
    image: blog1,
    alt: "Hematology-analyzer-blog",
    content:
      "Ever wondered what happens to your blood sample after a checkup? A key player behind the scenes...",
  },
  //second blog
  {
    id: 2,
    title: "Difference Between 3 Part and 5 Part Hematology Analyzer",
    admin: "by admin",
    date: "May 25, 2024",
    image: blog2,
    alt: "Difference-Between-3-Part-and-5-Part-Hematology-Analyzer",
    content:
      "Hematology analyzers, also known as CBC machines, are classified into fully automatic and...",
  },
  //third blog
  {
    id: 3,
    title: "Biochemistry Analyzer: It's working principle, uses and price",
    admin: "by admin",
    date: "Feb 27, 2024",
    image: blog3,
    alt: "Biochemistry-Analyzer-Its-working-principle-uses-and-price",
    content:
      "From routine checkups to complex diseases, there's a hidden force behind your diagnosis....",
  },
  //fourth blog
  {
    id: 4,
    title: "What a Hemo-globin is and Common Types of Blood Disorder?",
    admin: "by admin",
    date: " Jul 6, 2023",
    image: blog4,
    alt: "red-blood-cells-blood-oxygen-o2-saturation-medical-scientific-concepts-icon-realistic",
    content:
      "Blood disorders occur when the cells in the blood do not function as they should....",
  },
  //fifth blog
  {
    id: 5,
    title: "An Introduction to a Fully Automated Immunoassay Analyzer",
    admin: "by admin",
    date: "Jul 6, 2023",
    image: blog5,
    alt: "What a Hemo-globin is and Common Types of Blood Disorder",
    content:
      "An introduction to a fully automated immunoassay (IA) analyzer. A detailed description....",
  },
  //sixth blog
  {
    id: 6,
    title: "How to Ensure  Effective Result in Haematology Analyzers",
    admin: "by admin",
    date: "Jul 6, 2023",
    image: blog6,
    alt: "How to Ensure  Effective Result in Haematology Analyzers",
    content:
      "In this article, you will be learning to use Hematology Analyzers by by reading and....",
  },
  //seventh blog
  {
    id: 7,
    title:
      "Basics of 3 part Hematology Analyzer – Every Laboratarians should know",
    admin: "by Mohana Priya ",
    date: "Feb 13, 2023",
    image: blog7,
    alt: "Basics of 3 part Hematology Analyzer – Every Laboratarians should know",
    content:
      "3-part differential hematology analyzer  which analyzes the complete blood count....",
  },
  //eighth blog
  {
    id: 8,
    title: "Microalbuminuria",
    admin: "by Priyadharshini C ",
    date: "Feb 2, 2023",
    image: blog8,
    alt: "Microalbuminuria",
    content:
      "The urinary excretion of albumin greater than or equal to 30mg/day is defined....",
  },
  //ninth blog
  {
    id: 9,
    title: "Allergies",
    admin: "by Dr. Sabitha Palazhy",
    date: "Dec 8, 2022",
    image: blog9,
    alt: "Allergies",
    content:
      "An allergic reaction happens when your body reacts to something that’s normally....",
  },

  //tenth blog
  {
    id: 10,
    title: "NOVEL TREATMENT MODALITIES FOR LETHAL DISEASES ​",
    admin: "by Dr. Sabitha Palazhy",
    date: "Dec 6, 2022",
    image: blog10,
    alt: "Allergies",
    content:
      "Early diagnosis of medical conditions helps in better prognosis and outcomes. This is certainly.......",
  },
  //eleventh blog
  {
    id: 11,
    title: "LAB MEAN​",
    admin: "by Dr. Sabitha Palazhy",
    date: "Nov 29, 2022",
    image: blog11,
    alt: "Allergies",
    content:
      "Early diagnosis of medical conditions helps in better prognosis and outcomes. This is certainly.......",
  },
  //Twelveth blog
  {
    id: 12,
    title: "Introduction to Rheumatoid Factor",
    admin: "by Priyadharshini C",
    date: "Oct 12, 2022",
    image: blog12,
    alt: "Allergies",
    content:
      "Rheumatoid factor (RF) is the auto antibody generated against IgG due to the activation of B cells..........",
  },
  //thirteenth blog
  {
    id: 13,
    title: "What makes up a complete lipid profile?",
    admin: "by CPC Expert",
    date: " Sep 12, 2022",
    image: blog13,
    alt: "Allergies",
    content:
      " Lipid profile or Lipid panel is a group of tests that measure the amount of cholesterol and..........",
  },
  //Fourteenth blog
  {
    id: 14,
    title: "HEART ATTACK AND CARDIAC BIOMARKERS",
    admin: "by Dr. Sabitha Palazhy",
    date: "Aug 31, 2022",
    image: blog14,
    alt: "Allergies",
    content:
      "A heart attack (myocardial infarction) usually occurs when a blood clot blocks blood flow to the..........",
  },
  //Fifteenth blog
  {
    id: 15,
    title: "Blood Disorders-Explained",
    admin: "by Dr. Sabitha Palazhy ",
    date: "Aug 6, 2022",
    image: blog15,
    alt: "Allergies",
    content:
      "Blood disorders occur when the cells in the blood do not function as they should, causing certain symptoms..........",
  },
  //sixteenth blog
  {
    id: 16,
    title: "Risk of Hyperlipidemia in Atherosclerosis?",
    admin: "by Priyadharshini C",
    date: "Jun 20, 2022",
    image: blog16,
    alt: "Allergies",
    content:
      "Overview Dietary lipids are transported inside the body through lipoproteins after getting..........",
  },
  //seventeenth blog
  {
    id: 17,
    title: "All about Anti- Phospholipid Syndrome",
    admin: "by admin ",
    date: "May 9, 2022",
    image: blog17,
    alt: "Allergies",
    content:
      "What is Anti-Phospholipid Syndrome (APS) ? Anti- Phospholipid syndrome is a rare autoimmune..........",
  },
  //Eighteenth blog
  {
    id: 18,
    title: "Systemic Sclerosis",
    admin: "by admin",
    date: "May 9, 2022",
    image: blog18,
    alt: "Allergies",
    content:
      "Scleroderma – The disease: Systemic sclerosis (SSc, scleroderma) is a rare and complex autoimmune..........",
  },
];

function Blog() {
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
        <div className="scroll-smooth">
          <div className="grid grid-cols-1 ">
            <img src={banner} alt="bannerimage" className="mx-auto " />
            <header className="md:absolute md:top-24 md:ml-20 md:text-white sm:text-black">
              <h1 className="md:text-6xl lg:text-6xl xl:text-6xl text-4xl md:text-left lg:text-left xl:text-left  mt-4 font-bold ">
                Blog
              </h1>
              <div className="md:w-40 md:h-1 md:ml-0 md:bg-white  w-40 h-1 ml-28 mt-3"></div>
              <p className="md:text-xl lg:text-xl xl:text-xl md:text-left lg:text-left xl:text-left  text-base mt-2">
                We are the leading Medical laboratory
                <br /> Equipment Manufactures
              </p>
            </header>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-10 max-w-fit">
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="hover:scale-105 transition-all"
              >
                <div className="shadow-custom-shadow rounded-xl flex flex-col h-full">
                  <div className="h-48">
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="px-2 py-1 flex-grow">
                    <h2 className="mt-5 text-maincol text-left text-xl font-semibold">
                      {blog.title}
                    </h2>
                    <p className="mt-2 text-sm text-black">
                      {blog.admin} | {blog.date}
                    </p>
                    <p className="mt-2 text-black">{blog.content}</p>
                  </div>
                  <div className="px-2 py-1 mt-auto">
                    <button className="mt-8 border-2 border-maincol p-2 rounded-md hover:bg-maincol hover:text-white transition-all">
                      Read more
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Blog;
