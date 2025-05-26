import React from 'react';
import Containerimg from "/src/assets/LandingContainer.jpeg";

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF9999" className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5FE086" className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110">
    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#66B2FF" className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const WhyNafass = () => {
  return (
    <section 
      id="why-nafass" 
      className="flex justify-center px-6 md:px-10 pb-10 mt-32 md:mt-40 scroll-mt-24"
    >
      <div
        className="relative py-10 md:px-20 md:py-12 rounded-[40px] max-w-250 w-full flex flex-col items-center justify-between gap-5 md:gap-0 px-8 z-[10] md:z-[30] overflow-hidden backdrop-blur-sm"
        style={{
          boxShadow: '0px 0px 50.9px 0px rgba(0, 0, 0, 0.15)',
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

        <div className="relative z-10 text-center w-full">
          <h2 className="text-4xl md:text-5xl mb-4 font-DM-Serif-Display text-[#002313] drop-shadow-lg">
            Why Nafass?
          </h2>
          
          <h3 className="text-xl md:text-2xl mb-6 font-DM-Serif-Display text-[#002313] drop-shadow-md">
            Because Your Mental Well-being Matters.
          </h3>

          <p className="text-[#002313]/80 text-lg mb-10 max-w-2xl mx-auto">
            At Nafass, we believe everyone deserves accessible and empathetic support. Whether you're facing anxiety, burnout, or simply need to talk – we're here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Empathetic Support Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-sm rounded-[20px] p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#F0FFF2]/95 hover:shadow-xl shadow-md cursor-pointer">
              <div className="flex justify-center mb-3">
                <HeartIcon />
              </div>
              <h4 className="text-lg font-semibold text-[#002313] mb-2 transition-colors duration-300 group-hover:text-[#FF9999]">
                Empathetic Support
              </h4>
              <p className="text-[#002313]/80 text-sm">
                Talk safely and privately with a caring listener who understands.
              </p>
            </div>

            {/* Accessible Anywhere Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-sm rounded-[20px] p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#F0FFF2]/95 hover:shadow-xl shadow-md cursor-pointer">
              <div className="flex justify-center mb-3">
                <GlobeIcon />
              </div>
              <h4 className="text-lg font-semibold text-[#002313] mb-2 transition-colors duration-300 group-hover:text-[#5FE086]">
                Accessible Anywhere
              </h4>
              <p className="text-[#002313]/80 text-sm">
                Connect from your phone or laptop, anytime, no matter who you are
              </p>
            </div>

            {/* Confidential & Secure Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-sm rounded-[20px] p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#F0FFF2]/95 hover:shadow-xl shadow-md cursor-pointer">
              <div className="flex justify-center mb-3">
                <ShieldIcon />
              </div>
              <h4 className="text-lg font-semibold text-[#002313] mb-2 transition-colors duration-300 group-hover:text-[#66B2FF]">
                Confidential & Secure
              </h4>
              <p className="text-[#002313]/80 text-sm">
                Your conversations are private and safeguarded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNafass; 