import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <div className="h-full w-full sm:h-screen sm:w-screen flex flex-col justify-center items-center register">
      <div className="px-4 py-3 mx-4 sm:mx-0 sm:px-24 sm:py-6 bg-white rounded-lg">
        <h2 className="text-xl font-semibold text-primary md:text-2xl lg:text-4xl text-center">
          Sign In With
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-4">
          <div className="cursor-pointer w-full sm:w-auto px-4 sm:px-8 py-2 lg:py-4 bg-[#3b5998] rounded-md flex gap-2 items-center">
            <GrFacebook className=" text-white text-2xl" />{" "}
            <span className="text-lg sm:text-xl font-semibold text-white">
              Facebook
            </span>
          </div>
          <div className="cursor-pointer w-full sm:w-auto px-4 sm:px-8 py-2 lg:py-4 shadow-3xl rounded-md flex gap-2 items-center">
            <FcGoogle className="text-2xl" />{" "}
            <span className="text-lg sm:text-xl font-semibold text-[#555555]">
              Google
            </span>
          </div>
        </div>
        <div className="my-1 lg:my-2">
          <label
            className="text-sm lg:text-lg font-semibold text-primary"
            htmlFor=""
          >
            User Name
          </label>
          <input
            className="w-full shadow-3xl rounded-md h-10 lg:h-12 focus:outline-none focus:border-2 focus:border-primary pl-4"
            type="text"
            name="name"
          />
        </div>
        <div className="my-1 lg:my-2">
          <label
            className="text-sm lg:text-lg font-semibold text-primary"
            htmlFor=""
          >
            Email
          </label>
          <input
            className="w-full shadow-3xl rounded-md h-10 lg:h-12 focus:outline-none focus:border-2 focus:border-primary pl-4"
            type="email"
            name="email"
          />
        </div>
        <div className="my-1 lg:my-2">
          <label
            className="text-sm lg:text-lg font-semibold text-primary"
            htmlFor=""
          >
            Passowrd
          </label>
          <input
            className="w-full shadow-3xl rounded-md h-10 lg:h-12 focus:outline-none focus:border-2 focus:border-primary pl-4"
            type="password"
            name="password"
          />
        </div>
        <div className="my-1 lg:my-2">
          <label
            className="text-sm lg:text-lg font-semibold text-primary"
            htmlFor=""
          >
            Confirm Passowrd
          </label>
          <input
            className="w-full shadow-3xl rounded-md h-10 lg:h-12 focus:outline-none focus:border-2 focus:border-primary pl-4"
            type="password"
            name="confirmPassword"
          />
        </div>
        <div className="my-1 lg:my-2">
          <input
            className="w-full bg-primary border hover:border-primary hover:bg-white hover:text-primary transition-all duration-500 rounded-md  py-2 lg:py-3 text-white cursor-pointer text-lg sm:text-xl"
            type="submit"
            value={"Register"}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
