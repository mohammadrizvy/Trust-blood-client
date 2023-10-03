import React, { useContext, useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import animation from "../../.././assets/newblooddonationjson.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const Banner = () => {

  const {user} = useContext(AuthContext)

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in-right" className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-full md:w-1/2 lg:w-[50%]">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className=" ">
          <h1 className="text-5xl title-text font-bold">
            <span className="text-[#de2d45]">TRUST:</span> Lifesaving Blood{" "}
            <br />
            Donations
          </h1>
          <p className="py-6 text-base-content  ">
            Join our mission to save lives through the power of blood donation.
            Together, we can make a difference and ensure a safe and reliable
            blood supply for those in need.
          </p>
          <Link to={"/finddonor"}>
            <button className="btn rounded-3xl bg-[#DE2D45] text-white">
              Find Donor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
