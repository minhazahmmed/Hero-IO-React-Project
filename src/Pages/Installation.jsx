import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installation")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id) => {
    const updatedList = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
    toast.info("App Uninstalled Successfully!");
  };

  const handleSort = (e) => {
    const sortType = e.target.value;
    const sorted = [...installedApps];

    if (sortType === "high-low") {
      sorted.sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads));
    } else if (sortType === "low-high") {
      sorted.sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads));
    }

    setInstalledApps(sorted);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 sm:py-10 bg-white rounded-2xl shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Explore all trending apps you’ve installed from us
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 sm:gap-0">
        <p className="text-gray-600 font-medium text-sm sm:text-base">
          {installedApps.length} Apps Found
        </p>

        <select
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none text-sm sm:text-base w-full sm:w-auto"
          onChange={handleSort}
        >
          <option value="">Sort By Downloads</option>
          <option value="high-low">High - Low</option>
          <option value="low-high">Low - High</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-sm sm:text-base">
            No apps installed yet.
          </p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-contain rounded-lg shadow-sm"
                />
                <div>
                  <h2 className="text-lg font-semibold text-[#001931]">
                    {app.title}
                  </h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-gray-500 text-sm mt-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="text-green-600 mr-1"
                      />
                      {app.downloads}
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-orange-400 mr-1"
                      />
                      {app.ratingAvg}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-medium transition text-sm sm:text-base w-full sm:w-auto"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
