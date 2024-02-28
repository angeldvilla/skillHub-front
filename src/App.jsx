/* COMPONENTS */
import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import JobDetail from './components/JobDetail/JobDetail'
import FormWorkCreated from './components/FormWorkCreated/FormWorkCreated'
import WorkPublications from './components/WorkPublications/WorkPublications'
import Profile from './components/PanelUser/Profile'
import MercadoPago from './components/mercadoPago/MercadoPago'
import Next from './components/mercadoPago/Next'
import Error404 from './components/error404/Error404'
import AbautUs from './components/AbautUs/AbautUs'
import PoliticasDePriv from './components/ComponentesFooter/PoliticaDePriv'
import CondicionesDeUso from './components/ComponentesFooter/CondicionesDeUso'
import Admin from './components/Admin/GeneralAdmin'
import PoliticaDePago from './components/ComponentesFooter/PoliticaDePago'
import Support from './components/PanelUser/FAQ/Support'
import Help from './components/PanelUser/FAQ/Help'
import Accessibility from './components/ComponentesFooter/Accesibilidad/Accessibility'
import Dashboard from './components/Admin/Views/Dashboard'
import UsersList from './components/Admin/Views/UsersList'
import Reviews from './components/Admin/Views/Reviews'
import Payments from './components/Admin/Views/Payments'
import Rating from './components/PanelUser/FAQ/Rating'
/* ------------------------------------------- */

/* ------------------------------------------- */

/* ------------------------------------------- */

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const { userCredentials } = useSelector((state) => state.users)
  const navigate = useNavigate()
  const location = useLocation()

  // Redirecciona si el usuario intenta acceder a rutas no permitidas mientras las credenciales están cargadas
  useEffect(() => {
    if (
      userCredentials &&
      userCredentials.uid === 'Zqaz0B6durdS841Bd7e3qJdbjEU2'
    ) {
      setIsAdmin(true)
    }
    if (
      userCredentials &&
      !location.pathname.startsWith(`/user-panel/${userCredentials.uid}/`)
    ) {
      // Redirige a la página permitida
      navigate(`/user-panel/${userCredentials.uid}/home`)
    }
  }, [userCredentials, location, navigate])

  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<Home />} path="/home" />
      <Route element={<Login />} path="/signin" />
      <Route element={<Register />} path="/signup" />
      <Route element={<JobDetail />} path="/jobdetail/:id" />
      <Route element={<Error404 />} path="/error404" />
      <Route element={<AbautUs />} path="/abautUs" />
      <Route element={<Help />} path="/help" />
      <Route element={<Support />} path="/support" />
      <Route element={<Rating />} path="/rating" />

      {/* RUTAS DE FOOTER EN PROCESO */}
      <Route element={<PoliticasDePriv />} path="/privacy-policies" />
      <Route element={<CondicionesDeUso />} path="/terms-of-use" />
      <Route element={<Accessibility />} path="/accessibility" />
      <Route element={<PoliticaDePago />} path="/payment-policies" />

      {/* RUTAS ANIDADAS PARA EL PANEL DE PERFIL DE USUARIO */}
      <Route path="/user-panel/:id/*">
        {/* -------------DASHBOARD-------------------- */}
        <Route
          element={isAdmin && userCredentials ? <Admin /> : <Home />}
          path="dashboard/*"
        >
          <Route
            element={
              isAdmin && userCredentials ? (
                <Dashboard />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="admin"
          />
          <Route
            element={
              isAdmin && userCredentials ? (
                <UsersList />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="list-users"
          />
          <Route
            element={
              isAdmin && userCredentials ? (
                <Home />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="list-services"
          />
          <Route
            element={
              isAdmin && userCredentials ? (
                <JobDetail />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="details-services/:id"
          />
          <Route
            element={
              isAdmin && userCredentials ? (
                <Payments />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="payments"
          />
          <Route
            element={
              isAdmin && userCredentials ? (
                <Reviews />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="reviews"
          />

          <Route
            element={
              isAdmin && userCredentials ? (
                <Profile />
              ) : (
                <Navigate replace to="/error404" />
              )
            }
            path="settings"
          />
        </Route>

        {/* -------------DASHBOARD-------------------- */}
        <Route
          element={userCredentials ? <Home /> : <Navigate replace to="/home" />}
          path="home"
        />

        <Route
          element={
            userCredentials ? (
              <JobDetail />
            ) : (
              <Navigate replace to="/error404" />
            )
          }
          path="jobdetail/:id"
        />
        <Route
          element={
            userCredentials ? <Profile /> : <Navigate replace to="/error404" />
          }
          path="my-profile"
        />
        <Route
          element={
            userCredentials ? (
              <FormWorkCreated />
            ) : (
              <Navigate replace to="/error404" />
            )
          }
          path="CreateWork"
        />
        <Route
          element={
            userCredentials ? (
              <FormWorkCreated />
            ) : (
              <Navigate replace to="/error404" />
            )
          }
          path="Edit-Work/:id"
        />
        <Route
          element={
            userCredentials ? (
              <WorkPublications />
            ) : (
              <Navigate replace to="/error404" />
            )
          }
          path="WorkPublications"
        />

        <Route
          element={
            userCredentials ? (
              <MercadoPago />
            ) : (
              <Navigate replace to="/error404" />
            )
          }
          path="memberShip"
        />

        <Route
          element={
            userCredentials ? <Next /> : <Navigate replace to="/error404" />
          }
          path="next/:payment_id"
        />

        <Route
          element={
            userCredentials ? <Help /> : <Navigate replace to="/error404" />
          }
          path="help"
        />

        <Route
          element={
            userCredentials ? <Support /> : <Navigate replace to="/error404" />
          }
          path="support"
        />
        <Route
          element={
            userCredentials ? <Rating /> : <Navigate replace to="/error404" />
          }
          path="rating"
        />
        <Route
          element={
            userCredentials ? (
              <PoliticasDePriv />
            ) : (
              <Navigate replace to="/privacy-policies" />
            )
          }
          path="privacy-policies"
        />
        <Route
          element={
            userCredentials ? (
              <CondicionesDeUso />
            ) : (
              <Navigate replace to="/terms-of-use" />
            )
          }
          path="terms-of-use"
        />
        <Route
          element={
            userCredentials ? (
              <Accessibility />
            ) : (
              <Navigate replace to="/accessibility" />
            )
          }
          path="accessibility"
        />
        <Route
          element={
            userCredentials ? (
              <PoliticaDePago />
            ) : (
              <Navigate replace to="/payment-policies" />
            )
          }
          path="payment-policies"
        />
      </Route>
    </Routes>
  )
}

export default App
