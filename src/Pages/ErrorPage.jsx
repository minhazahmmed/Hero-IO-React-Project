import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {

  return (
    <>
    <Navbar/>

      <div className="flex flex-col items-center justify-center text-center min-h-screen gap-4">
        <img src="/assets/error-404.png" className="h-[300px] w-[300px]" />
        <h1 className="text-[#001931] font-semibold text-[40px]">
          Oops, page not found!
        </h1>
        <p className="text-[#627382] text-[20px]">
          The page you are looking for is not available.
        </p>
        <button className="btn btn-active btn-primary">Go Back</button>
      </div>

      <Footer/>
    </>
  );
};

export default ErrorPage;
