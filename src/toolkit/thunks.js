import { useSelector } from "react-redux";
import { allWork, startIsLoading } from "./slice";
import axios from "axios";


export const getWork =()=>{
    return async(dispatch)=>{
        dispatch(startIsLoading())

        const {data}= await axios('https://fakestoreapi.com/products')
        dispatch(allWork({resultWork:data}))
    }
}
