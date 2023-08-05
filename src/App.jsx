/* COMPONENTS */
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import JobDetail from "./components/JobDetail/JobDetail";
import FormWorkCreated from "./components/FormWorkCreated/FormWorkCreated";
import WorkPublications from "./components/WorkPublications/WorkPublications";
/* ------------------------------------------- */
import { Routes, Route } from "react-router-dom";
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
    </Routes>
  );
}

export default App;
