import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-down" className="max-w-screen-xl mr-10 ml-10  mx-auto">
      <Helmet>
        <title>TRUST | About </title>
      </Helmet>
      <h1 className="text-4xl underline font-bold title-text mt-6 text-red mb-4">
        About Us
      </h1>
      <p className="text-lg font-semibold mb-6">
        Welcome to TRUST, your trusted source for blood donation and saving
        lives.
      </p>

      <h2 className="text-2xl underline font-semibold title-text text-red mb-4">
        Our Mission
      </h2>
      <p className="text-lg font-semibold mb-6">
        At TRUST, our mission is to connect generous blood donors with patients
        in need. We are dedicated to ensuring a safe and reliable blood supply
        for healthcare providers and patients across the country.
      </p>

      <h2 className="text-2xl underline font-semibold text-red title-text mb-4">
        Our Values
      </h2>
      <ul className="list-disc font-semibold pl-6">
        <li className="text-lg mb-2">
          Compassion: We care deeply about the well-being of others.
        </li>
        <li className="text-lg mb-2">
          Integrity: We maintain the highest ethical standards.
        </li>
        <li className="text-lg mb-2">
          Accessibility: We strive to make blood donation accessible to all.
        </li>
        <li className="text-lg mb-2">
          Innovation: We embrace innovation to improve our services.
        </li>
      </ul>
    </div>
  );
};

export default About;
