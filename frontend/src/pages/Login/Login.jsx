import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="form-title">Sign In With</h2>
        <div className="form-social-flex">
          <div className="social-facebook">
            <GrFacebook className=" text-white text-2xl" />{" "}
            <span className="facebook-title">Facebook</span>
          </div>
          <div className="social-google">
            <FcGoogle className="text-2xl" />{" "}
            <span className="google-title">Google</span>
          </div>
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input className="form-input" type="email" name="email" />
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Passowrd
          </label>
          <input className="form-input" type="password" name="password" />
        </div>
        <div className="mt-2">
          <input className="form-submit" type="submit" value={"Register"} />
        </div>
      </form>
    </div>
  );
};

export default Login;
