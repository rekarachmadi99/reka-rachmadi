import React from "react";
import Navbar from "../../components/Navbar";

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="fixed flex h-full w-full px-16 overflow-y-scroll">
        <div className="mt-20 w-full">
          <h1 className="text-5xl font-serif text-black dark:text-white">
            Portfolio
          </h1>
          <div className="border border-black dark:border-white w-1/3 my-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-8">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              className="w-full max-h-68 object-cover"
            />
            <img
              src="https://dummyimage.com/600x400/000/fff"
              className="w-full max-h-68 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
