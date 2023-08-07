const validation = (data) => {
  let errors = {};

  const prohibideWorks = /(sex|sexo|matar|asesinar|violar|sexual|estorsionar|prostituta|prostibulo|tetas|sicarios|sicariato|arrebatar|sicariato|culear|sicario|golpear|torturar)/i;

  if (data.title.length > 40) {
    errors.title = "Maximo 40 caracteres";
  } else if (prohibideWorks.test(data.title.toLowerCase())) {
    errors.title = "Prohibido";
  }

  if (data.description.length > 200) {
    errors.description = "Maximo 200 caracteres";
  } else if (prohibideWorks.test(data.description.toLowerCase())) {
    errors.description = "Prohibido";
  }

  return errors;
};

export default validation;
