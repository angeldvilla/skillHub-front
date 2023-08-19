import React, { isValidElement } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect , useRef} from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import validation from "../Validations/Validations";
import { postJobs, getTypes, editPost } from "../../toolkit/ActionsworkPublications";
import {  getDetailWork } from "../../toolkit/thunks";
import { useLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { getUser } from "../../toolkit/Users/usersHandler";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Components
import Footer from "../Footer/Footer";
import Nav from "../PanelUser/Nav";
import { setId } from "@material-tailwind/react/components/Tabs/TabsContext";
import { async } from "@firebase/util";

//_______________________________________

const WorkPerTime = ["/Hora", "/Fijo"];
const maxSiseMB = 3 * 1024 * 1024; // Tamaño de 3mb para las fotos


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
  // const trabajosDelUsuario = TodosLostrabajos.filter(trabajo => trabajo.users === id);
  const { userCredentials } = useSelector(state => state.users);
  const trabajoFiltrado = TodosLostrabajos.find(trabajo => trabajo._id === id); // Usa find en lugar de filter para obtener un solo objeto
  const {detail} = useSelector(state => state.work)

  


  const [workdata, setWorkData] = useState({
    title: "",
    description: "",
    address: "",
    ability: [],
    image: "",
    price: "",
  });

  const [workdata2, setWorkData2] = useState({
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
    if(userCredentials && userCredentials.uid === id){
      dispatch(getDetailWork(id))
      dispatch(getUser(id));

    }
  }, [dispatch, id, userCredentials])

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

    let updatedWorkData;

    if (trabajoFiltrado) {
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
         updatedWorkData = {
          ...workdata,
          price: finalPrice,
          
        };
  
        console.log("Datos del formulario Azctualizado", updatedWorkData);
        dispatch(editPost(updatedWorkData, id));
        handleReset();
        toast.success("Trabajo Editado correctamente");
  
        setTimeout(() => {
          navigate(`/user-panel/${id}/home`);
        }, 3000);
      }
    } else {
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
         updatedWorkData = {
          ...workdata,
          price: finalPrice,
          
        };
  
        console.log("Datos del formulario:", updatedWorkData);
        dispatch(postJobs(updatedWorkData, id));
        handleReset();
        toast.success("Trabajo creado correctamente");
  
        setTimeout(() => {
          navigate(`/user-panel/${id}/WorkPublications`);
        }, 3000);
      }
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



  
//!HASTA ACÁ
  console.log("Todos los trabajos", TodosLostrabajos);
 
  useEffect(() => {
    if (trabajoFiltrado) {
      setWorkData({
        title: trabajoFiltrado.title,
        description: trabajoFiltrado.description,
        address: trabajoFiltrado.address,
        ability: trabajoFiltrado.ability,
        image: trabajoFiltrado.image,
        price: trabajoFiltrado.price,
      });
      console.log("Este es el trabao Filtrado", trabajoFiltrado);
    }
  }, [trabajoFiltrado, id]);

  console.log("Esta es la imagen del trabajo Filtrado cuando sale del componente", trabajoFiltrado);




console.log("Este es el DETAIL", detail);


// Valifacion susbscripción

const [pay, setPay] = useState([]);
  useEffect(() => {
    const getPayment = async () => {
      try {
        const { data } = await axios("http://localhost:3002/payment/");
        setPay(data);
      } catch (error) {
        console.error("Error al obtener los pagos:", error);
      }
    };
    getPayment();
  }, [id]);
  const filterSuscripcion = pay
  .filter(({ subscription }) => subscription === true)
  //---- trae info del usuario ---
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);






  //! RELACION DE MODELO USUARIOS CON PAYMENT

  const [allUsersPayment,setAllUseersPayment] = useState([])
  useEffect(() => {
    const usersPaymentResult = async()=>{ //! la base de datos esta modificado
      const resultPaymentUser = await axios(`http://localhost:3001/payment/${id}`)
      setAllUseersPayment(resultPaymentUser.data.filter(element=>element.subscription===true))
    }
    usersPaymentResult()

    if(allUsersPayment.length!==0){
      
      const dataPay= { pay:allUsersPayment[0]._id}
      
      const modifDate=async()=>{
        const {data} = await axios.put(`http://localhost:3001/user/${id}`,dataPay)
      }
      modifDate()
    }
  
  }, [id,allUsersPayment.length]);



  return (
    <div>
      {/* {filterSuscripcion.length > 0 ?  */}
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
              value={trabajoFiltrado ? workdata.title : textTitle}
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
              value={trabajoFiltrado ? workdata.description : textDesciption}
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
              value={trabajoFiltrado ? workdata.price :priceValue}
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
              value={trabajoFiltrado ? workdata.address :directionValue}
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

      {/* : (
        <div>
          <h1>NO hay suscripcion</h1>
        </div> */}

      : (
    <div className="flex justify-center items-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "70vh", backgroundColor: "white", color: "black"}}>
          <p className="title" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", width: "50%", textAlign: "center"}}>
          {user.firstName}, su suscripción ha caducado y ya no tiene acceso a nuestros servicios. Por favor, renueve su plan para continuar disfrutando de nuestros beneficios.
      </p>
      <p className="title" style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px", width: "50%", textAlign: "center"}}>¡Esperamos contar con usted nuevamente!</p>


        <div className="flex justify-between w-1/2">
      <Link to={`http://localhost:5173/user-panel/${user?.uid}/home`}>
      <Button justifyContent= 'flex-start' color="blue">Ir al inicio</Button>
      </Link>
      <Link to={`http://localhost:5173/user-panel/${user?.uid}/memberShip`}>
        <Button color="blue">Renovar suscripción</Button>
        
      </Link>
        </div>

        </div>
      )

      <Footer />
      <ToastContainer />
    </div>
  );
}