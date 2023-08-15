import axios from "axios"
import { AddWorks } from "./sliceWorkPublication"
import { GetAllWorkTypes } from "./sliceWorkPublication"



export const postJobs = (workdata, id) => (dispatch) => {
    axios.post(`http://localhost:3001/empleador/${id}`, workdata)
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