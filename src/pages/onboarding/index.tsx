import React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="bg-authBackground flex flex-row h-screen">
      <div className="w-[50%] flex flex-col gap-2 p-2 bg-authBackground">
        <img src="/logo.png" alt="Logo" width={200} height={200} />
        <div className="flex flex-col items-center justify-center h-[80%] w-[80%] m-auto">
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
            className="text-white bg-primary py-2 px-16 rounded-2xl font-sans mt-8"
          >
            Get started
          </Link>
        </div>
      </div>

      <div className="w-20 h-[99%] bg-primary transform rotate-[-8deg] rounded-tl-[36px] mr-[-40px]"></div>

      <div className="bg-primary w-[50%] h-screen">
        <img
          src="/onboarding.png"
          alt="signup"
          width={350}
          height={350}
          className="m-auto"
        />
      </div>
    </div>
  );
};

export default Onboarding;
