import React from 'react';
import BackgroundTProfil from "/src/Components/BackgroundTProfil.jsx";
import SideBar from "/src/Components/TherapistProfile/SideBar.jsx";

const TherapistProfile = () => {
  return (
    <BackgroundTProfil>
        <div>
            <SideBar/>
        </div>
    </BackgroundTProfil>
  );
};

export default TherapistProfile;
