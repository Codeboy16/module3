import React, { useEffect, useState } from 'react';
import axios from "axios"
import UserProfile from '/images/userProfile.png'

const TotalApplications = ({user})=>{
    return(
      <>
       <div className="mt-6 max-w-sm md:max-w-xs lg:max-w-lg bg-white rounded-lg shadow-xl p-6 mx-4 hover:scale-103 transform transition duration-500 ease-in-out">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 roboto">{`#${user.id}`}</h2>
        <img src={UserProfile} className='w-12 h-12 mx-2' loading='lazy'/>
      </div>
      <div className="mb-6 space-y-2">
        <p className="text-gray-700 roboto"><strong className="font-medium ">Name:</strong> {user.name}</p>
        <p className="text-gray-700 roboto"><strong className="font-medium">Collage:</strong> {user.college}</p>
        <p className="text-gray-700 roboto"><strong className="font-medium">Skills:</strong> {user.skills}</p>
        {/* <p className="text-gray-700 roboto"><strong className="font-medium">Skills Matched:</strong> {user.skills.join(', ')}</p> */}
        <p className="text-gray-700 roboto"><strong className="font-medium">Resume:</strong> 
          <a href={user.resume} className="text-blue-600 underline hover:text-blue-800 transition duration-200">View Resume</a>
        </p>
      </div>

      <div className="flex justify-center gap-1">
        <button 
          className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold py-2 px-12 rounded-lg shadow-lg hover:bg-green-700  Rounded"
           onClick={()=>{alert("Accepted Form Sucessfully "+user.id)}}

        >

          Accept
        </button>
        <button 
          className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-semibold py-2 px-12 rounded-lg shadow-lg hover:bg-red-700  Rounded"
          onClick={()=>{alert("Reject Form Sucessfully "+user.id)}}
        >
          Reject
        </button>
      </div>
    </div>
      </>
    )
}
const Applications = () => {
  const [user, setUser] = useState([]);
  useEffect(()=>{
       axios.get("http://localhost:8080/about").then((e)=>{
           setUser(e.data)
       })
  },[user])
  return (
      <>
       <h1 className='text-center py-3 bg-[#37b8b4] rounded-2xl text-white'>Total Applications Form</h1>
      <div className='flex flex-wrap justify-center'>
      {
        user.map((userData)=>{
          return(
          <TotalApplications key={userData.id} user={userData}/>
          )
        })
      }
      </div>

       
      </>
  );
}

export default Applications;
