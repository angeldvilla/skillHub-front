import { allWork, startIsLoading } from "./slice";
import axios from "axios";


export const getWork =()=>{
    return async(dispatch)=>{
        
        dispatch(startIsLoading())

        const {data}= await axios('https://fakestoreapi.com/products')/* http://localhost:3001/empleador */
        dispatch(allWork({resultWork:data}))
    }
}
