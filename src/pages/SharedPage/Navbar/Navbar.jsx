import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import bloodicon from "../../../assets/bloodanimation1.json";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user ,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Log Out Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(error => console.log(error))
  }

  const navOptions = (
    <>
      <div className="navitems lg:flex font-bold items-center">
        <li className="hover:border-b-4 border-[#de2d45]">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:border-b-4 border-[#de2d45]">
          <NavLink to={"/finddonor"}>Find Donors</NavLink>
        </li>
        <li className="hover:border-b-4 border-[#de2d45]">
          <NavLink to={"/becomeadonor"}>Become a donor</NavLink>
        </li>
        <li className="hover:border-b-4 border-[#de2d45]">
          <NavLink to={"/about"}>About us</NavLink>
        </li>

        {user ? (
          <>
            <li onClick={handleLogOut} className="font-bold hover:border-b-4 border-[#de2d45]">
              <NavLink to={"/login"}>LogOut </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="font-bold hover:border-b-4 border-[#de2d45]">
              <NavLink to={"/login"}>LogIn</NavLink>
            </li>
          </>
        )}
      </div>
    </>
  );
 
  return (
    <>
      <div className="navbar  pt-4  bg-opacity-30 text-black bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-slate-100 rounded-box w-40"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-center">
              <p className=" title-text text-red font-bold uppercase  text-4xl">
                TRUST <br />
                <p className=" text-black p-text  text-sm">
                  Blood Donating <br /> Campaign
                </p>
              </p>
              <p className="w-full md:w-1/2 lg:w-[30%]">
                <Lottie animationData={bloodicon} loop={true} />
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
          <div className=" flex items-center p-2 rounded-lg px-3 ">
            <div className="  font-semibold flex mr-5 underline">
              {user ? <>{user.displayName || "Guest"}</> : <p>Guest</p>}
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user
                      ? user.photoURL ||
                        "https://i.ibb.co/m6k8XWR/Pngtree-user-avatar-placeholder-black-6796227.png"
                      : "https://i.ibb.co/m6k8XWR/Pngtree-user-avatar-placeholder-black-6796227.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
