import React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="bg-authBackground flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 bg-authBackground">
        <img src="/logo.png" alt="Logo" width={200} height={200} />
        <h2 className="text-2xl font-semibold text-center">
          Welcome to Shift Plan – Simplify Employee Management
        </h2>
        <p className="text-md mt-12 text-center">
          Ready to take control of your company's workforce scheduling and
          employee management? Shift Plan is here to help you streamline your
          operations and boost productivity.
        </p>
        <Link
          to={"/signup"}
          className="text-white bg-primary py-2 px-6 rounded-2xl font-sans mt-8"
        >
          Get started
        </Link>
      </div>

      <div className="bg-primary w-full md:w-1/2 h-screen flex justify-center items-center">
        <img
          src="/onboarding.png"
          alt="signup"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default Onboarding;
