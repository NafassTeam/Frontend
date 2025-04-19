import React from "react";
import { useNavigate } from "react-router-dom";
import BG1 from '/src/assets/BG1.png';

const PatientLogin = () => {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate("/Frontend/Login"); 
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br  bg-no-repeat  bg-[length:100%_100%] relativefrom-lime-300 to-green-500 relative overflow-hidden"
      style={{ backgroundImage: `url(${BG1})` }}
    >
      <div className="absolute w-full h-full z-0 ">
        <div className="absolute w-[150%] h-[150%] bg-green-600 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="z-10 bg-[rgba(245,245,245,0.42)]  backdrop-blur-[7px] rounded-4xl p-10 w-full max-w-md shadow-[0px_10px_32.7px_rgba(0,0,0,0.6)] border-[2px]  border-[#ffffff]">
        <h2 className="font-mulish text-center text-3xl font-semibold mb-15 text-[#000000]">Welcome Back!</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Username"
            className="font-mulish w-[350px] mb-8 mx-auto block px-4 py-2  border-b-[2.5px]  border-[#002a17]	 bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="font-mulish mb-12 w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />

          <div className="flex items-center justify-between font-mulish text-black mb-6">
            <label className="flex items-center space-x-2 mb-6">
              <input
                type="checkbox"
                className="rounded accent-[#00260C]"
              />
              <span htmlFor="terms" className="text-sm">Remember me</span>
            </label>

            <a
              href="#forgot-password"
              className="font-mulish font-semibold underline text-[14px] mb-6"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full font-light py-2 rounded-[16.5px] bg-[#00260c] text-white text-xl font-mulish hover:bg-[#004d26] transition"
          >
            Login
          </button>
        </form>

        <p className=" font-mulish mt-4 text-center text-black text-[16px]">
          You don’t have an account?{" "}
          <a href="/Frontend/Login" className="font-mulish font-semibold underline text-[19px]">
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};

export default PatientLogin;
