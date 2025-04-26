import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard";
import NextQ1Button from "/src/Components/Registration/NextQ1Button";

const RegisterQ10 = () => {
  const navigate = useNavigate();

  const [preference, setPreference] = useState("");
  const [error, setError] = useState("");

  const options = [
    { label: "Male", score: 0 },
    { label: "Female", score: 1 },
    { label: "Same Age", score: 2 },
    { label: "Old and experienced", score: 3 },
    { label: "Religious", score: 4 },
    { label: "Not from your state", score: 5 },
  ];

  const handleNext = () => {
    if (!preference) {
      setError("Please select a therapist preference.");
      return;
    }

    const selected = options.find((o) => o.label === preference);
    const fullResponse = `${selected.label} (${selected.score})`;

    localStorage.setItem("therapist_preference", fullResponse); // Store full string
    navigate("/Frontend/Register-Q11"); // Update with the actual next route
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <h2 className="text-3xl font-semibold text-center mb-1">Questionnaire</h2>
        <p className="text-sm text-center mb-6">Question 10 of 17</p>
        <h3 className="text-lg font-medium text-center mb-6">
          Do you have any preferences for your therapist?
        </h3>

        <div className="space-y-3 w-[320px] mx-auto">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setPreference(opt.label);
                setError("");
              }}
              className={`w-full px-4 py-2 rounded-lg border ${
                preference === opt.label
                  ? "bg-emerald-400 border-emerald-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}

          {error && <p className="text-red-600 text-center text-sm">{error}</p>}

          <NextQ1Button onClick={handleNext} disabled={!preference} />
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ10;
