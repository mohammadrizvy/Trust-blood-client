import React, { useContext } from "react";
import { FaBeer, FaShoppingCart, FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  return (
    <div className=" -mt-5">
      <div className="divider font-semibold">Or Login with</div>
      <div className="flex gap-5 text-center justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn  btn-circle"
        >
          <FaGoogle style={{ color: "red", fontSize: "24px" }}></FaGoogle>
        </button>

        <button className="btn  btn-circle">
          <FaFacebook style={{ color: "red", fontSize: "24px" }}></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
