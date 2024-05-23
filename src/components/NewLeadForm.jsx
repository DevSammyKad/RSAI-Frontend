import React, { useState, useEffect } from 'react';

import { RiCloseFill } from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const NewLeadForm = ({ closeModal, initialData }) => {
  const LeadAPI = import.meta.env.VITE_LEAD_API;
  const [formData, setFormData] = useState({
    leadName: '',
    leadWhatsAppNumber: '',
    leadEmail: '',
    leadGender: '',
    leadCreatedAt: '',
    leadCourse: '',
    leadStatus: '',
    leadNote: '',
    leadAssignedTo: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // If the input is the date field, handle it separately
    if (id === 'leadCreatedAt') {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      setFormData((prevData) => ({
        ...prevData,
        leadCreatedAt: formattedDate,
      }));
    } else {
      // For other inputs, update the state as usual
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  useEffect(() => {
    if (initialData) {
      // Convert leadCreatedAt and leadUpdatedAt to "yyyy-MM-dd" format
      const formattedCreatedAt = new Date(initialData.leadCreatedAt)
        .toISOString()
        .split('T')[0];
      const formattedUpdatedAt = new Date(initialData.leadUpdatedAt)
        .toISOString()
        .split('T')[0];

      setFormData({
        leadName: initialData.leadName || '',
        leadWhatsAppNumber: initialData.leadWhatsAppNumber || '',
        leadEmail: initialData.leadEmail || '',
        leadGender: initialData.leadGender || '',
        leadCreatedAt: formattedCreatedAt || '', // Set formatted created date
        leadUpdatedAt: formattedUpdatedAt || '', // Set formatted updated date
        leadCourse: initialData.leadCourse || '',
        leadStatus: initialData.leadStatus || '',
        leadNote: initialData.leadNote || '',
        leadAssignedTo: initialData.leadAssignedTo || '',
      });
    } else {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      setFormData((prevData) => ({
        ...prevData,
        leadCreatedAt: formattedDate,
      }));
    }
  }, [initialData]);

  // Validation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = initialData
      ? `${LeadAPI}update/${initialData._id}`
      : `${LeadAPI}create`;

    try {
      const method = initialData ? 'patch' : 'post';
      const response = await axios[method](url, formData);
      toast.success(
        initialData
          ? 'Lead updated successfully!'
          : 'Lead submitted successfully!'
      );
      closeModal(true);
      console.log('Response Data:', response.data);
    } catch (error) {
      console.error('Error submitting lead:', error);
      const errorMessage =
        error.response?.data?.message ||
        'Error submitting lead. Please try again.';
      toast.error(errorMessage);
    } // Add logic to send the data to the server or perform other actions
  };

  return (
    <div>
      <div className=" fixed  inset-0 z-10 bg-black bg-opacity-5 backdrop-blur-sm  flex items-center justify-center">
        <div className="bg-white border border-border-stroke shadow-xl rounded-lg w-[1000px] h-[90%] overflow-y-auto p-10 flex flex-col mt-1">
          <div className="flex justify-between items-center">
            <h1 className="my-2 font-semibold text-xl text-blue-500 ">
              Add New Lead
            </h1>
            <button
              className=" only:text-red-800 font-semibold text-lg outline-none rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={closeModal}
            >
              <RiCloseFill className="w-8 h-8 text-[#45474a] " />
            </button>
          </div>
          <p className="my-4 font-semibold text-base text-[#45474a]">
            Basic Details of Lead
          </p>
          <hr className="mb-8 border border-border-stroke" />
          <form action="">
            <div className="flex w-full gap-7">
              <div className="w-full">
                <label
                  htmlFor="leadName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lead Name
                </label>
                <input
                  type="text"
                  id="leadName"
                  required
                  value={formData.leadName}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="leadWhatsAppNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lead whatsapp Contact
                </label>
                <input
                  type="tel"
                  id="leadWhatsAppNumber"
                  required
                  value={formData.leadWhatsAppNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex w-full gap-7">
              <div className="w-full">
                <label
                  htmlFor="leadEmail"
                  className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lead Email
                </label>
                <input
                  type="email"
                  id="leadEmail"
                  required
                  value={formData.leadEmail}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-full">
                <label
                  className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="leadStatus"
                >
                  Select leadStatus
                </label>
                <select
                  id="leadStatus"
                  required
                  value={formData.leadStatus}
                  onChange={handleChange}
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="New" defaultValue>
                    New
                  </option>
                  <option value="Confused">Confused</option>
                  <option value="Interested">Interested</option>
                  <option value="Not Interested">Not Interested</option>
                  <option value="Onboard">Onboard</option>
                  <option value="Close">Close</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="leadAssignedTo"
                  className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lead Assigned To
                </label>

                <select
                  id="leadAssignedTo"
                  required
                  value={formData.leadAssignedTo}
                  onChange={handleChange}
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="Raj Sutar" defaultValue>
                    Raj Sutar
                  </option>
                  <option value="Employ-1">Employ-1</option>
                  <option value="Employ-2">Employ-2</option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-7">
              <div className="w-1/2">
                <label
                  className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="leadGender"
                >
                  Select Gender
                </label>
                <div className="flex gap-2 justify-start items-center">
                  <input
                    type="radio"
                    id="leadGender"
                    value="Male"
                    checked={formData.leadGender === 'Male'}
                    onChange={handleChange}
                  />
                  <label>Male</label>

                  <input
                    type="radio"
                    id="leadGender"
                    value="Female"
                    checked={formData.leadGender === 'Female'}
                    onChange={handleChange}
                  />
                  <label>Female</label>

                  <input
                    type="radio"
                    id="leadGender"
                    value="Other"
                    checked={formData.leadGender === 'Other'}
                    onChange={handleChange}
                  />
                  <label>Other</label>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="leadCreatedAt"
                    className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="leadCreatedAt"
                    required
                    value={formData.leadCreatedAt}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="leadCourse"
                >
                  Select Course
                </label>
                <select
                  id="leadCourse"
                  required
                  value={formData.leadCourse}
                  onChange={handleChange}
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="Cube" defaultValue>
                    Cube
                  </option>
                  <option value="Chess">Chess</option>
                  <option value="Rsai Cube">Rsai Cube</option>
                </select>
              </div>
            </div>

            {/* // //// second Div for selection */}
            <div className="flex w-full gap-7"></div>
            <label
              className="
              block
              mt-4
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-white"
              htmlFor="leadNote"
            >
              Note
            </label>
            <textarea
              className="outline-none mt-4 font-[#0A1629] cursor-pointer border border-border-stroke py-5 px-7 rounded-lg  focus:ring-blue-500 focus:border-blue-500 w-full"
              name="help-sub"
              rows="5"
              id="leadNote"
              required
              value={formData.leadNote}
              onChange={handleChange}
              placeholder="Write basic Note"
            ></textarea>
            <button
              className="bg-[#3F8CFF] py-3 px-5 rounded-lg  mx-auto mt-4 text-white font-semibold outline-none"
              onClick={handleSubmit}
            >
              Submit New Lead
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default NewLeadForm;
