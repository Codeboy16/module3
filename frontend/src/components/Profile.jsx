import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  let role = null;
  if (token && typeof token === 'string') {
      const decoded = jwtDecode(token);
      role = decoded.role;
      console.log("Profile role ",role);
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(
          `http://localhost:8080/${role}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        setUserProfile(res.data);
        setLoading(false);
      } catch (error) {
        console.log("Data Not Getting Profile ", error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {userProfile.map((userdata, index) => (
          <div key={index} className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-body text-center p-4">
                {/* Profile Image */}
                <img
                  src="/images/userProfile.png"
                  alt="User"
                  className="rounded-circle mb-4 border-3 border-primary mx-auto"
                  style={{ width: "140px", height: "140px", objectFit: "cover" }}
                />

                {/* User Info */}
                <h3 className="fw-bold mb-1">{userdata.name}</h3>
                <p className="text-muted mb-2 text-xl font-medium">Role: {userdata.role}</p>
                <p className="text-secondary mb-3">{userdata.description || "No description provided."}</p>

                <div className="text-start">
                  <div className="mb-2">
                    <strong>Email:</strong>
                    <div className="text-muted">{userdata.email}</div>
                  </div>
                  <div className="mb-2">
                    <strong>Location:</strong>
                    <div className="text-muted">{userdata.location}</div>
                  </div>
                  {userdata.website && (
                    <div className="mb-2">
                      <strong>Website:</strong>
                      <div>
                        <a
                          href={userdata.website.startsWith("http") ? userdata.website : `https://${userdata.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {userdata.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button className="btn btn-outline-primary mt-4 px-4 py-2 rounded-pill">
                  Edit Me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
