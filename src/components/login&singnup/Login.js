import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import loginImage from "../../assets/login.svg";
const Login = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-1/2">
        <img src={loginImage} className="w-full h-full" alt="" />
      </div>
      <div className="grid w-1/2 place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 text-2xl font-medium">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>

              <div className="relative flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type={open === false ? "password" : "text"}
                  id="password"
                  {...register("password")}
                />
                <div className="absolute text-2xl cursor-pointer top-9 right-5">
                  {open === false ? (
                    <AiFillEye onClick={toggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggle} />
                  )}
                </div>
              </div>

              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="w-full py-3 font-bold text-white rounded-full bg-primary"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span className="cursor-pointer text-primary hover:underline">
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
