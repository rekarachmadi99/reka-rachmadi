import React from "react";
import Navbar from "../../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import PortfolioList from "../../components/PortfolioList";

const Portfolio: React.FC = () => {
  const data = [
    {
      title: "Accreditation Quality Information System application",
      description: `
        The Quality Information System of the Health Office of Tasikmalaya Regency features several developed functions:
        <ul>
          <li><strong>Clinic management</strong></li>
          <li><strong>Service quality monitoring</strong></li>
          <li><strong>Employee management</strong></li>
        </ul>
        <br><strong>Tech stack:</strong> Web Development · PHP · Laravel · JavaScript · Bootstrap · MySQL
      `,
      image: "https://dummyimage.com/600x400/000/fff",
      link: "",
    },
    {
      title:
        "Information System for Processing Student Report Values In Public Elementary School 2 Kersanagara",
      description: `
        The student report assessment information system is developed by implementing multi-role access for teachers, school principals, subject teachers, administrative staff, and parents. It features several built-in functionalities:
        <ul>
          <li><strong>Student data management</strong></li>
          <li><strong>Teacher data management</strong></li>
          <li><strong>Extracurricular activity data management</strong></li>
          <li><strong>Student assessment</strong></li>
          <li><strong>Extracurricular assessment</strong></li>
          <li><strong>Student attendance</strong></li>
        </ul>
        <br><strong>Tech stack:</strong> Web Development · CodeIgniter · PHP · JavaScript · Bootstrap · MySQL
      `,
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
    {
      title: "Financial System And Website Profile",
      description: `
        The system built for Lazismu Umbulharjo Yogyakarta includes a financial system and a profile website, encompassing the following features:
        <br><br><strong>Financial System:</strong>
        <ul>
          <li><strong>Dashboard feature</strong> to display information on fund expenditures, income, petty cash, and main cash.</li>
          <li><strong>Data management feature</strong> for income, expenditures, petty cash, main cash, donors, and employees, allowing input, update, deletion, and data verification.</li>
          <li><strong>Account management feature</strong> including adding accounts and displaying account data.</li>
          <li><strong>Record input feature</strong> for transaction system management history conducted by administrators or employees.</li>
          <li><strong>System Access/Administration feature</strong> to manage accounts and access rights within the system.</li>
          <li><strong>Preview and export reports to Excel</strong>.</li>
        </ul>
        <br><strong>Website Profile:</strong>
        <ul>
          <li><strong>Data input feature</strong> for Lazismu Umbulharjo's profile, including vision-mission statements, documentation of activities, partners, news, and accounts.</li>
          <li><strong>Program and slider feature</strong> for highlighting programs and events.</li>
          <li><strong>Contact feature</strong> linked to WhatsApp for easy communication.</li>
          <li><strong>Suggestion box feature</strong> for providing feedback to Lazismu Umbulharjo.</li>
          <li><strong>File upload and download feature</strong> for archival documents (soft files).</li>
        </ul>
        <br><strong>Tech stack:</strong> Web Development · CodeIgniter · PHP · JavaScript · Bootstrap · Git · MySQL
      `,
      image: "https://dummyimage.com/600x400/000/fff",
      link: "https://www.canva.com/design/DAGJWrCuiqE/XgL4Vit7kYekZabpwC5_6g/edit",
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
            <PortfolioList data={data} />
            {/* {data.map((items) => {
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
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
