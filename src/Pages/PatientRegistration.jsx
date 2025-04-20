import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard";

const RegisterForm = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Frontend/Verify-email");
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <>
          <h2 className="font-mulish text-center text-3xl font-semibold mb-8 text-[#000000]">
            Join us!
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {["First Name", "Last Name", "Email", "Password"].map((placeholder, i) => (
              <input
                key={i}
                type={placeholder === "Email" ? "email" : placeholder === "Password" ? "password" : "text"}
                placeholder={placeholder}
                className="font-mulish w-[350px] mx-auto block px-4 py-2 border-b-[2.5px] border-[#002a17] bg-transparent text-[#000000] font-light text-sm placeholder-black focus:outline-none"
              />
            ))}

            <div className="font-mulish text-black text-center">
              <input
                type="checkbox"
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
            <a href="#" className="font-mulish font-semibold underline text-[19px]">
              Login
            </a>
          </p>
        </>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterForm;
