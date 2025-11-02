import React from "react";
import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm w-full">
      <div className="navbar max-w-[1200px] mx-auto ">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className='font-semibold'>
                <NavLink to="/">Home</NavLink>
              </li>

              <li className='font-semibold'>
                <NavLink to="/applist">Apps</NavLink>
              </li>

              <li className='font-semibold'>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className=" text-xl flex gap-2">
            <img className="h-[30px] w-[30px]" src="/assets/logo.png" alt="" />
            <h1 className="font-bold">HERO.IO</h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li className='font-semibold text-[16px]'> 
              <NavLink to="/">Home</NavLink>
            </li>

            <li className='font-semibold text-[16px]'>
              <NavLink to="/applist">Apps</NavLink>
            </li>

            <li className='font-semibold text-[16px]'>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <NavLink
            className="py-2.5 px-4 rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-[16px] "
            to="https://github.com/minhazahmmed"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} /> Contribute
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
