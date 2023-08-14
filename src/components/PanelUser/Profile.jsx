import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../toolkit/Users/usersHandler";
import { Input } from "@material-tailwind/react";
import Nav from "./Nav";
import UploadPhoto from "./UploadPhoto";

export default function Profile() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user, userCredentials } = useSelector((state) => state.users);

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
