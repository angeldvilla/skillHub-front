import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddWorks } from "../../toolkit/sliceWorkPublication";
import { useParams } from "react-router-dom";

import validation from "../Validations/Validations";

//_______________________________________

const WorkPerTime = ["Hora", "Precio fijo"];

// const Ubication = ["Col", "Arg", "Pe", "otro"];

const workTypes =
  [
    { name: "Limpieza" },
    { name: "Profesor" },
    { name: "Servicios varios" },
    { name: "Front Developer" },
    { name: "BackDeveloper" }
  ]
export default function FormCreateWork() {

  // const works = useSelector((state) => state.formwork.allPublicationsWork)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const params = useParams()

  const [workdata, setWorkData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    address: "",
    ability: [],
    image: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    ability: [],
    image: "",
    phone: "",
  })


  function handleChange(event) {
    setWorkData({
      ...workdata,
      [event.target.name]: event.target.value,
    });
    setErrors(validation({
      ...workdata,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!workdata.title || !workdata.description || !workdata.price || !workdata.price) {
      alert("Faltan datos por completar");
    } else {
      setWorkData({
        id: "",
        title: "",
        description: "",
        price: "",
        ability: [],
        image: "",
        address: "",
        phone: "",
      });
      dispatch(AddWorks(workdata));
      alert("Trabajo creado correctamente");
      navigate("/WorkPublications");
    }
  }

  // useEffect(() => {
  //    console.log(works);
  // }, [])


  const [selectWorkType, setSelectWorkType] = useState("");

  return (
    <div>
      ___________________________________________
      <h5 style={{ color: "red" }}>Publica tu trabajo</h5>
      <NavLink to="/home">
        <button>Volver</button>
      </NavLink>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="id">Id: </label>
          <input
            type="number"
            name="id"
            placeholder="Proporciona un id"
            onChange={(event) => handleChange(event)}
          />
        </div>
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
          <label htmlFor="ability">Tipo de trabajo: </label>
          <select value={selectWorkType} onChange ={setSelectWorkType}>
          {
            workTypes.map((type) => (
              <option key={type.name} value= {type.name}>
                {type.name}
              </option>
            ))
          }
          </select>
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
        <div>
          <label htmlFor="phone">Telefono: </label>
          <input
            type="number"
            name="phone"
            value={workdata.phone}
            placeholder="indica tu número de whatsapp"
            onChange={(event) => handleChange(event)}
          />
          {
            errors.phone && (<p className="error"> {errors.phone}  </p>)
          }
        </div>
        <button type="submit">Postular oferta</button>
      </form>
      ___________________________________________
    </div>
  );
}