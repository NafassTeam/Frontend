import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ4 = () => {
  const navigate = useNavigate();
   const location = useLocation(); 
  const prevResponses = location.state?.responses || []; 
  

  const [hadTherapy, setHadTherapy] = useState(null);
  const [helpful, setHelpful] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (hadTherapy === null) {
      setError("Please select whether you had therapy before.");
      return;
    }

    if (hadTherapy === "Yes" && helpful === null) {
      setError("Please answer whether the therapy was helpful.");
      return;
    }

    let therapyResponse;

    if (hadTherapy === "Yes") {
      therapyResponse = helpful === "Yes" ? 0 : 1;
    } else {
      therapyResponse = 2;
    }

    setError(null);
    const updatedResponses = [...prevResponses, therapyResponse]; 
    navigate("/Frontend/Register-Q5", { state: { responses: updatedResponses } });
    
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 4 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4 text-center">
            Have you ever had therapy before?
          </p>

          <div className="flex flex-col gap-3 mb-4">
            <button
              onClick={() => {
                setHadTherapy("Yes");
                setHelpful(null); // reset helpful question
              }}
              className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                hadTherapy === "Yes"
                  ? "bg-[#00ffb3] border-[#00ffb3]"
                  : "bg-white border-gray-300"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setHadTherapy("No");
                setHelpful(null);
              }}
              className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                hadTherapy === "No"
                  ? "bg-[#00ffb3] border-[#00ffb3]"
                  : "bg-white border-gray-300"
              }`}
            >
              No
            </button>
          </div>

          {hadTherapy === "Yes" && (
            <div className="w-full text-center">
              <p className="text-black font-mulish mb-2">Was it helpful?</p>
              <div className="flex flex-col gap-3 mb-4 items-center">
                <button
                  onClick={() => setHelpful("Yes")}
                  className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                    helpful === "Yes"
                      ? "bg-[#aaffd1] border-[#00cc99]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setHelpful("No")}
                  className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                    helpful === "No"
                      ? "bg-[#aaffd1] border-[#00cc99]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  No
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
                hadTherapy === null ||
                (hadTherapy === "Yes" && helpful === null)
              }
            />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ4;
