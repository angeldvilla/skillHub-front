/* COMPONENTS */
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import JobDetail from "./components/JobDetail/JobDetail";
import FormWorkCreated from "./components/FormWorkCreated/FormWorkCreated";
import WorkPublications from "./components/WorkPublications/WorkPublications";
/* import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment"; */
import Profile from "./components/PanelUser/Profile";
import MercadoPago from "./components/mercadoPago/MercadoPago";
import Next from "./components/mercadoPago/Next";
import Error404 from "./components/error404/Error404";
import AbautUs from "./components/AbautUs/AbautUs";
import PoliticasDePriv from "./components/ComponentesFooter/PoliticaDePriv";
import CondicionesDeUso from "./components/ComponentesFooter/CondicionesDeUso";
import Dashboard from "./components/Admin/Views/Dashboard";
import PoliticaDePago from "./components/ComponentesFooter/PoliticaDePago";
import Support from "./components/PanelUser/FAQ/Support";
import Help from "./components/PanelUser/FAQ/Help";
import Accessibility from "./components/ComponentesFooter/Accesibilidad/Accessibility";
import Admin from "./components/Admin/Admin";
import UsersList from "./components/Admin/Views/UsersList";
import Reviews from "./components/Admin/Views/Reviews";
import Payments from "./components/Admin/Views/Payments";
import Rating from "./components/PanelUser/FAQ/Rating";
/* import Charts from "./components/Admin/Views/Charts"; */
/* ------------------------------------------- */

/* ------------------------------------------- */
import { useEffect, useState } from "react";
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
  const [isAdmin, setIsAdmin] = useState(false);
  const { userCredentials } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const location = useLocation();

  // Redirecciona si el usuario intenta acceder a rutas no permitidas mientras las credenciales están cargadas
  useEffect(() => {
    if (userCredentials && userCredentials.uid === "Zqaz0B6durdS841Bd7e3qJdbjEU2") {
      setIsAdmin(true);
    }
    if (
      userCredentials &&
      !location.pathname.startsWith(`/user-panel/${userCredentials.uid}/`)
    ) {
      // Redirige a la página permitida
      navigate(`/user-panel/${userCredentials.uid}/home`);
    }
  }, [userCredentials, location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/jobdetail/:id" element={<JobDetail />} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="/abautUs" element={<AbautUs />} />
      <Route path="/help" element={<Help />} />
      <Route path="/support" element={<Support />} />
      <Route path="/rating"element={<Rating />} />

      {/* RUTAS DE FOOTER EN PROCESO */}
      <Route path="/privacy-policies" element={<PoliticasDePriv />} />
      <Route path="/terms-of-use" element={<CondicionesDeUso />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/payment-policies" element={<PoliticaDePago />} />

      {/* RUTAS ANIDADAS PARA EL PANEL DE PERFIL DE USUARIO */}
      <Route path="/user-panel/:id/*">
        {/* -------------DASHBOARD-------------------- */}
        <Route path="dashboard/*" element={isAdmin && userCredentials ? <Admin /> : <Home />}>
        
          <Route
            path="admin"
            element={
              isAdmin && userCredentials ? <Dashboard /> : <Navigate to="/error404" replace />
            }
          />
          <Route
            path="list-users"
            element={
              isAdmin && userCredentials ? <UsersList /> : <Navigate to="/error404" replace />
            }
          />
          <Route
            path="list-services"
            element={isAdmin && userCredentials ? <Home /> : <Navigate to="/error404" replace />}
          />
         {/*  <Route
            path="charts"
            element={isAdmin && userCredentials ? <Charts /> : <Navigate to="/error404" replace />}
          /> */}
          <Route
            path="payments"
            element={isAdmin && userCredentials ? <Payments /> : <Navigate to="/error404" replace />}
          />
          <Route
            path="reviews"
            element={isAdmin && userCredentials ? <Reviews /> : <Navigate to="/error404" replace />}
          />

          <Route
            path="settings"
            element={
              isAdmin && userCredentials ? (
                <Profile />
              ) : (
                <Navigate to="/error404" replace />
              )
            }
          />
        </Route>

        {/* -------------DASHBOARD-------------------- */}
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
          path="Edit-Work/:id"
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

        <Route
          path="help"
          element={
            userCredentials ? <Help /> : <Navigate to="/error404" replace />
          }
        />

        <Route
          path="support"
          element={
            userCredentials ? <Support /> : <Navigate to="/error404" replace />
          }
        />
        <Route
          path="rating"
          element={
            userCredentials ? <Rating /> : <Navigate to="/error404" replace />
          }
        />
        <Route
          path="privacy-policies"
          element={
            userCredentials ? (
              <PoliticasDePriv />
            ) : (
              <Navigate to="/privacy-policies" replace />
            )
          }
        />
        <Route
          path="terms-of-use"
          element={
            userCredentials ? (
              <CondicionesDeUso />
            ) : (
              <Navigate to="/terms-of-use" replace />
            )
          }
        />
        <Route
          path="accessibility"
          element={
            userCredentials ? (
              <Accessibility />
            ) : (
              <Navigate to="/accessibility" replace />
            )
          }
        />
        <Route
          path="payment-policies"
          element={
            userCredentials ? (
              <PoliticaDePago />
            ) : (
              <Navigate to="/payment-policies" replace />
            )
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
