import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NAVBAR from '/src/Components/NavBar/NAVBAR.jsx';
import LandingContent from "../Components/LandingPatient/LandingContent.jsx";
import Background from '/src/Components/BackgroundPatient.jsx';
import WhyNafass from '../Components/WhyNafass/WhyNafass.jsx';
import Help from '../Components/Help/Help.jsx';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 300); 
  }
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Clear the location state after scrolling
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      scrollToSection(sectionId);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <Background>
      <div className="home_container">
        <NAVBAR />
        <LandingContent />
        <WhyNafass />
        <Help />
      </div>
    </Background>
  );
};

export default Home;
