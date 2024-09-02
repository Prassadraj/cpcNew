// PopupForm.js
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoDocumentAttachSharp } from "react-icons/io5";
import "./career.css";
const PopupForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-semibold mb-4 text-center ">Apply Now</h2>
        <p className="text-center">Will get back to you shortly</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="flex gap-2">
                <CgProfile size={20} /> Name
              </span>
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="flex gap-2">
                <MdMarkEmailRead size={20} />
                Email
              </span>
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="flex gap-2">
                <IoCall size={20} />
                Mobile Number
              </span>
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="email"
              placeholder="Your Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tell something about you
            </label>
            <textarea
              className="border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Tell something about you"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="flex gap-2">
                <IoDocumentAttachSharp size={20} />
                Attach Resume{" "}
              </span>
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="file"
              placeholder="Your Email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-red-500 hover:text-red-700 font-bold py-2 px-4"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
