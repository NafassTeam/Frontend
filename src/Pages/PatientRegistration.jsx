import React from "react";
import BG2 from '/src/assets/BG2.png';


const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  bg-no-repeat bg-center bg-[length:100%_100%] relativefrom-lime-300 to-green-400 relative overflow-hidden"
    style={{ backgroundImage: `url(${BG2})` }}
    >
      <div className="absolute w-full h-full z-0 ">
        <div className="absolute w-[150%] h-[150%] bg-green-600 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="z-10 bg-[rgba(245,245,245,0.42)]  backdrop-blur-[7px] rounded-4xl p-10 w-full max-w-md shadow-[0px_10px_32.7px_rgba(0,0,0,0.6)] border-[2px]  border-[#ffffff]">
       
        <h2 className="font-mulish text-center text-3xl font-semibold mb-8 text-[#000000]">Join us!</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="font-mulish w-[350px] mx-auto block px-4 py-2  border-b-[2.5px]  border-[#002a17]	 bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="font-mulish w-[350px] mx-auto block px-4 py-2 mb-6 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />

          <div className="font-mulish text-black text-center ">
            <input
              type="checkbox"
              id="terms"
              className=" mb-4 mr-2 accent-[#00260C]"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full font-light py-2 rounded-[16.5px] bg-[#00260c] text-white text-xl font-mulish hover:bg-[#004d26] transition   "
          >
            Register
          </button>
        </form>
        <p className=" font-mulish mt-4 text-center text-black text-[16px]">
          Already have an account?{" "}
          <a href="#" className="font-mulish font-semibold underline text-[19px]">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;