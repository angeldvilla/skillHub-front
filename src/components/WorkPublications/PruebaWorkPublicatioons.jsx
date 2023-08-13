import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { DeleteWorks } from "../../toolkit/sliceWorkPublication";
import { getWork } from "../../toolkit/thunks";


export default function WorkPublication() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWork())
        console.log(getWork);
    })
    // function handleClick(event) {
    //     event.preventDefault();
    //     const id = event.target.getAttribute("data-id");
    //     dispatch(DeleteWorks(id));
    // }



    const TotalWorks = trabajosPublicados.length;
    let message;
    if (TotalWorks === 0) {
        message = (
            <div>
                <h6>Actualmente no tienes trabajos postulados</h6>
                <NavLink to="/CreateWork">
                    <button>Crear trabajo</button>
                </NavLink>
            </div>
        );
    } else {
        message = `Total trabajos creados: ${TotalWorks}`;
    }
    return (
        <div>
            <h5>
                {message}
            </h5>
            <br />
            {
                trabajosPublicados.map((works, index) => (
                    <div key={index}>
                        <div>
                            <h2>{works.title}</h2>
                            <h3>{works.description}</h3>
                            <h3>{works.price}</h3>

                            <br />
                            <NavLink to={`/Edit-Work/${works.id}`}>
                                <button type="edit"> Editar Trabajo </button>
                            </NavLink>

                            <button type="submit" onClick={handleClick} data-id={works.id}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

// <form>
//                 <label htmlFor="">Selecciona el título del trabajo</label>
//                 {/* Corregir el mapeo para retornar elementos JSX */}
//                 <select> {/* Agrego el elemento de selección */}
//                     {trabajosDelUsuario.map((cb, index) => (
//                         <option value={cb.title} key={index}>
//                             {cb.title}
//                         </option>
//                     ))}
//                 </select>

//             </form>








    // let SinTrabajos;

// if (trabajosDelUsuario === null) {
//     SinTrabajos = (
//         <div>
//             <h6> Actualmente no tienes trabjaos Postulados</h6>
//             <NavLink to="/CreateWork">
//                 <button>Crear trabajo</button>
//             </NavLink>
//         </div>
//     )
// } else {
//     SinTrabajos = `Total trabajos creados: ${trabajosDelUsuario.length}`
// }