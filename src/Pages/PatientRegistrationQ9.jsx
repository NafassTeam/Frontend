import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard";
import NextQ1Button from "/src/Components/Registration/NextQ1Button";

const RegisterQ9 = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
 const prevResponses = location.state?.responses || []; 

  const [need, setNeed] = useState("");
  const [error, setError] = useState("");

  const options = [
    { label: "Help", score: 0 },
    { label: "Listening", score: 1 },
    { label: "Solutions finding", score: 2 },
  ];

  const handleNext = () => {
  if (!need) {
    setError("Please select one of the options.");
    return;
  }

  const selected = options.find((o) => o.label === need);
  if (!selected) return;

  const updatedResponses = [...prevResponses, selected.score];
  navigate("/Frontend/Register-Q10", { state: { responses: updatedResponses } });
};

  return (
    <BackgroundWrapper>
      <AuthCard>
        <h2 className="text-3xl font-semibold text-center mb-1">Questionnaire</h2>
        <p className="text-sm text-center mb-6">Question 9 of 17</p>
        <h3 className="text-lg font-medium text-center mb-6">
          What do you need the most from a therapist?
        </h3>

        <div className="space-y-3 w-[320px] mx-auto">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setNeed(opt.label);
                setError("");
              }}
              className={`w-full px-4 py-2 rounded-lg border ${
                need === opt.label
                  ? "bg-emerald-400 border-emerald-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}

          {error && <p className="text-red-600 text-center text-sm">{error}</p>}

          <NextQ1Button onClick={handleNext} disabled={!need} />
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ9;
