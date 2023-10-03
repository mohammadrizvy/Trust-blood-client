import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import animation from "../../assets/singupanimation.json";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import DnaSpinner from "../../Components/DnaSpinner";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Successful",
              text: "Please Login",
              showConfirmButton: false,
              timer: 1500,
            });
            logOut()
              .then(() => {
                navigate("/");
              })
              .catch((error) => console.log(error));
          })
          .catch((err) => console.log(err));
        reset();
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Registration Error",
            text: "Email is already in use. Please use a different email.",
          });
        }
      });
    console.log(data);
  };


  return (
    <>
      <Helmet>
        <title>TRUST | Sign Up </title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:gap-40 lg:flex-row-reverse">
          <div className=" card flex-shrink-0  max-w-sm shadow-2xl w-full bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl text-center title-text font-bold">
                Register
              </h1>
              {/* //!Email Form */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl title-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red mt-3">This field is required</span>
                )}
              </div>

              {/* //TODO : Photo upload section  */}
              {/* <div className="form-control ">
                <label className="label">
                  <span className="label-text text-base title-text">
                    Upload Profile
                  </span>
                </label>
                <input
                  {...register("photo")}
                  type="file"
                  onChange={(event)=> {setImageUpload(event.target.files[0])}}
                  name="photo"
                  placeholder="Upload Profile"
                  className="file-input  w-full file-input-primary file-input-sm mt-1 border-0 max-w-xs"

                />
                
              </div> */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl title-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red mt-3">Email is required</span>
                )}
              </div>
              {/* //!Password form  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text title-text text-xl">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red mt-3">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red mt-3">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red mt-3">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red mt-3">
                    The password must have one lowercase one uppercase , one
                    number and one special character!
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn button text-white"
                  type="submit"
                  value="SignUp"
                ></input>
              </div>
              <div>
                <div className="text-center">
                  <span className="text-red ">Already have an account?</span>
                  <span
                    className="text-red font-semibold link
                  "
                  >
                    <Link to={"/login"}>Login</Link>
                  </span>
                </div>
              </div>
              <GoogleLogin></GoogleLogin>
            </form>
          </div>
          <div className="w-[50%]">
            <Lottie animationData={animation} loop={true}></Lottie>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
