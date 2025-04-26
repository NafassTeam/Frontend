import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard";
import NextQ1Button from "/src/Components/Registration/NextQ1Button";

const RegisterQ7 = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const options = [
    { label: "Employed", score: 0 },
    { label: "Student", score: 1 },
    { label: "None of them", score: 2 },
  ];

  const handleNext = () => {
    if (!status) {
      setError("Please select one of the options.");
      return;
    }

    const selected = options.find((o) => o.label === status);
    localStorage.setItem("status_score", selected.score); // Store score or send to API

    navigate("/Frontend/Register-Q8"); // Replace with the next question's path
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <h2 className="text-3xl font-semibold text-center mb-1">Questionnaire</h2>
        <p className="text-sm text-center mb-6">Question 7 of 17</p>
        <h3 className="text-lg font-medium text-center mb-6">How can you describe your status?</h3>

        <div className="space-y-3 w-[320px] mx-auto">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setStatus(opt.label);
                setError("");
              }}
              className={`w-full px-4 py-2 rounded-lg border ${
                status === opt.label
                  ? "bg-emerald-400 border-emerald-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}

          {error && <p className="text-red-600 text-center text-sm">{error}</p>}

          <NextQ1Button onClick={handleNext} disabled={!status} />
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ7;
