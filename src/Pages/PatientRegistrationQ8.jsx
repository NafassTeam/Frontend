import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard";
import NextQ1Button from "/src/Components/Registration/NextQ1Button";

const RegisterQ8 = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
 const prevResponses = location.state?.responses || []; 

  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [error, setError] = useState("");

  const options = [
    { label: "Married", score: 0 },
    { label: "Single", score: 1 },
    { label: "Engaged or in a relationship", score: 2 },
    { label: "Divorced", score: 3 },
  ];

  const handleNext = () => {
  if (!relationshipStatus) {
    setError("Please select your relationship status.");
    return;
  }

  const selected = options.find((o) => o.label === relationshipStatus);
  if (!selected) return;

  const updatedResponses = [...prevResponses, selected.score];
  navigate("/Frontend/Register-Q9", { state: { responses: updatedResponses } });
};


  return (
    <BackgroundWrapper>
      <AuthCard>
        <h2 className="text-3xl font-semibold text-center mb-1">Questionnaire</h2>
        <p className="text-sm text-center mb-6">Question 8 of 17</p>
        <h3 className="text-lg font-medium text-center mb-6">
          How can you describe your relationship status?
        </h3>

        <div className="space-y-3 w-[320px] mx-auto">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setRelationshipStatus(opt.label);
                setError("");
              }}
              className={`w-full px-4 py-2 rounded-lg border ${
                relationshipStatus === opt.label
                  ? "bg-emerald-400 border-emerald-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}

          {error && <p className="text-red-600 text-center text-sm">{error}</p>}

          <NextQ1Button onClick={handleNext} disabled={!relationshipStatus} />
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ8;
