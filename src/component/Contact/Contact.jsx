import React, { useEffect, useState } from "react";
import contbanner from "../../assets/image/contact-us-banner.png";
import call from "../../assets/image/call.png";
import mail from "../../assets/image/mail.png";
import loc from "../../assets/image/location.png";
import callin from "../../assets/image/call-in.png";
import mailin from "../../assets/image/mail-in.png";
import locin from "../../assets/image/location-in.png";
import Footer from "../../homepages/Footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid">
      <div>
        <div className="">
          <img src={contbanner} alt="bannerimage" className="mx-auto" />
        </div>
        <header className="absolute md:top-24 md:ml-20 md:text-white sm:text-black mt-4">
          <h1 className="md:text-5xl lg:text-5xl xl:text-5xl text-2xl md:ml-0 ml-14 font-bold">
            Want to know more?
            <br />
            We are here to HELP!!!
          </h1>
          <div className="md:w-40 md:h-1 md:ml-0 md:bg-white bg-black w-40 h-1 ml-28 mt-5"></div>
          <p className="text-xl md:ml-0 md:text-left mt-2 ml-8">
            Our team is ready to hear from you
          </p>
        </header>
      </div>
      <div className="grid ">
        <h2 className="text-maincol md:text-4xl lg:text-4xl xl:text-4xl text-3xl text-center font-semibold md:mt-10 mt-40">
          Get in Touch
        </h2>
        <div className="grid grid-cols-12 gap-4 ">
          <div className="md:col-span-6 col-span-12 p-4">
            <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
              <div className="mb-4">
                <label
                  className="block text-maincol text-md font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-maincol text-md font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-maincol text-md font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                  required
                />
              </div>
              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className="bg-maincol hover:bg-maincol-dark text-white font-bold float-left py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-6 col-span-12 p-2">
            <div className="flex">
              <img src={call} alt="call" className="w-auto mt-16" />
              <div className="mt-16 ml-6">
                <h2 className="text-maincol font-semibold text-xl">
                  Talk to us
                </h2>
                <p className="hover:underline font-medium transition-all hover:scale-105">
                  <a href="tel:+91 87544 68400">+91 87544 68400</a>
                </p>
              </div>
            </div>
            <div className="flex">
              <img src={mail} alt="call" className="w-auto mt-16" />
              <div className="mt-16 ml-6">
                <h2 className="text-maincol font-semibold text-xl">Mail Us</h2>
                <p className="hover:underline font-medium transition-all hover:scale-105">
                  <a href="mailto:agappe@agappe.in">info@cpcdiagnostics.in</a>
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src={loc} alt="call" className="w-auto mt-16" />
              </div>
              <div className="mt-16 ml-6">
                <h2 className="text-maincol font-semibold text-xl">
                  Registered Address:
                </h2>
                <p className="hover:underline font-medium transition-all hover:scale-105">
                  <a href="https://maps.app.goo.gl/oEkVRZDJzPhwdo526">
                    Flat No.9, Gokul Towers, Fifth Floor No. 9 &10
                    <br /> C.P.Ramaswami Road, Alwarpet, Chennai-600018.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 bg-gray-200 p-5">
        <a
          href="https://maps.app.goo.gl/oEkVRZDJzPhwdo526"
          className="hover:opacity-80 hover:scale-105 transition-all"
        >
          <div className="bg-maincol p-8 rounded-lg text-center ">
            <button className="p-2 text-maincol bg-white rounded-md font-semibold">
              Corporate Office 1
            </button>
            <div className="flex mt-5">
              <div>
                <img src={locin} alt="call inner logo" className="w-10" />
              </div>
              <div>
                <p className="text-md text-white">
                  4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore
                  – 600004
                </p>
              </div>
            </div>

            <div className="flex mt-7">
              <div>
                <img src={callin} alt="call inner logo" className="w-4" />
              </div>
              <div>
                <p className="text-md text-white ml-4"> +91 44 24993989</p>
              </div>
            </div>

            <div className="flex mt-7">
              <div>
                <img src={mailin} alt="call inner logo" className="w-5" />
              </div>
              <div>
                <p className="text-md text-white ml-4">
                  {" "}
                  info@cpcdiagnostics.in
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://maps.app.goo.gl/oEkVRZDJzPhwdo526"
          className="hover:opacity-80 hover:scale-105 transition-all"
        >
          <div className="bg-maincol p-8 rounded-lg text-center ">
            <button className="p-2 text-maincol bg-white rounded-md font-semibold">
              Corporate Office 1
            </button>
            <div className="flex mt-5">
              <div>
                <img src={locin} alt="call inner logo" className="w-10" />
              </div>
              <div>
                <p className="text-md text-white">
                  4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore
                  – 600004
                </p>
              </div>
            </div>

            <div className="flex mt-7">
              <div>
                <img src={callin} alt="call inner logo" className="w-4" />
              </div>
              <div>
                <p className="text-md text-white ml-4"> +91 44 24993989</p>
              </div>
            </div>

            <div className="flex mt-7">
              <div>
                <img src={mailin} alt="call inner logo" className="w-5" />
              </div>
              <div>
                <p className="text-md text-white ml-4">
                  {" "}
                  info@cpcdiagnostics.in
                </p>
              </div>
            </div>
          </div>
        </a>
        <div className="bg-maincol p-8 rounded-lg text-center ">
          <button className="p-2 text-maincol bg-white rounded-md font-semibold">
            Corporate Office 1
          </button>
          <div className="flex mt-5">
            <div>
              <img src={locin} alt="call inner logo" className="w-10" />
            </div>
            <div>
              <p className="text-md text-white">
                4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore –
                600004
              </p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={callin} alt="call inner logo" className="w-4" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> +91 44 24993989</p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={mailin} alt="call inner logo" className="w-5" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> info@cpcdiagnostics.in</p>
            </div>
          </div>
        </div>

        <div className="bg-maincol p-8 rounded-lg text-center ">
          <button className="p-2 text-maincol bg-white rounded-md font-semibold">
            Corporate Office 1
          </button>
          <div className="flex mt-5">
            <div>
              <img src={locin} alt="call inner logo" className="w-10" />
            </div>
            <div>
              <p className="text-md text-white">
                4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore –
                600004
              </p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={callin} alt="call inner logo" className="w-4" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> +91 44 24993989</p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={mailin} alt="call inner logo" className="w-5" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> info@cpcdiagnostics.in</p>
            </div>
          </div>
        </div>

        <div className="bg-maincol p-8 rounded-lg text-center ">
          <button className="p-2 text-maincol bg-white rounded-md font-semibold">
            Corporate Office 1
          </button>
          <div className="flex mt-5">
            <div>
              <img src={locin} alt="call inner logo" className="w-10" />
            </div>
            <div>
              <p className="text-md text-white">
                4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore –
                600004
              </p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={callin} alt="call inner logo" className="w-4" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> +91 44 24993989</p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={mailin} alt="call inner logo" className="w-5" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> info@cpcdiagnostics.in</p>
            </div>
          </div>
        </div>
        <div className="bg-maincol p-8 rounded-lg text-center ">
          <button className="p-2 text-maincol bg-white rounded-md font-semibold">
            Corporate Office 1
          </button>
          <div className="flex mt-5">
            <div>
              <img src={locin} alt="call inner logo" className="w-10" />
            </div>
            <div>
              <p className="text-md text-white">
                4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore –
                600004
              </p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={callin} alt="call inner logo" className="w-4" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> +91 44 24993989</p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={mailin} alt="call inner logo" className="w-5" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> info@cpcdiagnostics.in</p>
            </div>
          </div>
        </div>
        <div className="bg-maincol p-8 rounded-lg text-center ">
          <button className="p-2 text-maincol bg-white rounded-md font-semibold">
            Corporate Office 1
          </button>
          <div className="flex mt-5">
            <div>
              <img src={locin} alt="call inner logo" className="w-10" />
            </div>
            <div>
              <p className="text-md text-white">
                4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore –
                600004
              </p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={callin} alt="call inner logo" className="w-4" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> +91 44 24993989</p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={mailin} alt="call inner logo" className="w-5" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> info@cpcdiagnostics.in</p>
            </div>
          </div>
        </div>
        <div className="bg-maincol p-8 rounded-lg text-center ">
          <button className="p-2 text-maincol bg-white rounded-md font-semibold">
            Corporate Office 1
          </button>
          <div className="flex mt-5">
            <div>
              <img src={locin} alt="call inner logo" className="w-10" />
            </div>
            <div>
              <p className="text-md text-white">
                4th floor, Westminster, 108, Dr.Radhakrishnan Salai, Mylapore –
                600004
              </p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={callin} alt="call inner logo" className="w-4" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> +91 44 24993989</p>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
              <img src={mailin} alt="call inner logo" className="w-5" />
            </div>
            <div>
              <p className="text-md text-white ml-4"> info@cpcdiagnostics.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10 p-2 grid grid-cols-12 w-full shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.861133984942!2d80.26881877409734!3d13.044509887277567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a332f90569%3A0x19f78dfd7d90407f!2sCPC%20Diagnostics%20Pvt%20Ltd%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1721712297906!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="w-full h-96 col-span-12"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
