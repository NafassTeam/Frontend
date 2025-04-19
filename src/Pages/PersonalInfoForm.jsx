// src/pages/PersonalInfoForm.jsx
import React from 'react';
import FormInput from '/src/Components/FormInput.jsx';
import BackgroundPersonalInfo from '/src/Components/BackgroundPersonalInfo.jsx';
import { useNavigate } from 'react-router-dom';

const PersonalInfoForm = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Frontend/professional-info');
  };

  return (
    <BackgroundPersonalInfo>
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex gap-7 justify-between items-center mt-7">
          <span className="mb:h-[30px] mb:w-[30px] w-[30px] h-[30px] rounded-full bg-[#00FF88]"></span>
          <span className="h-[13px] w-[13px] rounded-full bg-[#F7F5F2]"></span>
          <span className="h-[13px] w-[13px] rounded-full bg-[#F7F5F2]"></span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit} 
          className="bg-white/50 backdrop-blur-md border-[2px] border-white rounded-4xl px-13 py-13 w-98 md:w-110 shadow-2xl mb-17"
        >
          <h2 className="text-black font-bold mb-6 text-center font-mulish text-[28px]">
            Personal Information
          </h2>

          <FormInput label="First Name" name="firstName" />
          <FormInput label="Last Name" name="lastName" />
          <FormInput label="Date of Birth" name="dob" type="date" />
          <FormInput
            label="Gender"
            name="gender"
            isSelect={true}
            options={['Male', 'Female']}
          />
          <FormInput label="Phone Number" name="phone" type="tel" />
          <FormInput label="Address" name="address" />
          <FormInput label="Country/State" name="country" />
          <FormInput label="City" name="city" />

          <button
            type="submit"
            className="w-full mt-17 bg-[#002A17] hover:bg-green-500 text-white py-2 px-4 rounded-[20px] transition font-mulish"
          >
            Next
          </button>
        </form>
      </div>
    </BackgroundPersonalInfo>
  );
};

export default PersonalInfoForm;
