import React, { useContext, useEffect } from "react";
import DnaSpinner from "../../Components/DnaSpinner";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const BecomeADonor = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBecomeDonor = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const age = form.age.value;
    const lastDonationDate = form.lastDonationDate.value;

    const newDonor = {
      phoneNumber,
      lastDonationDate,
      name,
      bloodGroup,
      district,
      age,
    };
    console.log(newDonor);

    fetch("https://trust-server.vercel.app/donors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(newDonor),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Thank You ! ",
            text: "User successfully inserted",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/finddonor");
        }
      });
  };

  if (loading) {
    return <DnaSpinner></DnaSpinner>;
  }

  return (
    <div data-aos="zoom-in-down" className="mr-10 ml-10">
      <Helmet>
        <title>TRUST | Become Donor </title>
      </Helmet>
      <p className="text-5xl text-center underline title-text mr-10 ml-10 text-red font-bold">
        Become a Blood Donor
      </p>
      <p className="font-semibold mt-5 text-left text-red">
        Your decision to become a blood donor is a noble and life-saving choice.
        By donating blood, you have the power to make a positive impact on the
        lives of those in need. Each drop of your blood can potentially save
        someone from suffering due to illness, surgery, or an unforeseen medical
        emergency. Becoming a blood donor is an act of compassion and
        generosity. It's a simple yet profound way to contribute to your
        community and society as a whole. Donated blood is a lifeline for
        patients battling various medical conditions, accident victims, and
        individuals undergoing complex surgical procedures.
      </p>
      <p className="font-semibold underline title-text text-center mt-5 text-4xl text-red">
        Give us your Information below
      </p>

      <div className="card-body  rounded-2xl items-center space-y-4">
        <div className="flex space-x-4">
          <form onSubmit={handleBecomeDonor} className="">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold">Your name : </span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold">
                  Contact Number :{" "}
                </span>
              </label>
              <input
                required
                type="number"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">
                    Blood Group :
                  </span>
                </label>
                <input
                  required
                  type="text"
                  name="bloodGroup"
                  placeholder="Enter Blood Group"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">District : </span>
                </label>
                <input
                  required
                  type="text"
                  name="district"
                  placeholder="Enter Your District"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Your age : </span>
                </label>
                <input
                  required
                  type="number"
                  name="age"
                  placeholder="Enter Your age"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">
                    Last Donation :{" "}
                  </span>
                </label>
                <input
                  required
                  type="date"
                  name="lastDonationDate"
                  placeholder="Enter Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="text-center">
              <input
                className="btn btn-wide mt-4 button  text-white"
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeADonor;
