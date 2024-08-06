import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/image/banner-image.png";
import blog1 from "../../assets/image/blog1.png";
import blog2 from "../../assets/image/blog2.png";
import blog3 from "../../assets/image/blog3.png";
import Footer from "../../homepages/Footer/Footer";

const blogs = [
  {
    id: 1,
    title: "Hematology Analyzer Machine:Its Working principle, Uses and Price",
    date: "May 25,2024",
    image: blog1,
    content:
      "Ever wondered what happens to your blood sample after a checkup? A key player behind the scenes...",
  },
  {
    id: 2,
    title: "Second Blog Title",
    date: "June 10, 2024",
    image: blog2,
    content: "Second blog summary...",
  },
  {
    id: 3,
    title: "Third Blog Title",
    date: "July 15, 2024",
    image: blog3,
    content: "Third blog summary...",
  },
];

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="scroll-smooth">
      <div className="grid grid-cols-1">
        <img src={banner} alt="bannerimage" className="mx-auto " />
        <header className="md:absolute md:top-24 md:ml-20 md:text-white sm:text-black">
          <h1 className="md:text-6xl lg:text-6xl xl:text-6xl text-4xl md:text-left lg:text-left xl:text-left text-center font-bold ">
            Blog
          </h1>
          <div className="md:w-40 md:h-1 md:ml-0 md:bg-white bg-black w-40 h-1 ml-28 mt-5"></div>
          <p className="md:text-xl lg:text-xl xl:text-xl md:text-left lg:text-left xl:text-left text-center text-base mt-2">
            We are the leading Medical laboratory
            <br /> Equipment Manufactures
          </p>
        </header>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-10 ">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="hover:scale-105 transition-all"
          >
            <div className="shadow-custom-shadow rounded-xl">
              <div>
                <img src={blog.image} alt="" className="rounded-t-lg " />
              </div>
              <div className="p-5">
                <h2 className="mt-5 text-maincol text-xl font-semibold">
                  {blog.title}
                </h2>
                <p className="mt-2 text-sm">by admin | {blog.date}</p>
                <p className="mt-2">{blog.content}</p>
                <button className="mt-8 border-2 border-maincol p-2 rounded-md hover:bg-maincol hover:text-white transition-all animate-bounce">
                  Read more
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
