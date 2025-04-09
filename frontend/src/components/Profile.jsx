import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "@john_doe",
    bio: "Web developer passionate about React and JavaScript.",
    profilePicture: "/images/fav.png", // Example image
    email: "johndoe@example.com",
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {/* Profile Card */}
        <div className="col-md-6">
          <div className="card shadow-lg rounded-lg">
            <div className="card-body text-center">
              {/* Profile Picture */}
              <img
                src={user.profilePicture}
                alt="Profile"
                className="rounded-circle mb-3 mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <h3 className="card-title">{user.name}</h3>
              <p className="text-muted">{user.username}</p>
              <p className="card-text">{user.bio}</p>

              {/* User Info */}
              <div className="list-group">
                <div className="list-group-item">
                  <strong>Email: </strong>
                  {user.email}
                </div>
              </div>

              {/* Edit Button */}
              <button className="btn btn-primary mt-4">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
