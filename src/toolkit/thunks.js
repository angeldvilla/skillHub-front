  import { allWork, getWorkName, startIsLoading, detailWork, getUsers } from "./slice";
  import axios from "axios";

  const URL_API = "http://localhost:3001/empleador";


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

              const {data}= await axios(`http://localhost:3002/empleador/job?title=${title}`) 
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

        const { data } = await axios(`http://localhost:3001/empleador?_id=${id}`);
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

  //!TRAER TODOS LOS USUARIOS
  export const getAllUsers = (id) => {
    return async (dispatch) => {
      try {
        dispatch(startIsLoading());

        const { data } = await axios(`http://localhost:3002/user`);
        dispatch(getUsers(data));
        
    
      } catch (error) {
        throw Error("Error al obtener el detalle del trabajo", error);
      }
    }
  };

    //!PAGAR A MERCADO PAGO

    export const postMercadoPago = (id) => {
      return async (dispatch) => {
        try {
          dispatch(startIsLoading());
        const {data} = await axios.post(`http://localhost:3002/payment/${id}`,client)
          
          dispatch(getUsers(data));
          
      
        } catch (error) {
          throw Error("Error al obtener el detalle del trabajo", error);
        }
      }
    };
