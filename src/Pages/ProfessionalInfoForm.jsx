import React, { useState } from 'react';
import FormInput from '/src/Components/FormInput.jsx';
import BackgroundProInfo from '/src/Components/BackgroundProInfo.jsx';
import { useNavigate } from 'react-router-dom';
import { FiUploadCloud } from 'react-icons/fi';
import axios from 'axios';

const ProfessionalInformation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    diploma: '',
    university: '',
    experience: '',
    specializations: '',
    languages: '',
    license: '',
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleBack = () => {
    navigate('/Frontend/personal-info');
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();

    const emptyFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');
    if (emptyFields.length > 0 || !uploadedFile) {
      setError('Please fill out all fields and upload your diploma.');
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append('diploma', uploadedFile);

    try {
      //wherever u hosting ig
      await axios.post('http://localhost:8000/api/professional-info/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      //next step
      navigate('/Frontend/create-account');
    } catch (err) {
      console.error(err);
      setError('Failed to submit professional info. Please try again.');
    }
  };

  return (
    <BackgroundProInfo>
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex gap-7 justify-between items-center mt-7">
          <span className="h-[13px] w-[13px] rounded-full bg-[#F7F5F2]"></span>
          <span className="w-[30px] h-[30px] rounded-full bg-[#00FF88]"></span>
          <span className="h-[13px] w-[13px] rounded-full bg-[#F7F5F2]"></span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleNext}
          className="bg-white/50 backdrop-blur-md border-[2px] border-white rounded-4xl px-13 py-13 w-98 md:w-110 shadow-2xl mb-17"
        >
          <h2 className="text-black font-bold mb-6 text-center font-mulish text-[28px]">
            Professional Information
          </h2>

          <FormInput label="Professional Title" name="title" value={formData.title} onChange={handleChange} />
          <FormInput label="Diploma / Degree" name="diploma" value={formData.diploma} onChange={handleChange} />
          <FormInput label="University / Institution" name="university" value={formData.university} onChange={handleChange} />
          <FormInput label="Years of Experience" name="experience" type="number" value={formData.experience} onChange={handleChange} />
          <FormInput label="Specializations" name="specializations" value={formData.specializations} onChange={handleChange} />
          <FormInput label="Languages Spoken" name="languages" value={formData.languages} onChange={handleChange} />
          <FormInput label="License / Authorization Number" name="license" value={formData.license} onChange={handleChange} />

          <div className="relative my-6 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-mulish text-[#01270D]">
              <FiUploadCloud className="text-lg" />
              Diploma (PDF/JPG)
            </label>

            <div
              className={`relative ${
                uploadedFile ? 'w-full' : 'w-[80px]'
              } h-[80px] bg-[#4D5D53] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#3c4b42] transition-all duration-300 ease-in-out text-center text-xs text-white px-2`}
            >
              {!uploadedFile ? (
                <span className="text-3xl text-[#1a1f1c]">+</span>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="truncate max-w-[180px]">{uploadedFile.name}</p>
                  <p className="text-[10px]">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                </div>
              )}

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                name="diplomaUpload"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}

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
    </BackgroundProInfo>
  );
};

export default ProfessionalInformation;
