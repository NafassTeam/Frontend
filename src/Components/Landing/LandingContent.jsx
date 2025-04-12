import React from "react";
import SYJButton from "./SYJButton.jsx";
import SYJDButton from "./SYJDButton.jsx";
import Sad from "/home/mira/Desktop/react_projects/NAFASS/src/assets/Sad.png";
import Containerimg from "/home/mira/Desktop/react_projects/NAFASS/src/assets/LandingContainer.jpeg";

const LandingContent = () => {
  return (
    <section className="flex justify-center md:mt-[-125px] mt-[-20px] px-6 md:px-10 pb-10">
      <div
        className="relative py-12 md:px-24 md:py-13 rounded-[40px] max-w-250 w-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 px-10 z-[10] md:z-[30] overflow-hidden "
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
            Your mind’s looking for
          </h2>
          <h1 className="text-6xl md:text-9xl mt-3 md:mt-0 font-DM-Serif-Display text-[#002313] leading-none">
            Peace?
          </h1>

          <div className="mt-6">
            <SYJButton />
          </div> 

          <div className="mt-4">
            <SYJDButton />
          </div>
        </div>

        <div className="relative z-10 pr-0">
          <img
            src={Sad}
            alt="Confused character"
            className="w-[130px] md:w-[220px] mb-[-52px] mt-0  md:mt-10 md:mr-0 md:ml-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingContent;
