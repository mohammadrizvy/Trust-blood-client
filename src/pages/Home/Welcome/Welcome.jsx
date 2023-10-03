import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const Welcome = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    
    const {user} = useContext(AuthContext)

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row  flex-wrap-reverse">
        <img
          data-aos="fade-right"
          style={{
            clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
          }}
          src="https://i.ibb.co/hsX6bq6/b269949add8a068ccdd3e6b43ff5390a.jpg"
          className="w-[45%] lg:max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0"
          alt="Hero"
        />

        <div data-aos="fade-left" className="lg:w-2/3">
          <h1 className="text-4xl title-text font-bold">
            <p className="text-red text-lg p-text">
              {user ? <>{user.displayName}</> : <p>Hi</p>}
            </p>
            <span className="text-6xl"> Welcome</span> to <br /> Our
            <span className="text-red"> Blood</span> Donor Organization
          </h1>
          <p className="py-6">
            Welcome to our Blood Donor Organization, where compassion meets
            lifesaving. We are dedicated to the noble cause of blood donation,
            striving to bridge the gap between donors and those in need. Join
            our mission to ensure a steady supply of blood, and together, let's
            save countless lives, one drop at a time.
          </p>
          <Link to={"/becomeadonor"}>
            <button className="btn button">Donate Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
  
  
};

export default Welcome;
