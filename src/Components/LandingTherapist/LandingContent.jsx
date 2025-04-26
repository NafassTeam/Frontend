import React from "react";
import AFJButton from "./AFJButton.jsx";
import Containerimg from "/src/assets/LandingContainer.jpeg";
import job from "/src/assets/job.png"


const LandingContent = () => {
  return (
    <section className="flex justify-center md:mt-[-115px] mt-[-20px] px-6 md:px-10 pb-10">
      <div
        className="relative py-12 md:px-24 md:py-13 rounded-[40px] max-w-250 w-full flex flex-col md:flex-row items-center gap-5 md:gap-0 px-10 justify-between z-[10] md:z-[30] overflow-hidden "
        style={{
          boxShadow: '0px 0px 50.9px 0px #00000040',
        }}
      >
        <div
          className="absolute inset-0 z-0 rounded-[40px]"
          style={{
            backgroundImage: `url(${Containerimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9,
          }}
        ></div>

        <div className="relative z-10 text-center md:pl-10">
          <h2 className="text-2xl md:text-3xl mb-[-17px] font-normal font-DM-Serif-Display text-[#002313]">
            Are you a
          </h2>
          <h1 className="text-6xl md:text-9xl mt-3 md:mt-0 font-DM-Serif-Display text-[#002313] leading-none">
            Therapist
          </h1>

          <div className="pt-15 mb-[-30px]">
            <AFJButton />
          </div> 
        </div>

        <div className="relative z-10 pr-0">
          <img
            src={job}
            alt="job"
            className="w-[270px] md:max-w-[300px] md:max-h-[350px] mb-[-78px] mt-0 pb-0 pt-15 md:mt-25 md:mr-0 md:ml-[-20px] "
          />
        </div>
      </div>
    </section>
  );
};

export default LandingContent;
