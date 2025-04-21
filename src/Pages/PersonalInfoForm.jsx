import React, { useState } from 'react';
import FormInput from '/src/Components/FormInput.jsx';
import BackgroundPersonalInfo from '/src/Components/BackgroundPersonalInfo.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PersonalInfoForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '', 
    last_name: '',  
    birth_date: '',  
    gender: '',
    phone_number: '',
    address: '',
    country: '',
    city: ''
  });

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    
    const emptyFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');
    if (emptyFields.length > 0) {
      setError('Please fill out all fields before continuing.');
      return;
    }

    setIsSubmitting(true);
    try {
      //wherever u hosting ig
      await axios.post('http://localhost:8000/api/personal-info/', formData);
      navigate('/Frontend/professional-info');
    } catch (err) {
      console.error(err);
      setError('Failed to submit personal info. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BackgroundPersonalInfo>
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex gap-7 justify-between items-center mt-7">
          <span className="w-[30px] h-[30px] rounded-full bg-[#00FF88]"></span>
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

         
          <FormInput label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
          <FormInput label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} />
          <FormInput label="Date of Birth" name="birth_date" type="date" value={formData.birth_date} onChange={handleChange} />
          <FormInput label="Gender" name="gender" isSelect={true} options={['Male', 'Female']} value={formData.gender} onChange={handleChange} />
          <FormInput label="Phone Number" name="phone_number" type="tel" value={formData.phone_number} onChange={handleChange} />
          <FormInput label="Address" name="address" value={formData.address} onChange={handleChange} />
          <FormInput label="Country/State" name="country" value={formData.country} onChange={handleChange} />
          <FormInput label="City" name="city" value={formData.city} onChange={handleChange} />

          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-17 text-white py-2 px-4 rounded-[20px] transition font-mulish ${
              isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#002A17] hover:bg-green-500'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Next'}
          </button>
        </form>
      </div>
    </BackgroundPersonalInfo>
  );
};

export default PersonalInfoForm;
