import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";
import { Link } from "react-router";

const AppList = () => {
  const [apps] = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mt-15 mb-10">
        <h1 className="text-[40px] font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[18px] text-[#627382] ">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mb-7 flex justify-between items-center">
        <h3 className="text-[24px] font-semibold">
          ({searchApps.length}) Apps Found
        </h3>

        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-15">
        {searchApps.map((app) => (
          <AppCard app={app} key={app.id} />
        ))}
      </div>
    </div>
  );
};

export default AppList;
