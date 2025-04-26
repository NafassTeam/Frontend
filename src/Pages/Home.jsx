
import React from 'react';
import NAVBAR from '/src/Components/NavBar/NAVBAR.jsx';
import LandingContent from "../Components/LandingPatient/LandingContent.jsx";
import Background from '/src/Components/BackgroundPatient.jsx';


const Home = () => {
  return (
    <Background>
      <div className="home_container">
        <NAVBAR />
        <LandingContent />
      </div>
    </Background>
  );
};

export default Home;
