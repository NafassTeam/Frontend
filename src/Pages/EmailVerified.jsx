import { Link } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import Verified from "/src/assets/Verified.png";

const EmailVerified = () => {
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
            <h1 className="text-2xl mt-15 md:text-4xl font-bold font-mulish text-[#002313]">
              Your account has been verified successfully.
            </h1>

            <Link
              to="/account"
              className="text-base md:text-lg mt-6 mb-10 font-mulish underline font-semibold hover:text-green-800 transition-colors"
            >
              Go to your account page
            </Link>

            <img
              src={Verified}
              alt="verified"
              className="w-[270px] md:w-[300px] mb-[-48px]"
            />
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default EmailVerified;
