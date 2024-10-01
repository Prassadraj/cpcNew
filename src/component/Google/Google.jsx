import React, { useState } from "react";
import div1image from "../../assets/image/dnynacount.png";
import product1 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product1.jpg";
import product2 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product2.jpg";
import product3 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product3.jpg";
import product4 from "../AllDatas/ProductImages/Biochemistry/MAGNA/product4.jpg";
import product5 from "../AllDatas/ProductImages/Biochemistry/NEO/product1.jpg";
import product6 from "../AllDatas/ProductImages/Biochemistry/NEO/product2.jpg";
import product7 from "../AllDatas/ProductImages/Biochemistry/NEO/product3.jpg";
import product8 from "../AllDatas/ProductImages/Biochemistry/NEO/product4.jpg";
import product9 from "../AllDatas/ProductImages/Biochemistry/PLUS/product1.png";
import product10 from "../AllDatas/ProductImages/Biochemistry/PLUS/product2.png";
import product11 from "../AllDatas/ProductImages/Biochemistry/PRIME/product1.jpg";
import product12 from "../AllDatas/ProductImages/Biochemistry/PRIME/product2.jpg";
import { MdVerified } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaBucket } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import Footer from "../../homepages/Footer/Footer";

function Google() {
  const [frequency, setFrequency] = useState("one-time");

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="div1">
          <img src={div1image} alt="" />
        </div>
        <div className="div2 p-2  ">
          <h2 className="text-black text-left text-2xl mt-4">
            Fully Automatic Immunoassay Hormones Analyzer For T3 T4 Tsh
          </h2>

          <hr className="mt-2 " />
          <div className="flex justify-between">
            <h2 className="text-black text-2xl mt-4">Price: 105000.00 INR</h2>
            <button className="border-maincol border-2  p-2  rounded-full mt-4 hover:bg-maincol hover:text-white">
              Get latest price
            </button>
          </div>
          <div className="leading-9">
            <p>(100000.00 INR + 5% GST)</p>
            <p className="font-semibold text-lg">
              MRP:<span className="font-light"> 265000.00 INR / Piece </span>
            </p>
            <p className="font-semibold text-lg">
              Weight:<span className="font-light"> 6.00 Kilogram </span>
            </p>
            <p className="font-semibold text-lg">
              1 Pack Contains<span className="font-light"> 1</span>
            </p>
            <p className="font-semibold text-lg">
              Minimum Pack Size<span className="font-light"> 1</span>
            </p>
          </div>
          <div className="flex gap-2  mt-2  text-lg">
            <MdVerified color="#02a884" className="mt-1" />
            <p>In Stock</p>
          </div>
          <table className="border border-collapse mt-4">
            <tr>
              <td className="border border-collapse p-2  w-1/2 ">Weight</td>
              <td className="border border-collapse p-2  ">6 Kilograms (kg)</td>
            </tr>
            <tr>
              <td className="border border-collapse p-2 ">Color</td>
              <td className="border border-collapse p-2 ">Grey and Blue</td>
            </tr>
            <tr>
              <td className="border border-collapse p-2 ">Product Type</td>
              <td className="border border-collapse p-2 ">
                Fully Automatic Immunoassay Hormones Analyzer
              </td>
            </tr>
            <tr>
              <td className="border border-collapse p-2 ">Machine Weight</td>
              <td className="border border-collapse p-2 ">6 Kilograms (kg)</td>
            </tr>
            <tr>
              <td className="border border-collapse p-2 ">Payment Terms</td>
              <td className="border border-collapse p-2 ">
                Cash Against Delivery (CAD), Cash on Delivery (COD), Cash in
                Advance (CID), Cheque
              </td>
            </tr>
          </table>
          <div className="mt-2 ">
            <a href="" className="underline ">
              View Product details
            </a>
          </div>

          <div className="flex justify-between gap-2  mt-4">
            <button className="border-maincol border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2  text-xl text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
            <button className="border-maincol border-2  p-2  rounded-full flex justify-center items-center gap-2  text-xl w-full">
              Buy Now <FaBucket color="#02a884" />{" "}
            </button>
          </div>
        </div>

        <div className="bg-gray-200 p-4">
          <h2 className="text-black text-left text-2xl">Seller Details</h2>
          <a href="">
            <div className="flex gap-4 items-center mt-4">
              <div>
                <p className="border-green-400 border-2  p-4 rounded-lg bg-gray-400 text-white mt-2 ">
                  CPC
                </p>
              </div>
              <div>
                <p className="text-xl text-black">CPC Diagnostics</p>
              </div>
            </div>
          </a>

          <div className="flex gap-2  text-xl mt-7">
            <IoPersonOutline />
            <p>Proprietor</p>
          </div>
          <p className="mt-2  text-lg">Mr. Asif iqbal Iqbal</p>
          <div className="flex text-lg mt-4 items-center gap-2 ">
            <FaLocationDot /> <p>Address</p>
          </div>
          <p className="mt-2 ">
            29/1, Doctor Lane, Entally, Kolkata, West Bengal, 700014, India
          </p>
          <div className="mt-4">
            <a href="" className="underline">
              immunoassay analyzer in Kolkata
            </a>
          </div>

          <div className="flex mt-4 gap-2 ">
            <a href="">
              {" "}
              <button className="border-maincol border-2  p-2  rounded-full flex justify-center items-center gap-2  text-sm w-full">
                View Number <FaArrowCircleRight />{" "}
              </button>
            </a>
            <a href="">
              {" "}
              <button className="border-maincol border-2  p-2  rounded-full flex justify-center items-center gap-2  text-sm w-full">
                Contact Seller <FaArrowCircleRight />
              </button>
            </a>
          </div>
          <div className="text-right mt-4">
            <a href="" className="underline">
              <p className="text-black">Report incorrect details</p>
            </a>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div class="grid grid-cols-3 gap-4 mt-4">
        <div class="col-span-2  ml-4">
          <h2 className="text-xl text-left text-black">Product Overview</h2>
          <p className="mt-2 ">Key Features</p>
          <p className="mt-4">Condition: New </p>
          <p>Application: Clinical, Path Lab, Hospital </p>
          <p>Automation: Fully Automatic </p>
          <p>Portable: Yes</p>
          <hr className="mt-4" />

          <h2 className="text-2xl font-bold mb-4 text-black text-left">
            Product Specifications
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="table-auto w-full ">
              <tbody>
                <tr className="border-b ">
                  <td className="p-4 ">Weight</td>
                  <td className="p-4 font-semibold">6 Kilograms (kg)</td>
                  <td className="p-4">Color</td>
                  <td className="p-4 font-semibold">Grey and Blue</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Product Type</td>
                  <td className="p-4 font-semibold">
                    Fully Automatic Immunoassay Hormones Analyzer
                  </td>
                  <td className="p-4 ">Machine Weight</td>
                  <td className="p-4 font-semibold">6 Kilograms (kg)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Payment Terms</td>
                  <td className="p-4 font-semibold">
                    Cash Against Delivery (CAD), Cash on Delivery (COD), Cash in
                    Advance (CID), Cheque
                  </td>
                  <td className="p-4 ">Delivery Time</td>
                  <td className="p-4 font-semibold">10-15 Days</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Main Domestic Market</td>
                  <td className="p-4 font-semibold">All India</td>
                  <td className="p-4 ">Pkg Box Breadth</td>
                  <td className="p-4 font-semibold">30.00 in</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Mop</td>
                  <td className="p-4 font-semibold">1</td>
                  <td className="p-4 ">Min Quantity</td>
                  <td className="p-4 font-semibold">1</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Product Unit</td>
                  <td className="p-4 font-semibold">1 Piece/Pieces</td>
                  <td className="p-4 ">Shipping Rate</td>
                  <td className="p-4 font-semibold">4.00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Max Quantity</td>
                  <td className="p-4 font-semibold">10</td>
                  <td className="p-4 ">MRP</td>
                  <td className="p-4 font-semibold">265000.00 INR</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">GSTIN</td>
                  <td className="p-4 font-semibold">5%</td>
                  <td className="p-4 ">Color</td>
                  <td className="p-4 font-semibold">Grey and Blue</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 ">Pkg Box Length</td>
                  <td className="p-4 font-semibold">20.00 in</td>
                  <td className="p-4 ">Stock Quantity</td>
                  <td className="p-4 font-semibold">5</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Weight</td>
                  <td className="p-4 font-semibold">6.00 Kilogram</td>
                  <td className="p-4 ">Unit Type</td>
                  <td className="p-4 font-semibold">Piece/Pieces</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Shipping Type</td>
                  <td className="p-4 font-semibold">order_percent</td>
                  <td className="p-4 ">Brand Name</td>
                  <td className="p-4 font-semibold">Rubi Lab</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Pkg Box Height</td>
                  <td className="p-4 font-semibold">15.00 in</td>
                  <td className="p-4 ">Packsize</td>
                  <td className="p-4 font-semibold">1</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Price</td>
                  <td className="p-4 font-semibold">100000.00 INR (Approx.)</td>
                  <td className="p-4 ">Moq</td>
                  <td className="p-4 font-semibold">1</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Returnable</td>
                  <td className="p-4 font-semibold">No</td>
                  <td className="p-4 ">Currency</td>
                  <td className="p-4 font-semibold">INR</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Price Type</td>
                  <td className="p-4 font-semibold">fixed</td>
                  <td className="p-4 ">Minimum Ordered Packs</td>
                  <td className="p-4 font-semibold">1</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 ">Minimum Order Quantity</td>
                  <td className="p-4 font-semibold">1</td>
                  <td className="p-4 "></td>
                  <td className="p-4 font-semibold"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl mt-8">
            Explore in hindi -{" "}
            <a href="">
              {" "}
              T3 T4 TSH के लिए पूरी तरह से स्वचालित इम्यूनोएसे हार्मोन एनालाइज़र
            </a>
          </p>

          <h2 className="text-black text-xl text-left mt-4">Company Details</h2>
          <p className="mt-4">
            <span className="font-semibold ">CPC Diagnostics Pvt. Ltd.</span> is
            a dedicated provider of products and services to the in-vitro
            diagnostics industry in India, Sri Lanka and Bangladesh. The
            experience and expertise that we have gained since we began in 1987
            have made us a respected and trusted organization. We derive our
            strength through enduring relationships with customers, based on our
            commitment to deliver valuable products and timely end-user support.
            Our motto is to grow our business on sustainable values,
            contributing to the well being of our customers, suppliers,
            technology partners and employees. The success of CPC Diagnostics
            owes a lot to its dynamic team of management, staff and advisers who
            together have worked to provide their customers with outstanding
            support be it Products, Post-Sales Service or Guidance.{" "}
          </p>

          <div className="flex mt-4 gap-32">
            <div className="flex gap-3">
              <MdBusinessCenter
                size={40}
                color="#fff"
                className="bg-green-400 p-2  rounded-full"
              />
              <div className="text-sm">
                <h3>Business Type </h3>
                <p>Distributor, Supplier</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MdBusinessCenter
                size={40}
                color="#fff"
                className="bg-green-400 p-2  rounded-full"
              />
              <div className="text-sm">
                <h3>Establishment </h3>
                <p>2015</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <MdBusinessCenter
              size={40}
              color="#fff"
              className="bg-green-400 p-2  rounded-full"
            />
            <div className="text-sm">
              <h3>Working Days </h3>
              <p>Monday To Sunday</p>
            </div>
          </div>

          {/* Related products */}
          <h2 className="text-black text-left text-xl mt-10">
            Related Products
          </h2>
          <div className="product-container grid grid-cols-4 mt-4 gap-3">
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product1} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem Magna
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product2} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem Magna
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product3} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem Magna
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product4} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem Magna
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            {/* second section product */}

            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product5} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem NEO
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product6} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem NEO
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product7} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem NEO
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product8} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem NEO
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            {/* third section product */}
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product9} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PLUS
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product10} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PLUS
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product11} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PRIME
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product12} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PRIME
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
            {/* More Products From This Seller */}
          </div>

          <h2 className="text-black text-left text-xl mt-10">
            More Products From This Seller
          </h2>
          <div className="product-container grid grid-cols-4 mt-4 gap-3">
            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product2} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PRIME
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>

            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product1} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PRIME
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>

            <div className="border border-green-400 p-2 shadow-md rounded-md">
              <img src={product3} alt="" className="h-44" />
              <div>
                <h2 className="text-black text-left mt-4 text-lg">
                  TurboChem PRIME
                </h2>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </p>
                <p className="text-sm mt-2 ">
                  Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
                </p>
                <p className="text-sm mt-2  font-semibold">
                  RAJ BIOSIS PRIVATE LIMITED
                </p>
                <div className="flex justify-start items-center mt-2 ">
                  <FaLocationDot />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-black text-left text-xl mt-10">
            More Products From This Seller
          </h2>
          <div className="product-container grid grid-cols-4 mt-4 gap-4">
            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product1} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Magna</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product2} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Neo</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product3} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Prime</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product4} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Plus</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product5} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">Turbostart Plus</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product6} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">Heamtology</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product7} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">Clinical Microbiology</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product8} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">Point of Care</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product9} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Magna</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product10} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Magna</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product11} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Magna</h2>
              </div>
            </a>

            <a href="">
              <div className="flex gap-2  justify-center items-center border-2  p-4 hover:bg-slate-100 shadow-sm rounded-lg">
                <img src={product12} alt="" className="w-20 h-16" />
                <h2 className="text-black text-left ">TurboChem Magna</h2>
              </div>
            </a>
          </div>
        </div>

        <div class="sticky top-10 shadow-md p-4">
          <h2 className="text-black text-2xl text-center mt-8 ">
            Get the Best Price for
          </h2>

          <p className="mt-8 text-sm">
            Fully Automatic Immunoassay Hormones Analyzer For T3 T4 Tsh Machine
            Weight: 6 Kilograms (Kg) Rubi Lab
          </p>
          <hr className="mt-4" />

          <textarea
            name="message"
            id=""
            className="w-full rounded-md mt-4 h-28 border"
            defaultValue="Hi, I am interested in Fully Automatic Immunoassay Hormones Analyzer For T3 T4 Tsh Machine Weight: 6  Kilograms (Kg)."
          ></textarea>

          <h3 className="mt-4 text-lg">Requirement Frequency</h3>
          <div className="flex">
            {/* Custom Radio Button for One-Time */}
            <label className="flex items-center mr-4 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="frequency"
                  value="one-time"
                  checked={frequency === "one-time"}
                  onChange={handleFrequencyChange}
                  className="absolute opacity-0 cursor-pointer"
                />
                <div className="w-6 h-6 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
                  {frequency === "one-time" && (
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  )}
                </div>
              </div>
              <span className="ml-2">One-Time</span>
            </label>

            {/* Custom Radio Button for Recurring */}
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="frequency"
                  value="recurring"
                  checked={frequency === "recurring"}
                  onChange={handleFrequencyChange}
                  className="absolute opacity-0 cursor-pointer"
                />
                <div className="w-6 h-6 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
                  {frequency === "recurring" && (
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  )}
                </div>
              </div>
              <span className="ml-2">Recurring</span>
            </label>
          </div>
          <div className="flex ">
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white  ">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-black text-left text-2xl mt-14 ml-2 ">
        Recommended Products
      </h2>

      <div className="grid grid-cols-5 gap-4 p-2  mt-8">
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product1} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product2} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product3} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product4} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product5} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product6} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
        <div className="border border-green-400 p-2 shadow-md rounded-md">
          <img src={product7} alt="" className="h-44" />
          <div>
            <h2 className="text-black text-left mt-4 text-lg">
              TurboChem PRIME
            </h2>
            <p className="text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <p className="text-sm mt-2 ">
              Price - 420000 INR (Approx.) MOQ - 1 Piece/Pieces
            </p>
            <p className="text-sm mt-2  font-semibold">
              RAJ BIOSIS PRIVATE LIMITED
            </p>
            <div className="flex justify-start items-center mt-2 ">
              <FaLocationDot />
              <p>Jaipur, Rajasthan</p>
            </div>
            <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
              Send Inquiry <FiSend color="#fff" />{" "}
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-black text-left text-2xl mt-14 ml-2 ">
        Compare With Similar Products
      </h2>

      <table class="table-auto ">
        <thead>
          <tr>
            <th className=" w-25 text-xl text-center">Product Name</th>
            <th className="border-2 p-4">
              <img src={product1} alt="" className="w-full h-full" /> <br />
              <p>TurboChem Magna</p>
            </th>
            <th className="border-2 p-4">
              <img src={product2} alt="" className="w-full h-full" /> <br />
              <p>TurboChem Neo</p>
            </th>
            <th className="border-2 p-4">
              <img src={product3} alt="" className="w-full h-full" /> <br />
              <p>TurboChem Plus</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4 text-lg text-center">Buyer Feedback</td>
            <td className="border p-4 text-lg"></td>
            <td className="border p-4 text-lg"></td>
            <td className="border p-4 text-lg">3</td>
          </tr>
          <tr>
            <td className="border p-4 text-lg text-center">Response Rate </td>
            <td className="border p-4 text-lg "></td>
            <td className="border p-4 text-lg "></td>
            <td className="border p-4 text-lg ">93.85</td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">
              Minimum Order Quantity
            </td>
            <td className="border p-4 text-lg">1 Piece/Pieces</td>
            <td className="border p-4 text-lg">1 Unit/Units</td>
            <td className="border p-4 text-lg"></td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">
              Price Or Price Range
            </td>
            <td className="border p-4 text-lg ">100000.00 INR</td>
            <td className="border p-4 text-lg ">800000.00 INR</td>
            <td className="border p-4 text-lg "></td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">Machine Weight</td>
            <td className="border p-4 text-lg ">6 Kilograms (kg)</td>
            <td className="border p-4 text-lg ">125.00 Kilograms (kg)</td>
            <td className="border p-4 text-lg "></td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">Color</td>
            <td className="border p-4 text-lg ">Grey and Blue</td>
            <td className="border p-4 text-lg ">
              Industrial white and Dark Blue
            </td>
            <td className="border p-4 text-lg "></td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">Delivery Time</td>
            <td className="border p-4 text-lg ">10-15 Days</td>
            <td className="border p-4 text-lg ">7 Days</td>
            <td className="border p-4 text-lg "></td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">Payment Terms</td>
            <td className="border p-4 text-lg ">Cash Against Delivery (CAD)</td>
            <td className="border p-4 text-lg ">Cash in Advance (CID)</td>
            <td className="border p-4 text-lg "></td>
          </tr>

          <tr>
            <td className="border p-4 text-lg text-center">Sold By</td>
            <td className="border p-4 text-lg ">
              Rubi Lab Kolkata, West Bengal
            </td>
            <td className="border p-4 text-lg ">
              Ambay Enterprises Kolkata, West Bengal
            </td>
            <td className="border p-4 text-lg ">
              Deeksha Analytical Pvt Ltd Bengaluru, Karnataka
            </td>
          </tr>

          <tr>
            <td className="border p-4 text-lg "></td>
            <td className="border p-4 text-lg text-center">
              <a href="">
                {" "}
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </a>
            </td>
            <td className="border p-4 text-lg text-center">
              <a href="">
                {" "}
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </a>
            </td>
            <td className="border p-4 text-lg text-center">
              <a href="">
                {" "}
                <button className="border-maincol mt-3 border-2  p-2  rounded-full bg-maincol flex justify-center items-center gap-2   text-white w-full">
                  Send Inquiry <FiSend color="#fff" />{" "}
                </button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Google;
