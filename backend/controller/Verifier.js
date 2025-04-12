const Profile = async(req,res)=>{
  res.send([
    {
        "name":"Manish Baitha",
        "role":"verifier",
        "email":"verifier@gmail.com",
        "description":"The Verifier receives the document from the Operator and has the following actions:Reject: Rejects the document, making it unable to be resubmitted. Return: Returns the document for corrections and resubmission by the user. Approve: Approves the document and forwards it to the Approver.",
        "location":"I.T Dep, Gangtok,Sikkim",
        "website":"sikkim.gov.in",
        "profilePicture": "/images/user.png",
    }
  ]);
};
const Applications = async(req,res)=>{
  res.send("This Is An Verifier Applications");
};
const TotalAccepted = async(req,res)=>{
  res.send("This Is An Verifier TotalAccepted");
};
const TotalRejected = async(req,res)=>{
  res.send("This Is An Verifier TotalRejected");
};
const ChangePassword = async(req,res)=>{
  res.send("This Is An Verifier ChangePassword");
};
export {Profile,Applications,TotalAccepted,TotalRejected,ChangePassword};