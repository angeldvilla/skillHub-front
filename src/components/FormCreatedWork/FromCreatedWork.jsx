import React from "react"
import { NavLink } from "react-router-dom"

//_______________________________________



const WorkPerTime = ["Hora", "Precio fijo"]

const Ubication = ["Col", "Arg", "Pe", "otro"]


const FormCreateWork = () => {




    return (
        <div>
            <h5>
                Publica tu trabajo
            </h5>
            <NavLink to='/home'>
                <button>Volver</button>
            </NavLink>

            <form>
                <div>
                    <label>Anuncio:  </label>
                    <input type="text" placeholder="Que trabajo necesitas" />
                </div>
                <div>
                    <label>Descripción:  </label>
                    <textarea name="" placeholder="Descripción del trabajo"></textarea>
                </div>
                <div>
                    <label>Precio:  </label>
                    <input type="Number" placeholder="Ingresa valor" />
                    <select >
                        {
                            WorkPerTime.map((work) =>
                                <option value={work}>
                                    {work}
                                </option>)
                        }
                    </select>
                </div>
                <div>
                    <label>Tipo de trabajo:  </label>
                    <input type="text" placeholder="Que tipo de trabjo necesitas" />
                </div>
                <div>
                    <label>Imagen  </label>
                    <input type="text" placeholder="Ingresa una foto sobre el trabajo o una imagen de representación" />
                </div>
                <div>
                    <label>Ubicación trajo</label>
                    <select>
                        {
                            Ubication.map((country) =>
                                <option
                                    value={country}
                                    key={country}>
                                    {country}
                                </option>)
                        }
                    </select>
                </div>
                <button type="submit">Postular oferta</button>
            </form>


        </div>
    )
}

export default FormCreateWork