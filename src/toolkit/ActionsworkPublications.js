import axios from  "axios"
import { AddWorks } from "./sliceWorkPublication"

const idUsuario =  "64cee976a45fd417790185b7"

export const postJobs  = (workdata) => (dispatch) =>{
    axios.post(`http://localhost:3001/empleador/${idUsuario}`, workdata)
    .then(res => dispatch(AddWorks(res.data.results)))
    .catch(error => console.log("Error con postWokrs",error))
}

