import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../toolkit/Users/usersHandler";
import { Input } from "@material-tailwind/react";
import Nav from "./Nav";
import UploadPhoto from "./EditProfile/UploadPhoto";
import Footer from "../Footer/Footer";
import axios from "axios";
import moment from "moment";
import { Avatar } from "@material-tailwind/react";

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [pay, setPay] = useState([]);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
//traemos todos los pagos
  useEffect(() => {
    const getPayment = async () => {
      try {
        const { data } = await axios("https://skillhub-back-production.up.railway.app/payment/");
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
      await axios.put(`https://skillhub-back-production.up.railway.app/payment/${id}`, {
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
    <div className="relative justify-center items-center h-screen bg-blue-gray-500">
          <Nav />
          <div className="w-72 mx-auto flex flex-col items-center text-center mt-10 bg-blue-gray-500">
            <h1 className="mb-10">VISTA GENERAL DE LA CUENTA</h1>
            <h2 className="mb-10">Perfil</h2>


            <Avatar src={user?.image} alt="avatar" size="xl"/>
            <span className="flex justify-center items-center text-center">Subir Foto</span>
            <UploadPhoto/>

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
          <Footer/>
        </div>
  );
}
