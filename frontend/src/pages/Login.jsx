import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/about")
      .then((response) => {
        setData(response.data);
        console.log("Data fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      console.log("Api Is Called once");
  }, []);
  return (
    <div>
      <h1 className="text-center my-2">Login Page</h1>
      <div className="flex m-3 justify-center flex-wrap">
        {data.map((item) => {
          return (
            <div
              className="card flex m-3"
              style={{ width: "20rem" }}
              key={item.id}
            >
              <img src="./images/photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>

                <table className="table-auto text-left">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-2">Age</th>
                      <th className="px-4 py-2">College</th>
                      <th className="px-4 py-2">Branch</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="px-4 py-1">{item.age}</td>
                      <td className="px-4 py-1">{item.college}</td>
                      <td className="px-4 py-1">{item.branch}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex py-auto">
                  <p className="font-semibold text-lg text-gray-700">
                    Hobbies:
                  </p>
                  <p className="text-gray-600 py-auto font-medium">
                    {item.hobbies.join(" / ")}
                  </p>
                </div>

                <div className="flex ">
                  <p className="font-semibold text-lg text-gray-700">Skills:</p>
                  <p className="text-gray-600 py-auto font-medium">
                    {item.skills.join(" / ")}
                  </p>
                </div>
                 <span className="flex ">
                 <a href="#" class="btn btn-danger mx-auto px-3" onClick={()=>{alert("Rejected "+item.id)}}>
                  Reject
                </a>
                <a href="#" class="btn btn-warning mx-auto px-3" onClick={()=>{alert("Return "+item.id)}}>
                  Return
                </a>
                <a href="#" class="btn btn-success mx-auto px-3" onClick={()=>{alert("Forwarded "+item.id)}}>
                  Forward
                </a>
                 </span>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Login;
