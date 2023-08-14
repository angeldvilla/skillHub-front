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
import MercadoPago from "./components/mercadoPago/MercadoPago";
import Next from "./components/mercadoPago/Next";
import Error404 from "./components/error404/Error404";
import AbautUs from "./components/AbautUs/AbautUs";
/* ------------------------------------------- */

/* ------------------------------------------- */
import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
/* ------------------------------------------- */

function App() {
  const { userCredentials } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const location = useLocation();

  // Redirecciona si el usuario intenta acceder a rutas no permitidas mientras las credenciales están cargadas
  useEffect(() => {
    if (
      userCredentials &&
      !location.pathname.startsWith(`/user-panel/${userCredentials.uid}/`)
    ) {
      // Redirige a la página permitida
      navigate(`/user-panel/${userCredentials.uid}/home`);
    }
  }, [userCredentials, location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/jobdetail/:id" element={<JobDetail />} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="/abautUs" element={<AbautUs/>} />

      {/* RUTAS DE FOOTER EN PROCESO */}
      <Route path="/terms-of-use" element={<UnderDevelopment />} />
      <Route path="/privacy-policies" element={<UnderDevelopment />} />
      <Route path="/cookies-policies" element={<UnderDevelopment />} />
      <Route path="/payment-policies" element={<UnderDevelopment />} />
      <Route path="/contact-us" element={<UnderDevelopment />} />

      {/* RUTAS ANIDADAS PARA EL PANEL DE PERFIL DE USUARIO */}
      <Route path="/user-panel/:id/*">
        <Route
          path="home"
          element={userCredentials ? <Home /> : <Navigate to="/home" replace />}
        />

        <Route
          path="jobdetail/:id"
          element={
            userCredentials ? (
              <JobDetail />
            ) : (
              <Navigate to="/error404" replace />
            )
          }
        />
        <Route
          path="my-profile"
          element={
            userCredentials ? <Profile /> : <Navigate to="/error404" replace />
          }
        />
        <Route
          path="CreateWork"
          element={
            userCredentials ? (
              <FormWorkCreated />
            ) : (
              <Navigate to="/error404" replace />
            )
          }
        />
        <Route
          path="Edit-Work"
          element={
            userCredentials ? (
              <FormWorkCreated />
            ) : (
              <Navigate to="/error404" replace />
            )
          }
        />
        <Route
          path="WorkPublications"
          element={
            userCredentials ? (
              <WorkPublications />
            ) : (
              <Navigate to="/error404" replace />
            )
          }
        />

        <Route
          path="memberShip"
          element={
            userCredentials ? (
              <MercadoPago />
            ) : (
              <Navigate to="/error404" replace />
            )
          }
        />

        <Route
          path="next/:payment_id"
          element={
            userCredentials ? <Next /> : <Navigate to="/error404" replace />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
