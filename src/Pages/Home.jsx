import React from "react";
import { Link, NavLink } from "react-router";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";

const Home = () => {
  const [apps] = useApps();
  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto text-center mt-10 px-4">
        <h1 className="font-bold text-[36px] sm:text-[48px] md:text-[65px] text-[#001931] leading-tight">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-black text-transparent bg-clip-text">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="text-[16px] sm:text-[18px] text-[#627382] mt-3">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br className="hidden md:block" />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="my-8 flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            className="btn btn-neutral btn-outline font-semibold text-[16px] px-6 py-4"
            to="https://play.google.com"
            target="_blank"
          >
            <img src="/assets/Group.png" alt="" className="w-5 mr-2" />
            Google Play
          </NavLink>

          <NavLink
            className="btn btn-neutral btn-outline font-semibold text-[16px] px-6 py-4"
            to="https://www.apple.com/app-store/"
            target="_blank"
          >
            <img src="/assets/fi_5977575.png" alt="" className="w-5 mr-2" />
            App Store
          </NavLink>
        </div>

        <div className="flex justify-center">
          <img src="/assets/hero.png" alt="" className="w-full max-w-[700px]" />
        </div>
      </div>

      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full mb-10">
        <div className="max-w-[1200px] mx-auto text-white py-12 px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-base sm:text-lg">Total Downloads</p>
              <h3 className="text-4xl sm:text-5xl font-extrabold">29.6M</h3>
              <p className="text-sm opacity-80 mt-1">21% More Than Last Month</p>
            </div>

            <div>
              <p className="text-base sm:text-lg">Total Reviews</p>
              <h3 className="text-4xl sm:text-5xl font-extrabold">906K</h3>
              <p className="text-sm opacity-80 mt-1">46% More Than Last Month</p>
            </div>

            <div>
              <p className="text-base sm:text-lg">Active Apps</p>
              <h3 className="text-4xl sm:text-5xl font-extrabold">132+</h3>
              <p className="text-sm opacity-80 mt-1">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center mb-20 px-4">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#001931]">
          Trending Apps
        </h1>
        <p className="text-[16px] sm:text-[20px] text-[#627382] mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {featuredApps.map((app) => (
            <AppCard app={app} key={app.id} />
          ))}
        </div>

        <NavLink
          className="py-3 px-6 sm:py-4 sm:px-8 rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-[14px] sm:text-[16px]"
          to="/applist"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
