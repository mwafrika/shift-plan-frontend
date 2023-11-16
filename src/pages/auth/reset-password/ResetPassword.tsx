import React, { useEffect } from "react";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../redux/actions/auth";

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: "Please enter your email address!" });
    } else {
      setErrors({ email: "" });
      dispatch(forgotPassword({ email}, navigate) as any);
    }
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
          <img src="/logo.jpg" alt="Logo" />
        </div>

        <div className="flex flex-col justify-center mt-[7rem] ml-[12rem] w-[50%]">
          <div className="pb-3">
            <h1 className="pb-1 text-xl font-bold">Forget password?</h1>
          </div>
          <div className="mb-7" />

          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              validator={{ required: true, pattern: /^\S+@\S+$/i }}
              type="email"
            />
            {errors.email && (
              <p className="text-center decoration-red-500">
                {" "}
                Please enter your email address!{" "}
              </p>
            )}

            <div className="">
              <Button
                width="text-white py-[0.7rem] w-full bg-[#032D7C]"
                type="submit"
                label="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
