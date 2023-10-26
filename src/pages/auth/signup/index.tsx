import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Stepper from "react-stepper-horizontal";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupData } from "./type";
import validators from "./validators";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/actions/auth";

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupData>();

  const [activeStep, setActiveStep] = useState(0);
  const steps = [{ title: "Personal info" }, { title: "Company info" }];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { loading, error } = useSelector((state) => state.auth);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const submit: SubmitHandler<SignupData> = (data) => {
    dispatch(signup(data, navigate) as any);
    reset();
  };
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <Input
              type="text"
              name="name"
              register={register}
              validator={validators["name"]}
              placeholder="Full name"
            />
            <Input
              type="email"
              name="email"
              register={register}
              validator={validators["email"]}
              placeholder="Email"
            />
            <Input
              type="password"
              name="password"
              register={register}
              validator={validators["password"]}
              placeholder="Password"
            />
          </div>
        );
      case 1:
        return (
          <div>
            <Input
              type="text"
              name="companyName"
              register={register}
              validator={validators["companyName"]}
              placeholder="company Name"
            />
            <Input
              type="email"
              name="companyEmail"
              register={register}
              validator={validators["companyEmail"]}
              placeholder="company Email"
            />
            <Input
              type="text"
              name="companyAddress"
              register={register}
              validator={validators["companyAddress"]}
              placeholder="Company Address"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-authBackground flex flex-row h-screen">
      <div className="w-[50%] flex flex-col gap-2 p-2">
        <img src="/logo.png" alt="Logo" width={150} height={150} />
        <div>
          <div className="w-[60%] m-auto">
            <h2 className="text-md font-bold">Hello !</h2>
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
          <form onSubmit={handleSubmit(submit)} className="w-[60%] m-auto">
            {renderStepContent()}
            <div className="flex justify-between gap-8">
              {activeStep > 0 && (
                <Button
                  label="Previous"
                  onClick={handlePrev}
                  width="border-primary border-[1px] text-primary w-[50%] h-[40px]"
                />
              )}
              {activeStep < 1 ? (
                <Button
                  label="Next"
                  onClick={handleNext}
                  width="bg-primary text-white w-[100%] h-[40px]"
                />
              ) : (
                <Button
                  label="Create company"
                  isSubmit
                  width="bg-primary text-white text-md w-[50%] h-[40px]"
                />
              )}
            </div>
          </form>
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
