import React from "react";
import Navbar from "../../components/Navbar";
import { FaArrowRight } from "react-icons/fa";

const Portfolio: React.FC = () => {
  const data = [
    {
      title: "Sistem Informasi Manajemen Apotik Umbulharjo",
      description: "Deskripsi singkat mengenai sistem informasi apotek ini.",
      image: "https://dummyimage.com/600x400/000/fff",
      link: "",
    },
    {
      title: "Sistem Informasi Manajemen Apotik Tasikmalaya",
      description: "Deskripsi singkat mengenai sistem informasi apotek ini.",
      image: "https://dummyimage.com/600x400/000/fff",
      link: "",
    },
    {
      title: "Resident Information System for Boarders in Samirono Hamlet",
      description: `The Samirono Hamlet information system is developed with multi-role access for boarding house owners and residents. It features several built-in functionalities:
                    <br>1. Managing boarding house data
                    <br>2. Managing resident data
                    <br><br><strong>Tech stack:</strong> Web Development · CodeIgniter · PHP · JavaScript · Bootstrap · MySQL`,
      image: "https://dummyimage.com/600x400/000/fff",
      link: "",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="fixed flex h-full w-full px-16 overflow-y-scroll">
        <div className="mt-20 w-full">
          <h1 className="text-3xl text-center font-serif text-gray-900 dark:text-white">
            Portfolio
          </h1>
          <div className="w-full flex justify-center">
            <div className="border border-black dark:border-white w-1/3 my-5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pb-8 px-4">
            <div>
              <input type="text" className="p-2" />
            </div>
            {data.map((items) => {
              return (
                <div className="flex flex-col md:flex-row gap-4 p-4 shadow dark:shadow-gray-200 rounded">
                  <div className="md:w-4/6 w-full">
                    <img
                      src={items.image}
                      className="w-full object-cover"
                      alt="Sistem Informasi Apotik"
                    />
                  </div>

                  <div className="md:w-2/6 w-full flex flex-col h-full">
                    <h1 className="text-black dark:text-white text-2xl md:text-4xl font-serif mb-4">
                      {items.title}
                    </h1>
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-300 font-serif"
                      dangerouslySetInnerHTML={{ __html: items.description }}
                    ></p>

                    <div className="mt-auto">
                      <button
                        className="flex items-center px-4 py-2 space-x-2 bg-white text-black border-2 border-black font-serif w-full md:w-auto transition-colors duration-300 ease-in-out 
          dark:bg-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                      >
                        <span>View</span>
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
