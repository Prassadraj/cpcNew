import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/image/banner-image.png";
import blog1 from "../../assets/image/Hematology-analyzer-blog.png";
import blog2 from "../../assets/image/Difference-Between-3-Part-and-5-Part-Hematology-Analyzer.png";
import blog3 from "../../assets/image/Biochemistry-Analyzer-Its-working-principle-uses-and-price.jpg";
import blog4 from "../../assets/image/Frame-md.png";
import Footer from "../../homepages/Footer/Footer";
import Loader from "../Loader/Loader";

const blogs = [
  {
    id: 1,
    title: "Hematology Analyzer Machine:Its Working principle, Uses and Price",
    date: "May 25,2024",
    image: blog1,
    alt: "Hematology-analyzer-blog",
    content:
      "Ever wondered what happens to your blood sample after a checkup? A key player behind the scenes...",
  },
  {
    id: 2,
    title: "Difference Between 3 Part and 5 Part Hematology Analyzer",
    date: "June 10, 2024",
    image: blog2,
    alt: "Difference-Between-3-Part-and-5-Part-Hematology-Analyzer",
    content:
      "Hematology analyzers, also known as CBC machines, are classified into fully automatic and...",
  },
  {
    id: 3,
    title: "Biochemistry Analyzer: It's working principle, uses and price",
    date: "July 15, 2024",
    image: blog3,
    alt: "Biochemistry-Analyzer-Its-working-principle-uses-and-price",
    content:
      "From routine checkups to complex diseases, there's a hidden force behind your diagnosis....",
  },
  {
    id: 4,
    title: "What a Hemo-globin is and Common Types of Blood Disorder?",
    date: "July 15, 2024",
    image: blog4,
    alt: "What a Hemo-globin is and Common Types of Blood Disorder",
    content:
      "Blood disorders occur when the cells in the blood do not function as they should....",
  },
  {
    id: 5,
    title: "An Introduction to a Fully Automated Immunoassay Analyzer",
    date: "July 15, 2024",
    image: blog4,
    alt: "What a Hemo-globin is and Common Types of Blood Disorder",
    content:
      "An introduction to a fully automated immunoassay (IA) analyzer. A detailed description....",
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
          <div className="grid grid-cols-1">
            <img src={banner} alt="bannerimage" className="mx-auto" />
            <header className="md:absolute md:top-24 md:ml-20 md:text-white sm:text-black">
              <h1 className="md:text-6xl lg:text-6xl xl:text-6xl text-4xl md:text-left lg:text-left xl:text-left mt-4 font-bold">
                Blog
              </h1>
              <div className="md:w-40 md:h-1 md:ml-0 md:bg-white w-40 h-1 ml-28 mt-3"></div>
              <p className="md:text-xl lg:text-xl xl:text-xl md:text-left lg:text-left xl:text-left text-base mt-2">
                We are the leading Medical laboratory
                <br /> Equipment Manufactures
              </p>
            </header>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-10">
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="hover:scale-105 transition-all"
              >
                <div className="shadow-custom-shadow rounded-xl h-[400px] flex flex-col">
                  <div className="h-2/5 w-full overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex-grow px-4 py-2 flex flex-col justify-between">
                    <div>
                      <h2 className="mt-2 text-maincol text-left text-xl font-semibold">
                        {blog.title}
                      </h2>
                      <p className="mt-2 text-sm">by admin | {blog.date}</p>
                      <p className="mt-2">{blog.content}</p>
                    </div>
                    <button className="mt-4 border-2 border-maincol p-2 rounded-md hover:bg-maincol hover:text-white transition-all">
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
