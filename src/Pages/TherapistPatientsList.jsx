import BackgroundTProfil from "/src/Components/BackgroundTProfil.jsx";
import SideBar from "/src/Components/TherapistProfile/SideBar.jsx";
import NavBar from "/src/Components/TherapistProfile/NavBar.jsx";

const Patients = () => {
    return (
        <BackgroundTProfil>
            <div className="flex h-screen overflow-hidden">
                <SideBar />
                <div className="flex-1 flex flex-col ml-[190px]">
                    <NavBar />
                    {/* You can add more content for the Patients page here */}
                </div>
            </div>
        </BackgroundTProfil>
    );
};

export default Patients;
