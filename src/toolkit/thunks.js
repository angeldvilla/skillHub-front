import { allWork, getWorkName, startIsLoading } from "./slice";
import axios from "axios";


export const getWork =()=>{
    return async(dispatch)=>{
        try {
            dispatch(startIsLoading())

            const {data}= await axios('http://localhost:3001/empleador') /*https://fakestoreapi.com/products*/
            dispatch(allWork({resultWork:data}))
            
        } catch (error) {
            console.log(error)
            
        }
        
        
    }
}

export const getWorkForName =(title)=>{
    return async(dispatch)=>{
        
        dispatch(startIsLoading())

        const {data}= await axios(`http://localhost:3001/empleador/job?title=${title}`) /*https://fakestoreapi.com/products*/
        dispatch(getWorkName(data))
    }
}