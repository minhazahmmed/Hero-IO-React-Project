import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";
import { Link } from "react-router";

const AppList = () => {
  const [apps] = useApps();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (apps.length > 0) setLoading(false);
  }, [apps]);

  useEffect(() => {
    if (search.trim()) {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, [search]);

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  const handleGoBack = () => setSearch("");

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-center mt-10 mb-8">
        <h1 className="text-[32px] sm:text-[40px] font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#627382] mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <h3 className="text-[18px] sm:text-[24px] font-semibold">
          ({searchApps.length}) Apps Found
        </h3>

        <label className="w-full sm:w-[300px]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#001931]"
          />
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-bars loading-xl text-[#001931]"></span>
        </div>
      ) : searchApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {searchApps.map((app) => (
            <AppCard app={app} key={app.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center col-span-full py-20 px-4">
          <img
            src="/assets/App-Error.png"
            alt="Not Found"
            className="w-[200px] sm:w-[250px] mb-5"
          />
          <h1 className="text-[32px] sm:text-[48px] font-semibold text-[#001931] text-center">
            OOPS!! APP NOT FOUND
          </h1>
          <p className="text-[#627382] text-center mb-4 text-[14px] sm:text-[16px]">
            The app you are requesting is not found in our system. Please try another app.
          </p>
          <Link
            onClick={handleGoBack}
            className="px-6 py-3 bg-[#001931] text-white rounded-lg hover:bg-[#002a57] transition text-sm sm:text-base"
          >
            Go Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppList;
