import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="flex flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-12 lg:p-12"
    >
      <div className="w-full  p-6 sm:p-8 md:p-12 lg:p-16 bg-white rounded-xl ">
        <div
          data-aos="fade-left"
          className="text-center sm:text-left space-y-4 sm:space-y-6 md:space-y-8"
        >
          <div className="title-text text-2xl sm:text-4xl text-center underline md:text-4xl font-bold">
            Discover the Impact of <span className="text-red">Blood</span>{" "}
            Donation !
          </div>
          <div className="text-sm text-left sm:text-base">
            Explore the world of blood donation and uncover the profound impact
            it has on individuals and communities. In this section, you'll find
            valuable insights into becoming a donor, the reasons behind giving
            blood, and how your donation directly contributes to saving lives.
            Join us on a journey of compassion, generosity, and the incredible
            power of giving.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12">
          {/* Card 1 */}
          <div data-aos="flip-left" className="bg-[#de2d45] rounded-xl">
            <div className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col p-6 sm:p-8 rounded-xl bg-white shadow-xl transform translate-x-4 translate-y-4">
              <div className="font-semibold title-text text-lg sm:text-xl">
                Become a Donor
              </div>
              <div className="my-4 text-sm sm:text-base">
                Explore how your blood donation directly contributes to patient
                care. See the journey of your donation from collection to saving
                lives.
              </div>
              <button className="bg-[#F4F5FA] px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4">
                See More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div data-aos="flip-left" className="bg-[#de2d45] rounded-xl">
            <div className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col p-6 sm:p-8 rounded-xl bg-white shadow-xl transform translate-x-4 translate-y-4">
              <div className="font-semibold title-text text-lg sm:text-xl">
                Why Give Blood?
              </div>
              <div className="my-4 text-sm sm:text-base">
                Explore how your blood donation directly contributes to patient
                care. See the journey of your donation from collection to saving
                lives.
              </div>
              <button className="bg-[#F4F5FA] px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4">
                See More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div data-aos="flip-left" className="bg-[#de2d45]  rounded-xl">
            <div className=" hover:transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col p-6 sm:p-8 rounded-xl bg-white shadow-xl transform translate-x-4 translate-y-4">
              <div className="font-semibold title-text text-lg sm:text-xl">
                How Donation Helps
              </div>
              <div className="my-4 text-sm sm:text-base">
                Explore how your blood donation directly contributes to patient
                care. See the journey of your donation from collection to saving
                lives.
              </div>
              <button className="bg-[#F4F5FA] px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
