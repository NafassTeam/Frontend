import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '/src/Components/BackgroundRegister.jsx';
import FormInput from '/src/Components/FormInput.jsx';
import { useLocation } from 'react-router'
import axios from 'axios';
  
const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevFormData = location.state;
  console.log('Previous form data:', prevFormData);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreed: false,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      agreed: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, agreed } = formData;
    
    if (!email || !password || !username) {
      setError('Please fill in all fields.');
      return;
    }

    if (!agreed) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    // const requestPayload = {
    //   email,
    //   password,
    // };
    // console.log("Register submitted", requestPayload);

    let combinedData = {
      ...prevFormData,
      ...formData,
    };
    console.log('Combined data:', combinedData);
    try {
    //   combinedData = {
    //     "address": "3131  Doctors Drive",
    //     "agreed": true,
    //     "birth_date": "2025-04-18",
    //     "city": "CA",
    //     "country": "Algeria",
    //     "diploma": "sdfdf",
    //     "email": "selloudsdfsfmfsdmoncif.555@gmail.com",
    //     "experience_years": "123",
    //     "first_name": "Moncif",
    //     "gender": "F",
    //     "languages": "sdfsdf",
    //     "last_name": "Selloum",
    //     "license": "sdfsdfsdf",
    //     "password": "moncif.0202",
    //     "phone_number": "0667075016",
    //     "specializations": "sdfsdf",
    //     "title": "fsdf",
    //     "university": "sdf",
    //     "username" : "usersdfsf121212"
    // }
      axios.post('http://nafassbackend-production.up.railway.app/auth/register/therapist/', combinedData)
        .then(response => {
          console.log('Account created successfully:', response.data);
        })
        .catch(error => {
          console.error('Error creating account:', error);
          setError('Failed to create account. Please try again.');
        });
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
    }

    setError(null);
    navigate('/Frontend/success'); //nhar t designa la page nchallah
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
          <span className="w-[30px] h-[30px] rounded-full bg-[#00FF88]"></span>
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

          <FormInput
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex items-center justify-center mt-13 mb-7">
            <input
              type="checkbox"
              id="terms"    //Add real submission logic (e.g., with axios)

              name="terms"
              checked={formData.agreed}
              onChange={handleCheckboxChange}
              className="mr-2 w-4 h-4 accent-[#01270D]"
              required
            />
            <label htmlFor="terms" className="text-sm font-mulish text-black">
              I agree to the terms and conditions
            </label>
          </div>

          {error && <p className="text-red-500 text-center text-sm mb-3">{error}</p>}

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
              className="mt-5 w-[150px] bg-[#002A17] hover:bg-green-500 text-white py-2 px-4 rounded-[20px] transition text-[14px] font-mulish"
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
