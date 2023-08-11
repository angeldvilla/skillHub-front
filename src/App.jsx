/* COMPONENTS */
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import JobDetail from "./components/JobDetail/JobDetail";
import FormWorkCreated from "./components/FormWorkCreated/FormWorkCreated";
import WorkPublications from "./components/WorkPublications/WorkPublications";
import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment";
import UserPanel from "./components/PanelUser/UserPanel";
import HomeUser from "./components/PanelUser/HomeUser";
import Profile from "./components/PanelUser/Profile";
import Settings from "./components/PanelUser/Settings";

/* ------------------------------------------- */
import { Routes, Route } from "react-router-dom";
import FormTemporal from "./components/FormWorkCreated/FormTemporal";
/* ------------------------------------------- */

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/jobdetail/:id" element={<JobDetail />} />

      {/* RUTAS DE FOOTER EN PROCESO */}
      <Route path="/terms-of-use" element={<UnderDevelopment />} />
      <Route path="/privacy-policies" element={<UnderDevelopment />} />
      <Route path="/cookies-policies" element={<UnderDevelopment />} />
      <Route path="/payment-policies" element={<UnderDevelopment />} />
      <Route path="/contact-us" element={<UnderDevelopment />} />
      <Route path="/TemporalForm" element={<FormTemporal />} />
    </Routes>
  );
}

export default App;
