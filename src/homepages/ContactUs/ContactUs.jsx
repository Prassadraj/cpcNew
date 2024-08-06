import React from "react";
import "./contactUs.css";
import video from "../../Video/contact.mp4";

function ContactUs() {
  return (
    <div className="p-4 lg:p-5 lg:h-[100vh] bg-black mb-10 flex justify-center items-center">
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
          <input
            type="text"
            className="w-full lg:w-[30vw] h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-gray-800"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full lg:w-[30vw] h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-gray-800"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="w-full lg:w-[30vw] h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-gray-800"
            placeholder="Phone Number"
          />
          <textarea
            placeholder="Have anything to say..."
            className="placeholder:text-white h-[20vh] w-full lg:w-[30vw] pt-2 md:text-xl box-border outline-none p-3 rounded-lg text-white bg-transparent"
          ></textarea>
          <div className="flex items-center justify-center">
            <button className="btn-53">
              <div className="original text-lg">Send</div>
              <div className="letters text-lg">
                <span>S</span>
                <span>e</span>
                <span>n</span>
                <span>d</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
