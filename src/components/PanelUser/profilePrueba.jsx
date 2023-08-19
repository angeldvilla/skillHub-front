import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../toolkit/Users/usersHandler";
import { Input } from "@material-tailwind/react";
import Nav from "./Nav";
import UploadPhoto from "./UploadPhoto";
import axios from "axios";
import moment from "moment";

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, userCredentials } = useSelector((state) => state.users);
  const [pay, setPay] = useState([]);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
//traemos todos los pagos
  useEffect(() => {
    const getPayment = async () => {
      try {
        const { data } = await axios("http://localhost:3002/payment/");
        setPay(data);
      } catch (error) {
        console.error("Error al obtener los pagos:", error);
      }
    };
    getPayment();
  }, [id]);

//calcula la fecha de vencimiento de la suscripcion 30 dias posteriores
  const calculateExpirationDate = (createdAt) => {
    const expirationDate = moment(createdAt).add(0, "days");
    return expirationDate.format("YYYY-MM-DD");
  };
//realiza una suscripcion PUT para actualizar la suscripcion a false(cuando termine el vencimiento)
  const handleUpdateSubscription = async (id, createdAt) => {
    const expirationDate = calculateExpirationDate(createdAt);
    try {
      await axios.put(`http://localhost:3002/payment/${id}`, {
        subscription: false,
      });
      setPay((prevPay) =>
      prevPay.map((payment) =>
        payment._id === id ? { ...payment, subscription: false } : payment
      )
    )
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
        const activeSubscription = pay.find(({ subscription }) => subscription === true);
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

  return (
    <div className="relative justify-center items-center h-screen">
      {userCredentials && userCredentials.uid === id ? (
        <div>
          <Nav />
          <div className="w-72 mx-auto flex flex-col items-center text-center mt-10">
            <h1 className="mb-10">VISTA GENERAL DE LA CUENTA</h1>
            <h2 className="mb-10">Perfil</h2>

            <span className="mb-5">Nombre</span>
            <Input
              label="Nombre"
              value={user?.firstName || ""}
              disabled
              className="flex justify-center items-center text-center"
            />

            <span className="mt-5 mb-5">Apellido</span>
            <Input
              label="Apellido"
              value={user?.lastName || ""}
              disabled
              className="flex justify-center items-center text-center"
            />

            <span className="mt-5 mb-5">Correo Electronico</span>
            <Input
              label="Correo Electronico"
              value={user?.email || ""}
              disabled
              className="flex justify-center items-center text-center"
            />

            <span className="mt-5 mb-5">Numero Celular</span>
            <Input
              label="Numero Celular"
              value={user?.phoneNumber || ""}
              disabled
              className="flex justify-center items-center text-center"
            />

            {/* <span className="mt-10 mb-5">Agregar Foto de Perfil</span>
            <UploadPhoto /> */}

            <span className="mt-5 mb-5">Suscripción</span>
            <Input
              label="Suscripcion"
              value={subscriptionMessage || ""}
              disabled
              className="flex justify-center items-center text-center"
            />

            {expirationDate && (
              <Input
                label="Hasta: "
                value={expirationDate || ""}
                disabled
                className="flex justify-center items-center text-center"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="w-72 mx-auto flex flex-col items-center text-center mt-64">
          <h1>NO PODES ACCEDER MENOR</h1>
        </div>
      )}
    </div>
  );
}
