import React from "react";
import Navbar from "../../components/Navbar";
import PortfolioList from "../../components/PortfolioList";

import supportTribun from "../../assets/image/support-tribun.jpg";

const Portfolio: React.FC = () => {
  const data = [
    {
      title: "Tribun Support System",
      description: `
        <p>Tribun support System adalah platform untuk mempermudah pengguna dalam mengajukan dan melacak tiket dukungan. Fitur utamanya meliputi:</p>
        <ul>
            <li><strong>Pembuatan Tiket:</strong> Pengguna dapat membuat tiket dengan deskripsi masalah dan informasi kontak.</li>
            <li><strong>Pelacakan Tiket:</strong> Pengguna dapat memantau status tiket secara real-time.</li>
            <li><strong>Komunikasi dengan Support:</strong> Pengguna bisa berinteraksi langsung dengan tim support.</li>
            <li><strong>Riwayat Tiket:</strong> Melihat tiket yang pernah diajukan dan statusnya.</li>
            <li><strong>Notifikasi:</strong> Pembaruan tiket secara otomatis diberitahukan ke pengguna.</li>
        </ul>
        <br><strong>Tech stack:</strong> Web Development · ReactJs · Typescript · CodeIgniter · PHP · Modernize · Material UI · Bootstrap · MySQL
      `,
      image: supportTribun,
      link: "http://support.tribunnetwork.com/",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="fixed flex h-full w-full md:px-16 sm:px-0.5 overflow-y-scroll">
        <div className="mt-20 w-full">
          <h1 className="text-3xl text-center font-serif text-gray-900 dark:text-white">
            Portfolio
          </h1>
          <div className="w-full flex justify-center">
            <div className="border border-black dark:border-white w-1/3 my-5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pb-8 px-4">
            <PortfolioList data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
