import React, { useEffect, useState } from 'react';
import NewLeadForm from '../components/NewLeadForm';
import * as XLSX from 'xlsx';
import toast, { Toaster } from 'react-hot-toast';
import { useDebounce } from 'use-debounce';
import axios from 'axios';
import { IoMdMore } from 'react-icons/io';
import { FaFilter } from 'react-icons/fa6';
import { RiSearchLine } from 'react-icons/ri';
import useNetworkStatus from '../hooks/useNetworkStatus';
import { FaWhatsapp } from 'react-icons/fa6';

import { MdDeleteForever } from 'react-icons/md';
import { MdOutlineFileDownload } from 'react-icons/md';
import { LuClipboardEdit } from 'react-icons/lu';

const Leads = () => {
  const isOnline = useNetworkStatus();
  const [showModal, setShowModal] = useState(false);
  const [leadsData, setLeadsData] = useState([]);
  const [leadDataForUpdate, setLeadDataForUpdate] = useState(null);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredLeads, setFilteredLeads] = useState([]);

  const [debouncedSearchText] = useDebounce(searchText, 500);

  const LeadAPI = import.meta.env.VITE_LEAD_API;

  const handleClickMore = (index, event) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    setIsOpenMore(true);
  };

  useEffect(() => {
    const fetchAllLeadsData = async () => {
      try {
        const response = await axios.get(`${LeadAPI}get/`);
        setLeadsData(response.data.leads);
        setFilteredLeads(response.data.leads);
        console.log('Leads Data:', response.data.leads);
      } catch (error) {
        console.error('Error While fetching Leads ', error);
      }
    };
    fetchAllLeadsData();
  }, []);

  const fetchDataAfterAction = async () => {
    try {
      const response = await axios.get(`${LeadAPI}get/`);
      setLeadsData(response.data.leads);
      setFilteredLeads(response.data.leads);
      console.log('Leads Data Updated:', response.data.leads);
    } catch (error) {
      console.error('Error fetching updated Leads Data:', error);
    }
  };

  const handleUpdateLeads = (data) => {
    setShowModal(true);
    setLeadDataForUpdate(data);
    setIsOpenMore(false);
  };

  const handleDeleteLead = async (leadWhatsAppNumber) => {
    try {
      const response = await axios.delete(
        `${LeadAPI}delete/${leadWhatsAppNumber}`
      );

      if (response.status === 200) {
        setLeadsData(
          leadsData.filter(
            (lead) => lead.leadWhatsAppNumber !== leadWhatsAppNumber
          )
        );
        setFilteredLeads(
          filteredLeads.filter(
            (lead) => lead.leadWhatsAppNumber !== leadWhatsAppNumber
          )
        );
        toast.success('Lead deleted successfully!');
        fetchDataAfterAction();
      } else {
        console.error('Error deleting lead:', response.data);
        toast.error('Failed to delete lead. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
      toast.error('Failed to delete lead. Please try again.');
    } finally {
      setIsOpenMore(null); // Close More options after deletion
    }
  };
  const exportToExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { Leads: ws }, SheetNames: ['Leads'] };
    XLSX.writeFile(wb, 'LeadsData.XLSX');
    toast.success('All Leads Download ');
  };

  const openWhatsAppChat = (number) => {
    const formattedNumber = number.replace(/\D/g, ''); // Remove non-digits
    const message = encodeURIComponent('Hii There ,'); // Optional
    const url = `https://wa.me/${formattedNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    // Check if there's a search term
    const searchTermLower = debouncedSearchText.toLowerCase();

    if (searchTermLower) {
      // Filter Leads based on the search term
      const filterData = leadsData.filter(
        (lead) =>
          lead.leadWhatsAppNumber.toLowerCase().includes(searchTermLower) ||
          lead.leadName.toLowerCase().includes(searchTermLower) ||
          lead.leadCourse.toLowerCase().includes(searchTermLower) ||
          lead.leadEmail.toLowerCase().includes(searchTermLower) ||
          lead.leadCourse.toLowerCase().includes(searchTermLower)
      );
      // Update the state with the filtered data
      setFilteredLeads(filterData);
    } else {
      // If there's no search term, reset to show all data
      setFilteredLeads(leadsData);
    }
  }, [debouncedSearchText, leadsData]);

  const closeModal = () => {
    setShowModal(false);
    setLeadDataForUpdate(null);
  };

  return (
    <div>
      <div className="flex-wrap max-sm:gap-y-5 flex justify-between items-center my-8 bg-white py-8 px-5 rounded-lg border border-border-stroke shadow-sm ">
        <div>All Leads </div>
        <div className="flex gap-4">
          <button
            className="bg-indigo-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg shadow-xl"
            onClick={() => setShowModal(true)}
          >
            New Lead
          </button>
          <button
            onClick={() => exportToExcel(leadsData)}
            className="bg-blue-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg shadow-xl"
          >
            Export Leads
          </button>
        </div>
      </div>
      {showModal && (
        <NewLeadForm closeModal={closeModal} initialData={leadDataForUpdate} />
      )}

      {/* Leads Table */}
      <div className="bg-white border border-border-stroke rounded-lg overflow-x-auto">
        {/* Table Header Search and Filter */}
        <div className="flex justify-between items-center px-4 mx-auto my-5">
          {/* Search box */}
          <div className="my-4 relative">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
              className="bg-gray-100 rounded-xl py-3 px-4 outline-none sm:w-52 lg:w-80  "
            />
            <RiSearchLine className="absolute top-[35%] right-4  stroke-gray-100" />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-sm uppercase ">
              <tr className="text-xs text-gray-400">
                {/* <th scope="col" className="py-4 px-3 font-medium  ">
                  Lead Id
                </th> */}
                <th
                  scope="col"
                  className="py-4 px-3  font-medium text-xs text-slate-500"
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="py-4 px-3  font-medium text-xs text-slate-500"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 font-medium text-xs text-slate-500"
                >
                  Enquiry Date
                </th>

                <th
                  scope="col"
                  className="py-4 px-3 font-medium text-xs text-slate-500"
                >
                  Course
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 font-medium text-xs text-slate-500"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="py-4 px-3  font-medium text-xs text-slate-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 font-medium text-xs text-slate-500"
                >
                  Assign To
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 font-medium text-xs text-slate-500"
                >
                  Note
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 font-medium text-xs text-slate-500"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="py-10 ">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((item, index) => (
                  <tr
                    key={index}
                    className="py-6 border-b border-b-slate-300 font-medium text-sm text-gray"
                  >
                    <td className="py-4 px-3 rounded-lg">{item.leadAge}</td>
                    <td className="py-4 px-3 rounded-lg font-medium text-gray-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div>
                          <span className="text-sm">{item.leadName}</span>
                          <br />
                          <span className="text-gray-300">
                            {item.leadWhatsAppNumber}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-sm rounded-lg">
                      {item.leadCreatedAt &&
                        new Date(item.leadCreatedAt)
                          .toISOString()
                          .split('T')[0]}
                    </td>
                    <td className="py-4 px-3 rounded-lg  text-sm">
                      {item.leadCourse}
                    </td>
                    <td className="py-4 px-3 rounded-lg  text-sm">
                      {item.leadEmail}
                    </td>
                    <td className="py-4 px-3 rounded-lg  text-sm">
                      {item.leadStatus}
                    </td>
                    <td className="py-4 px-3 rounded-lg  text-sm">
                      {item.leadAssignedTo}
                    </td>

                    <td className="py-4 px-3 rounded-lg  text-sm text-gray-500">
                      {item.leadNote}
                    </td>

                    {/* <td>
                      <span
                        className={`py-1 px-4 ml-2 rounded-lg text-sm font-normal  ${
                          item.paymentMode == 'UPI'
                            ? 'bg-blue-100 text-blue-600'
                            : item.paymentMode == 'Cheque'
                            ? 'bg-yellow-200 text-yellow-600'
                            : item.paymentMode == 'Cash'
                            ? 'bg-green-100 text-green-600'
                            : ''
                        }`}
                      >
                        {' '}
                        {item.leadNote}
                      </span>
                    </td> */}
                    <td className="py-4 px-3 rounded-lg ">
                      <button
                        onClick={() => handleClickMore(index)}
                        className="font-semibold   py-2 px-2 rotate-90 rounded-lg outline-none"
                      >
                        <IoMdMore size={22} />
                      </button>
                      <div className="relative">
                        {isOpenMore && openIndex === index && (
                          <ul className="absolute top-full right-[50%] z-10 bg-white rounded-lg shadow-md overflow-hidden w-40">
                            <li
                              className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-sm font-medium flex items-center gap-2"
                              onClick={() =>
                                openWhatsAppChat(item.leadWhatsAppNumber)
                              }
                            >
                              <FaWhatsapp size={20} />
                              whatsapp
                            </li>
                            <li
                              className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-sm font-medium flex items-center gap-2"
                              onClick={() => handleUpdateLeads(item)}
                            >
                              <LuClipboardEdit size={20} />
                              Edit
                            </li>
                            <li
                              className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-sm font-medium text-red-500 flex items-center gap-2"
                              onClick={() => handleDeleteLead(item._id)}
                            >
                              <MdDeleteForever size={20} />
                              Delete
                            </li>
                            <li
                              className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-sm font-medium flex items-center gap-2"
                              onClick={() => {
                                /* Download functionality */
                              }}
                            >
                              <MdOutlineFileDownload size={20} />
                              Download
                            </li>
                          </ul>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="py-6 text-center text-gray-500">
                    {isOnline
                      ? 'Data Not Available'
                      : 'Please check your network'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default Leads;
