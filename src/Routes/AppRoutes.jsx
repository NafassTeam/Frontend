import { Route, Routes } from 'react-router-dom';
import CreateAccount from "../Pages/CreateAccount.jsx";
import Login from "../Pages/PatientLogin.jsx";
import Register from "../Pages/PatientRegistration.jsx";
import RegisterQ1 from "../Pages/PatientRegistrationQ1.jsx";
import RegisterQ10 from "../Pages/PatientRegistrationQ10.jsx";
import RegisterQ11 from "../Pages/PatientRegistrationQ11.jsx";
import RegisterQ12 from "../Pages/PatientRegistrationQ12.jsx";
import RegisterQ13 from "../Pages/PatientRegistrationQ13.jsx";
import RegisterQ14 from "../Pages/PatientRegistrationQ14.jsx";
import RegisterQ15 from "../Pages/PatientRegistrationQ15.jsx";
import RegisterQ16 from "../Pages/PatientRegistrationQ16.jsx";
import RegisterQ17 from "../Pages/PatientRegistrationQ17.jsx";
import RegisterQ2 from "../Pages/PatientRegistrationQ2.jsx";
import RegisterQ3 from "../Pages/PatientRegistrationQ3.jsx";
import RegisterQ4 from "../Pages/PatientRegistrationQ4.jsx";
import RegisterQ5 from "../Pages/PatientRegistrationQ5.jsx";
import RegisterQ6 from "../Pages/PatientRegistrationQ6.jsx";
import RegisterQ7 from "../Pages/PatientRegistrationQ7.jsx";
import RegisterQ8 from "../Pages/PatientRegistrationQ8.jsx";
import RegisterQ9 from "../Pages/PatientRegistrationQ9.jsx";
import ProfessionalInfoForm from '../Pages/ProfessionalInfoForm';
import VerifyEmail from "../Pages/VerifyEmail.jsx";
import Home from '/src/Pages/Home.jsx';
import Apply from '/src/Pages/LandingTherapist.jsx';
import PersonalInfo from "/src/Pages/PersonalInfoForm.jsx";




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
      <Route path="/Frontend/Register-Q1" element={<RegisterQ1/>}/>
      <Route path="/Frontend/Register-Q2" element={<RegisterQ2/>}/>
      <Route path="/Frontend/Register-Q3" element={<RegisterQ3/>}/>
      <Route path="/Frontend/Register-Q4" element={<RegisterQ4/>}/>
      <Route path="/Frontend/Register-Q5" element={<RegisterQ5/>}/>
      <Route path="/Frontend/Register-Q6" element={<RegisterQ6/>}/>
      <Route path="/Frontend/Register-Q7" element={<RegisterQ7/>}/>
      <Route path="/Frontend/Register-Q8" element={<RegisterQ8/>}/>
      <Route path="/Frontend/Register-Q9" element={<RegisterQ9/>}/>
      <Route path="/Frontend/Register-Q10" element={<RegisterQ10/>}/>
      <Route path="/Frontend/Register-Q11" element={<RegisterQ11/>}/>
      <Route path="/Frontend/Register-Q12" element={<RegisterQ12/>}/>
      <Route path="/Frontend/Register-Q13" element={<RegisterQ13/>}/>
      <Route path="/Frontend/Register-Q14" element={<RegisterQ14/>}/>
      <Route path="/Frontend/Register-Q15" element={<RegisterQ15/>}/>
      <Route path="/Frontend/Register-Q16" element={<RegisterQ16/>}/>
      <Route path="/Frontend/Register-Q17" element={<RegisterQ17/>}/>


    </Routes>
  );
};

export default AppRoutes;
