import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getWork } from "../../toolkit/thunks";
import './home.css'
import Nav from "../nav/Nav";
import Filters from "../filters/Filters";

export default function Home() {
  const dispatch = useDispatch()
  const {filterWork,work,isLoading}=useSelector(state=>state.work)

   useEffect(()=>{
     dispatch(getWork())
   },[])

   console.log(work)
   console.log(isLoading)


    return (
        < div className="conteiner">
            <h1>ESTOY EN EL HOME</h1>
            <Nav/>
            <Filters/>
            <span>Loading:{isLoading ? 'True' : 'False'}</span>
            <Card work={work}/>
        </div>
      );
}

