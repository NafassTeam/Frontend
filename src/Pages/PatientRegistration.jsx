import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard";

const RegisterForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responses = useMemo(() => location.state?.responses || [], [location.state]);
  const MOCK = true; //trj3 false kinlinkiw bel backend

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    username: "",
    agree: false,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // just an alt kbal manlinkiw
    // if (MOCK) {
    //   console.log("Mock registration data:", formData);
    //   localStorage.setItem("userEmail", formData.email);
    //   navigate("/Frontend/Verify-email");
    //   return;
    // }

    // when linked
    try {
      const gender =
        responses && responses.length > 0
          ? responses[0] === 0
            ? "M"
            : responses[0] === 1
              ? "F"
              : "M"
          : "M";

      const response = await axios.post("https://nafassbackend-production.up.railway.app/auth/register/patient/", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        role: "patient",
        gender: gender,
        username: formData.username,
        questionnaire_result : responses.length > 0 ? responses : [],
      });

      console.log("Registration successful:", response.data);
      localStorage.setItem("userEmail", formData.email);
      navigate("/Frontend/Verify-email");
    } catch (err) {
      console.error("Registration failed:", err);
      setError("An error occurred during registration. Please try again.");
    }
  };

  React.useEffect(() => {
    if (responses.length > 0) {
      console.log("Received questionnaire responses:", responses);
    }
  }, [responses]);

  return (
    <BackgroundWrapper>
      <AuthCard>
        <>
          <h2 className="font-mulish text-center text-3xl font-semibold mb-8 text-[#000000]">
            Join us!
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
            />
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
            />
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
            />

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

            <div className="font-mulish text-black text-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                id="terms"
                className="mb-4 mr-2 accent-[#00260C]"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full font-light py-2 rounded-[16.5px] bg-[#00260c] text-white text-xl font-mulish hover:bg-[#004d26] transition"
            >
              Register
            </button>
          </form>

          <p className="font-mulish mt-4 text-center text-black text-[16px]">
            Already have an account?{" "}
            <a href="/Frontend/Login" className="font-mulish font-semibold underline text-[19px]">
              Login
            </a>
          </p>
        </>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterForm;
