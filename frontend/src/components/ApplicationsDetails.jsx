import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserImage from "../../public/images/drink_coffee.gif";
import axios from "axios";

const ApplicationsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData,setUserData] = useState([]);

  useEffect(()=>{
    async function getData(){
       try{
        const response = await axios.get(`${import.meta.env.VITE_APPLICATION_DETAIL}`);
        setUserData(response.data[id-1])
       }catch(error){
          console.log("Error Of Getting UserDeatil ",error);
       }
    }
      getData()
  },[])
  const application = {
    id: userData.id,
    name: userData.name,
    age: userData.age,
    college: userData.college,
    branch: userData.branch,
    hobbies: userData.hobbies,
    skills: userData.skills,
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 py-10 px-4">
      <div className="w-[90%] mx-auto bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 sm:p-10 transition-all duration-500 animate-fade-in hover:shadow-purple-300 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute right-4 bg-white border border-black rounded-full px-4 py-2 text-indigo-700 font-semibold text-sm sm:text-base shadow-md hover:bg-indigo-100 transition-all duration-300 Rounded "
        >
          ← Go Back
        </button>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 border-b-2 border-purple-200 pb-3">
          {application.name}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-gray-700 mb-6 text-base sm:text-lg md:text-xl">
          <p>
            <span className="font-semibold text-indigo-600">Age:</span>{" "}
            {application.age}
          </p>
          <p>
            <span className="font-semibold text-indigo-600">College:</span>{" "}
            {application.college}
          </p>
          <p>
            <span className="font-semibold text-indigo-600">Branch:</span>{" "}
            {application.branch}
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-5 mb-6 shadow-inner flex justify-between px-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-3">
              Hobbies 🎯
            </h3>
            <ul className="list-disc list-inside pl-4 text-gray-600 space-y-2 text-base sm:text-lg">
              {application.hobbies&&application.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={UserImage} alt="User" className="w-auto h-52" />
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 mb-6 shadow-inner">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
            Skills 💻
          </h3>
          <div className="flex flex-wrap gap-3">
            {application.skills&&application.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm sm:text-base font-medium shadow-sm border border-blue-200 hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 rounded-xl shadow-md hover:shadow-green-400 text-3xl  sm:text-xl transition duration-300 Rounded">
            ✅ Accept
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 rounded-xl shadow-md hover:shadow-red-400 text-3xl  sm:text-xl transition duration-300 Rounded">
            ❌ Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsDetails;
