import React, { useEffect } from "react";
import { FaUsers, FaMapMarked } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Network = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="text-center mb-20">
      <h1 data-aos="fade-up" className="text-5xl title-text font-bold">
        We're a <span className="text-red">network</span> of
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 mb-14">
        <div data-aos="flip-right" className="text-center">
          <p className="flex items-center justify-center mb-3">
            <FaUsers style={{ fontSize: "65px", color: "#de2d45" }}></FaUsers>
          </p>
          <h2 className="text-4xl text-red font-bold title-text">
            5000+ Donors
          </h2>
        </div>
        <div data-aos="flip-right" className="text-center">
          <p className="flex items-center justify-center mb-3">
            <FaMapMarked
              style={{ fontSize: "65px", color: "#de2d45" }}
            ></FaMapMarked>
          </p>
          <h2 className="text-4xl text-red font-bold title-text">
            64 Districts
          </h2>
        </div>
        <div data-aos="flip-right" className="text-center">
          <p className="flex items-center justify-center mb-3">
            <MdBloodtype
              style={{ fontSize: "65px", color: "#de2d45" }}
            ></MdBloodtype>
          </p>
          <h2 className="text-4xl text-red font-bold title-text">
            8 Blood Groups
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Network;
