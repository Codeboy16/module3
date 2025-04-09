import React, { useState } from 'react';

// Helper function to format current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return now.toLocaleDateString('en-US', options);
};

const Profile = () => {
  // User state with initial data
  const [user, setUser] = useState({
    name: "John Doe",
    username: "@john_doe",
    bio: "Web developer passionate about React and JavaScript. Always eager to learn new things and improve my coding skills.",
    profilePicture: "/images/fav.png", // Example image
    email: "johndoe@example.com",
    location: "San Francisco, CA",
    website: "www.johndoe.dev",
    joinDate: "March 2021",
    loginTime: "Last login: 2 hours ago", // Sample static login time
  });

  // State to track whether the profile is being edited
  const [isEditing, setIsEditing] = useState(false);
  
  // Handle input change when editing profile
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {/* Profile Card */}
        <div className="col-md-6">
          <div className="card shadow-lg rounded-lg overflow-hidden">
            <div className="card-body text-center">
              {/* Profile Picture */}
              <img
                src={user.profilePicture}
                alt="Profile"
                className="rounded-circle mb-3 mx-auto border border-primary"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              
              {/* Editable Profile Name */}
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                  autoFocus
                />
              ) : (
                <h3 className="card-title text-dark">{user.name}</h3>
              )}

              {/* Editable Username */}
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                />
              ) : (
                <p className="text-muted">{user.username}</p>
              )}

              {/* Editable Bio */}
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                  rows="4"
                />
              ) : (
                <p className="card-text text-muted mb-4">{user.bio}</p>
              )}

              {/* User Info */}
              <div className="list-group mb-4">
                <div className="list-group-item d-flex justify-content-between">
                  <strong>Email: </strong>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    <span>{user.email}</span>
                  )}
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <strong>Location: </strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={user.location}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    <span>{user.location}</span>
                  )}
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <strong>Website: </strong>
                  {isEditing ? (
                    <input
                      type="url"
                      name="website"
                      value={user.website}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    <span>
                      <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                        {user.website}
                      </a>
                    </span>
                  )}
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <strong>Joined: </strong>
                  <span>{user.joinDate}</span>
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <strong>{user.loginTime}</strong>
                  <span>{getCurrentDateTime()}</span>
                </div>
              </div>

              {/* Edit Button */}
              <button
                className="btn btn-primary mt-4 px-4 py-2 rounded-pill"
                onClick={handleEditClick}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
