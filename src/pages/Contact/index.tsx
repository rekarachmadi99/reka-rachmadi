import React from "react";
import Navbar from "../../components/Navbar";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="fixed flex h-full w-full px-16 md:px-52 overflow-y-auto">
        <div className="mt-20 h-full w-full">
          <h1 className="text-3xl text-center font-serif text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <div className="w-full flex justify-center">
            <div className="border border-black dark:border-white w-1/3 my-5"></div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-10 pb-10">
            <div className="">
              <div className="mb-3 space-y-3">
                <h1 className="text-lg font-semibold font-serif dark:bg-white bg-black dark:text-black text-white p-2 w-max rounded-lg">
                  Let's Talk
                </h1>
                <p className="text-justify font-serif text-black dark:text-white">
                  Hi, I'm Reka Rachmadi Apriansyah, a software developer with
                  expertise in Laravel, CodeIgniter, Asp .Net Core, .Net
                  Framework, Node Js, React Js, Angular Js, Express Js. I’m
                  passionate about creating innovative solutions and eager to
                  tackle new challenges. Feel free to reach out if you want to
                  discuss potential projects or collaborations!
                </p>
              </div>
              <div className="mb-3 space-y-3">
                <h1 className="text-lg font-semibold font-serif  dark:bg-white bg-black dark:text-black text-white p-2 w-max rounded-lg">
                  Email Us
                </h1>
                <p className="font-serif dark:text-white text-black">
                  reka.rachmadi@gmail.com
                </p>
              </div>
              <div className=" space-y-3">
                <h1 className="text-lg font-semibold font-serif dark:bg-white bg-black dark:text-black text-white p-2 w-max rounded-lg">
                  Contact With Us
                </h1>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://id.linkedin.com/in/reka-rachmadi-apriansyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/6282311129049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-center text-lg font-serif dark:text-white">
                We’d love to hear from you! If you have any questions or would
                like to learn more about being featured, feel free to reach out.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full p-3 placeholder:font-serif border-2 font-serif border-black bg-white dark:border-white dark:text-white dark:bg-black"
                  placeholder="Name"
                />
                <input
                  className="w-full p-3 placeholder:font-serif border-2 font-serif border-black bg-white dark:border-white dark:text-white dark:bg-black"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="w-full p-3 placeholder:font-serif border-2 font-serif border-black bg-white dark:border-white dark:text-white dark:bg-black"
                placeholder="Message"
              />
              <button className="border-2 border-black dark:border-white dark:text-white px-5 py-2 font-serif">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
