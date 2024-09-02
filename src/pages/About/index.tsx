import React from "react";
import Navbar from "../../components/Navbar";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full px-16">
        <div className="mt-20 h-full w-full">
          <h1 className="text-5xl font-serif text-gray-900 dark:text-white">
            About
          </h1>
          <div className="border border-black w-1/3 my-5"></div>
        </div>
      </div>
    </>
  );
};

export default About;
