/* COMPONENTS */
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import FormCreateWork from "./components/FormWorkCreated/FormWorkCreated";
import WorkPublication from "./components/WorkPublications/WorkPublications";
/* ------------------------------------------- */
import { Routes, Route } from "react-router-dom";
/* ------------------------------------------- */

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home /> } /> 
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/CreateWork" element={<FormCreateWork />} />
      <Route path="/Edit-Work/:id" element={<FormCreateWork />} />
      <Route path="/WorkPublications" element={<WorkPublication />} />
    </Routes>
  );
}

export default App;
