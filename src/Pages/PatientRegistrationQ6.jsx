import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ6 = () => {
  const navigate = useNavigate();

  const [familyStatus, setFamilyStatus] = useState(null); // 'alive', 'divorced', etc.
  const [relationship, setRelationship] = useState(null); // 'good', 'normal', 'poor'
  const [error, setError] = useState(null);

  const relationshipMap = {
    alive: { good: 0, normal: 1, poor: 2 },
    divorced: { good: 3, normal: 4, poor: 5 },
    father: { good: 6, normal: 7, poor: 8 },
    mother: { good: 9, normal: 10, poor: 11 },
    deceased: 12,
  };

  const handleNext = () => {
    if (!familyStatus) {
      setError("Please select your parental status.");
      return;
    }

    if (familyStatus !== "deceased" && !relationship) {
      setError("Please describe your relationship.");
      return;
    }

    const value =
      familyStatus === "deceased"
        ? 12
        : relationshipMap[familyStatus][relationship];

    localStorage.setItem("familySituation", value);
    setError(null);
    navigate("/Frontend/Register-Q7");
  };

  const statusOptions = [
    { key: "alive", label: "Both parents alive" },
    { key: "divorced", label: "Divorced parents" },
    { key: "father", label: "Father deceased" },
    { key: "mother", label: "Mother deceased" },
    { key: "deceased", label: "Both parents deceased" },
  ];

  const relationshipOptions = ["good", "normal", "poor"];

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-3xl font-semibold text-[#000000] mb-1 text-center">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">
            Question 6 of 17
          </p>

          <p className="text-black text-lg font-mulish font-medium mb-4 text-center">
            What is your current parental situation?
          </p>

          <div className="flex flex-col gap-3 mb-4">
            {statusOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => {
                  setFamilyStatus(option.key);
                  setRelationship(null);
                }}
                className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish border text-black ${
                  familyStatus === option.key
                    ? "bg-[#00ffb3] border-[#00ffb3]"
                    : "bg-white border-gray-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {familyStatus !== "deceased" && (
            <div className="w-full text-center">
              <p className="text-black font-mulish mb-2">
                {familyStatus === "alive"
                  ? "How would you describe your relationship with them?"
                  : familyStatus === "divorced"
                  ? "How would you describe your relationship with your parents?"
                  : familyStatus === "father"
                  ? "How would you describe your relationship with your mother?"
                  : "How would you describe your relationship with your father?"}
              </p>

              <div className="flex flex-col gap-3 mb-4 items-center">
                {relationshipOptions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRelationship(r)}
                    className={`w-[300px] px-4 py-2 rounded-[12px] font-mulish text-black border ${
                      relationship === r
                        ? "bg-[#aaffd1] border-[#00cc99]"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-red-500 font-mulish text-sm mt-2 text-center">
              {error}
            </p>
          )}

          <div className="mt-4 w-full flex justify-center">
            <NextQ1Button
              onClick={handleNext}
              disabled={
                !familyStatus || (familyStatus !== "deceased" && !relationship)
              }
            />
          </div>
        </div>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default RegisterQ6;
