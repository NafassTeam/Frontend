import React from 'react';
import dfUser from "/src/assets/dfUser.webp";
import BackgroundTProfil from "/src/Components/BackgroundTProfil.jsx";
import SideBar from "/src/Components/TherapistProfile/SideBar.jsx";
import NavBar from "/src/Components/TherapistProfile/NavBar.jsx";
import mainContainer from "/src/assets/Rectangle 32.png";
import { MapPin, Video } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatientProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient;

  if (!patient) {
    return (
      <BackgroundTProfil>
        <div className="flex h-screen overflow-hidden">
          <SideBar />
          <div className="flex-1 flex flex-col ml-[190px]">
            <NavBar />
            <div className="flex justify-center items-center h-full">
              <p className="text-red-500 text-lg font-semibold">
                No patient data available. Please select a patient from the list.
              </p>
            </div>
          </div>
        </div>
      </BackgroundTProfil>
    );
  }

  const startVideoCall = () => {
    navigate('/Frontend/messages', { state: { patient } });
  };

  return (
    <BackgroundTProfil>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col ml-[190px]">
          <NavBar />
          <h1 className="font-inter font-medium text-2xl flex justify-center mt-3 mb-3">
            Patient Profile
          </h1>
          <main className="relative flex-1 overflow-y-auto no-scrollbar flex justify-center items-start font-inter">
            <div
              className="relative mb-3 p-6 flex flex-col items-center shadow-2xl"
              style={{
                width: '1000px',
                backgroundImage: `url(${mainContainer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
              }}
            >
              <div className="absolute inset-0 bg-[#F7F7F7] opacity-80 z-0 rounded-[20px]"></div>

              <div className="relative z-10">
                <section className="bg-opacity-40 p-3 w-[850px] text-center">
                  <img
                    src={patient.profileImage || dfUser}
                    alt="Patient Avatar"
                    className="bg-opacity-40 mx-auto w-40 h-40 rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                  <h1 className="text-3xl font-medium mt-4 border-b border-white w-1/2 mx-auto text-center">
                    {patient.name}
                  </h1>
                  <p className="text-[16px] mt-1 text-[#00270D]">Age: {patient.age}</p>
                  <p className="flex justify-center items-center gap-1 text-[16px] text-[#00270D] mt-1">
                    <MapPin size={14} /> {patient.location}
                  </p>
                  <p className="text-[16px] mt-1 text-[#00270D]">Primary Condition: {patient.condition}</p>
                  <p className="text-[14px] mt-1 text-[#333]">Last Session: {patient.lastSession}</p>

                  <div className="flex-col mt-4 text-center">
                    <h3 className="flex mx-auto w-fit items-center gap-2 text-[#00DB75] font-medium text-[16px] mb-2">
                      Summary:
                    </h3>
                    <p className="text-[14px] leading-6">
                      {patient.summary}
                    </p>
                  </div>

                  <button
                    onClick={startVideoCall}
                    className="mt-8 bg-[#00DB75] hover:bg-[#00b463] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-md mx-auto"
                  >
                    <Video size={18} /> Start Video Call
                  </button>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </BackgroundTProfil>
  );
};

export default PatientProfile;
