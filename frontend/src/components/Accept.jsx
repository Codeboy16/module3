import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "/images/userProfile.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Document from "../../public/images/Aadharcardfrontpage.png";
const TotalAccept = ({ user }) => {
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
            <strong className="font-medium">Skills:</strong>{" "}
            {user.skills.join(", ")}
          </p>
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

        <div className="flex justify-center gap-1">
          <button
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold py-2 px-12 rounded-lg shadow-lg hover:bg-green-700  Rounded w-full"
            onClick={() => {
              toast.success(`#${user.id} Accepted Sucessfully `, {
                position: "bottom-right",
              });
            }}
          >
            Accepted
          </button>
        </div>
      </div>
    </>
  );
};

const Accept = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_PROFILE_ACCEPTED}`).then((e) => {
      setUser(e.data);
    });
  }, [user]);
  return (
    <>
      <h1 className="text-center py-3 bg-green-400 rounded-2xl text-white">
        Total Accepted Form
      </h1>
      <div className="flex flex-wrap justify-center">
        {user.map((userData) => {
          return <TotalAccept key={userData.id} user={userData} />;
        })}
        <ToastContainer />
      </div>
    </>
  );
};

export default Accept;
