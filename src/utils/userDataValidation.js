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
        errors.firstName = "First name is required";
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)) {
        errors.firstName = "First name can only contain letters";
      } else if (value.length > 20) {
        errors.firstName = "Must be less than 20 characters";
      }
      break;

    case LASTNAME:
      if (!value) {
        errors.lastName = "Last name is required";
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)) {
        errors.lastName = "Last name can only contain letters";
      } else if (value.length > 20) {
        errors.lastName = "Must be less than 20 characters";
      }
      break;

    case EMAIL:
      if (!value) {
        errors.email = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      ) {
        errors.email = "Invalid email address";
      } else if (value.length > 20) {
        errors.email = "Must be less than 20 characters";
      }
      break;

    case PHONENUMBER:
      if (!value) {
        errors.phoneNumber = "Phone number is required";
      } else if (isNaN(value)) {
        errors.phoneNumber = "Phone number must be a number";
      } else if (value < 0) {
        errors.phoneNumber = "Phone number must be a positive number";
      } else if (value.length < 10) {
        errors.phoneNumber = "Must be at least 10 characters";
      } else if (value.length > 20) {
        errors.phoneNumber = "Must be less than 20 characters";
      }
      break;

    case PASSWORD:
      if (!value) {
        errors.password = "Password is required";
      } else if (value.length < 8) {
        errors.password = "Must be at least 8 characters";
      }
      break;

    case CONFIRMPASSWORD:
      if (!value) {
        errors.confirmPassword = "Confirm password is required";
      } else if (value.length < 8) {
        errors.confirmPassword = "Must be at least 8 characters";
      } else if (value !== userData.password) {
        errors.confirmPassword = "Passwords do not match";
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
