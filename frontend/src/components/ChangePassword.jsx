import React, { useState } from "react";

const ChangePassword = () => {
  // State to manage the form data
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for error handling
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "currentPassword") setCurrentPassword(value);
    if (name === "newPassword") setNewPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      setSuccess(false);
      return;
    }

    // Example of password criteria validation (e.g., minimum length)
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      setSuccess(false);
      return;
    }

    // Simulating a successful password change (this should be linked to your backend logic)
    setError("");
    setSuccess(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg rounded-4 p-4">
            <h3 className="text-center mb-4">Change Password</h3>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div className="alert alert-success">
                Password changed successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
                <small className="form-text text-muted">
                  Password should be at least 8 characters long.
                </small>
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 mt-3">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
