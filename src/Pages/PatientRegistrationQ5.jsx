import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ5 = () => {
const navigate = useNavigate();
   const location = useLocation(); 
  const prevResponses = location.state?.responses || []; 

  const [religious, setReligious] = useState(null); 
  const [practiceLevel, setPracticeLevel] = useState(null); 
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (religious === null) {
      setError("Please answer the main question.");
      return;
    }
  
    if (religious === "Yes" && practiceLevel === null) {
      setError("Please indicate how often you practice.");
      return;
    }
  
    const score = religious === "No" ? 3 : practiceLevel;
    const updatedResponses = [...prevResponses, score];
  
    setError(null);
    navigate("/Frontend/Register-Q6", { state: { responses: updatedResponses } });
  };
  

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 5 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4 text-center">
            Do you consider yourself religious? <br />
            (Do you actively practice your religion as it should be?)
          </p>

          <div className="flex flex-col gap-3 mb-4">
            <button
              onClick={() => {
                setReligious("Yes");
                setPracticeLevel(null); // reset follow-up
              }}
              className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                religious === "Yes"
                  ? "bg-[#00ffb3] border-[#00ffb3]"
                  : "bg-white border-gray-300"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setReligious("No");
                setPracticeLevel(null);
              }}
              className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                religious === "No"
                  ? "bg-[#00ffb3] border-[#00ffb3]"
                  : "bg-white border-gray-300"
              }`}
            >
              No
            </button>
          </div>

          {/* If Yes → ask how often */}
          {religious === "Yes" && (
            <div className="text-center mb-4">
              <p className="text-black font-mulish mb-2">How often do you practice?</p>
              <div className="flex flex-col gap-3 items-center">
                <button
                  onClick={() => setPracticeLevel(0)}
                  className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                    practiceLevel === 0
                      ? "bg-[#aaffd1] border-[#00cc99]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => setPracticeLevel(1)}
                  className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                    practiceLevel === 1
                      ? "bg-[#aaffd1] border-[#00cc99]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  Several times a week
                </button>
                <button
                  onClick={() => setPracticeLevel(2)}
                  className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                    practiceLevel === 2
                      ? "bg-[#aaffd1] border-[#00cc99]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  Occasionally
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-2 text-center">{error}</p>
          )}

          <div className="mt-4 w-full flex justify-center">
            <NextQ1Button
              onClick={handleNext}
              disabled={
                religious === null || (religious === "Yes" && practiceLevel === null)
              }
            />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ5;
