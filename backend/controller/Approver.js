const Profile = async (req, res) => {
  res.send([
    {
      name: "Rohan Roy",
      role: "Approver",
      email: "approver@gmail.com",
      description:
        "The Approver receives the document from the Verifier and has the following options: Reject: Rejects the document and prevents any further action. Return: Returns the document for corrections. Approve: Approves the document for final submission.",
      location: "I.T Dep, Gangtok,Sikkim",
      website: "sikkim.gov.in",
      profilePicture: "/images/user.png",
    },
  ]);
};
const Applications = async (req, res) => {
  res.send("This Is An Approver Applications");
};
const TotalAccepted = async (req, res) => {
  res.send("This Is An Approver TotalAccepted");
};
const TotalRejected = async (req, res) => {
  res.send("This Is An Approver TotalRejected");
};
const ChangePassword = async (req, res) => {
  res.send("This Is An Approver ChangePassword");
};
export { Profile, Applications, TotalAccepted, TotalRejected, ChangePassword };
