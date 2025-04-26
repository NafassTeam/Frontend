import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";

const RegisterQ1 = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState(null);  // Use null to represent no selection
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (gender === null) {
      setError("Please select your gender to continue.");
      return;
    }

    setError(null);
    localStorage.setItem("gender", gender); // Store the numeric value
    navigate("/Frontend/Register-Q2");
  };

  const handleGenderSelection = (genderValue) => {
    setGender(genderValue);
  };

  const isNextDisabled = gender === null;  // Disable Next button until gender is selected

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 1 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4">
            What is your gender?
          </p>

          <div className="flex flex-col w-full gap-3 items-center">
            <button
              type="button"
              onClick={() => handleGenderSelection(0)}  // Store 0 for Male
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${gender === 0
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              Male
              <span
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 ${gender === 0 ? "bg-[#00ffb3] border-[#00260c]" : "border-gray-400"}`}></span>
            </button>

            <button
              type="button"
              onClick={() => handleGenderSelection(1)}  // Store 1 for Female
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${gender === 1
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              Female
              <span
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 ${gender === 1 ? "bg-[#00ffb3] border-[#00260c]" : "border-gray-400"}`}></span>
            </button>
          </div>

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-3 text-center">{error}</p>
          )}

          <div className="mt-6 w-full flex justify-center">
            <NextQ1Button onClick={handleNext} disabled={isNextDisabled} />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ1;
