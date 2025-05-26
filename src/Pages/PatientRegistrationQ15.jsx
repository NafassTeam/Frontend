import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import AuthCard from "/src/Components/Registration/AuthCard.jsx";
import NextQ1Button from "../Components/Registration/NextQ1Button.jsx";

const RegisterQ15 = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
 const prevResponses = location.state?.responses || []; 
 
 const [suicidalThoughts, setSuicidalThoughts] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (suicidalThoughts === null) {
      setError("Please answer whether you've had suicidal thoughts.");
      return;
    }

    if (suicidalThoughts === "yes" && frequency === null) {
      setError("Please select how often you've had suicidal thoughts.");
      return;
    }

    const suicidalResponse = suicidalThoughts === "yes" ? parseInt(frequency) : 3;
    const updatedResponses = [...prevResponses, suicidalResponse];    setError(null);

    if (suicidalThoughts === "yes") {
      localStorage.setItem("suicidalThoughts", parseInt(frequency));
    } else {
      localStorage.setItem("suicidalThoughts", 3);
    }

    localStorage.setItem("suicidalThoughts", suicidalResponse); 

    navigate("/Frontend/Register-Q16", { state: { responses: updatedResponses } });
  };

  const isNextDisabled = () => {
    return suicidalThoughts === null || (suicidalThoughts === "yes" && frequency === null);
  };

  return (
    <BackgroundWrapper>
      <AuthCard>
        <div className="flex flex-col items-center">
          <h2 className="font-mulish text-center text-3xl font-semibold text-[#000000] mb-1">
            Questionnaire
          </h2>
          <p className="text-[#00260c] font-mulish mb-6 text-[13px]">Question 15 of 17</p>

          <p className="text-black text-lg font-mulish font-medium mb-4">
            Have you had any suicidal thoughts?
          </p>

          <div className="flex flex-col w-full gap-3 items-center">
            <button
              type="button"
              onClick={() => {
                setSuicidalThoughts("yes");
                setFrequency(null);
              }}
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${suicidalThoughts === "yes"
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              Yes
            </button>

            {suicidalThoughts === "yes" && (
              <div className="flex flex-col w-full gap-3 items-center mt-4">
                <p className="text-black text-lg font-mulish font-medium mb-4">
                  How often have you had suicidal thoughts?
                </p>
                <button
                  type="button"
                  onClick={() => setFrequency("0")}
                  className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                    ${frequency === "0"
                      ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                      : "bg-white border-gray-300 text-black"}`}
                >
                  Too much recently 
                </button>

                <button
                  type="button"
                  onClick={() => setFrequency("1")}
                  className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                    ${frequency === "1"
                      ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                      : "bg-white border-gray-300 text-black"}`}
                >
                  Sometimes 
                </button>

                <button
                  type="button"
                  onClick={() => setFrequency("2")}
                  className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                    ${frequency === "2"
                      ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                      : "bg-white border-gray-300 text-black"}`}
                >
                  Rarely 
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setSuicidalThoughts("no");
                setFrequency(null);
              }}
              className={`w-[300px] font-mulish px-4 py-2 rounded-[12px] border transition-all text-left relative
                ${suicidalThoughts === "no"
                  ? "bg-[#00ffb3] text-[#00260c] border-[#00ffb3]"
                  : "bg-white border-gray-300 text-black"}`}
            >
              No
            </button>
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

export default RegisterQ15;
