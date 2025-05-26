import React, { useState, useEffect } from 'react';
import dfUser from "/src/assets/DftPfp.png";
import BackgroundTProfil from "/src/Components/BackgroundTProfil.jsx";
import SideBar from "/src/Components/TherapistProfile/SideBar.jsx";
import NavBar from "/src/Components/TherapistProfile/NavBar.jsx";
import mainContainer from "/src/assets/Rectangle 32.png";

// Mock Data
const mockPatients = [
  { id: 1, name: "Sarah Johnson", illness: "PTSD" },
  { id: 2, name: "James Carter", illness: "Anxiety Disorder" },
  { id: 3, name: "Amel Haddad", illness: "Depression" },
];

const mockMatchedPatients = [
  { id: 4, name: "Mohamed Ali", illness: "Social Phobia" },
  { id: 5, name: "Sofia Benyamina", illness: "Generalized Anxiety Disorder" },
];

const mockRequests = [
  { id: 6, name: "Yasmine Zidi", illness: "Burnout" },
  { id: 7, name: "Houssem Meftah", illness: "Bipolar Disorder" },
];

const TherapistProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [patients, setPatients] = useState([]);
  const [matchedPatients, setMatchedPatients] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const navItems = ['Your Patients', 'Matching', 'Requests'];

  const simulateAPICall = (data, delay = 1000) =>
    new Promise((resolve) => setTimeout(() => resolve(data), delay));

  const fetchPatientsData = async () => {
    try {
      setLoading(true);

      // When real backend is ready, replace these:
      // const p1 = await fetch('/api/patients').then(res => res.json());
      // const p2 = await fetch('/api/matched').then(res => res.json());
      // const p3 = await fetch('/api/requests').then(res => res.json());

      const [p1, p2, p3] = await Promise.all([
        simulateAPICall(mockPatients),
        simulateAPICall(mockMatchedPatients),
        simulateAPICall(mockRequests),
      ]);

      setPatients(p1);
      setMatchedPatients(p2);
      setRequests(p3);
    } catch (err) {
      console.error("Error fetching patient data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientsData();
  }, []);

  const handleApprove = (id) => {
    const patient = requests.find((p) => p.id === id);
    if (!patient) return;

    setPatients((prev) => [...prev, patient]);
    setRequests((prev) => prev.filter((p) => p.id !== id));
  };

  const handleDeny = (id) => {
    setRequests((prev) => prev.filter((p) => p.id !== id));
  };

  const handleRemove = (id, type) => {
    if (type === 'patients') {
      setPatients((prev) => prev.filter((p) => p.id !== id));
    } else if (type === 'matched') {
      setMatchedPatients((prev) => prev.filter((p) => p.id !== id));
    } else if (type === 'requests') {
      setRequests((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const renderPatientList = (list, type) => (
    list.map((patient) => (
      <div
        key={patient.id}
        className="flex items-center justify-between bg-white/40 rounded-xl px-6 py-4"
      >
        <div className="flex items-center space-x-4">
          <img 
            src={dfUser} 
            alt="User Avatar"
            className="w-16 h-16 rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
          <div>
            <p className="font-bold text-[16px]">{patient.name}</p>
            <p className="text-[14px] opacity-80">{patient.illness}</p>
          </div>
        </div>

        {type === 'requests' ? (
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleApprove(patient.id)}
              className="bg-[#00FF88] hover:bg-[#00cc6f] font-bold text-[12px] text-[#00270D] px-4 py-1 rounded-[5px]"
            >
              Approve
            </button>
            <button
              onClick={() => handleDeny(patient.id)}
              className="bg-[#00270D] hover:bg-[#001c0a] font-bold text-[12px] text-white px-4 py-1 rounded-[5px]"
            >
              Deny
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleRemove(patient.id, type)}
            className="bg-[#FF154B] hover:bg-red-600 font-bold text-[10px] text-white px-4 py-2 rounded-[5px]"
          >
            Remove Patient
          </button>
        )}
      </div>
    ))
  );

  const renderCurrentSection = () => {
    if (loading) return <p className="text-center text-gray-500">Loading patients...</p>;

    switch (activeIndex) {
      case 0:
        return patients.length ? renderPatientList(patients, 'patients') : <p>No current patients.</p>;
      case 1:
        return matchedPatients.length ? renderPatientList(matchedPatients, 'matched') : <p>No AI-matched patients yet.</p>;
      case 2:
        return requests.length ? renderPatientList(requests, 'requests') : <p>No pending requests.</p>;
      default:
        return null;
    }
  };

  return (
    <BackgroundTProfil>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col ml-[190px]">
          <NavBar />
          <h1 className="font-inter font-medium text-2xl flex justify-center mt-3 mb-3 text-[#00541C] ml-9">Patients</h1>
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
              <div className="absolute inset-0 bg-[#F7F7F7] opacity-80 z-0 rounded-[20px]" />
              <div className="relative z-10 w-full">
                <section className="w-full text-center">
                  <nav className="flex space-x-52 p-4 mx-auto w-fit font-medium text-[20px] mt-[-20px]">
                    {navItems.map((item, index) => (
                      <button
                        key={item}
                        onClick={() => setActiveIndex(index)}
                        className={`
                          px-4 transition-colors duration-300
                          ${activeIndex === index 
                            ? 'border-b border-b-[#00DB75] text-[#00DB75]' 
                            : 'hover:border-b hover:border-b-[#008238] text-[#008238]'}
                        `}
                      >
                        {item}
                      </button>
                    ))}
                  </nav>
                </section>
                <section className="mt-6 space-y-4">
                  {renderCurrentSection()}
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </BackgroundTProfil>
  );
};

export default TherapistProfile;
