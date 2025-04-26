import React from 'react';
import NAVBAR from '/src/Components/NavBar/NAVBAR.jsx';
import LandingContent from "../Components/LandingTherapist/LandingContent.jsx";
import BackgroundTherapist from '../Components/BackgroundTherapist.jsx';


const LandingTherapist = () => {
  return (
    <BackgroundTherapist>
        <div className="home_container">

        <NAVBAR />

        <LandingContent/>

        </div>

    </BackgroundTherapist>
  );
};

export default LandingTherapist;
