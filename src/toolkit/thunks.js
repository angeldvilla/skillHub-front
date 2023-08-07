import { allWork, detailWork, startIsLoading } from "./slice";
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

export const getDetailWork = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/empleador?_id=${id}`);
      dispatch(detailWork(data));
    } catch (error) {
      throw Error("Error al obtener el detalle del trabajo", error);
    }
  };
};