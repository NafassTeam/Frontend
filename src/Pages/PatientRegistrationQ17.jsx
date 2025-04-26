import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ17 = () => {
  const navigate = useNavigate();
  const [consumptionStatus, setConsumptionStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (consumptionStatus === null) {
      setError("Please answer whether you consume alcohol or drugs.");
      return;
    }

    setError(null);
    localStorage.setItem("consumptionStatus", consumptionStatus); // Store the numeric value in localStorage
    navigate("/Frontend/Register");  // Adjust this route to the next question
  };

  const isNextDisabled = () => {
    return consumptionStatus === null; // Disable the Next button until an option is selected
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 17 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4">
            Do you consume alcohol or drugs?
          </p>

          <div className="flex flex-col w-full gap-3 items-center">
            <button
              type="button"
              onClick={() => setConsumptionStatus(0)} // Store "Yes" as 0
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${consumptionStatus === 0
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              Yes
            </button>

            <button
              type="button"
              onClick={() => setConsumptionStatus(1)} // Store "No" as 1
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${consumptionStatus === 1
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              No
            </button>

            <button
              type="button"
              onClick={() => setConsumptionStatus(2)} // Store "I was, but I am clean now" as 2
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${consumptionStatus === 2
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              I was, but I am clean now
            </button>
          </div>

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-3 text-center">{error}</p>
          )}

          <div className="mt-6 w-full flex justify-center">
            <NextQ1Button onClick={handleNext} disabled={isNextDisabled()} />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ17;
