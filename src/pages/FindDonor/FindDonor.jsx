import React, { useState, useEffect, useContext } from "react";
import animation from "../../assets/user.json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdBloodtype } from "react-icons/md";
import DnaSpinner from "../../Components/DnaSpinner";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const FindDonor = () => {
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    AOS.init();
  }, []);
  const [donors, setDonors] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [searchName, setSearchName] = useState("");
  const [filteredDonors, setFilteredDonors] = useState([]);

   useEffect(() => {
     // Fetch donors data when the component mounts
     fetch("https://trust-server.vercel.app/donors")
       .then((res) => res.json())
       .then((data) => {
         setDonors(data);
         setFilteredDonors(data);
       });
   }, []);

   // Function to filter donors based on selected filters
const filterDonors = () => {
  const filtered = donors.filter((donor) => {
    const districtMatch =
      selectedDistrict === "All" || donor.district === selectedDistrict;
    const bloodGroupMatch =
      selectedBloodGroup === "All" || donor.bloodGroup === selectedBloodGroup;
    return (
      districtMatch &&
      bloodGroupMatch &&
      donor.name &&
      donor.name.toLowerCase().includes(searchName.toLowerCase())
    );
  });
  setFilteredDonors(filtered);
};

   // Call filterDonors whenever filter criteria change
   useEffect(() => {
     filterDonors();
   }, [selectedDistrict, selectedBloodGroup, searchName, donors]);

   if (loading) {
     return <DnaSpinner />;
   }
  return (
    <div
      className="mt-5"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Helmet>
        <title>TRUST | Find Donor </title>
      </Helmet>
      <h1 className="uppercase font-bold title-text text-5xl text-center underline text-red">
        Find Your Donor
      </h1>

      <div className="mb-16">
        {/* <h1 className="text-5xl title-text">
        Total donors: {filteredDonors.length}
      </h1> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-12 mb-10 ms-auto   justify-evenly">
          {/* District selection secttion  */}

          <div className="form-control ">
            <div className="mb-4 input-group">
              <select
                className="select select-bordered"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="All">Select District</option>
                <option value="All">All</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Barisal">Barisal</option>
                <option value="Comilla">Comilla</option>
                <option value="Bhola">Bhola</option>
                <option value="Brahmanbaria">Brahmanbaria</option>
                <option value="Chandpur">Chandpur</option>
                <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                <option value="Chuadanga">Chuadanga</option>
                <option value="Bagerhat">Bagerhat</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Feni">Feni</option>
                <option value="Gaibandha">Gaibandha</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Habiganj">Habiganj</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Jashore (Jessore)">Jashore (Jessore)</option>
                <option value="Jhalokati">Jhalokati</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Joypurhat">Joypurhat</option>
                <option value="Khagrachari">Khagrachari</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Lakshmipur">Lakshmipur</option>
                <option value="Lalmonirhat">Lalmonirhat</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Magura">Magura</option>
                <option value="Manikganj">Manikganj</option>
                <option value="Meherpur">Meherpur</option>
                <option value="Moulvibazar">Moulvibazar</option>
                <option value="Munshiganj">Munshiganj</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Naogaon">Naogaon</option>
                <option value="Narail">Narail</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Natore">Natore</option>
                <option value="Nawabganj">Nawabganj</option>
                <option value="Netrakona">Netrakona</option>
                <option value="Nilphamari">Nilphamari</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Pabna">Pabna</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Pirojpur">Pirojpur</option>
                <option value="Rajbari">Rajbari</option>
                <option value="Rangamati">Rangamati</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Satkhira">Satkhira</option>
              </select>
              <button className="btn text-white bg-[#DE2D45]">Go</button>
            </div>
          </div>

          {/*! Blood Group selection section  !*/}

          <div className="form-control mb-4">
            <div className="input-group">
              <select
                className="select select-bordered"
                value={selectedBloodGroup}
                onChange={(e) => setSelectedBloodGroup(e.target.value)}
              >
                <option value="All"> Select Blood Group</option>
                <option value="All">ALL</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="O-">O-</option>
              </select>
              <button className="btn text-white bg-[#DE2D45]">Go</button>
            </div>
          </div>
          <div className=" form-control">
            <div className=" input-group mb-4">
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search Donors"
                className="input input-bordered"
              />
              <button className="btn bg-[#DE2D45] text-white btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* head */}
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left title-text text-red uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left title-text text-red uppercase"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left title-text text-red uppercase"
                >
                  <span className="text-red">Blood</span> Group
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left title-text text-red uppercase"
                ></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDonors.map((donor) => (
                <tr key={donor.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 ">
                        <MdBloodtype
                          style={{ fontSize: "3rem", color: "#DE2D45" }}
                        ></MdBloodtype>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-base p-text font-semibold text-gray-900">
                      {donor.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {donor.district}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      Phone no:{" "}
                      <span className="underline">{donor.phoneNumber}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Last Donation: {donor.lastDonationDate}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="title-text font-semibold  text-red">
                      {donor.bloodGroup}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="btn button btn-sm">More info</button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FindDonor;
