import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Button, Input } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Toaster, toast } from 'sonner'

import userProfile from '../../../assets/user-profile.svg'
import { isValidPhoneNumber } from '../../../utils/validPhoneNumber'
import { getUser, putUser } from '../../../toolkit/Users/usersHandler'

import UploadPhoto from './UploadPhoto'

function UserProfileInfo() {
  const avatarInputRef = useRef(null)

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)

  const [isEditing, setIsEditing] = useState(false)

  //Función para actualizar imagen del perfil
  const updateProfileImage = (newImage) => {
    setEditedUserInfo((prevInfo) => ({
      ...prevInfo,
      image: newImage
    }))
  }

  const [editedUserInfo, setEditedUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    image: ''
  })

  useEffect(() => {
    if (isEditing) {
      setEditedUserInfo({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        image: user?.image
      })
    }
  }, [isEditing, user])

  // Función para manejar cambios en los inputs de edición
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEditedUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
  }

  // Función para guardar los cambios
  const handleSaveChanges = async (event) => {
    event.preventDefault()

    const editedFields = {
      firstName: editedUserInfo.firstName,
      lastName: editedUserInfo.lastName,
      email: editedUserInfo.email,
      phoneNumber: editedUserInfo.phoneNumber,
      image: editedUserInfo.image
    }

    dispatch(putUser(user.uid, editedFields))

    toast.success('Cambios Guardados!')

    setTimeout(() => {
      setIsEditing(false)
      dispatch(getUser(user.uid))
    }, 2000)
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setEditedUserInfo({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      image: user?.image
    })
  }

  return (
    <div className="relative sm:mx- py-6 flex items-center justify-center bg-gray-300 bg-opacity-75 rounded-lg shadow-lg sm:mb-20">
      {isEditing ? (
        <div className="space-y-10">
          {/* Inputs para edición */}

          {/*  <Avatar src={user?.image || userProfile} alt="avatar" size="xl" /> */}

          <UploadPhoto
            avatarInputRef={avatarInputRef}
            updateProfileImage={updateProfileImage}
            user={user}
          />

          {editedUserInfo.firstName ? (
            <Input
              success
              label="Nombre"
              name="firstName"
              type="text"
              value={editedUserInfo.firstName}
              onChange={handleInputChange}
            />
          ) : (
            <Input
              error
              label="Nombre"
              name="firstName"
              type="text"
              value={editedUserInfo.firstName}
              onChange={handleInputChange}
            />
          )}

          {editedUserInfo.lastName ? (
            <Input
              success
              label="Apellido"
              name="lastName"
              type="text"
              value={editedUserInfo.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <Input
              error
              label="Apellido"
              name="lastName"
              type="text"
              value={editedUserInfo.lastName}
              onChange={handleInputChange}
            />
          )}

          {editedUserInfo.email ? (
            <Input
              success
              label="Correo Electrónico"
              name="email"
              type="text"
              value={editedUserInfo.email}
              onChange={handleInputChange}
            />
          ) : (
            <Input
              error
              label="Correo Electrónico"
              name="email"
              type="text"
              value={editedUserInfo.email}
              onChange={handleInputChange}
            />
          )}

          {editedUserInfo.phoneNumber === '' ||
          !isValidPhoneNumber(editedUserInfo.phoneNumber) ? (
            <Input
              error
              label="Numero Celular"
              name="phoneNumber"
              type="text"
              value={editedUserInfo.phoneNumber}
              onChange={handleInputChange}
            />
          ) : (
            <Input
              success
              label="Numero Celular"
              name="phoneNumber"
              type="text"
              value={editedUserInfo.phoneNumber}
              onChange={handleInputChange}
            />
          )}

          <div className="mt-4">
            <Button
              color="blue"
              disabled={
                !editedUserInfo.firstName ||
                !editedUserInfo.lastName ||
                !editedUserInfo.email ||
                editedUserInfo.phoneNumber === '' ||
                !isValidPhoneNumber(editedUserInfo.phoneNumber)
              }
              size="md"
              onClick={handleSaveChanges}
            >
              Guardar
            </Button>
            <Button
              className="ml-2"
              color="gray"
              size="md"
              onClick={cancelEdit}
            >
              Cancelar
            </Button>
          </div>
          <Toaster closeButton richColors />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Avatar alt="avatar" size="xl" src={user?.image || userProfile} />
            <div className="justify-center text-black font-medium mb-3">
              <UserInfoLabel label="Nombre" value={user?.firstName} />
              <UserInfoLabel label="Apellido" value={user?.lastName} />
              <UserInfoLabel label="Correo Electrónico" value={user?.email} />
              <UserInfoLabel label="Numero Celular" value={user?.phoneNumber} />
            </div>
            <NavLink className="mt-6" to="#" onClick={() => setIsEditing(true)}>
              <Button
                className="border-gray-800 rounded-full hover:scale-105 hover:border-black transition-transform duration-200"
                color="gray"
                size="md"
              >
                Editar Perfil
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfileInfo

function UserInfoLabel({ label, value }) {
  return (
    <div className="mt-5 mb-7 w-32">
      <span className="font-bold text-black">{label}</span>
      <p>{value}</p>
    </div>
  )
}
