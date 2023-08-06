import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddWorks } from "../../toolkit/sliceWorkPublication";
import { useParams } from "react-router-dom";

import validation from "../Validations/Validations";
import { postJobs } from "../../toolkit/ActionsworkPublications";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//_______________________________________

const WorkPerTime = ["Hora", "Precio fijo"];

// const Ubication = ["Col", "Arg", "Pe", "otro"];

const workTypes = [
  { name: "Limpieza", id: "1" },
  { name: "Profesor", id: "2" },
  { name: "Servicios varios", id: "3" },
  { name: "Front Developer", id: "4" },
  { name: "BackDeveloper", id: "5" },
];

export default function FormCreateWork() {
  // const works = useSelector((state) => state.formwork.allPublicationsWork)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const params = useParams()

  const [workdata, setWorkData] = useState({
    title: "",
    description: "",
    address: "",
    ability: ["Limpieza"],
    image: "",
    price: Infinity,
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    address: "",
    ability: [],
    image: "",
    price: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    const parsedValue = name === "price" ? parseInt(value, 10) : value;

    setWorkData({
      ...workdata,
      [name]: parsedValue,
    });

    setErrors(
      validation({
        ...workdata,
        [name]: parsedValue,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !workdata.title ||
      !workdata.description ||
      !workdata.address ||
      !workdata.ability.length ||
      !workdata.image ||
      !workdata.price
    ) {
      toast.error("Complete all fields");
    } else {
      console.log("Datos del formulario:", workdata);

      dispatch(postJobs(workdata));
      handleReset();
      toast.success("Job successfully posted");

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }

  const handleReset = () => {
    setWorkData({
      title: "",
      description: "",
      ability: [],
      image: "",
      address: "",
      price: Infinity,
    });
  };

  // useEffect(() => {
  //    console.log(works);
  // }, [])

  const [selectWorkType, setSelectWorkType] = useState("");

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center my-8">
        <div className="relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute right-32 px-4 py-1 bg-gray-700 rounded-md hover:cursor-pointer hover:bg-gray-600 transition-all"
          >
            {"<<"}
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-neutral-900 shadow-lg"
        >
          <h1 className="text-3xl text-center text-white mb-7 mt-4">
            Post a job
          </h1>

          <div className="flex flex-col">
            {/* Title */}
            <label htmlFor="title" className="pl-2 mb-1 text-lg">
              Title
            </label>
            <input
              type="text"
              placeholder="Seeking for a gardener"
              name="title"
              value={workdata.title}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}

            {/* Ability */}
            <label htmlFor="ability" className="pl-2 mb-1 text-lg">
              Ability
            </label>
            <select
              value={selectWorkType}
              onChange={setSelectWorkType}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            >
              {workTypes.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.ability && <p className="text-red-500">{errors.ability}</p>}

            {/* Price */}
            <label htmlFor="price" className="pl-2 mb-1 text-lg">
              Price
            </label>
            <input
              type="number"
              placeholder="$20"
              name="price"
              value={workdata.price}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            <label htmlFor="payment" className="pl-2 mb-1 text-lg">
              Payment
            </label>
            <select
              name="Precio"
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            >
              {WorkPerTime.map((work, index) => (
                <option key={index} value={work}>
                  {work}
                </option>
              ))}
            </select>
            {errors.price && <p className="text-red-500">{errors.price}</p>}

            {/* Address */}
            <label htmlFor="address" className="pl-2 mb-1 text-lg">
              Address
            </label>
            <input
              type="text"
              placeholder="Colombia, Quindio, Finca Armenia"
              name="address"
              value={workdata.address}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}

            {/* Image */}
            <label htmlFor="image" className="pl-2 mb-1 text-lg">
              Image
            </label>
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={workdata.image}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}

            {/* Description */}
            <label htmlFor="description" className="pl-2 mb-1 text-lg">
              Description
            </label>
            <textarea
              type="text"
              placeholder="I am in need of an experienced gardener with a strong work ethic to maintain and enhance the garden of a private residence."
              name="description"
              value={workdata.description}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-4 mb-2 rounded-md w-80 text-neutral-100 outline-none"
            />
          </div>

          <button className="p-2 mt-8 bg-blue-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-700 hover:shadow-md transition">
            Post job
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 my-3 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
          >
            Reset form
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
