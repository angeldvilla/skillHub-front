import React, { useEffect, useState }from 'react'
import {useParams } from "react-router-dom";
import axios from 'axios';

const Next = () => {
    const { payment_id } = useParams();
    console.log(payment_id)

    const [datos,setDatos] =useState([])

    useEffect(() => {
        const busqieda=async()=>{
            const result = await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}`,{
            headers:{
              "Content-Type":"application/json",
              Authorization: "Bearer APP_USR-3794840370968199-080911-7b9fef42d07f6a0b234247b2ba3fe539-1445113711"
            }
          })
          

          const resultModificados={
            compra_Id:result.data.id,
            status: result.data.status,
            description:result.data.description,
            info:result.data.additional_info.items,
            id_user:result.data.metadata

          }
          console.log(resultModificados)

        setDatos(resultModificados)

        }
        busqieda()
        
      }, [payment_id]);




  return <div>{datos===null?"cargando":"ok"}</div>
}

export default Next