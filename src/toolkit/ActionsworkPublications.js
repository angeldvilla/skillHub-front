import axios from 'axios'

import { AddWorks, EditWorks } from './sliceWorkPublication'
import { GetAllWorkTypes, DeleteWorks } from './sliceWorkPublication'

const URL = import.meta.env.VITE_URL

export const postJobs = (workdata, id) => (dispatch) => {
  axios
    .post(`${URL}/empleador/${id}`, workdata)
    .then((res) => dispatch(AddWorks(res.data.results)))
    .catch((error) => console.log('Error con postWokrs', error))
}

export const getTypes = () => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${URL}/empleador/allType`)

      return dispatch(GetAllWorkTypes(json.data))
    } catch (error) {
      console.log('Error en getTypes', error)
    }
  }
}

export const deleteWokrs = (trabajoId) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${URL}/empleador/${trabajoId}`)

      dispatch(DeleteWorks(trabajoId))
    } catch (error) {
      console.log('Error en el DeleteWorks', error.response)
    }
  }
}

export const editPost = (workdata, id) => (dispatch) => {
  axios
    .put(`${URL}/empleador/${id}`, workdata)
    .then((res) => dispatch(EditWorks(res.data.results)))
    .catch((error) => console.log('Error con EditWorks', error.response))
}
