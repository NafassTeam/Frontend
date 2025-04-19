import { Routes, Route } from 'react-router-dom';
import Home from '/src/Pages/Home.jsx';
import Apply from '/src/Pages/LandingTherapist.jsx';
import PersonalInfo from "/src/Pages/PersonalInfoForm.jsx";
import ProfessionalInfoForm from '../Pages/ProfessionalInfoForm';
import CreateAccount from "../Pages/CreateAccount.jsx";
import Login from "../Pages/PatientLogin.jsx";
import Register from "../Pages/PatientRegistration.jsx";


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
    </Routes>
  );
};

export default AppRoutes;
