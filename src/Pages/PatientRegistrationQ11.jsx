import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ11 = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
 const prevResponses = location.state?.responses || []; 
 
 const [financialSituation, setFinancialSituation] = useState("");
  const [error, setError] = useState(null);

  const options = [
    { label: "Good", score: 0 },
    { label: "Poor", score: 1 },
  ];

  const handleNext = () => {
    if (!financialSituation) {
      setError("Please select your financial situation to continue.");
      return;
    }
  
    const selected = options.find((opt) => opt.label === financialSituation);
    if (!selected) return;
  
    const updatedResponses = [...prevResponses, selected.score];
    setError(null);
    navigate("/Frontend/Register-Q12", { state: { responses: updatedResponses } });
  };
  

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 11 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4">
            How would you describe your current financial situation?
          </p>

          <div className="flex flex-col w-full gap-3 items-center">
            {options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => {
                  setFinancialSituation(opt.label);
                  setError(null);
                }}
                className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                  ${financialSituation === opt.label
                    ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                    : "bg-white border-gray-300 text-black"}`}
              >
                {opt.label}
                <span
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 ${
                    financialSituation === opt.label
                      ? "bg-[#00ffb3] border-[#00260c]"
                      : "border-gray-400"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-3 text-center">{error}</p>
          )}

          <div className="mt-6 w-full flex justify-center">
            <NextQ1Button onClick={handleNext} disabled={!financialSituation} />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ11;
