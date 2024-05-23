import React, { useEffect, useState } from 'react';
import { NavLinks } from '../constants/index';
import { Link } from 'react-router-dom';
import Lamp from '../assets/Lamp.svg';
import axios from 'axios';
import SvgChevronDown from '../assets/iconComponents/ChevronDown';

const Sidebar = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  var category = 'happiness';
  const API_KEY = 'OCX6ilpCbO9hhfUZfklmcg==Fig93DjJLZs9zP8D';
  const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=${category}';

  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${API_KEY}`, // Use environment variable
  //         },
  //       }
  //     );

  //     if (response.status !== 200) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const jsonData = await response.data;
  //     setData(jsonData.data || jsonData); // Handle different API response structures
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const handleReGenerate = async () => {
    setError(null); // Clear previous errors before re-fetching
    await fetchData(); // Call the fetch function again
  };

  const [activeIndex, setActiveIndex] = useState(0); // Initial active index

  const isActive = (index) => index === activeIndex;

  // ... rest of your code

  // Handle link click to update active index
  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-white shadow-sm ${
        isExpanded ? 'w-[270px]' : 'w-24'
      } flex flex-col justify-between relative `}
    >
      <button
        onClick={handleToggleSidebar}
        className="absolute w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center top-0 -right-4"
      >
        <SvgChevronDown
          className={`${isExpanded ? 'rotate-90' : '-rotate-90'}`}
        />
      </button>
      <div>
        {NavLinks.map((item, index) => (
          <div key={index}>
            <Link to={item.path} onClick={() => handleLinkClick(index)}>
              <div
                className={`flex justify-start my-5 text-start py-3 px-4 rounded-lg mx-5 text-lg font-medium ${
                  isActive(index)
                    ? `bg-purple-200 text-purple-600 ${
                        isExpanded ? 'border-l-8  border-purple-500' : ''
                      }`
                    : ''
                }`}
              >
                <div className="flex justify-center items-center space-x-5">
                  <div className="flex justify-center items-center">
                    {item.icon && (
                      <item.icon
                        className={` ${
                          isActive(index) ? 'text-purple-500 ' : ''
                        } w-6 h-6 flex justify-center items-center `}
                      />
                    )}
                  </div>
                  <div className={`${isExpanded ? '' : 'hidden'} text-sm`}>
                    {item.heading}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Thoughts */}
      <div
        className={` relative  my-5${
          isExpanded ? ' ' : 'hidden'
        } hidden bg-yellow-50 h-60 mx-5  rounded-3xl`}
      >
        <div className=" flex justify-center  relative">
          <div className="absolute -top-10 bg-yellow-50 rounded-full w-20 h-20 flex justify-center items-center">
            <img
              src={Lamp}
              className="w-10 h-10 filter drop-shadow-2xl "
              alt=""
            />
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold  px-5 text-center">
              {isLoading ? (
                <span>Loading...</span>
              ) : error ? (
                <span className="text-red-500">Error: {error.message}</span>
              ) : data ? (
                data
              ) : (
                <span>No quote available yet.</span>
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 absolute bottom-5 -left-1/2 -right-1/2 ">
          <button
            onClick={handleReGenerate}
            className="text-sm font-semibold text-blue-400 bg-blue-100 rounded-3xl px-4 py-2 "
          >
            Re-Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
