import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Bg from "/images/bg.jpg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  let role = null;
  if (token && typeof token === "string") {
    const decoded = jwtDecode(token);
    role = decoded.role;
    console.log("Profile role ", role);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_PROFILE_KEY}${role}`,
          {},
          {
            headers: {
              authorization: token,
            },
          }
        );
        setUserProfile(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (userProfile.length > 0) {
      localStorage.setItem("userRoleName", userProfile[0].name);
    }
  }, [userProfile]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {userProfile.map((userdata, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden mb-12"
          >
            {/* Header Image with Profile Picture */}
            <div className="relative">
              <img
                src={Bg}
                alt="Background"
                className="w-full h-64 object-cover"
              />
              <img
                src="/images/roleProfile.png"
                alt="User"
                className="w-36 h-36 rounded-full border-4 border-white absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white object-cover object-right-top"
              />
            </div>

            <div className="pt-20 pb-8 px-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {userdata.name}
              </h2>
              <p className="text-teal-600 mt-1 font-medium text-xl">
                I.T Department : {userdata.role.charAt(0).toUpperCase()+userdata.role.slice(1)} Role
              </p>
              <p className="text-gray-600 mt-2 text-pretty">
                {userdata.description || "No description provided."}
              </p>

              <div className="mt-6 mb-3 text-left space-y-3 text-gray-700">
                <div className="flex">
                  <MdEmail className="my-auto text-xl"/><strong className="px-1">Email: </strong> {userdata.email}
                </div>
                <div className="flex">
                 <FaLocationDot className="my-auto text-xl"/> <strong className="px-1">Location: </strong> { userdata.location}
                </div>
                {userdata.website && (
                  <div className="flex">
                    <TbWorldBolt className="my-auto text-xl "/><strong className="px-1">Website: </strong>{" "}
                    <a
                      href={
                        userdata.website.startsWith("http")
                          ? userdata.website
                          : `https://${userdata.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {userdata.website}
                    </a>
                  </div>
                )}
              </div>

              <button className="mt-8 bg-primary hover:bg-blue-400 text-white w-72 py-2 transition font-bold Rounded boxShadow">
                Edit Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
