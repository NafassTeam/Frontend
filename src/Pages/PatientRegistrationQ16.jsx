import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ16 = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
 const prevResponses = location.state?.responses || []; 
 
 const [selectedProblem, setSelectedProblem] = useState(null); 
  const [error, setError] = useState(null);

  const problems = [
    "Hopefulness",
    "Energy levels",
    "Excitement",
    "Self-esteem",
    "Motivation",
    "Stress management",
    "Relationships",
    "Work-life balance",
    "Coping with emotions",
    "Decision-making",
    "Time management",
    "Setting boundaries",
    "Communication skills",
    "Physical health",
    "Mental health",
  ];

  const handleCheckboxChange = (index) => {
    setSelectedProblem(index + 1); 
  };

  const handleNext = () => {
    if (selectedProblem === null) {
      setError("Please select an area where you're facing a problem.");
      return;
    }

    
    const updatedResponses = [...prevResponses,selectedProblem]; 
    setError(null);
    navigate("/Frontend/Register-Q17", { state: { responses: updatedResponses } }); 
  };

  const isNextDisabled = () => {
    return selectedProblem === null; 
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 16 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4">
            Where do you see yourself having a problem?
          </p>

          <div className="flex flex-col w-full gap-3 items-start">
            {problems.map((problem, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="problem"
                  value={problem}
                  checked={selectedProblem === index + 1}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-4 h-4"
                />
                <span className="font-mulish text-black">{problem}</span>
              </label>
            ))}
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

export default RegisterQ16;
