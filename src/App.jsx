/* COMPONENTS */
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import JobDetail from "./components/JobDetail/JobDetail";
import FormWorkCreated from "./components/FormWorkCreated/FormWorkCreated";
import WorkPublications from "./components/WorkPublications/WorkPublications";
import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment";
/* ------------------------------------------- */
import { Routes, Route } from "react-router-dom";
import MercadoPago from "./components/mercadoPago/MercadoPago";
import Message from "./components/mercadoPago/Message";

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
      <Route path="/CreateWork" element={<FormWorkCreated />} />
      <Route path="/Edit-Work/:id" element={<FormWorkCreated />} />
      <Route path="/WorkPublications" element={<WorkPublications />} />
      <Route path="/terms-of-use" element={<UnderDevelopment />} />
      <Route path="/privacy-policies" element={<UnderDevelopment />} />
      <Route path="/cookies-policies" element={<UnderDevelopment />} />
      <Route path="/payment-policies" element={<UnderDevelopment />} />
      <Route path="/contact-us" element={<UnderDevelopment />} />
      <Route path="/mercadoPago" element={<MercadoPago />} />
      <Route path="/mensage_Pago" element={<Message />} />
      <Route path="/TemporalForm" element={<FormTemporal />} />

    </Routes>
  );
}

export default App;
