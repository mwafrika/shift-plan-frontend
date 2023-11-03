import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Stepper from "react-stepper-horizontal";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { SignupData } from "./type";
import validators from "./validators";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/actions/auth";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const formMethods = useForm<SignupData>();

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  const [activeStep, setActiveStep] = useState(0);
  const steps = [{ title: "Personal info" }, { title: "Company info" }];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const submit: SubmitHandler<SignupData> = (data) => {
    dispatch(signup(data, navigate, reset) as any);
    console.log(data, "Data tat atata ta");
  };


  const name = useWatch({
    control: formMethods.control,
    name: "name",
    defaultValue: "",
  });

  const email = useWatch({
    control: formMethods.control,
    name: "email",
    defaultValue: "",
  });

  const password = useWatch({
    control: formMethods.control,
    name: "password",
    defaultValue: "",
  });

  const companyName = useWatch({
    control: formMethods.control,
    name: "companyName",
    defaultValue: "",
  });

  const companyEmail = useWatch({
    control: formMethods.control,
    name: "companyEmail",
    defaultValue: "",
  });

  const companyAddress = useWatch({
    control: formMethods.control,
    name: "companyAddress",
    defaultValue: "",
  });

  console.log(name, email, password, companyName, companyEmail, companyAddress);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="flex flex-col gap-5 w-[100%] mb-4">
            <input
              type="text"
              placeholder="Full name"
              {...formMethods.register("name")}
              value={name}
              className="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              {...formMethods.register("email")}
              value={email}
              className="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              {...formMethods.register("password")}
              value={password}
              className="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
              autoComplete="off"
            />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-5 w-[100%] mb-4">
            <input
              type="text"
              placeholder="Company name"
              {...formMethods.register("companyName")}
              value={companyName}
              className="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Company email"
              {...formMethods.register("companyEmail")}
              value={companyEmail}
              // onChange={formMethods.register("companyEmail")}
              className="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Company address"
              {...formMethods.register("companyAddress")}
              value={companyAddress}
              className="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white border-primary/20 shadow-md border"
              autoComplete="off"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const isLastStep = activeStep === 1;

  return (
    <div className="bg-authBackground flex flex-row h-screen">
      <div className="w-[50%] flex flex-col gap-2 p-2">
        <img src="/logo.png" alt="Logo" width={150} height={150} />
        <div>
          <div className="w-[60%] m-auto">
            <h2 className="text-[2rem] font-bold">Hello !</h2>
            <p className="text-sm">Register to get started now ...</p>
          </div>
          <div className="mb-4">
            <Stepper
              steps={steps}
              activeStep={activeStep}
              activeColor="#032D7C"
              completeColor="#ccd5e4"
              circleFontSize={8}
              titleFontSize={8}
              activeTitleColor="#032D7C"
              completeTitleColor="#ccd5e4"
            />
          </div>

          <div className="w-[60%] m-auto">
            {renderStepContent()}
            <div className="flex justify-between gap-8">
              {activeStep > 0 && (
                <Button
                  label="Previous"
                  onClick={handlePrev}
                  width="border-primary border-[1px] text-primary w-[50%] h-[40px]"
                />
              )}
              {isLastStep ? (
                <Button
                  label="Create company"
                  onClick={() => {
                    handleSubmit(submit)();
                  }}
                  width="bg-primary text-white w-[50%] h-[40px] text-white"
                />
              ) : (
                <Button
                  label="Next"
                  onClick={handleNext}
                  width="bg-primary w-[100%] h-[40px] text-white"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-4">
          Already have an account ?{" "}
          <Link
            to={"/login"}
            className="text-red ml-2 underline underline-offset-4 font-sans"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="bg-primary w-[50%] h-screen">
        <img
          src="/signup.png"
          alt="signup"
          width={280}
          height={280}
          className="m-auto"
        />
      </div>
    </div>
  );
};

export default Signup;
