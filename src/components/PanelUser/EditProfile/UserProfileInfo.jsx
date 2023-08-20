import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Avatar, Button, Input } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import UploadPhoto from "./UploadPhoto";
import userProfile from "../../../assets/user-profile.svg";
import { isValidPhoneNumber } from "../../../utils/validPhoneNumber";
import { getUser, putUser } from "../../../toolkit/Users/usersHandler";
import { Toaster, toast } from "sonner";

const UserProfileInfo = () => {

  const avatarInputRef = useRef(null);

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.users);
  

  const [isEditing, setIsEditing] = useState(false);

  const [editedUserInfo, setEditedUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: ""
  });

  useEffect(() => {
    if (isEditing) {
      setEditedUserInfo({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        image: user?.image,
      });
    }
  }, [isEditing, user]);

  // Función para manejar cambios en los inputs de edición
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Función para guardar los cambios
  const handleSaveChanges = async (event) => {
    event.preventDefault();
    
    const editedFields = {
      firstName: editedUserInfo.firstName,
      lastName: editedUserInfo.lastName,
      email: editedUserInfo.email,
      phoneNumber: editedUserInfo.phoneNumber,
      image: editedUserInfo.image,
    };

    dispatch(putUser(user.uid, editedFields));

    toast.success("Cambios Guardados!");

    setTimeout(() => {
      setIsEditing(false);
      dispatch(getUser(user.uid))
    }, 3000);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedUserInfo({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      image: user?.image,
    });
  };

  return (
    <div className="relative sm:mx- py-6 flex items-center justify-center bg-gray-300 bg-opacity-75 rounded-lg shadow-lg sm:mb-20">
      {isEditing ? (
        <div className="space-y-10">
          {/* Inputs para edición */}

         {/*  <Avatar src={user?.image || userProfile} alt="avatar" size="xl" /> */}

          <UploadPhoto user={user} avatarInputRef={avatarInputRef}/>

            { editedUserInfo.firstName ? (
                <Input
                type="text"
                name="firstName"
                label="Nombre"
                value={editedUserInfo.firstName}
                onChange={handleInputChange}
                success
                />

            ) : ( 
                <Input
                type="text"
                name="firstName"
                label="Nombre"
                value={editedUserInfo.firstName}
                onChange={handleInputChange}
                error
                />
            )
            }

            {
                editedUserInfo.lastName
                ?  (
                    <Input
                    type="text"
                    name="lastName"
                    label="Apellido"
                    value={editedUserInfo.lastName}
                    onChange={handleInputChange}
                    success
                  />
                ) 
                
                : (
                    <Input
                    type="text"
                    name="lastName"
                    label="Apellido"
                    value={editedUserInfo.lastName}
                    onChange={handleInputChange}
                    error
                  />
                )
            }
         
            {
                editedUserInfo.email ?  ( 
                    <Input
                    type="text"
                    name="email"
                    label="Correo Electrónico"
                    value={editedUserInfo.email}
                    onChange={handleInputChange}
                    success
                  />
                ) : (
                    <Input
                    type="text"
                    name="email"
                    label="Correo Electrónico"
                    value={editedUserInfo.email}
                    onChange={handleInputChange}
                    error
                  />
                )
            }
        
          {editedUserInfo.phoneNumber === "" || !isValidPhoneNumber(editedUserInfo.phoneNumber) ? (
            <Input
              type="text"
              name="phoneNumber"
              label="Numero Celular"
              value={editedUserInfo.phoneNumber}
              onChange={handleInputChange}
              error
            />
          ) : (
            <Input
              type="text"
              name="phoneNumber"
              label="Numero Celular"
              value={editedUserInfo.phoneNumber}
              onChange={handleInputChange}
              success
            />
          )}

          <div className="mt-4">
            <Button
              color="blue"
              size="md"
              onClick={handleSaveChanges}
              disabled={
                !editedUserInfo.firstName ||
                !editedUserInfo.lastName ||
                !editedUserInfo.email ||
                editedUserInfo.phoneNumber === "" ||
                !isValidPhoneNumber(editedUserInfo.phoneNumber)
              }
            >
              Guardar
            </Button>
            <Button
              color="gray"
              size="md"
              className="ml-2"
              onClick={cancelEdit}
            >
              Cancelar
            </Button>
          </div>
          <Toaster richColors closeButton />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Avatar src={user?.image || userProfile} alt="avatar" size="xl" />
            <div className="justify-center text-black font-medium mb-3">
              <UserInfoLabel label="Nombre" value={user?.firstName} />
              <UserInfoLabel label="Apellido" value={user?.lastName} />
              <UserInfoLabel label="Correo Electrónico" value={user?.email} />
              <UserInfoLabel label="Numero Celular" value={user?.phoneNumber} />
            </div>
            <NavLink to="#" onClick={() => setIsEditing(true)} className="mt-6">
              <Button
                color="gray"
                size="md"
                className="border-gray-800 rounded-full hover:scale-105 hover:border-black transition-transform duration-200"
              >
                Editar Perfil
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileInfo;

const UserInfoLabel = ({ label, value }) => {
  return (
    <div className="mt-5 mb-7 w-32">
      <span className="font-bold text-black">{label}</span>
      <p>{value}</p>
    </div>
  );
};
