
import React from 'react';
import NAVBAR from '/src/Components/NavBar/NAVBAR.jsx';
import LandingContent from "../Components/Landing/LandingContent.jsx";

const Home = () => {
  return (
    <div className="home_container">
      <NAVBAR />
      <LandingContent />
    </div>
  );
};

export default Home;
