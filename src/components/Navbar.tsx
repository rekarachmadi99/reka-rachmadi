import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher"; // Adjust the path as needed
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateMedsos = (url: string) => {
    window.location.href = url;
  };
  return (
    <nav className="fixed w-full text-black bg-white dark:bg-black dark:text-white z-10">
      <div className="w-full flex items-center justify-between px-6 h-16">
        <div className="w-full flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="text-xl md:text-4xl font-serif cursor-pointer"
          >
            Reka Rachmadi Apriansyah
          </div>
          <div className="flex space-x-5">
            <ThemeSwitcher />
            <button onClick={toggleMenu}>
              {isOpen ? <IoClose size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`transition-opacity duration-1000 ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <div className="fixed w-full h-full flex justify-center items-center px-8 bg-white dark:bg-black">
          <div className="space-y-10">
            <div
              onClick={() => navigate("/")}
              className="block font-serif text-5xl cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => navigate("/portfolio")}
              className="block font-serif text-5xl cursor-pointer"
            >
              Portfolio
            </div>
            <div
              onClick={() => navigate("/certification")}
              className="block font-serif text-5xl cursor-pointer"
            >
              Certification
            </div>
            <div
              onClick={() => navigate("/contact")}
              className="block font-serif text-5xl cursor-pointer"
            >
              Contact
            </div>
          </div>
        </div>
        <div className="fixed flex space-x-3 bottom-5 left-5">
          <div
            onClick={() =>
              navigateMedsos(
                "https://www.facebook.com/p/Reka-Rachmadi-Apriansyah-100003629519176/"
              )
            }
            className="font-serif cursor-pointer"
          >
            <FaFacebook size={24} />
          </div>
          <div
            onClick={() =>
              navigateMedsos("https://www.instagram.com/rekarachmadi2/")
            }
            className="font-serif cursor-pointer"
          >
            <FaInstagram size={24} />
          </div>
          <div
            onClick={() => navigateMedsos("https://github.com/rekarachmadi99")}
            className="font-serif cursor-pointer"
          >
            <FaGithub size={24} />
          </div>
          <div
            onClick={() =>
              navigateMedsos(
                "https://id.linkedin.com/in/reka-rachmadi-apriansyah"
              )
            }
            className="font-serif cursor-pointer"
          >
            <FaLinkedin size={24} />
          </div>
        </div>
        <div className="fixed flex space-x-3 bottom-5 right-5">
          <span>&copy; 2024 Reka Rachmadi A</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
