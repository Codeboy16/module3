const Profile = async(req,res)=>{
      res.send([
        {
            "name":"Rohit Singh",
            "role":"Operator",
            "email":"operator@gmail.com",
            "description":"The Operator receives a document and has the ability to either Reject: Rejects the document and the document cannot be resubmitted.Return: Returns the document to the user for corrections.Forward: Forwards the document to the Verifier for the next step.",
            "location":"I.T Dep, Gangtok,Sikkim",
            "website":"sikkim.gov.in",
            "profilePicture": "/images/user.png",
        }
      ]);
};
const Applications = async(req,res)=>{
    res.send("This Is An Operator Applications");
};
const TotalAccepted = async(req,res)=>{
    res.send("This Is An Operator TotalAccepted");
};
const TotalRejected = async(req,res)=>{
    res.send("This Is An Operator TotalRejected");
};
const ChangePassword = async(req,res)=>{
    res.send("This Is An Operator ChangePassword");
};
export {Profile,Applications,TotalAccepted,TotalRejected,ChangePassword};