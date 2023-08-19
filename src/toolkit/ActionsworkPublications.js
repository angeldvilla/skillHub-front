import axios from "axios"
import { AddWorks, EditWorks } from "./sliceWorkPublication"
import { GetAllWorkTypes, DeleteWorks } from "./sliceWorkPublication"
import { json } from "react-router-dom"



export const postJobs = (workdata, id) => (dispatch) => {
    axios.post(`https://skillhub-back-production.up.railway.app/empleador/${id}`, workdata)  
        .then(res => dispatch(AddWorks(res.data.results)))
        .catch(error => console.log("Error con postWokrs", error))
}


export const getTypes = () => {
    return async function (dispatch) {
        try {
            let json = await axios.get("https://skillhub-back-production.up.railway.app/empleador/allType") 
            return dispatch(GetAllWorkTypes(json.data))
        } catch (error) {
            console.log("Error en getTypes", error);
        }
    }
}

export const deleteWokrs = (trabajoId) => {
    return async function (dispatch) {
        try {
            console.log("Intentando eliminar trabajo con ID:", trabajoId);
            const response = await axios.delete(`https://skillhub-back-production.up.railway.app/empleador/${trabajoId}`);
            console.log("Trabajo eliminado:", trabajoId);
            console.log("Respuesta del servidor:", response);
            dispatch(DeleteWorks(trabajoId));
        } catch (error) {
            console.log("Error en el DeleteWorks", error.response);
        }
    };
};


export const editPost = (workdata, id) => (dispatch) => {
    axios.put(`https://skillhub-back-production.up.railway.app/empleador/${id}`, workdata)
        .then(res => dispatch(EditWorks(res.data.results)))
        .catch(error => console.log("Error con EditWorks", error.response))
}



