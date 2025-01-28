import React, { useState, useRef, useEffect } from "react";
import contbanner from "../../assets/image/contact-us-banner.png";
import call from "../../assets/image/call.png";
import mail from "../../assets/image/mail.png";
import loc from "../../assets/image/location.png";
import callin from "../../assets/image/call.png";
import callform from "../../assets/image/callform.png";
import mailin from "../../assets/image/mailin.png";
import locin from "../../assets/image/loc.png";
import itrack from "../../assets/image/i-track-logo.png";
import Footer from "../../homepages/Footer/Footer";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Loader from "../Loader/Loader";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_iu5gh35";
    const templateId = "template_iiyp8bs";
    const publicKey = "xKnvcjJBWhEjVz7aJ";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: name,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        alert("ewd");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="container-fluid text-black">
          <div>
            <div>
              <img src={contbanner} alt="bannerimage" className="mx-auto" />
            </div>
            <header className="absolute md:top-24 lg:top-24 xl:top-24 md:ml-20 lg:ml-20 xl:ml-20 md:text-white  mt-4">
              <h1 className="md:text-5xl lg:text-5xl xl:text-5xl text-2xl md:ml-0 ml-14 text-left font-bold ">
                Want to know more?
                <br />
                We are here to HELP!!!
              </h1>
              <div className="md:w-40 lg:w-40 xl:w-40 md:h-1 lg:h-1 xl:h-1 md:ml-0 lg:ml-0 xl:ml-0 md:bg-white lg:bg-white xl:bg-white bg-white w-40 h-1 ml-28 mt-2"></div>
              <p className="text-white md:text-xl lg:text-xl xl:text-xl text-fontptag md:ml-0 md:text-left md:text-white  md:mt-2 ml-8">
                Our team is ready to hear from you
              </p>
            </header>
          </div>
          <div className="grid ">
            <h2 className="text-maincol md:text-4xl lg:text-4xl xl:text-4xl text-3xl text-center font-semibold md:mt-10 mt-40">
              Get in Touch
            </h2>
            <div className="grid grid-cols-12 gap-4 ">
              <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-12 p-4 shadow-md">
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 max-w-lg mx-auto"
                >
                  <div className="mb-4">
                    <label
                      className=" text-maincol  font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className=" text-maincol  font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className=" text-maincol  font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // Ensure this matches the placeholder in EmailJS
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    {/* <button
              type="submit"
              className="bg-maincol text-white hover:bg-maincol-dark  font-bold float-left py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Send"
            >
              Submit
            </button> */}
                    <input
                      type="submit"
                      className="bg-maincol text-white hover:bg-maincol-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </form>
              </div>

              <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-12 p-2 md:ml-20 xl:ml-20 lg:ml-20">
                <div className="flex">
                  <img src={callform} alt="call" className="w-auto mt-16" />
                  <div className="mt-16 ml-2">
                    <h2 className="text-maincol font-semibold text-xl">
                      Talk to us
                    </h2>
                    <p className="text-black hover:underline font-medium transition-all   hover:scale-105 ">
                      <a href="tel:+91 87544 68400">+91 44 2499 3989</a>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <img src={mail} alt="call" className="w-auto mt-16" />
                  <div className="mt-16 ml-2">
                    <h2 className="text-maincol font-semibold text-xl text-left">
                      Mail Us
                    </h2>
                    <p className="text-black hover:underline font-medium transition-all  hover:scale-105">
                      <a href="mailto:agappe@agappe.in">
                        info@cpcdiagnostics.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={loc} alt="call" className="w-auto mt-16" />
                  </div>
                  <div className="mt-16 ml-2">
                    <h2 className="text-maincol font-semibold text-xl text-left">
                      Registered Address:
                    </h2>
                    <p className="text-black hover:underline font-medium transition-all  hover:scale-105">
                      <a href="https://maps.app.goo.gl/oEkVRZDJzPhwdo526">
                        V-9, 5th Floor, Gokul Tower, No.9 & 10, CP Ramaswamy
                        Road, <br /> Alwarpet, Chennai-600 018.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-cols-12 mt-16 bg-gray-50 gap-5 p-20">
            <div className="">
              <img
                src={itrack}
                alt="itrack logo"
                className="md:w-4/6 lg:w-4/6 xl:w-4/6 w-full"
              />
            </div>
            <div className="">
              <h3 className="text-maincol text-3xl font-semibold">
                Toll Free Number
              </h3>
              <p className="text-black text-lg mt-3">For Support Dial </p>
              <a href="" className="text-lg">
                <p className="text-white bg-maincol p-1 w-44 mt-3 text-center rounded-lg shadow-xl">
                  1800 571 1101
                </p>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 bg-gray-200 p-5">
            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7">
              <button className="p-2 bg-maincol rounded-md font-semibold text-white w-full h-20">
                Corporate Office{" "}
              </button>
              <div className="flex mt-5">
                <div className="flex flex-row justify-around items-start gap-4 ">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <a
                    href="https://maps.app.goo.gl/c6JHYYx4K3oZkvta7"
                    className="hover:opacity-80 hover:scale-105 transition-all "
                  >
                    <p className="text-black ">
                      New no 70/6, Old No. 108/6, 4th Floor, Westminster, Dr.
                      Radhakrishnan Salai, Mylapore, Chennai - 600 004
                    </p>
                  </a>
                </div>
                <div></div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around  gap-2 items-center">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+91 44 23460168"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className=" text-black  ml-2"> +91 44 23460168</p>
                    </a>
                    <a
                      href="tel:+91 44 23460169"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="  text-black ml-2"> +91 44 23460169</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className=" flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:sales@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2">
                        {" "}
                        sales@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Central Technical Support & Supply Chain Operations
              </button>
              <div className="flex mt-5">
                <div className=" flex flex-row justify-around items-start gap-4">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="https://maps.app.goo.gl/M3rR8hL7Yfv4LeHg7"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black ">
                        49/1(41-49/1), Perumal Koil South Maada Street,
                        Villivakkam, Chennai-600 049 <br /> GST: 33AAACC3142NIZV
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+91 44 23460161"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 44 23460161</p>
                    </a>
                    <a
                      href="tel:+91 44 23460162"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 44 23460162</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:distribution@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2">
                        {" "}
                        distribution@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Reagents & Instrument Manufacturing Facilities
              </button>
              <div className="flex mt-5">
                <div className=" flex flex-row justify-around items-start gap-4">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="https://maps.app.goo.gl/M3rR8hL7Yfv4LeHg7"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black ">
                        49/1(41-49/1), Perumal Koil South Maada Street,
                        Villivakkam, Chennai-600 049
                      </p>
                    </a>
                  </div>
                </div>
              </div>
       <br />
              <div className="flex flex-col mt-4">
                <div className="flex flex-row items-center gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex flex-col ">
                    <a
                      href="tel:+91 44 23821908"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 44 23821908</p>
                    </a>
                    <a
                      href="tel:+91 44 23821928"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 44 23821928</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:info@cpcmedsyz.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2"> info@cpcmedsyz.in</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Kochi
              </button>
              <div className="flex mt-5">
                <div className="flex flex-row justify-around items-start gap-2">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="#"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black  ">
                        C/O.M/S.SIVAKRIPA ASSOCIATES, 1. Floor, 61/3388, Kalpaka
                        Building, Ravipuram Road, Ernakulam, Kerala, 682016 <br /> GST:
                        32AAACC3142N2ZW
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex  mt-2">
                <div className="flex flex-row justify-around items-start gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex">
                    <a
                      href="tel:+91 0484 4873771"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 0484 4873771</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:cpckoc@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-3">
                        {" "}
                        cpckoc@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2  border-maincol p-8 rounded-lg text-center w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Hyderabad
              </button>
              <div className="flex mt-5">
                <div className=" flex flex-row justify-around items-start gap-2">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="#"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black text-left ">
                        C/O.TREE TOP HEALTHCARE H.No. 10/1, GF, Syed Jala
                        Garden, West Marredpally, Secunderabad-500 026 Telangana
                        India <br /> GST: 36AAACC3142NIZP
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-start gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex">
                    <a
                      href="tel:+91 040 42100330"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 040 42100330</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:cpchyd@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-3">
                        {" "}
                        cpchyd@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Bangalore
              </button>
              <div className="flex mt-5">
                <div className="flex flex-row justify-around items-start gap-2">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="#"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black  ">
                        C/O.TREE TOP HEALTHCARE No.51, 1 Floor Portion-C S.LV
                        Godown N.T.Y Layout, Mysore Road Bangalore-560026 <br /> GST:
                        29AAACC3142N2ZJ
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+91 9740039501"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black  ml-2"> +91 9740039501</p>
                    </a>
                    <a
                      href="tel:+91 080 26758685"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black ml-2"> +91 080 26758685</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="  flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:cpcbir@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2">
                        {" "}
                        cpcbir@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Mumbai
              </button>
              <div className="flex mt-5">
                <div className="flex flex-row justify-around items-start gap-2">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="#"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black  ">
                        C/O.TREETOP HEALTHCAREPVT LTD RH No 212/221 Ground Floor
                        CST No 19/624, Near Best Bus Colony, Gorai-1, Borivali
                        West, Mumbai 400092 <br /> GST: 27AAACC3142NIZO
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+91 7977502827"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 7977502827</p>
                    </a>
                    <a
                      href="tel:+91 9137103149"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2"> +91 9137103149</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:cpcmum@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2">
                        {" "}
                        cpcmum@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Delhi{" "}
              </button>
              <div className="flex mt-5">
                <div className="flex flex-row justify-around items-start">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="#"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black ml-2 ">
                        C/O A B ENTERPRISES C-41, First Floor, Block 3, Dayal
                        Estate, Okhla Industrial Area, Phase - 2 New
                        Delhi-110020 <br /> GST: 07AAACC3142N1ZQ
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-8">
                <div className=" flex flex-row justify-around items-center gap-2">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+91 011 4118133031"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2">+91 011 4118133031</p>
                    </a>
                    <a
                      href="tel:+91 011 4118133032"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2">+91 011 4118133032</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className=" flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:cpcdelhi@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2">
                        cpcdelhi@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-maincol p-8 rounded-lg w-full h-full leading-7 ">
              <button className="p-2 bg-maincol  rounded-md font-semibold text-white w-72 h-20 text-center">
                Kolkata{" "}
              </button>
              <div className="flex mt-5">
                <div className="flex flex-row justify-around items-start gap-2">
                  <img src={locin} alt="call inner logo" className="w-7 h-7" />
                  <div>
                    <a
                      href="#"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black">
                        C/O.EXIM DISTRIBUTORS PVT. LTD 4-B, 1st Floor, Dr.
                        Rajendra Road, Kolkata 700 020, West Bengal <br /> GST NO:
                        19AAACC3142NIZL
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-16">
                <div className="flex flex-row justify-around items-center">
                  <img src={callin} alt="call inner logo" className="w-4" />
                  <div className="flex">
                    <a
                      href="tel:+91 6289766828"
                      className="hover:opacity-80 hover:scale-105 transition-all underline underline-offset-2"
                    >
                      <p className="text-black   ml-2">+91 6289766828</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex flex-row justify-around items-center">
                  <img src={mailin} alt="call inner logo" className="w-5" />
                  <div>
                    <a
                      href="mailto:cpckolkata@cpcdiagnostics.in"
                      className="hover:opacity-80 hover:scale-105 transition-all "
                    >
                      <p className="text-black   ml-2">
                        cpckolkata@cpcdiagnostics.in
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="font-poppins">
            <h2 className="text-maincol text-4xl mt-8 font-semibold font-poppins">
              Registered Office
            </h2>
            <div className="flex justify-around items-center mt-8 border-maincol border-2 pt-8 pb-8 rounded-3xl">
              <div className="flex flex-row justify-around items-start gap-2">
                <div>
                  <a
                    href="https://maps.app.goo.gl/TFhcwZNwQWMVNCgj8"
                    className="hover:opacity-80 hover:scale-105 transition-all "
                  >
                    <div className="flex gap-1">
                      <FaLocationDot size={28} color="#02a884" />
                      <p
                        className="text-black font-poppins"
                        style={{ fontSize: "1rem", color: "black" }}
                      >
                        V-9, 5th Floor, Gokul Tower, <br /> No.9 & 10, CP
                        Ramaswamy <br /> Road, Alwarpet, <br /> Chennai-600 018.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-around items-center">
                <IoCall size={28} color="#02a884" />
                <div>
                  <a
                    href="tel:+91 44 2499 3989"
                    className="hover:opacity-80 hover:scale-105 transition-all "
                  >
                    <p
                      className="font-poppins  ml-4"
                      style={{ fontSize: "1rem", color: "black" }}
                    >
                      +91 44 2499 3989
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-around items-center">
                <IoMdMail size={28} color="#02a884" />
                <div>
                  <a
                    href="mailto:info@cpcdiagnostics.in"
                    className="hover:opacity-80 hover:scale-105 transition-all "
                  >
                    <p
                      className="font-poppins  text-black ml-4"
                      style={{ fontSize: "1rem", color: "black" }}
                    >
                      info@cpcdiagnostics.in
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

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
      )}
    </>
  );
}

export default Contact;
