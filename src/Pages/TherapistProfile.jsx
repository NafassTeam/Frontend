import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dfUser from "/src/assets/DftPfp.png";
import BackgroundTProfil from "/src/Components/BackgroundTProfil.jsx";
import SideBar from "/src/Components/TherapistProfile/SideBar.jsx";
import NavBar from "/src/Components/TherapistProfile/NavBar.jsx";
import mainContainer from "/src/assets/Rectangle 32.png";
import { Star, MapPin, MessageCircle } from 'lucide-react';

const mockTherapistData = {
  profileImage: dfUser, // Default image if no profile image is uploaded
  name: "Dr. Waltz Thomas",
  title: "Licensed Clinical Psychologist (Ph.D.)",
  location: "Sidi Belabbes, Algeria",
  rating: 4.8,
  reviewCount: 82,
  summary: `With over 10 years of experience, I help individuals cope with anxiety, 
relationship challenges, and major life transitions. I use a warm, evidence-based 
approach that combines Cognitive Behavioral Therapy (CBT) with mindfulness strategies.`,
  degrees: [
    {
      title: "B.A. / B.Sc. in Psychology",
      description: "Bachelor's degree",
      yearStart: "2009",
      yearEnd: "2012",
      documentUrl: "#"
    },
    {
      title: "M.Sc. in Clinical Psychology",
      description: "Master's degree",
      yearStart: "2012",
      yearEnd: "2014",
      documentUrl: "#"
    }
  ],
  certificates: [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      year: "2015",
      documentUrl: "#"
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      year: "2012",
      documentUrl: "#"
    },
    {
      title: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
      year: "2025",
      documentUrl: "#"
    }
  ]
};

const TherapistProfile = () => {
  const [therapist, setTherapist] = useState(mockTherapistData); // set default

  useEffect(() => {
    const fetchTherapistData = async () => {
      try {
        const response = await axios.get('/api/therapist/profile');
        setTherapist(response.data);
      } catch (error) {
        console.error("Error fetching therapist data:", error);
        // fallback to mock data automatically
      }
    };

    fetchTherapistData();
  }, []);

  return (
    <BackgroundTProfil>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col ml-[190px]">
          <NavBar />
          <h1 className="font-inter font-medium text-2xl flex justify-center mt-3 mb-3">Your Profile</h1> 
          <main
            className="relative flex-1 overflow-y-auto no-scrollbar flex justify-center items-start font-inter"
          >
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
                    src={therapist.profileImage} 
                    alt="User Avatar"
                    className="bg-opacity-40 mx-auto w-60 h-60 rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                  <h1 className="text-3xl font-medium mt-4 border-b border-white w-1/2 mx-auto text-center">
                    {therapist.name}
                  </h1>                  
                  <p className="text-[16px] mt-1 text-[#00270D]">{therapist.title}</p>
                  <p className="flex justify-center items-center gap-1 text-[16px] text-[#00270D] mt-1">
                    <MapPin size={14} /> {therapist.location}
                  </p>
                  <p className="flex justify-center items-center gap-1 text-yellow-500 font-semibold mt-1">
                    <Star fill="currentColor" size={18} /> {therapist.rating} 
                    <span className="text-black">({therapist.reviewCount})</span>
                  </p>

                  <div className="mt-10 flex-col mt-4 text-center">
                    <h3 className="flex mx-auto w-fit items-center gap-2 text-[#00DB75] font-medium text-[16px] mb-2">
                      <MessageCircle size={18} /> Professional Summary:
                    </h3>
                    <p className="text-[14px] leading-6">   {/* leading for space between lines of the summary */}
                      {therapist.summary}
                    </p>
                  </div>
                </section>

                <section className="mt-6 mb-13 text-center">
                  <h3 className="flex mx-auto w-fit items-center gap-2 text-[#00DB75] text-[16px] mb-4 font-semibold">Degrees</h3>
                  {therapist.degrees.map((deg, i) => (
                    <div key={i} className="bg-white/40 rounded-xl p-4 mb-4">
                      <p className="font-bold text-[14px] mb-2">
                        {deg.title} <span className="font-normal">– {deg.description}</span>
                      </p>
                      <p className="text-[14px] opacity-80">{deg.yearStart} - {deg.yearEnd}</p>
                      <a href={deg.documentUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF8800] underline decoration-solid text-[10px] inline-block">
                        View document
                      </a>
                    </div>
                  ))}
                </section>

                <section className="mt-6 text-center">
                  <h3 className="flex mx-auto w-fit items-center gap-2 text-[#00DB75] font-semibold text-[16px] mb-4">Certificates</h3>
                  {therapist.certificates.map((cert, i) => (
                    <div key={i} className="bg-white/40 rounded-xl p-4 mb-4">
                      <p className="font-bold text-[14px] mb-2">{cert.title}</p>
                      <p className="text-[14px] opacity-80">{cert.year}</p>
                      <a href={cert.documentUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF8800] underline decoration-solid text-[10px] inline-block">
                        View document
                      </a>
                    </div>
                  ))}
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
