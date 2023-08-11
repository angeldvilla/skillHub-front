import axios from "axios"
import { AddWorks } from "./sliceWorkPublication"
import { GetAllWorkTypes } from "./sliceWorkPublication"

const idUsuario = "64d3efe260fdca3d74ec9808"

export const postJobs = (workdata) => (dispatch) => {
    axios.post(`http://localhost:3001/empleador/${idUsuario}`, workdata)
        .then(res => dispatch(AddWorks(res.data.results)))
        .catch(error => console.log("Error con postWokrs", error))
}


export const getTypes = () => {
    return async function (dispatch) {
        try {
            let json = await axios.get("http://localhost:3001/empleador/allType")
            return dispatch(GetAllWorkTypes(json.data))
        } catch (error) {
            console.log("Error en getTypes", error);
        }
    }
}