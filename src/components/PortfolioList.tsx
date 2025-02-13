import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// Define types for the data structure
interface Item {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface PortfolioListProps {
  data: Item[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewClick = () => {
    window.open(item.link, "_blank");
  };

  const shortDescription =
    item.description.length > 250
      ? `${item.description.substring(0, 250)}...`
      : item.description;

  return (
    <div className="flex flex-col md:flex-row gap-2 m-4 p-4 shadow dark:shadow-gray-200">
      <div className="md:w-4/6 w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="md:w-2/6 w-full flex flex-col h-full">
        <h1 className="text-black dark:text-white text-2xl md:text-4xl font-serif mb-4">
          {item.title}
        </h1>
        <p
          className="mb-4 text-gray-600 dark:text-gray-300 font-serif"
          dangerouslySetInnerHTML={{
            __html: isExpanded ? item.description : shortDescription,
          }}
        ></p>

        {/* Toggle Button for Read More */}
        {item.description.length > 250 && (
          <button
            onClick={toggleReadMore}
            className="text-blue-600 dark:text-blue-400 font-serif underline py-1"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}

        <div className="mt-auto">
          <button
            onClick={handleViewClick}
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
};

export default PortfolioList;
