import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import animation from "../../assets/loginanimationnn.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Audio, Dna } from "react-loader-spinner";
import DnaSpinner from "../../Components/DnaSpinner";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState(null);

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error during login:", error);
        let errorMessage = "An error occurred. Please try again.";

        switch (error.code) {
          case "auth/user-not-found":
            errorMessage = "Email not found. Please check your email.";
            break;
          case "auth/invalid-login-credentials":
            errorMessage = "Wrong password. Please check your password.";
            break;
          default:
            // Handle other errors as needed
            break;
        }

        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: errorMessage,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>TRUST | LogIn </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:gap-40 lg:flex-row-reverse">
          <div className="w-[50%]">
            <Lottie animationData={animation} loop={true}></Lottie>
          </div>
          <div className=" card flex-shrink-0 w-full pb-5 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h1 className="text-5xl text-center title-text font-bold">
                Login
              </h1>
              {/* //!Email Form */}
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
                  {...register("password", { required: true })}
                  type="text" // Changed to password type
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red mt-3">Password is required</span>
                )}

                {loginError && (
                  <div className="text-red mt-3">{loginError}</div>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn button text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <div className="text-center">
                  <span className="text-red ">New here? </span>
                  <span className="text-red font-semibold link">
                    <Link to={"/signup"}>Create a New Account</Link>
                  </span>
                </div>
              </div>
            </form>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
