import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";

const AppList = () => {
  const [apps] = useApps();
  console.log(apps);
  return (
    <div className="max-w-[1200px] mx-auto">

        

        <div className="text-center mt-15 mb-10">
            <h1 className="text-[40px] font-bold text-[#001931]">Our All Applications</h1>
            <p className="text-[18px] text-[#627382] ">Explore All Apps on the Market developed by us. We code for Millions</p>
          
        </div>

        <div className="mb-7">
            <h3 className="text-[24px] font-semibold">({apps.length}) Apps Found</h3>

            
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-15">
        {apps.map((app) => (
          <AppCard app={app} />
        ))}
      </div>
    </div>
  );
};

export default AppList;
