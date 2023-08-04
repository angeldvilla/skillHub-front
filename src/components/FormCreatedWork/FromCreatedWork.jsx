import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"




import { AddWorks } from "../../Redux/Slice"


//_______________________________________

const WorkPerTime = ["Hora", "Precio fijo"]

const Ubication = ["Col", "Arg", "Pe", "otro"]


const FormCreateWork = () => {

    // const works = useSelector((state) => state.allPublicationsWork)
    //  const history = useHistory();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const params = useParams()

    const [workdata, setWorkData] = useState(
        {
            id: "",
            titulo: "",
            descripción: "",
            precio: "",
            tipoTrabajo: [],
            img: "",
            ubicación: [],
        }

    )

    function handleChange(event) {
        setWorkData({
            ...workdata,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !workdata.titulo ||
            !workdata.descripción ||
            !workdata.precio
        ) { alert("Faltan datos por completar") }
        else {
            dispatch(AddWorks(workdata))
            setWorkData({
                id: "",
                titulo: "",
                descripción: "",
                precio: "",
                tipoTrabajo: [],
                img: "",
                ubicación: [],
            })
            alert("Trabajo creado correctamente")
        }
        navigate('/WorkPublications')
    }

    // useEffect(() => {
    //     if (params.id) {
    //         setWorkData(works.find(works => works.id === params.id))
    //     }
    // }, [])

    return (
        <div>
            ___________________________________________
            <h5 style={{ color: "red" }}>
                Publica tu trabajo
            </h5>
            <NavLink to='/home'>
                <button>Volver</button>
            </NavLink>

            <form onSubmit={(event) => handleSubmit(event)}>

                <div>
                    <label htmlFor="id">Id:  </label>
                    <input type="number" name="id" placeholder="Proporciona un id"  onChange={(event) => handleChange(event)} />
                </div>
                <div>
                    <label htmlFor="titulo">Titulo:  </label>
                    <input type="text" name="titulo" placeholder="Que trabajo necesitas"  onChange={(event) => handleChange(event)} />
                </div>
                <div>
                    <label htmlFor="descripción">Descripción:  </label>
                    <textarea name="descripción" placeholder="Descripción del trabajo" onChange={(event) => handleChange(event)}></textarea>
                </div>
                <div>
                    <label htmlFor="precio">Precio:  </label>
                    <input type="Number" name="precio" placeholder="Ingresa valor" onChange={(event) => handleChange(event)} />
                    <select name="Precio">
                        {WorkPerTime.map((work, index) => (
                            <option key={index} value={work}>
                                {work}
                            </option>
                        ))}
                    </select>

                </div>
                <div>
                    <label htmlFor="tipoTrabajo">Tipo de trabajo:  </label>
                    <input type="text" name="tipoTrabajo" placeholder="Que tipo de trabjo necesitas" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="img">Imagen  </label>
                    <input type="text" name="img" placeholder="Ingresa una foto sobre el trabajo o una imagen de representación" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="ubicación">Ubicación trajo</label>
                    <select name="ubicación">
                        {
                            Ubication.map((country, index) =>
                                <option
                                    value={country}
                                    key={index}>
                                    {country}
                                </option>)
                        }
                    </select>
                </div>
                <button type="submit" >Postular oferta</button>
            </form>
            ___________________________________________
        </div>


    )

}


export default FormCreateWork

