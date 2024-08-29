import React, { useState } from "react";
import "./contactUs.css";
import video from "../../Video/contact.mp4";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const config = {
    SecureToken: "d456f794-9d45-4b2c-b0d1-2251fbec18fc",
    To: "boggy@yopmail.com",
    From: formData.email,
    Subject: formData.message,
    Body: formData.name,
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (window.Email) {
      window.Email.send(config).then(() => alert("sent"));
    }
  };

  return (
    <div className="p-4 lg:p-5 lg:h-[100vh] bg-black mb-10 flex justify-center items-center lg:mt-20">
      <div className="lg:h-[85vh] h-auto w-full lg:w-[85vw] bg-light-green rounded-xl relative flex flex-col lg:flex-row overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0 rounded-xl"></div>
        <div className="relative z-10 md:p-5 lg:w-1/2 flex flex-col justify-center items-center text-center">
          <p className="font-bold text-white text-lg md:text-3xl z-10 font-poppins">
            Let's Get in Touch
          </p>
          <p className="md:text-xl text-white mt-2 mb-2">
            We're here to assist you with any questions or concerns. Reach out
            to us and we'll respond as soon as we can.
          </p>
        </div>
        <div className="relative z-10 px-2 lg:w-1/2 flex flex-col gap-4 items-center md:mt-10 lg:mt-0">
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[30vw] flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-gray-800"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-gray-800"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-gray-800"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Have anything to say..."
              className="placeholder:text-white h-[20vh] w-full pt-2 md:text-xl box-border outline-none p-3 rounded-lg text-white bg-gray-800"
              required
            ></textarea>
            <div className="flex items-center justify-center">
              <button type="submit" className="btn-53">
                <div className="original text-lg">Send</div>
                <div className="letters text-lg">
                  <span>S</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
