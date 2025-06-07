import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "/images/userProfile.png";
import { NavLink } from "react-router";
import Document from "../../public/images/Aadharcardfrontpage.png";
const TotalApplications = ({ user }) => {
  return (
    <>
      <div className="mt-6 min-w-sm md:min-w-xs lg:min-w-xs bg-white rounded-lg shadow-xl p-6 mx-4 hover:scale-103 transform transition duration-500 ease-in-out">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 roboto">{`#${user.id}`}</h2>
          <img src={UserProfile} className="w-12 h-12 mx-2" loading="lazy" />
        </div>
        <div className="mb-6 space-y-2">
          <p className="text-gray-700 roboto">
            <strong className="font-medium ">Name:</strong> {user.name}
          </p>
          <p className="text-gray-700 roboto">
            <strong className="font-medium">Collage:</strong> {user.college}
          </p>
          <p className="text-gray-700 roboto">
            <strong className="font-medium">Skills:</strong> {user.skills.join(", ")}
          </p>
          {/* <p className="text-gray-700 roboto"><strong className="font-medium">Skills Matched:</strong> {user.skills.join(', ')}</p> */}
          <p className="text-gray-700 roboto">
            <strong className="font-medium">Document: </strong>
            <a
              href={Document}
              className="text-blue-600 underline hover:text-blue-800 transition duration-200 hover:cursor-pointer"
            >
              View Document
            </a>
          </p>
        </div>

        <div className="flex justify-center">

          <NavLink to={`./${user.id}`} className="w-full">
            <button className="btn btn-primary min-w-full px-16">View</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
const Applications = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PROFILE_TOTAL_APPLICATIONS}`)
      .then((e) => {
        setUser(e.data);
      });
  }, [user]);
  return (
    <>
      <h1 className="text-center py-3 bg-[#37b8b4] rounded-2xl text-white">
        Total Applications Form
      </h1>
      <div className="flex flex-wrap justify-center">
        {user.map((userData) => {
          return <TotalApplications key={userData.id} user={userData} />;
        })}
      </div>
    </>
  );
};

export default Applications;
