import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../../redux/actions/auth";
import { useJwt, decodeToken } from "react-jwt";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(signin(user, navigate) as any);
  };

  return (
    <div className="flex w-full">
      <div className="bg-[#032D7C] w-1/2 h-[100vh]  ">
        <img
          className="w-[50%] mt-[6rem] ml-[8rem] "
          src="/loginImage.png"
          alt="man on computer"
        />
      </div>

      <div className="bg-[#EEEEEE] w-1/2">
        <div className="w-1/5 p-2 ">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="flex flex-col justify-center mt-[7rem] ml-[12rem] w-[50%]">
          <div className="pb-3">
            <h1 className="pb-1 text-xl font-bold">Hello there!</h1>
            <p className=" text-[2rem]">Welcome back</p>
          </div>
          <form onSubmit={submit}>
            <Input
              label="Email"
              placeholder="Enter your email"
              name="email"
              validator={{ required: true, pattern: /^\S+@\S+$/i }}
              type="email"
              value={user.email}
              onChange={handleInputChange}
              inputStyle="text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              name="password"
              validator={{ required: true }}
              type="password"
              value={user.password}
              onChange={handleInputChange}
              inputStyle="mb-2 text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white shadow-md border border-primary/20"
            />

            <div className="mb-2">
              <Button
                width="text-white py-[0.7rem] w-full bg-[#032D7C]"
                type="submit"
                label="Login"
              />
            </div>
            <Link
              to={"/forget-password"}
              className="self-end text-right pt-4 text-[#032D7C]"
            >
              Forget Password?
            </Link>
          </form>
          <div className="text-center mt-[3rem]">
            <p className=" text-[#032D7C] ">
              No account yet?{" "}
              <Link to={"/signup"}>
                {" "}
                <span className="text-[#FF3C5F]"> Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
