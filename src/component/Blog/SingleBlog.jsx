import React, { useEffect } from "react";
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

const blogs = [
  {
    id: 1,
    title: "Hematology Analyzer Machine:Its Working principle, Uses and Price",
    date: "May 25,2024",
    image: blog1,
    content: "Full content of the first blog...",
    sections: [
      {
        id: "ha",
        title: "Hematology Analyzer",
        content: "Content for Hematology Analyzer...",
      },
      {
        id: "hwp",
        title: "Hematology Analyzer Working Principle",
        content: "Content for Hematology Analyzer Working Principle...",
      },
      {
        id: "hau",
        title: "Hematology Analyzer Uses",
        content: "Content for Hematology Analyzer Uses...",
      },
      {
        id: "hapin",
        title: "Hematology Analyzer Price in India",
        content: "Content for Hematology Analyzer Price in India...",
      },
    ],
  },
  {
    id: 2,
    title: "Second Blog Title",
    date: "June 10, 2024",
    image: blog2,
    content: "Full content of the second blog...",
    sections: [],
  },
  {
    id: 3,
    title: "Third Blog Title",
    date: "July 15, 2024",
    image: blog3,
    content: "Full content of the third blog...",
    sections: [
      {
        id: "ha",
        title: "Hematology Analyzer",
        content: "Content for Hematology Analyzer...",
      },
      {
        id: "hwp",
        title: "Hematology Analyzer Working Principle",
        content: "Content for Hematology Analyzer Working Principle...",
      },
      {
        id: "hau",
        title: "Hematology Analyzer Uses",
        content: "Content for Hematology Analyzer Uses...",
      },
      {
        id: "hapin",
        title: "Hematology Analyzer Price in India",
        content: "Content for Hematology Analyzer Price in India...",
      },
    ],
  },
];

function SingleBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container-fluid">
      <div className=" mt-10 p-10 text-center">
        <div>
          <h1 className="text-4xl text-maincol font-semibold">{blog.title}</h1>
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
          <div className="sticky top-10">
            <h2 className="text-maincol font-semibold  text-2xl">
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
                    {section.title}
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
              <h2 className="text-2xl text-maincol font-semibold mt-10">
                {section.title}
              </h2>
              <p className="mt-4">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
