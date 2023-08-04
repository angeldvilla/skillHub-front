import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { DeleteWorks } from "../../toolkit/sliceWorkPublication";


export default  function WorkPublication () {
    const dispatch = useDispatch();
    const trabajosPublicados = useSelector(state => state.formwork.allPublicationsWork);

    function handleClick(event) {
        event.preventDefault();
        const id = event.target.getAttribute("data-id");
        dispatch(DeleteWorks(id));
    }


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
                            <h6>{works.id}</h6>
                            <h2>{works.titulo}</h2>
                            <h3>{works.descripción}</h3>
                            <h3>{works.precio}</h3>
                            <br />
                        <NavLink to = {`/Edit-Work/${works.id}`}>
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