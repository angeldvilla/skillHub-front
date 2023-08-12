const FIRSTNAME = "firstName";
const LASTNAME = "lastName";
const EMAIL = "email";
const PHONENUMBER = "phoneNumber";
const PASSWORD = "password";
const CONFIRMPASSWORD = "confirmPassword";

export const validateUserData = (input, value, userData) => {
  const errors = {};

  switch (input) {
    case FIRSTNAME:
      if (!value) {
        errors.firstName = "Nombre requerido";
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)) {
        errors.firstName = "Solo puede contener letras";
      } else if (value.length > 30) {
        errors.firstName = "Debe tener menos de 30 caractéres";
      }
      break;

    case LASTNAME:
      if (!value) {
        errors.lastName = "Last name is required";
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)) {
        errors.lastName = "Debe contener solo letras";
      } else if (value.length > 30) {
        errors.lastName = "Debe tener menos de 30 caractéres";
      }
      break;

    case EMAIL:
      if (!value) {
        errors.email = "Se requiere un email";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      ) {
        errors.email = "Email inválido";
      } else if (value.length > 30) {
        errors.email = "Debe tener menos de 30 caractéres";
      }
      break;

    case PHONENUMBER:
      if (!value) {
        errors.phoneNumber = "Se requiere un número de teléfono";
      } else if (isNaN(value)) {
        errors.phoneNumber = "Debe ser un número";
      } else if (value < 0) {
        errors.phoneNumber = "No es un número válido";
      } else if (value.length !== 10) {
        errors.phoneNumber = "Debe tener 10 caractéres";
      }
      break;

    case PASSWORD:
      if (!value) {
        errors.password = "Se requiere una contraseña";
      } else if (value.length < 8) {
        errors.password = "Debe tener al menos 8 caractéres";
      }
      break;

    case CONFIRMPASSWORD:
      if (!value) {
        errors.confirmPassword = "Se requiere confirmar la contraseña";
      } else if (value.length < 8) {
        errors.confirmPassword = "Debe tener al menos 8 caractéres";
      } else if (value !== userData.password) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      } else {
        errors.confirmPassword = "";
      }
      break;

    default:
      break;
  }

  return errors;
};

export const resetUserData = (setUserData) => {
  setUserData({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
};
