import { allWork, startIsLoading } from "./slice";
import axios from "axios";


export const getWork =()=>{
    return async(dispatch)=>{
        
        dispatch(startIsLoading())

        const {data}= await axios('http://localhost:3001/empleador') /*https://fakestoreapi.com/products*/
        dispatch(allWork({resultWork:data}))
    }
}