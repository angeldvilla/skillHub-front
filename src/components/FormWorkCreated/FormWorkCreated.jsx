import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddWorks, GetAllWorkTypes } from "../../toolkit/sliceWorkPublication";
import { useParams } from "react-router-dom";


import validation from "../Validations/Validations";
import { postJobs, getTypes } from "../../toolkit/ActionsworkPublications";

//_______________________________________

const WorkPerTime = ["Hora", "Precio fijo"];

export default function FormCreateWork() {

  // const works = useSelector((state) => state.formwork.allPublicationsWork)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ability = useSelector((state) => state.formwork.allWorkTypes)
  // const params = useParams()



  const [workdata, setWorkData] = useState({
    title: "",
    description: "",
    address: "",
    ability: [],
    image: "",
    price: 0,
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    address: "",
    ability: [],
    image: "",
    price: 0,
  })

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])


  function handleChange(event) {
    const { name, value } = event.target;
    const parsedValue = name === "price" ? parseInt(value, 10) : value;

    setWorkData({
      ...workdata,
      [name]: parsedValue,
    });

    setErrors(validation({
      ...workdata,
      [name]: parsedValue,
    }));
  }

  function handleSelect(event) {
    const typeworkSelect = event.target.value;
    if (!workdata.ability.includes(typeworkSelect)) {

      setWorkData({
        ...workdata,
        ability: [...workdata.ability, typeworkSelect]
      })
    }
  }

  function handleDelete(el){
setWorkData({
  ...workdata,
  ability: workdata.ability.filter(typ => typ !== el)
})
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postJobs(workdata));

    if (!workdata.title || !workdata.description || !workdata.price || !workdata.price) {
      alert("Faltan datos por completar");
    } else {
      setWorkData({
        title: "",
        description: "",
        ability: [],
        image: "",
        address: "",
        price: 0,
      });
      alert("Trabajo creado correctamente");
      navigate("/home");
    }
  }


  const [selectWorkType, setSelectWorkType] = useState("");


  return (
    <div>
      <h5 style={{ color: "red" }}>Publica tu trabajo</h5>
      <NavLink to="/home">
        <button>Volver</button>
      </NavLink>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="title">Titulo: </label>
          <input
            type="text"
            name="title"
            value={workdata.title}
            placeholder="Que trabajo necesitas"
            onChange={(event) => handleChange(event)}
          />
          {
            errors.title && (<p className="error" style={{ color: "red" }}> {errors.title}  </p>)
          }
        </div>
        <div>
          <label htmlFor="description">Descripción: </label>
          <textarea
            value={workdata.description}
            name="description"
            placeholder="Descripción del trabajo"
            onChange={(event) => handleChange(event)}

          ></textarea>
          {
            errors.description && (<p className="error" style={{ color: "red" }}> {errors.description}  </p>)
          }
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <input
            type="Number"
            name="price"
            value={workdata.price}
            placeholder="Cuanto pagas por tu servicio"
            onChange={(event) => handleChange(event)}
          />
          <select name="Precio">
            {WorkPerTime.map((work, index) => (
              <option key={index} value={work}>
                {work}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tipo de trabajo:</label>
          <select onChange={(event) => handleSelect(event)}>
            {
              ability.map((typ, index) => (
                <option
                  key={index}
                  value={typ.title}
                  disabled={workdata.ability && workdata.ability.includes(ability.title)}
                >
                  {typ.title}
                </option>
              ))}
          </select>

          <text>
            Tipos seleccionados: {" "}
            {
              workdata.ability.map((el, index) => {
                <div>
                  <span key = {index}>{el}</span>
                  <span onClick={()=> handleDelete(el)}> X </span>
                </div>
              }
           )}
          </text>

        </div>
        <div>
          <label htmlFor="image">Imagen </label>
          <input
            type="text"
            name="image"
            placeholder="Ingresa una foto sobre el trabajo o una imagen de representación"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="id">Tu dirección </label>
          <input
            type="text"
            name="address"
            placeholder="Ingresa una dirección"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button type="submit">Postular oferta</button>
      </form>
    </div>
  );
}

