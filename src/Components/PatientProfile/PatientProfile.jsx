import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { Star, MapPin, Info } from 'lucide-react';

const PatientProfile = () => {
  return (
    <div className="flex bg-gradient-to-br from-green-200 via-lime-100 to-green-300 min-h-screen">
      
      <SideBar />
      
      <div className="flex-1 flex flex-col ml-[190px] pr-10">
        <NavBar />

        <main className="p-6 flex flex-col items-center">
          <section className="bg-white bg-opacity-40 p-10 rounded-2xl shadow-lg w-full max-w-4xl text-center">
            <img 
              src="/path-to-anonymous-avatar.png" 
              alt="User Avatar"
              className="mx-auto w-40 h-40 rounded-full"
            />
            <h1 className="text-2xl font-bold mt-4">Ms.Sarah</h1>
            <p className="text-gray-700">Welcome to our community !</p>
            <p className="flex justify-center items-center gap-1 text-sm text-gray-600 mt-1">
              <MapPin size={14} /> Sidi Belabbes, Algeria
            </p>
            <p className="flex justify-center items-center gap-1 text-yellow-500 font-semibold mt-1">
              <Star fill="currentColor" size={18} /> 4.8 <span className="text-gray-600">(82)</span>
            </p>

            <div className="mt-4 text-left">
              <h3 className="flex items-center gap-2 text-green-600 font-bold text-lg mb-2">
                <Info size={18} /> Professional Summary:
              </h3>
              <p className="text-sm text-gray-800 leading-6">
                “With over 10 years of experience, I help individuals cope with anxiety, 
                relationship challenges, and major life transitions. I use a warm, evidence-based 
                approach that combines Cognitive Behavioral Therapy (CBT) with mindfulness strategies.”
              </p>
            </div>
          </section>

          <section className="w-full max-w-4xl mt-6">
            <h3 className="text-green-600 font-bold text-xl mb-4">Degrees</h3>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white bg-opacity-40 rounded-xl p-4 mb-4">
                <p className="font-semibold">
                  B.A. / B.Sc. in Psychology <span className="text-gray-600">– Bachelor's degree</span>
                </p>
                <p className="text-sm text-gray-600">2009 - 2012</p>
                <a href="#" className="text-orange-500 text-sm mt-1 inline-block">View document</a>
              </div>
            ))}
          </section>

          <section className="w-full max-w-4xl mt-6">
            <h3 className="text-green-600 font-bold text-xl mb-4">Certificates</h3>
            {[
              { title: "Cognitive Behavioral Therapy (CBT)", year: "2015" },
              { title: "Dialectical Behavior Therapy (DBT)", year: "2012" },
              { title: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)", year: "2025" },
            ].map((cert, i) => (
              <div key={i} className="bg-white bg-opacity-40 rounded-xl p-4 mb-4">
                <p className="font-semibold">Certificate in {cert.title}</p>
                <p className="text-sm text-gray-600">{cert.year}</p>
                <a href="#" className="text-orange-500 text-sm mt-1 inline-block">View document</a>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default PatientProfile;
