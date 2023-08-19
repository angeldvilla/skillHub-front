import axios from "axios"
import { AddWorks } from "./sliceWorkPublication"
import { GetAllWorkTypes } from "./sliceWorkPublication"



export const postJobs = (workdata, id) => (dispatch) => {
    axios.post(`http://localhost:3002/empleador/${id}`, workdata)  //`https://skillhub-back-production.up.railway.app/empleador/${id}`
        .then(res => dispatch(AddWorks(res.data.results)))
        .catch(error => console.log("Error con postWokrs", error))
}


export const getTypes = () => {
    return async function (dispatch) {
        try {
            let json = await axios.get("http://localhost:3002/empleador/allType") //"https://skillhub-back-production.up.railway.app/empleador/allType"
            return dispatch(GetAllWorkTypes(json.data))
        } catch (error) {
            console.log("Error en getTypes", error);
        }
    }
}

// export const deleteWokrs = (trabajo) => {
   
//     return async function (dispatch){
//         try {
//             await axios.delete("http://localista:3002/empleador/${idusuario}")
//         } catch (error) {
            
//         }
//     }
// }