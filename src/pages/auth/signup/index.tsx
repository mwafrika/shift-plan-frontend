import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/input";
import Button from "../../../components/button";
import axios from 'axios';
import logo from '../../../assets/logo.png';
import Stepper from "react-stepper-horizontal";
import signup from '../../../assets/signup.png';
import { useForm } from "react-hook-form";

const Signup: React.FC = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { title: "Personal info" },
        { title: "Company info" },
      ];

      const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
      const handlePrev = () => {
        setActiveStep(activeStep - 1);
      };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('');
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }; 
      const renderStepContent = () => {
        switch (activeStep) {
          case 0:
            return (
              <div>
                <Input
                  type="name"
                  name="fullname"
                  register={register}
                  placeholder="Full name"
                />
              <Input
                  type="email"
                  name="email"
                  register={register}
                  placeholder="Email"
                />
                <Input
              type="password"
              name="password"
              register={register}
              placeholder="Password"
            />
              </div>
            );
          case 1:
            return (
              <div>
                <Input
                  type="name"
                  name="companyName"
                  register={register}
                  placeholder="Company name"
                />
                <Input
                  type="link"
                  name="url"
                  register={register}
                  placeholder="Website url (optional)"
                />
                <Input
                  type="name"
                  name="companyCountry"
                  register={register}
                  placeholder="Country"
                />
            <Input
              type="text"
              name="description"
              register={register}
              placeholder="Description"
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
       <img src={logo} alt="Logo" width={150} height={150}/>
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
          completeTitleColor = "#ccd5e4"
       />
       </div>
          <form onSubmit={handleSubmit(submit)} className="w-[60%] m-auto">
          {renderStepContent()}
          <div className="flex justify-between gap-8">
            {activeStep > 0 && (
              <Button label="Previous" onClick={handlePrev} width="border-primary border-[1px] text-primary w-[50%] h-[40px]" />
            )}
            {activeStep < 1 ? (
              <Button label="Next" onClick={handleNext} width="bg-primary text-white w-[100%] h-[40px]"/>
            ) : (
              <Button label="Create company" isSubmit width="bg-primary text-white text-md w-[50%] h-[40px]"/>
            )}
            </div>
          </form>
       </div>
          <div className="flex flex-row items-center justify-center mt-4">
              Already have an account ? <Link to={"/login"} className="text-red ml-2 underline underline-offset-4 font-sans">Login</Link>
          </div>
        </div> 

        <div className="bg-primary w-[50%] h-screen">
          <img src={signup} alt="signup" width={280} height={280} className="m-auto"/>
        </div>
    </div>
  );
};

export default Signup;
