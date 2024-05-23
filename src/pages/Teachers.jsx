import React from 'react';
import person from '../assets/person.jpg';

const Teachers = () => {
  return (
    <div>
      {/* First section */}
      <div className="bg-white rounded-3xl">
        <div className="flex justify-between items-center py-6 px-5">
          <div>
            <h1 className=" text-xl border-cyan-400 border-l-8 rounded ">
              Teacher Details
            </h1>
          </div>
          <div>
            <button>This Year</button>
            <button>Download Info</button>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-10 py-5 px-5">
          <div className="flex justify-center items-center">
            <img
              src={person}
              alt="Teacher"
              className="rounded-full w-20 h-20 object-cover "
            />
          </div>
          <div>
            <h1 className=" text-xl my-3">Sameer Kad</h1>
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-1">
                <p className="text-sm font-semibold ">Role</p>
                <span className="text-sm font-semibold ">
                  Head of UX Design
                </span>
              </div>
              <div className="col-span-1">
                <p className="text-sm font-semibold ">Role</p>
                <span className="text-sm font-semibold ">
                  Head of UX Design
                </span>
              </div>
              <div className="col-span-1">
                <p className="text-sm font-semibold ">Role</p>
                <span className="text-sm font-semibold ">
                  Head of UX Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
