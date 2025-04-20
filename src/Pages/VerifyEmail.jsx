import React, { useEffect, useState } from 'react';
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import VerifyImage from "/src/assets/VerifyAccount.png";

const VerifyEmail = () => {
  const [seconds, setSeconds] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(prev => prev - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleResend = () => {
    // Replace this with your real resend logic backend work hihi
    alert('Verification email sent again!');

    // Reset timer
    setSeconds(60);
    setCanResend(false);
  };

  return (
    <BackgroundWrapper>
      <section className="flex justify-center px-6 md:px-10">
        <div
          className="relative py-12 md:px-40 md:py-6 rounded-[40px] max-w-300 w-full flex-col md:flex-row items-center justify-between gap-5 md:gap-0 px-10 z-[10] md:z-[30] overflow-hidden "
          style={{
            boxShadow: '0px 0px 50.9px 0px #00000040',
          }}
        >
          <div
            className="absolute inset-0 z-0 rounded-[40px] border-4 border-white bg-white"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="text-2xl mt-10 md:text-4xl font-bold font-mulish text-[#002313] mb-10">
              Verify your account.
            </h1>

            <h2 className="text-base md:text-lg mt-3 font-mulish text-[#002313] whitespace-nowrap">
              We've sent a verification link to your email. Please click the link to activate your account.
            </h2>

            <h2 className="text-base md:text-lg mt-2 mb-[-30px] font-mulish text-[#002313]">
              Didn’t get the email? Don’t worry
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="ml-1 text-green-600 underline font-bold transition-colors hover:text-green-800"
                >
                  Resend
                </button>
              ) : (
                <span className="ml-1 text-red-500 underline font-bold">
                  Resend in {seconds}s
                </span>
              )}
            </h2>

            <img
              src={VerifyImage}
              alt="verify"
              className="w-[270px] md:w-[300px] mb-[-48px]"
            />
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default VerifyEmail;
