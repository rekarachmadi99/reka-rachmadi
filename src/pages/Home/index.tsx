import React from "react";
import Navbar from "../../components/Navbar";
import Typewriter from "typewriter-effect";
import reka from "../../assets/image/reka.jpg";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="fixed h-full w-full  px-16 md:px-52 grid grid-cols-1 gap-3 md:grid-cols-2 overflow-y-auto">
        <div className="h-full flex justify-center items-center  pt-20 md:pt-0">
          <div className="space-y-4">
            <h1 className="text-black dark:text-white text-4xl font-serif">
              I’m Reka Rachmadi Apriansyah
            </h1>
            <div className="text-black dark:text-white text-4xl font-serif font-semibold">
              <Typewriter
                options={{
                  strings: ["I'm web developer", "I'm mobile developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 15,
                }}
              />
            </div>
            <p className="text-black dark:text-white font-medium font-serif text-justify">
              An experienced software developer with over 2 years of expertise
              in software development. Specializes in creating web, mobile, and
              desktop applications with a strong emphasis on technical
              excellence and innovative solutions. Proven track record in Agile
              methodologies, with significant contributions throughout the
              entire software development lifecycle.
            </p>
            <div className="md:space-x-3 grid grid-cols-1 md:grid-cols-2">
              <button
                onClick={() => navigate("/portfolio")}
                className="bg-black text-white dark:bg-white dark:text-black py-2 font-serif w-full md:w-auto hover:dark:bg-black hover:dark:text-white hover:bg-white hover:text-black"
              >
                My Portfolio
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-black dark:bg-black border-2 border-black dark:border-white dark:text-white py-2 font-serif w-full md:w-auto hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-10 md:py-0">
          <img
            src={reka}
            alt="Reka Rachmadi Apriansyah"
            className="h-full md:max-h-[90vh] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
