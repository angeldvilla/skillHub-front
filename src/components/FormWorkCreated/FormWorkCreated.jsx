import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import validation from "../Validations/Validations";
import { postJobs, getTypes } from "../../toolkit/ActionsworkPublications";

import { useLocalStorage } from "../UseLocalStorage/UseLocalStorage";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Footer from "../Footer/Footer";

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
    price: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    address: "",
    ability: [],
    image: "",
    price: "",

  })

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])


  function handleChange(event) {
    const { name, value } = event.target;
    //?const parsedValue = name === "price" ? (value === "" ? 0 : parseInt(value, 10)) : value;  

    setWorkData({
      ...workdata,
      [name]: value,
    });

    setErrors(validation({
      ...workdata,
      [name]: value,
    }));
    console.log("Datos del formulario:", {
      ...workdata,
      [name]: value,
    });
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

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postJobs(workdata));

    if (!workdata.title || !workdata.description || !workdata.price) {
      toast.error("Completa los datos para continuar");
    } else if (workdata.ability.length > 3) {
      toast.error("No pueden haber más de 3 categorias seleccionadas")
    } else {
      console.log("Datos del formulario:", workdata);
      dispatch(postJobs(workdata));
      handleReset();
      toast.success("Trabajo creado correctamente");

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }
  const handleReset = () => {
    setTextTittle("");
    setTextDesciption("");
    setDirectionValue("");
    setPriceValue("");
  
    setWorkData({
      title: "",
      description: "",
      ability: [],
      image: "",
      address: "",
      price: "",
    });
  };
  

  const [selectWorkType, setSelectWorkType] = useState("");

  //LocalStorage values
  const [textDesciption, setTextDesciption] = useLocalStorage('text', (''))
  const [textTttle, setTextTittle] = useLocalStorage('tex1', ' ')
  const [priceValue, setPriceValue] = useLocalStorage("text2", '')
  const [directionValue, setDirectionValue] = useLocalStorage("tex3", ' ')


  //Para poder seleccionar y borrar las categorias seleccionadas
  const tiposSelected = workdata.ability.map((cat) => (
    <div key={cat}>
      <span>{cat}</span>
      <span onClick={() => handleDelete(cat)}> x </span>
    </div>
  ));

  function handleDelete(cat) {
    setWorkData({
      ...workdata,
      ability: workdata.ability.filter(typ => typ !== cat)
    })
  }

  //___________________________________________

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute right-32 px-4 py-1 bg-gray-700 rounded-md hover:cursor-pointer hover:bg-gray-600 transition-all"
          >
            {"<<"}
          </button>
        </div>

        <form onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col justify-center items-center bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-neutral-900 shadow-lg" >
          <h1 className="text-3xl text-center text-white mb-7 mt-4">
            ¡Postula tu trabajo!
          </h1>

          <div className="flex flex-col">
            <label htmlFor="title" className="pl-2 mb-1 text-lg">
              Titulo
            </label>
            <input
              type="text"
              name="title"
              value={textTttle}
              placeholder="Que trabajo necesitas"
              onChange={(event) => {
                const newValue = event.target.value;
                handleChange(event);
                setTextTittle(newValue)
              }}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}


            <label htmlFor="description" className="pl-2 mb-1 text-lg">
              Descripción
            </label>
            <textarea
              value={textDesciption}
              name="description"
              placeholder="Necesito persona con capacidad de..."
              onChange={(event) => {
                const newValue = event.target.value;
                handleChange(event);
                setTextDesciption(newValue);
              }}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            ></textarea>
            {errors.description && <p className="text-red-500">{errors.description}</p>}



            <label className="pl-2 mb-1 text-lg">
              Precio:
            </label>
            <input
              type="text"
              placeholder="$20"
              name="price"
              value={priceValue}
              onChange={(event) => {
                const newValue = event.target.value;
                handleChange(event);
                setPriceValue(newValue)
              }}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />

            <label htmlFor="payment" className="pl-2 mb-1 text-lg">
              Pago
            </label>
            <select className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            >
              {WorkPerTime.map((work, index) => (
                <option key={index} value={work}>
                  {work}
                </option>
              ))}
            </select>
            <label htmlFor="ability" className="pl-2 mb-1 text-lg">
              Categoria
            </label>
            <select onChange={(event) => handleSelect(event)}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            >
              <option> Selecciona una categoría: </option>
              {
                ability.map((typ, index) => (
                  <option
                    key={index}
                    value={typ.category}
                    disabled={workdata.category && workdata.ability.includes(ability.category)}
                  >
                    {typ.category}
                  </option>
                ))}
            </select>
            {tiposSelected.length > 0 && (
              <div>
                <span>Categorias seleccionadas:</span>
                {tiposSelected}
                {workdata.ability.length > 3 && <p style={{ color: "red" }}>¡No puedes seleccionar más de 3 categorías!</p>}
              </div>
            )}
            <label htmlFor="image" className="pl-2 mb-1 text-lg">
              Imagen:
            </label>
            <input
              type="text"
              name="image"
              placeholder="Ingresa URL de imagen"
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />

            <label htmlFor="address" className="pl-2 mb-1 text-lg">
              Dirección:
            </label>
            <input
              type="text"
              name="address"
              placeholder="Para servicios físicos"
              value={directionValue}
              onChange={(event) => {
                const newValue = event.target.value;
                handleChange(event);
                setDirectionValue(newValue)
              }}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
          </div>
          <button className="p-2 mt-8 bg-blue-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-700 hover:shadow-md transition">
            Publicar Trabajo:
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 my-3 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
          >
            Reset
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}