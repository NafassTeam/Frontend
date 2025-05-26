import { Routes, Route } from 'react-router-dom';
import Home from '/src/Pages/Home.jsx';
import Apply from '/src/Pages/LandingTherapist.jsx';
import PersonalInfo from "/src/Pages/PersonalInfoForm.jsx";
import ProfessionalInfoForm from '../Pages/ProfessionalInfoForm';
import CreateAccount from "../Pages/CreateAccount.jsx";
import Login from "../Pages/PatientLogin.jsx";
import Register from "../Pages/PatientRegistration.jsx";
import VerifyEmail from "../Pages/VerifyEmail.jsx";
import EmailVerified from "../Pages/EmailVerified.jsx"
import TherapistProfile from "../Pages/TherapistProfile.jsx";
import Messages from "../Pages/TherapistMessages.jsx";
import Appointments from "../Pages/TherapistAppointements.jsx";
import Dashboard from "../Pages/TherapistDashboard.jsx";
import Patients from "../Pages/TherapistPatientsList.jsx";
import PatientProfile from "/src/Components/TherapistProfile/PatientProfile.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Frontend" element={<Home />} />
      <Route path="/Frontend/Apply" element={<Apply />} />
      <Route path="/Frontend/Personal-info" element={<PersonalInfo />} />
      <Route path="/Frontend/professional-info" element={<ProfessionalInfoForm />} />
      <Route path="/Frontend/Create-account" element={<CreateAccount />} />
      <Route path="/Frontend/Login" element={<Login />} />
      <Route path="/Frontend/Register" element={<Register />} />
      <Route path="/Frontend/Verify-email" element={<VerifyEmail />} />
      <Route path="/Frontend/Email-verified" element={<EmailVerified />} />
      <Route path="/Frontend/profile" element={<TherapistProfile />} />
      <Route path="/Frontend/messages" element={<Messages />} />
      <Route path="/Frontend/appointments" element={<Appointments />} />
      <Route path="/Frontend/dashboard" element={<Dashboard />} />
      <Route path="/Frontend/patients" element={<Patients />} />
      <Route path="/Frontend/patient-profile" element={<PatientProfile />} />
    </Routes>
  );
};

export default AppRoutes;
