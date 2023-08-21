export const isValidPhoneNumber = (phoneNumber) => {
    // Expresión regular para validar números de teléfono celulares en formato internacional
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };