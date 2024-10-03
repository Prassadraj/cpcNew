// PopupForm.js
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoDocumentAttachSharp } from "react-icons/io5";

const PopupForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        {/* <h2 className="text-xl font-semibold mb-4 text-center ">Apply Now</h2> */}
        <p className="text-center text-xl font-semibold">
          Tell us what you need, and we'll help you get quotes
        </p>
        <p className="text-center mt-2 mb-2">Post Buy Requirement</p>
        <form>
          <div className="mb-4 mt-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              defaultValue="TurboChem Magna Fully Automated"
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="Name"
              placeholder="Name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="email"
              placeholder="Pincode"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="email"
              placeholder="Your Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="Company Name"
              placeholder="Your Number"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2"><span className='flex gap-2'><IoDocumentAttachSharp size={20}/>Attach Resume </span></label>
            <input className="border rounded w-full py-2 px-3 text-gray-700" type="file" placeholder="Your Email" />
          </div> */}
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
