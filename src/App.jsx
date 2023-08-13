/* COMPONENTS */
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import JobDetail from "./components/JobDetail/JobDetail";
import FormWorkCreated from "./components/FormWorkCreated/FormWorkCreated";
import WorkPublications from "./components/WorkPublications/WorkPublications";
import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment";
import Profile from "./components/PanelUser/Profile";
import Settings from "./components/PanelUser/Settings";

import MercadoPago from "./components/mercadoPago/MercadoPago";

/* ------------------------------------------- */

import FormTemporal from "./components/FormWorkCreated/FormTemporal";
import Next from "./components/mercadoPago/Next";
import Error404 from "./components/error404/Error404";

/* ------------------------------------------- */
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

/* ------------------------------------------- */

function App() {
  const { userCredentials } = useSelector((state) => state.users);

  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Login /> } />
      <Route path="/signup" element={<Register />} />
      <Route path="/jobdetail/:id" element={<JobDetail />} />
      <Route path="/error404" element={<Error404 />} />

      {/* RUTAS DE FOOTER EN PROCESO */}
      <Route path="/terms-of-use" element={<UnderDevelopment />} />
      <Route path="/privacy-policies" element={<UnderDevelopment />} />
      <Route path="/cookies-policies" element={<UnderDevelopment />} />
      <Route path="/payment-policies" element={<UnderDevelopment />} />
      <Route path="/contact-us" element={<UnderDevelopment />} />
      <Route path="/TemporalForm" element={<FormTemporal />} />

      <Route path="/mercadoPago" element={<MercadoPago />} />
      <Route path="/next/:payment_id" element={<Next />} />
  

      {/* RUTAS ANIDADAS PARA EL PANEL DE PERFIL DE USUARIO */}
      <Route path="/user-panel/:id/*">
        <Route path="home" element={userCredentials ? <Home /> : <Navigate to="/error404" replace />} />
        <Route path="jobdetail/:id" element={userCredentials ? <JobDetail /> : <Navigate to="/error404" replace />} />
        <Route path="my-profile" element={userCredentials ? <Profile /> : <Navigate to="/error404" replace />} />
        <Route path="CreateWork" element={userCredentials ? <FormWorkCreated /> : <Navigate to="/error404" replace />} />
        <Route path="Edit-Work" element={userCredentials ? <FormWorkCreated /> : <Navigate to="/error404" replace />} />
        <Route path="WorkPublications" element={userCredentials ? <WorkPublications /> : <Navigate to="/error404" replace />} />
        <Route path="settings" element={userCredentials ? <Settings /> : <Navigate to="/error404" replace />} />
        <Route path="memberShip" element={userCredentials ? <MercadoPago/> : <Navigate to="/error404" replace />} />
      </Route> 

    </Routes>
  );
}

export default App;
