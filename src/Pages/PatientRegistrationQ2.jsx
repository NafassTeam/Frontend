import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ2 = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const isValidAge = age !== "" && !isNaN(age) && age >= 5 && age <= 100;

  const handleNext = () => {
    if (!isValidAge) {
      setError("Please enter a valid age between 5 and 100.");
      return;
    }

    setError(null);
    localStorage.setItem("age", age);
    navigate("/Frontend/Register-Q3");
  };
  const Age = localStorage.getItem("age");

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 2 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4">
            How old are you?
          </p>

          <input
            type="number"
            placeholder="Enter your age here"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="5"
            max="100"
            className="font-mulish w-[300px] px-4 py-2 mb-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ffb3] text-black placeholder-gray-500 appearance-none [appearance:textfield] [::-webkit-inner-spin-button]:appearance-none [::-webkit-outer-spin-button]:appearance-none"
          />

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-2 text-center">{error}</p>
          )}

          <div className="mt-6 w-full flex justify-center">
            <NextQ1Button onClick={handleNext} disabled={!isValidAge} />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ2;
