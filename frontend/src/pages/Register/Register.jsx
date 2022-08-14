import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import { useEffect } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user) {
      toast("Register Successfull");
      navigate("/home");
    }
  }, [navigate, user]);
  if (error || updateError) {
    return (
      <div>
        <p>Error: {error.message || updateError.message}</p>
      </div>
    );
  }
  if (loading || updating) {
    return <p>Loading...</p>;
  }

  const onSubmit = async (data) => {
    const displayName = data.name;
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
            User Name
          </label>
          <input
            className="form-input"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">User name is required</p>}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Confirm Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="mt-2">
          <input
            disabled={!watch("password") || !watch("name") || !watch("email")}
            className="form-submit"
            type="submit"
            value={"Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
