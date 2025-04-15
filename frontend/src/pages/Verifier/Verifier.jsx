import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

const Verifier = () => {
  useEffect(() => {
    document.title = "Gov of Sikkim - Verifier";
  }, []);
  return (
    <div>
      <Navbar title="Verifier" />
    </div>
  );
};

export default Verifier;
