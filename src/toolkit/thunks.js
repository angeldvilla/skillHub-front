  import { createAsyncThunk } from "@reduxjs/toolkit";
import { allWork, getWorkName, startIsLoading, detailWork, postPagos,  } from "./slice";
  import axios from "axios";

  const URL_API = "https://skillhub-back-production.up.railway.app/empleador"; 
  

  export const getWork = () => {
    return async (dispatch) => {
      dispatch(startIsLoading());

      const { data } = await axios(
        `${URL_API}`
      ); /*https://fakestoreapi.com/products*/
      dispatch(allWork({ resultWork: data }));
    };
  };

  export const getWorkForName =(title)=>{
      return async(dispatch)=>{
          try {
              dispatch(startIsLoading())

              const {data}= await axios(`https://skillhub-back-production.up.railway.app/empleador/job?title=${title}`) 
              dispatch(getWorkName(data))
              
          } catch (error) {
              throw error.message 
          } 
      }
  };

  export const getDetailWork = (id) => {
    return async (dispatch) => {
      try {
        dispatch(startIsLoading());

        const { data } = await axios(`https://skillhub-back-production.up.railway.app/empleador?_id=${id}`); 
        dispatch(detailWork(data));
        
    
      } catch (error) {
        throw Error("Error al obtener el detalle del trabajo", error);
      }
    }
  };


  export const detailReset = () => {
    return {
      type: "work/resetDetail"
    }
  }

export const reviews =  createAsyncThunk ("score/sendScore", async({score, message}) => {
  const response = {
    score: score,
    message: message
  };
    try {
      const { data } = await axios.post('https://skillhub-back-production.up.railway.app/reviews', response) 
      return data
      
    } catch (error) {
      console.log("error")
    
  }
})

      
export const putUsers = createAsyncThunk ("users/putUsers", async(userPut) => {


  try {
    console.log(userPut)
    const { data } = await axios.put('https://skillhub-back-production.up.railway.app/users/status', userPut)
    return data
  } catch (error) {
    console.log("error:", error.message)
  }
})

      