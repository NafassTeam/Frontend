import './App.css'
import Home from "./Pages/Home.jsx";
import React from 'react';
import Background from '/src/Components/Background.jsx';

const App = () => {
  return (
    <Background>
      <Home />
    </Background>
  );
};

export default App;
