import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center min-h-screen gap-4 px-6">
        <img
          src="/assets/error-404.png"
          className="h-[200px] w-[200px] md:h-[300px] md:w-[300px]"
          alt="Error"
        />
        <h1 className="text-[#001931] font-semibold text-2xl md:text-[40px] leading-snug">
          Oops, page not found!
        </h1>
        <p className="text-[#627382] text-base md:text-[20px] max-w-md">
          The page you are looking for is not available.
        </p>
        <Link to='/' className="btn btn-primary text-sm md:text-base px-6 py-3 rounded-lg font-semibold">
          Go Back
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
