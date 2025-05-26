import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";

const RegisterQ3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevResponses = location.state?.responses || [];

  const [residency, setResidency] = useState("");
  const [error, setError] = useState(null);

  const num = parseInt(residency, 10);
  const isValidResidency = !isNaN(num) && num >= 1 && num <= 58;

  const handleNext = () => {
    if (!isValidResidency) {
      setError("Please enter a valid state number between 1 and 58.");
      return;
    }
  
    setError(null);
  
    const updatedResponses = [...prevResponses, num]; 
    console.log("Q3 Responses:", updatedResponses);
    navigate("/Frontend/Register-Q4", { state: { responses: updatedResponses } });
  };
  

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 3 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4 text-center">
            What is your residency?<br />
            <span className="text-sm font-light">(Please specify your state of residence as a number between 1 and 58)</span>
          </p>

          <input
            type="number"
            placeholder="Enter state number"
            value={residency}
            onChange={(e) => setResidency(e.target.value)}
            min="1"
            max="58"
            className="font-mulish w-[300px] px-4 py-2 mb-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ffb3] text-black placeholder-gray-500 appearance-none [appearance:textfield] [::-webkit-inner-spin-button]:appearance-none [::-webkit-outer-spin-button]:appearance-none"
          />

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-2 text-center">{error}</p>
          )}

          <div className="mt-6 w-full flex justify-center">
            <NextQ1Button onClick={handleNext} disabled={!isValidResidency} />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ3;
