import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BG1 from '/src/assets/BG1.png';

const PatientLogin = () => {
  const navigate = useNavigate(); 

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: emailOrUsername,
      password: password,
    };

    // Log the data to the console before sending it
    console.log("Data to be sent to the API:", loginData);

    try {
      const response = await axios.post("https://nafassbackend-production.up.railway.app/auth/login/", loginData);

      console.log("Login successful:", response.data);

      // If token is returned
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("userEmail", response.data.user.email);
      localStorage.setItem("userRole", response.data.user.role);

      // Redirecting to the dashboard or another page after successful login
      navigate("/Frontend/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-no-repeat bg-[length:100%_100%] relative from-lime-300 to-green-500 overflow-hidden"
      style={{ backgroundImage: `url(${BG1})` }}
    >
      <div className="absolute w-full h-full z-0">
        <div className="absolute w-[150%] h-[150%] bg-green-600 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="z-10 bg-[rgba(245,245,245,0.42)] backdrop-blur-[7px] rounded-4xl p-10 w-full max-w-md shadow-[0px_10px_32.7px_rgba(0,0,0,0.6)] border-[2px] border-[#ffffff]">
        <h2 className="font-mulish text-center text-3xl font-semibold mb-6 text-[#000000]">Welcome Back!</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="font-mulish w-[350px] mb-4 mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-mulish w-[350px] mb-6 mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
          />

          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <div className="flex items-center justify-between font-mulish text-black mb-6">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded accent-[#00260C]" />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#forgot-password" className="font-semibold underline text-[14px]">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-[16.5px] bg-[#00260c] text-white text-xl font-mulish hover:bg-[#004d26] transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-black text-[16px] font-mulish">
          You don’t have an account?{" "}
          <a href="/Frontend/Register" className="font-semibold underline text-[19px]">
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};

export default PatientLogin;
