import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, logoutUser } from "../../toolkit/Users/usersHandler";
import Nav from "./Nav";
import Footer from "../Footer/Footer";
import UserProfileInfo from "./EditProfile/UserProfileInfo";
import axios from "axios";
import moment from "moment";
import { Button } from "@material-tailwind/react";
import { Suscription } from "./EditProfile/SuscriptionCard";
import { putUsers } from "../../toolkit/thunks";
import { toast } from "react-toastify";

import React from "react";

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const [pay, setPay] = useState([]);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [inactive, setInactive] = useState({
    _id: "",
    habilitar: true,
  });

  const handleOnClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteAccount = async (_id) => {
    setInactive({ _id, habilitar: !inactive.habilitar });
    dispatch(putUsers({ _id, habilitar: !inactive.habilitar }));

    toast("Su cuenta ha sido eliminada con exito!");
    dispatch(logoutUser());
    setTimeout(() => {
      navigate("/home");
    })
    };

  //traemos todos los pagos
  useEffect(() => {
    const getPayment = async () => {
      try {
        const { data } = await axios(
          `https://skillhub-back-production.up.railway.app/payment/${id}`
        );
        setPay(data);
      } catch (error) {
        console.error("Error al obtener los pagos:", error);
      }
    };
    getPayment();
  }, [id]);

  //calcula la fecha de vencimiento de la suscripcion 30 dias posteriores
  const calculateExpirationDate = (createdAt) => {
    const expirationDate = moment(createdAt).add(30, "days");
    return expirationDate.format("YYYY-MM-DD");
  };
  //realiza una suscripcion PUT para actualizar la suscripcion a false(cuando termine el vencimiento)
  const handleUpdateSubscription = async (id, createdAt) => {
    const expirationDate = calculateExpirationDate(createdAt);
    try {
      await axios.put(
        `https://skillhub-back-production.up.railway.app/payment/${id}`,
        {
          subscription: false,
        }
      );
      setPay((prevPay) =>
        prevPay.map((payment) =>
          payment._id === id ? { ...payment, subscription: false } : payment
        )
      );
    } catch (error) {
      console.error("Error al actualizar la suscripción:", error);
    }
  };

  useEffect(() => {
    //busca las suscripciones ACTIVAS
    if (pay.length > 0) {
      const filterSuscripcion = pay
        .filter(({ subscription }) => subscription === true)
        .map(({ plan }) => plan);

      if (filterSuscripcion.length > 0) {
        setSubscriptionMessage(filterSuscripcion.join(", "));
        const activeSubscription = pay.find(
          ({ subscription }) => subscription === true
        );
        const { _id, createdAt } = activeSubscription;
        const expirationDate = calculateExpirationDate(createdAt);
        //calcula fecha de vencimiento
        if (moment() > moment(expirationDate)) {
          //si hay una suscripcion activa se muestra
          handleUpdateSubscription(_id, createdAt);
        } else {
          //sino se muestra fecha de expiracion
          setExpirationDate(expirationDate);
        }
      } else {
        //cuando ya paso a false, se muestra NO ACTIVA
        setSubscriptionMessage("No activa");
        setExpirationDate("");
      }
    }
  }, [pay]);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(()=>{
   if (id === "Zqaz0B6durdS841Bd7e3qJdbjEU2")
   setIsAdmin(true)
  }, [id])
   

  return (
    <React.Fragment>

    {isAdmin ? (
      <div className="flex flex-col min-h-screen">
      <div className="p-5 max-w-lg mx-auto w-full">
        <Nav />
        <div className="flex-grow mx-auto">
          <div className="flex flex-col justify-center items-center mt-4 mb-20 bg-gray-200 rounded-lg shadow-md p-6">
          <h1 className="flex justify-center text-2xl font-bold mb-5">
            PERFIL ADMINISTRATIVO
          </h1>
            <p className="text-md text-gray-600 text-center">
             Esta es la cuenta administrativa de SkillHub. 
              Puedes Inhabilitar usuarios y trabajos que incumplan con las politicias de la empresa además de otras funciones exclusivas   
            </p>
          </div>
          <UserProfileInfo />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
    ): (
      <div className="flex flex-col min-h-screen bg-blue-gray-800 bg-opacity-30">
      <Nav />
      <div className="p-5 max-w-lg mx-auto w-full">
        <div className="flex-grow mx-auto">
          <h1 className="flex justify-center text-2xl font-bold mb-5">
            PERFIL
          </h1>
          <UserProfileInfo />
          {/* Plan de suscripción */}
          <div className="p-6 mt-4">
            <h1 className="flex justify-center text-xl font-bold mb-5">
              TU PLAN
            </h1>
            <div className="mt-4 flex justify-center items-center">
              <Suscription
                user={user}
                subscriptionMessage={subscriptionMessage}
                expirationDate={expirationDate}
              />
            </div>
          </div>

          {/* Opción para eliminar cuenta */}
          <div className="flex flex-col justify-center items-center mt-4 mb-20 bg-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Cerrar Tu Cuenta!</h3>
            <p className="text-md text-gray-600 text-center">
              Al eliminar tu cuenta, no volverás a tener acceso a SkillHub con
              este correo. Ten en cuenta que tu historial de trabajos,
              servicios, y suscripciones se eliminarán automáticamente después
              de cierto tiempo.
            </p>
            <div className="mt-4">
              <Button
                color="red"
                size="md"
                onClick={handleOnClick}
              >
                Eliminar mi Cuenta
              </Button>
            </div>
            {showDeleteConfirmation && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    Confirmar Eliminación
                  </h3>
                  <p className="text-md text-gray-600">
                    ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción
                    es irreversible.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button
                      color="gray"
                      size="sm"
                      onClick={() => setShowDeleteConfirmation(false)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      color="red"
                      size="sm"
                      onClick={() => handleDeleteAccount(user._id)}
                      className="ml-2"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
    )}
    </React.Fragment>

  );
}
