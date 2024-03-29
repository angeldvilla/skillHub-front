import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_URL

export const getWork = () => {
  return async (dispatch) => {
    dispatch(startIsLoading())

    const { data } = await axios(`${URL}/empleador`)

    dispatch(allWork({ resultWork: data }))
  }
}

export const getWorkForName = (title) => {
  return async (dispatch) => {
    try {
      dispatch(startIsLoading())

      const { data } = await axios(`${URL}/empleador/job?title=${title}`)

      dispatch(getWorkName(data))
    } catch (error) {
      throw error.message
    }
  }
}

export const getDetailWork = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startIsLoading())

      const { data } = await axios(`${URL}/empleador?_id=${id}`)

      dispatch(detailWork(data))
    } catch (error) {
      throw Error('Error al obtener el detalle del trabajo', error)
    }
  }
}

export const detailReset = () => {
  return {
    type: 'work/resetDetail'
  }
}

export const reviews = createAsyncThunk(
  'score/sendScore',
  async ({ score, message }) => {
    const response = {
      score: score,
      message: message
    }

    try {
      const { data } = await axios.post(`${URL}/reviews`, response)

      return data
    } catch (error) {
      console.log('error')
    }
  }
)

export const putUsers = createAsyncThunk('users/putUsers', async (userPut) => {
  try {
    const { data } = await axios.put(`${URL}/users/status`, userPut)

    return data
  } catch (error) {
    console.log('error:', error.message)
  }
})
