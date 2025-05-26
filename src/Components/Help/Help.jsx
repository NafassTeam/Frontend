import React from 'react';
import Containerimg from "/src/assets/LandingContainer.jpeg";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5FE086" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5FE086" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5FE086" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5FE086" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const ContactLink = ({ icon: Icon, text, href, subtext }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center h-full w-full"
  >
    <div className="bg-[#F0FFF2] p-2.5 rounded-[15px] group-hover:bg-[#5FE086]/10 transition-all duration-500 
      shadow-[inset_0_0_12px_rgba(95,224,134,0.2),0_2px_8px_rgba(0,35,19,0.15)] 
      group-hover:shadow-[inset_0_0_16px_rgba(95,224,134,0.3),0_4px_12px_rgba(0,35,19,0.2)]
      border border-[#5FE086]/10 group-hover:border-[#5FE086]/30 backdrop-blur-sm
      transform group-hover:-translate-y-1">
      <Icon />
    </div>
    <div className="flex flex-col items-center justify-center gap-0.5 mt-2 w-full rounded-[15px] py-1.5 px-2 
      border border-[#5FE086]/10 group-hover:border-[#5FE086]/30 transition-all duration-500
      bg-white/5 group-hover:bg-white/10 backdrop-blur-sm
      transform group-hover:scale-[1.02]">
      <span className="text-sm font-mulish font-medium tracking-wide text-[#002313] group-hover:text-[#5FE086] transition-all duration-500 break-words">
        {text}
      </span>
      {subtext && (
        <span className="text-[10px] text-[#002313]/60 group-hover:text-[#5FE086]/80 transition-colors duration-500 leading-tight">
          {subtext}
        </span>
      )}
    </div>
  </a>
);

const StaticContact = ({ icon: Icon, text, subtext }) => (
  <div className="group flex flex-col items-center h-full w-full">
    <div className="bg-[#F0FFF2] p-2.5 rounded-[15px] group-hover:bg-[#5FE086]/10 transition-all duration-500 
      shadow-[inset_0_0_12px_rgba(95,224,134,0.2),0_2px_8px_rgba(0,35,19,0.15)] 
      group-hover:shadow-[inset_0_0_16px_rgba(95,224,134,0.3),0_4px_12px_rgba(0,35,19,0.2)]
      border border-[#5FE086]/10 group-hover:border-[#5FE086]/30 backdrop-blur-sm
      transform group-hover:-translate-y-1">
      <Icon />
    </div>
    <div className="flex flex-col items-center justify-center gap-0.5 mt-2 w-full rounded-[15px] py-1.5 px-2 
      border border-[#5FE086]/10 group-hover:border-[#5FE086]/30 transition-all duration-500
      bg-white/5 group-hover:bg-white/10 backdrop-blur-sm
      transform group-hover:scale-[1.02]">
      <span className="text-sm font-mulish font-medium tracking-wide text-[#002313] group-hover:text-[#5FE086] transition-all duration-500 break-words">
        {text}
      </span>
      {subtext && (
        <span className="text-[10px] text-[#002313]/60 group-hover:text-[#5FE086]/80 transition-colors duration-500 leading-tight">
          {subtext}
        </span>
      )}
    </div>
  </div>
);

const Help = () => {
  return (
    <section 
      id="help" 
      className="flex justify-center px-6 md:px-10 pb-20 mt-32 md:mt-40 scroll-mt-24"
    >
      <div
        className="relative py-10 md:px-16 md:py-12 rounded-[40px] max-w-250 w-full flex flex-col items-center justify-between gap-5 md:gap-0 px-6 z-[10] md:z-[30] overflow-hidden backdrop-blur-sm"
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
            How Can We Help?
          </h2>
          
          <h3 className="text-xl md:text-2xl mb-6 font-DM-Serif-Display text-[#002313] drop-shadow-md">
            We're Here to Support You
          </h3>

          <p className="text-[#002313]/80 text-lg mb-12 max-w-2xl mx-auto">
            Whether you're seeking guidance, support, or just someone to talk to, our team is ready to assist you. Connect with us through any of these channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {/* Phone Support Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-md rounded-[25px] p-3 text-center 
              transform transition-all duration-500 hover:scale-105 hover:bg-[#F0FFF2]/95 
              shadow-[0_4px_20px_rgba(0,35,19,0.15),inset_0_0_20px_rgba(95,224,134,0.05),0_8px_16px_rgba(0,35,19,0.1)] 
              hover:shadow-[0_8px_30px_rgba(0,35,19,0.2),inset_0_0_30px_rgba(95,224,134,0.1),0_12px_24px_rgba(0,35,19,0.15)] 
              border border-[#5FE086]/10 hover:border-[#5FE086]/30 h-[145px]
              hover:-translate-y-1">
              <StaticContact 
                icon={PhoneIcon}
                text="+1 (555) 123-4567"
                subtext="Available 24/7 for emergencies"
              />
            </div>

            {/* Instagram Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-md rounded-[25px] p-3 text-center 
              transform transition-all duration-500 hover:scale-105 hover:bg-[#F0FFF2]/95 
              shadow-[0_4px_20px_rgba(0,35,19,0.15),inset_0_0_20px_rgba(95,224,134,0.05),0_8px_16px_rgba(0,35,19,0.1)] 
              hover:shadow-[0_8px_30px_rgba(0,35,19,0.2),inset_0_0_30px_rgba(95,224,134,0.1),0_12px_24px_rgba(0,35,19,0.15)] 
              border border-[#5FE086]/10 hover:border-[#5FE086]/30 h-[145px]
              hover:-translate-y-1">
              <ContactLink 
                icon={InstagramIcon}
                text="@nafass.dz"
                href="https://www.instagram.com/nafass.dz/"
                subtext="Daily wellness tips & updates"
              />
            </div>

            {/* Facebook Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-md rounded-[25px] p-3 text-center 
              transform transition-all duration-500 hover:scale-105 hover:bg-[#F0FFF2]/95 
              shadow-[0_4px_20px_rgba(0,35,19,0.15),inset_0_0_20px_rgba(95,224,134,0.05),0_8px_16px_rgba(0,35,19,0.1)] 
              hover:shadow-[0_8px_30px_rgba(0,35,19,0.2),inset_0_0_30px_rgba(95,224,134,0.1),0_12px_24px_rgba(0,35,19,0.15)] 
              border border-[#5FE086]/10 hover:border-[#5FE086]/30 h-[145px]
              hover:-translate-y-1">
              <ContactLink 
                icon={FacebookIcon}
                text="Nafass"
                href="https://web.facebook.com/profile.php?id=61576858225237"
                subtext="Join our supportive community"
              />
            </div>

            {/* Email Support Card */}
            <div className="group bg-[#F8FFF9]/90 backdrop-blur-md rounded-[25px] p-3 text-center 
              transform transition-all duration-500 hover:scale-105 hover:bg-[#F0FFF2]/95 
              shadow-[0_4px_20px_rgba(0,35,19,0.15),inset_0_0_20px_rgba(95,224,134,0.05),0_8px_16px_rgba(0,35,19,0.1)] 
              hover:shadow-[0_8px_30px_rgba(0,35,19,0.2),inset_0_0_30px_rgba(95,224,134,0.1),0_12px_24px_rgba(0,35,19,0.15)] 
              border border-[#5FE086]/10 hover:border-[#5FE086]/30 h-[145px]
              hover:-translate-y-1">
              <StaticContact 
                icon={EmailIcon}
                text="dznafass@gmail.com"
                subtext="Send us an email anytime"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help; 