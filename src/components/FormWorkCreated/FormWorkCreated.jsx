import React, { isValidElement } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect , useRef} from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import validation from "../Validations/Validations";
import { postJobs, getTypes } from "../../toolkit/ActionsworkPublications";
import { useLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { getUser } from "../../toolkit/Users/usersHandler";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Components
import Footer from "../Footer/Footer";
import Nav from "../PanelUser/Nav";

//_______________________________________

const WorkPerTime = ["/Hora", "/Fijo"];
const maxSiseMB = 2 * 1024 * 1024; // Tamaño de 1mb para las fotos


export default function FormCreateWork() {

  // const works = useSelector((state) => state.formwork.allPublicationsWork)
  //  const allWorkTypes = useSelector((state) => state.formwork.allPublicationsWork)
  const { id } = useParams();
  const dispatch = useDispatch();
  const dispatch2= useDispatch();
  const navigate = useNavigate();
  const ability = useSelector((state) => state.formwork.allWorkTypes)
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [fileSelected, setFileSelected] = useState(false); //Soluciona el filed seleccionado
  const fileInputRef = useRef(null);
  const params =  useParams()
  const TodosLostrabajos = useSelector((state) => state.work.work);




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
    dispatch(getTypes());
    dispatch(getUser(id))
    // dispatch(getWork());
  }, [dispatch, id])

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

    if (!workdata.title || !workdata.description || !workdata.price || !workdata.image || !workdata.address) {
      toast.error("Completa los datos para continuar");
    } else if (!selectedPaymentOption) {
      toast.error("Selecciona una opción de pago (Hora o Precio fijo)");
    } else if (workdata.ability.length === 0) {
      toast.error("Selecciona al menos una categoría");
    } else if (workdata.ability.length > 3) {
      toast.error("No pueden haber más de 3 categorías seleccionadas");
    } else if (workdata.title.length > 40){
      toast.error("El titulo debe tener maximo 40 caracteres");
    }else if (workdata.description.length > 200){
      toast.error("La descripción debe tener maximo 200 caracteres");
    } else if (errors.image === "El tamaño de la imagen debe ser inferior a 3MB") {
      toast.error("El peso de la imagen debe ser de máximo 3MB");
    } else if (errors.title === "Prohibido" || errors.description === "Prohibido") {
      toast.error("No está permitido escribir este tipo de servicios");
    } else {
      // Concatenar la opción de pago al precio
      const finalPrice = `${workdata.price} ${selectedPaymentOption}`;
      const updatedWorkData = {
        ...workdata,
        price: finalPrice,
      };

      console.log("Datos del formulario:", updatedWorkData);
      dispatch(postJobs(updatedWorkData));
      handleReset();
      toast.success("Trabajo creado correctamente");

      setTimeout(() => {
        navigate(`/user-panel/${id}/home`);
      }, 3000);
    }
  }


  //LocalStorage values
  const [textDesciption, setTextDesciption] = useLocalStorage('text', (''))
  const [textTitle, setTextTitle] = useLocalStorage('tex1', ' ')
  const [priceValue, setPriceValue] = useLocalStorage("text2", '')
  const [directionValue, setDirectionValue] = useLocalStorage("tex3", ' ')


  const handleReset = () => {
    setTextTitle("");
    setTextDesciption("");
    setDirectionValue("");
    setPriceValue("");
    setFileSelected(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }


    setWorkData({
      title: "",
      description: "",
      ability: [],
      image: "",
      address: "",
      price: "",
    });
  };
  useEffect(() => {
    if (textTitle || textDesciption || priceValue || directionValue) {
      setWorkData((prevData) => ({
        ...prevData,
        title: textTitle,
        description: textDesciption,
        price: priceValue,
        address: directionValue,
      }));
    }
  }, []);


  const [selectWorkType, setSelectWorkType] = useState("");

  //Para poder seleccionar y borrar las categorias seleccionadas
  const tiposSelected = workdata.ability.map((cat) => (
    <div key={cat}>
      <span>{cat}</span>
      <button
        onClick={() => handleDelete(cat)}
        className="p-0.5 ml-1 bg-gray-800 text-white rounded-md w-6 h-6 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-sm transition text-xs flex items-center justify-center"       > x </button>
    </div>
  ));

  function handleDelete(cat) {
    setWorkData({
      ...workdata,
      ability: workdata.ability.filter(typ => typ !== cat)
    })
  }

  //Subir imagenes a cloudinary

  async function uploadImage(files) {
    const selectedFile = files[0];
    console.log(files[0]);

    if (selectedFile) {
      if (selectedFile.size < maxSiseMB) {
        setErrors({
          ...errors,
          image: ""
        });
        const imageFormData = new FormData();
        imageFormData.append("file", files[0]);
        imageFormData.append("upload_preset", "PostWorks");
        try {
          const response = await axios.post("https://api.cloudinary.com/v1_1/dvr9giaia/upload", imageFormData);
          const data = response.data.secure_url;
          console.log("Esta es la respuesta de la data", data);
          // Actualizar el estado de manera inmutable
          setWorkData(prevData => ({
            ...prevData,
            image: data
          }));
          console.log("Esta es la nueva info de setWorkData en img", workdata.image);
        } catch (error) {
          console.log("Error en el componente UploadImage en cludinary", error);
        }
        setFileSelected(true);
      } else {
        setErrors({
          ...errors,
          image: "El tamaño de la imagen debe ser inferior a 3MB"
        });
      }
    }
  }




  // Previsualización de la imagen
  let previewImage = workdata.image ? (
    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <span>Imagen Seleccionada</span>
      <img
        src={workdata.image}
        alt="Previsualización"
        style={{ maxWidth: "200px", height: "200px", margin: "auto" }}
      />
    </span>
  ) : null;


  //Editar tarea 
  // useEffect(() => {
  //    dispatch2(getWork());
  // }, [dispatch])

  useEffect(() => {
console.log("Este es el params",params)
console.log("Todos los trabajos", TodosLostrabajos);
  }, [])


  //___________________________________________

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Nav />
        <div className="relative mt-5">
          <button
            onClick={() => navigate(`/user-panel/${id}/home`)}
            className="absolute right-32 px-4 py-1 bg-gray-700 rounded-md hover:cursor-pointer hover:bg-gray-600 transition-all"
          >
            {"<<"}
          </button>
        </div>

        <form onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col justify-center items-center bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-neutral-900 shadow-lg mb-5" >
          <h1 className="text-3xl text-center text-white mb-7 mt-6">
            ¡Postula tu trabajo!
          </h1>

          <div className="flex flex-col">
            <label htmlFor="title" className="pl-2 mb-1 text-lg">
              Titulo
            </label>
            <input
              type="text"
              name="title"
              value={textTitle}
              placeholder="Que trabajo necesitas"
              onChange={(event) => {
                const newValue = event.target.value;
                handleChange(event);
                setTextTitle(newValue)
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
            <select
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
              onChange={(event) => setSelectedPaymentOption(event.target.value)}
              value={selectedPaymentOption}
            >
              <option value="">Selecciona una opción de pago</option>
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
              <option value=""> Selecciona una categoría: </option>
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


            <br />

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

            <label htmlFor="image" className="pl-2 mb-1 text-lg">
              Imagen:
            </label>
            <input
              type="file"
              name="image"
              onChange={(event) => {
                handleChange(event);
                uploadImage(event.target.files)
              }}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
              ref={fileInputRef}
            />
            {fileSelected && <p>Archivo seleccionado</p>}


            {previewImage}
            {errors.image && (
              <span style={{ color: "red" }}>{errors.image}</span>
            )}

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