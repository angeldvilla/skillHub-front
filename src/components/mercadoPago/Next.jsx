import React, { useEffect, useState }from 'react'
import {useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
//require("dotenv").config();


const Next = () => {
  const access_token = import.meta.env.VITE_MERCADOPAGO_KEY

  const navigate = useNavigate()

  const { payment_id } = useParams();

  const [datos,setDatos] =useState([])
  const [id_client,setId_client] =useState("")


  useEffect(() => {
      const busqieda=async()=>{
          const result = await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}`,{
          headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${access_token}`
          }
        })
      
          
      const resultModificados={
        compra_Id:result.data.id,
        state: result.data.status,
        plan:result.data.additional_info.items[0].title,
        price:result.data.additional_info.items[0].unit_price,
        user:result.data.metadata.user_id
        }
        setDatos(resultModificados)
        setId_client(result.data.metadata.user_id) // id del cliente
        }
        busqieda()
      }, [payment_id]);

  const handleGuardarDatos=()=>{
    
    const saveData=async()=>{
      return await axios.post("http://localhost:3002/payment/save",datos)
    }
    saveData()
    navigate(`/user-panel/${id_client}/createWork`)
  }

  return (
  <div>
    TU pago se ralizó con exito
    <br/>
    {datos===null?<Loader/>:<button onClick={handleGuardarDatos}> next</button>}

  </div>
  )
}

export default Next