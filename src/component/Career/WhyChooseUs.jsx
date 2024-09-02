import React, { useEffect } from "react";
import { useState } from "react";
import bannerimg from "../../assets/bannerimg.png";
import Carousel from "./Carousel";
import { Link, useNavigate } from "react-router-dom";
import glassdoor from "../../assets/glassdoor.jpg";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Footer from "../../homepages/Footer/Footer";
import "./career.css";
import Loader from "../Loader/Loader";
import Aos from "aos";
function WhyChoseUs() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (title || department) {
      // Encode the title and location as URL parameters
      const params = new URLSearchParams();
      if (title) params.append("title", title);
      if (department) params.append("department", department);

      navigate(`/careers?${params.toString()}#openings`); // Ensure the correct path
    } else {
      alert("Please enter a title or department to search.");
    }
  };

  const images = [
    "https://via.placeholder.com/800x400?text=Slide+  1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];
  const contents = [
    {
      topic: "Innovative Solutions for a Healthier Tomorrow",
      content:
        "At CPC Diagnostics, we're pioneering advanced diagnostic solutions to ensure a healthier future. Our cutting-edge technology and unwavering commitment are transforming the way healthcare is delivered.",
    },
    {
      topic: "Empowering Lives with Precision Diagnostics",
      content:
        "Precision is at the heart of what we do. Our diagnostics empower medical professionals to make informed decisions, improving patient outcomes and enhancing the quality of life.",
    },
    {
      topic: "Join a Team Dedicated to Excellence",
      content:
        "Be part of a team that values innovation, collaboration, and excellence. At CPC Diagnostics, we're not just employees; we're a family working together to make a difference in the world of healthcare.",
    },
  ];
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="text-black poppins">
          <header>
            <img src={bannerimg} alt="" />
          </header>
          <div className="md:flex gap-3 justify-center items-center  p-8 shadow-md bg-white">
            <input
              list="title-options"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 p-2 md:w-72 lg:w-72 xl:w-72 w-full "
              placeholder="Choose Title"
            />
            <datalist id="title-options">
              <option value="Sales" />
              <option value="HR" />
              <option value="Manager" />
              {/* Add more titles if needed */}
            </datalist>

            <input
              list="department-options"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border-2 p-2 md:w-72 xl:w-72 lg:w-72 w-full"
              placeholder="All Departments"
            />
            <datalist id="department-options">
              <option value="Jeev" />
              <option value="CPC" />
              <option value="Sachika" />
              {/* Add more departments if needed */}
            </datalist>

            <button
              type="submit"
              className=" bg-cpccol text-white p-2 w-24 shadow-md rounded-sm"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div>
            <h3 className="mt-10 text-2xl ml-4">
              Get to know{" "}
              <span className="bg-cpccol text-white p-1">who we are</span>{" "}
            </h3>
          </div>

          <div className="grid grid-cols-3 mt-10 gap-5 p-16 ">
            <div className="shadow-lg text-center p-5">
              <h2 className="text-black">
                We are <br />
                <span className="text-3xl text-cpccol font-semibold">
                  {" "}
                  125,000+
                </span>{" "}
              </h2>
              <p className="mt-4 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                itaque explicabo dicta voluptas, vel accusamus laboriosam
                provident molestiae quaerat{" "}
              </p>
            </div>

            <div className="shadow-lg text-center p-5">
              <h2>
                United By <br />
                <span className="text-3xl text-cpccol font-semibold">
                  {" "}
                  1 Mission
                </span>
              </h2>
              <p className="mt-4 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                itaque explicabo dicta voluptas, vel accusamus laboriosam
                provident molestiae quaerat{" "}
              </p>
            </div>

            <div className="shadow-lg text-center p-5">
              <h2>
                In diverse{" "}
                <span className="text-3xl text-cpccol font-semibold">
                  Careers throughout Global
                </span>{" "}
              </h2>
              <p className="mt-4 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                itaque explicabo dicta voluptas, vel accusamus laboriosam
                provident molestiae quaerat{" "}
              </p>
            </div>

            <div className="shadow-lg text-center p-5">
              <h2>
                Welcome to our <br />
                <span className="text-3xl text-cpccol font-semibold">team</span>
              </h2>
              <p className="mt-4 leading-7">
                Providing Endless Opportunities & Unmatched Capabilities Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
                delectus iusto sapiente iure ducimus dolor velit{" "}
              </p>
            </div>

            <div className="shadow-lg text-center p-5">
              <h2>
                Proudly Ranked <br />{" "}
                <span className="text-3xl text-cpccol font-semibold">#4</span>{" "}
              </h2>
              <p className="mt-4 leading-7">
                on Fortune's World's Most Admired Companies and #1 in our
                industry. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor, iusto at, fugit ut
              </p>
            </div>

            <div className="shadow-lg text-center p-5">
              <h2>
                <span className="text-3xl text-cpccol font-semibold">
                  Search
                </span>{" "}
                More from here
              </h2>
              <button
                type="submit"
                className="mt-10 border-2 p-2 border-cpccol "
              >
                Search
              </button>
            </div>
          </div>

          <div className="p-10 bg-gray-50 rounded-l-full">
            <h2 className="text-3xl text-center">
              Discover{" "}
              <span className="text-3xl text-cpccol font-semibold">
                {" "}
                Our values
              </span>
            </h2>
            <p className="text-center mt-4">
              CPC Diagnositcs 4i Values of Integrity, Intensity, Innovation, and
              Involvement make up our culture and guide <br /> our colleagues’
              interaction – with our customers, suppliers, and partners, and
              with each other. <br />
              These four values are the very foundation of our culture.
            </p>
            <div className="grid grid-cols-2 p-12 gap-5">
              <div className="">
                <h2 className="text-2xl text-cpccol font-semibold">
                  Integrity
                </h2>
                <p className="mt-4">
                  We honor commitments, communicate openly, and demonstrate the
                  highest ethical standards.
                </p>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold">Intensity</h2>
                <p className="mt-4">
                  We honor commitments, communicate openly, and demonstrate the
                  highest ethical standards.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold">Innovation</h2>
                <p className="mt-4">
                  We honor commitments, communicate openly, and demonstrate the
                  highest ethical standards.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl text-cpccol font-semibold">
                  Involvement{" "}
                </h2>
                <p className="mt-4">
                  We honor commitments, communicate openly, and demonstrate the
                  highest ethical standards.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-20">
            <h2 className="text-2xl ml-16">
              5 Reasons to Work at{" "}
              <span className="bg-cpccol text-white p-2">CPC Diagnostics.</span>
            </h2>
          </div>
          <div className="mt-16">
            <Carousel
              images={images}
              autoSlide={true}
              slideInterval={4000}
              contents={contents}
            />
          </div>
          <div className="bg-gray-100 p-3 mt-20">
            <h2 className="text-2xl mt-16 ml-16">
              Define your search.{" "}
              <span className="bg-cpccol text-white p-2">
                Search Our openings
              </span>{" "}
            </h2>
            <div className="grid grid-cols-4 p-20 gap-4 font-poppins">
              <a href={"https://cpcdiagnostics.in/"} rel="noopener noreferrer">
                <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20 hover:bg-cpccol hover:text-white transition-all ease-in-out delay-75 hover:-translate-y-1">
                  <h2 className="">Clinical Research</h2>
                </div>
              </a>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20 hover:bg-cpccol hover:text-white transition-all ease-in-out delay-75 hover:-translate-y-1">
                <h2 className="font-poppins">Corporate</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20 hover:bg-cpccol hover:text-white transition-all ease-in-out delay-75 hover:-translate-y-1">
                <h2 className="">Customer & Technical Support</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20 hover:bg-cpccol hover:text-white transition-all ease-in-out delay-75 hover:-translate-y-1">
                <h2 className="">Finance</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Human Resources</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">IT Data & Tech</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Laboratory Services</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Marketing & Communications</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Operations </h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Quality & Regulatory</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Research & Development</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Sales & Business Development</h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20">
                <h2 className="">Students & New grads </h2>
              </div>
              <div className="bg-white shadow-md p-5 rounded-lg flex items-center justify-center min-h-20 ">
                <h2 className="">Other</h2>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl mt-16 ml-16">
              {" "}
              Employee Reviews By{" "}
              <span className="bg-cpccol text-white p-2"> Glassdoor</span>
            </h2>
            <div className="grid grid-cols-3 mt-10">
              <div>
                <img src={glassdoor} alt="" className="mt-5" />
              </div>

              <div className="flex items-center gap-2 border-l-2 border-gray justify-center">
                <h3 className="text-2xl">4.3 Rating</h3>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalfAlt />
                </span>
              </div>
              <div className=" text-center border-l-2 border-gray ">
                <div className="mt-10 ">
                  <h3 className="text-2xl">Interview Experience</h3>
                </div>
                <ul className="grid grid-cols-3  mt-5">
                  <div>
                    <p>Positive </p>
                    <p>Neutral </p>
                    <p>Negative </p>
                  </div>
                  <div>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div>
                    {" "}
                    <p>70%</p>
                    <p>10%</p>
                    <p>20%</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default WhyChoseUs;
