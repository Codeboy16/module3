import React from "react";
import Person from "/images/drink_coffee.gif";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center space-y-6">
        <img
          src={Person}
          alt="Person drinking coffee"
          className="w-96 h-fit mx-auto"
        />
        <h1 className="text-5xl font-bold animate-bounce">
          Oops! Page Not Found
        </h1>
        <p className="text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-indigo-600 rounded-full  transition duration-300 border "
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
