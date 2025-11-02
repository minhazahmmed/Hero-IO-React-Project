import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto text-center mt-15">
        <h1 className="font-bold text-[65px] text-[#001931]">
          We Build <br />{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-black text-transparent bg-clip-text ">
            Productive{" "}
          </span>
          Apps
        </h1>

        <p className="text-[18px] text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="my-10">
          <NavLink
            className="btn btn-neutral btn-outline  font-semibold text-[16px] px-6 py-5 mr-7"
            to="https://play.google.com"
            target="_blank"
          >
            <img src="/assets/Group.png" alt="" />
            Google Play
          </NavLink>

          <NavLink
            className="btn btn-neutral btn-outline  font-semibold text-[16px] px-6 py-5"
            to="https://www.apple.com/app-store/"
            target="_blank"
          >
            <img src="/assets/fi_5977575.png" alt="" />
            App Store
          </NavLink>
        </div>

        <div className="flex justify-center">
          <img src="/assets/hero.png" alt="" />
        </div>

       

      </div>

      <div  className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full mb-20">
        
             <div className=" max-w-[1200px] mx-auto text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Trusted By Millions, Built For You
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Total Downloads */}
            <div>
              <p className="text-lg">Total Downloads</p>
              <h3 className="text-5xl font-extrabold">29.6M</h3>

              <p className="text-sm opacity-80 mt-1">
                21% More Than Last Month
              </p>
            </div>

            {/* Total Reviews */}
            <div>
              <p className="text-lg">Total Reviews</p>
              <h3 className="text-5xl font-extrabold">906K</h3>

              <p className="text-sm opacity-80 mt-1">
                46% More Than Last Month
              </p>
            </div>

            {/* Active Apps */}
            <div>
              <p className="text-lg">Active Apps</p>
              <h3 className="text-5xl font-extrabold">132+</h3>

              <p className="text-sm opacity-80 mt-1">31 More Will Launch</p>
            </div>
          </div>
        </div>
       </div>

       <div className="max-w-[1200px] mx-auto text-center mb-20">
            <h1 className="text-[48px] font-bold text-[#001931]">Trending Apps</h1>
            <p className="text-[20px] text-[#627382] mb-10">Explore All Trending Apps on the Market developed by us</p>

            <h1>Tranding App</h1>
       </div>

    </div>
  );
};

export default Home;
