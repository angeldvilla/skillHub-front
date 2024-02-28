import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { logoutUserSesion } from './usersSlice'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const { data } = await axios.get(
      'https://skillhub-back-glsd.onrender.com/user'
    )

    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getUser = createAsyncThunk('users/getUser', async (id) => {
  try {
    const { data } = await axios.get(
      `https://skillhub-back-glsd.onrender.com/user/${id}`
    )

    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getUsersByName = createAsyncThunk(
  'users/getUsersByName',
  async (name) => {
    try {
      const { data } = await axios.get(
        `https://skillhub-back-glsd.onrender.com/user?name=${name}`
      )

      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const postUser = createAsyncThunk('users/postUser', async (userData) => {
  try {
    const { data } = await axios.post(
      'https://skillhub-back-glsd.onrender.com/user/register',
      userData
    )

    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const putUser = (id, userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `https://skillhub-back-glsd.onrender.com/user/${id}`,
        userData
      )

      dispatch(putUserInfo(data))
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    localStorage.removeItem('userCredentials')
    dispatch(logoutUserSesion())
  }
}

export const Payment = createAsyncThunk('users/Payment', async () => {
  try {
    const { data } = await axios.get(
      'https://skillhub-back-glsd.onrender.com/payment'
    )

    return data
  } catch (error) {
    throw new Error(error)
  }
})
