import React from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '/src/Components/BackgroundRegister.jsx';
import FormInput from '/src/Components/FormInput.jsx';

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  const handleBack = () => {
    navigate('/Frontend/professional-info');
  };

  return (
    
    <Background>
        <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex gap-7 justify-between items-center mt-7">
            <span className="h-[13px] w-[13px] rounded-full bg-[#F7F5F2]"></span>
            <span className="h-[13px] w-[13px] rounded-full bg-[#F7F5F2]"></span>
            <span className="mb:h-[30px] mb:w-[30px] w-[30px] h-[30px] rounded-full bg-[#00FF88]"></span>
            </div>
        </div>

        <div className="flex items-center justify-center min-h-screen">
        <form            
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-md border-2 border-white rounded-4xl px-13 py-13 w-98 md:w-110 shadow-2xl mb-17"
        >
        <h2 className="text-black font-bold mb-6 text-center font-mulish text-[28px]">
            Create an account
        </h2>

        <FormInput label="Email" name="email" type="email" className="peer w-full px-4 py-2 rounded-md bg-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#01270D] autofill:bg-transparent" />
        <FormInput label="Password" name="password" type="password" />

        <div className="flex items-center justify-center mt-13 mb-7">
        <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            className="mr-2 w-4 h-4 accent-[#01270D]"
        />

        <label htmlFor="terms" className="text-sm font-mulish text-black ">
            I agree to the terms and conditions
        </label>
        </div>

        <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleBack}
              className="mt-5 w-[150px] bg-white text-[#01270D] hover:text-white py-2 px-4 rounded-[20px] transition hover:bg-[#01270D] border border-[#01270D] text-[14px] font-mulish"
            >
              Back
            </button>

            <button
              type="submit"
              className=" mt-5 w-[150px] bg-[#002A17] hover:bg-green-500 text-white py-2 px-4 rounded-[20px] transition text-[14px] font-mulish"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </Background>
  );
};

export default CreateAccount;
