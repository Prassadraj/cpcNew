import React, { useState } from "react";

const Popupads = ({ isVisible1, onClose1, onSubmitForm }) => {
  const [frequency, setFrequency] = useState("one-time");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.number) {
      onSubmitForm(); // Trigger showing the number in the parent component
      onClose1(); // Close the popup after submission
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  if (!isVisible1) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <p className="text-center text-xl font-semibold">
          Enter your details to View Number
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-around mt-4">
            <h2 className="text-black text-lg text-center">Purpose --- </h2>

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
              <span className="ml-2">I Want to buy</span>
            </label>

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
              <span className="ml-2">I want to sell</span>
            </label>
          </div>

          <div className="mb-4 mt-4">
            <label htmlFor="productname">Product Name</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              defaultValue="TurboChem Magna Fully Automated"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number">
              Mobile Number <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-red-500 hover:text-red-700 py-2 px-4"
              onClick={onClose1}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popupads;
