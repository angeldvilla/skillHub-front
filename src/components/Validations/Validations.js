const validation = (data) => {
    let errors = {};
  
    const prohibideWorks = ["sex", "sexo", "matar", "asesinar", "violar", "sexual", "estorsionar","prostituta","prostibulo","tetas","sicarios", "sicariato","arrebatar","coger","culear"];

  
    if (data.title.length > 40) {
      errors.title = "El titulo tiene que tener entre 0 y 40 caracteres";
    } else if (prohibideWorks.includes(data.title.toLowerCase())) {
      errors.title = "No está permitido publicar trabajos de estos indoles";
    }
  
    if (data.phone.length > 10) {
      errors.phone = "Máximo 10 números";
    }
  
    return errors;
  };
  
  export default validation;
  