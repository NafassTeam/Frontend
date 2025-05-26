import React from "react";
import { useLocation } from "react-router-dom"; // ✅ Required import
import SideBar from "/src/Components/TherapistProfile/SideBar.jsx";
import NavBar from "/src/Components/TherapistProfile/NavBar.jsx";
import BackgroundTProfil from "/src/Components/BackgroundTProfil.jsx";
import mainContainer from "/src/assets/Rectangle 32.png";
import { Video, Mic, VideoOff, MicOff, PhoneOff } from "lucide-react";

const VideoCallPage = () => {
  const location = useLocation();
  const patient = location.state?.patient;

  return (
    <BackgroundTProfil>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col ml-[190px]">
          <NavBar />
          <h1 className="font-inter font-medium text-2xl flex justify-center mt-3 mb-3 text-[#00541C] ml-9">
            Video call with {patient?.name || "patient"}
          </h1>
          <main className="relative flex-1 overflow-y-auto no-scrollbar flex justify-center items-center font-inter">
            <div
              className="relative p-6 flex flex-col items-center shadow-2xl"
              style={{
                width: "1000px",
                height: "600px",
                backgroundImage: `url(${mainContainer})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
              }}
            >
              <div className="absolute inset-0 bg-[#F7F7F7] opacity-80 z-0 rounded-[20px]" />

              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                {/* Video Feeds */}
                <div className="flex flex-1 space-x-4 justify-center items-center px-6 pt-6">
                  <div className="bg-black rounded-xl w-2/3 h-[70%] flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                    Therapist Video
                  </div>
                  <div className="bg-gray-800 rounded-xl w-1/3 h-[40%] flex items-center justify-center text-white font-semibold text-sm shadow">
                    {patient?.name || "Patient"} Video
                  </div>
                </div>

                {/* Call Controls */}
                <div className="flex justify-center gap-6 pb-6">
                  <button className="bg-white hover:bg-gray-100 shadow-md rounded-full p-3">
                    <Video className="text-[#00541C]" size={20} />
                  </button>
                  <button className="bg-white hover:bg-gray-100 shadow-md rounded-full p-3">
                    <Mic className="text-[#00541C]" size={20} />
                  </button>
                  <button className="bg-white hover:bg-gray-100 shadow-md rounded-full p-3">
                    <VideoOff className="text-red-500" size={20} />
                  </button>
                  <button className="bg-white hover:bg-gray-100 shadow-md rounded-full p-3">
                    <MicOff className="text-red-500" size={20} />
                  </button>
                  <button className="bg-[#FF154B] hover:bg-red-600 shadow-md rounded-full p-3">
                    <PhoneOff className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </BackgroundTProfil>
  );
};

export default VideoCallPage;
