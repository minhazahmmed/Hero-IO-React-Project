import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <Link
      to={`/app/${id}`}
      className="p-3 bg-gray-100 rounded-xl shadow-md hover:scale-105 transition ease-in-out"
    >
      <div className="h-48 sm:h-60 w-full overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt={title}
        />
      </div>

      <div className="mt-3">
        <h1 className="font-semibold text-base sm:text-lg text-[#001931]">
          {title}
        </h1>
        <div className="flex justify-between text-gray-600 text-sm mt-1">
          <h4 className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-200 rounded-lg text-green-500 font-semibold text-xs sm:text-sm">
            <FontAwesomeIcon icon={faDownload} /> {downloads}
          </h4>
          <h4 className="px-2 sm:px-3 py-1 sm:py-2 bg-red-100 rounded-lg text-orange-400 font-semibold text-xs sm:text-sm">
            <FontAwesomeIcon icon={faStar} /> {ratingAvg}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
