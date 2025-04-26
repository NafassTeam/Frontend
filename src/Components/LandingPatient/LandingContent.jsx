import React from "react";
import SYJButton from "./SYJButton.jsx";
import SYJDButton from "./SYJDButton.jsx";
import Containerimg from "/src/assets/LandingContainer.jpeg";


const LandingContent = () => {
  return (
    <section className="flex justify-center md:mt-[-115px] mt-[-20px] px-6 md:px-10 pb-10">
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
            src="https://s3-alpha-sig.figma.com/img/7114/9b3a/091bb851950c13b105744e58d9e0eec4?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~nSSpPZmOGl7M-u~rRVmiVUkUmfprzftQNNzUZKmUVpHnQMQnA~G6q~wdeeASE5ZNhCaT6dkKPGUBwQKFybi2hArRLVCWTLzQsu64svPo02Hd3lStH1~iOjYNhKaPYHHN6yea8NiGVv9AIP0NEi6ZWBVfx8Pg6IN3mdRSLrVoPt9SnxWjFYaw~HS-qFCIY915jIlPsfgYxe0xbTUJ0lgZQmMY2cT-8riGFPC5lP6VSZJqbO~L7HJcooFUxvmkaS7dpBAV~zYpwvManlIV3ofnAg8rS6L1ZZv3YEYrYmcfK84Y0U8XM1jBWCTX2xRHqVQ0vAA-Ce~YKnlCXIoT~gZQ__"
            alt="negative aura"
            className="w-[65px] md:w-[110px] mb-[-82px] mt-0 md:mt-20 md:ml-53 ml-26"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/9a0a/3f81/d560ef59ce5b15b99dba1061569dfb3a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m0Zl~t~SaUkCbElKh323lZgiFMhBNpQMu0R5W-bQUZLE5MZ-am5Ya3ozc1X7GbP~PeN7mWe9iZ75G6~gjoqvTwdOij7oSc5dx0Go4E7ReU5o4vVpkZgdSau5DK3SCIrnpifHOYRHXopB7PCPD9Duabn~ghQKBg1Gbuf2cey1JjpqJXiYkAZ9VWX5BUEq81wzBuJZ3x0QAIC5BsR-WTkvEHq4ABtaSee4p9keaUPA6z2sA8e6~dz5QbTAxdvYq9okCKu43hMzCjyeUJLixVDkC8od~Jp1MMrLVGvC0YUm2xqwfw-GVpmsP9kciSxMguBdMzu-~H-WX1bWy43mHNrRaA__"
            alt="sad"
            className="w-[270px] md:w-[500px] md:h-[200px] mb-[-52px] mt-20  md:mt-25 md:mr-0 md:ml-20 "
          />
        </div>
      </div>
    </section>
  );
};

export default LandingContent;
