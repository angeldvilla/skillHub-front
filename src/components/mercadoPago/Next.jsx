import React, { useEffect, useState }from 'react'
import {useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import logoSkillHub from "../../assets/skillHub.jpg";
import { Button } from "@material-tailwind/react";
import emailjs from '@emailjs/browser';


const Next = () => {
  // Token
  const access_token = import.meta.env.VITE_MERCADOPAGO_KEY

  const navigate = useNavigate()

  const { payment_id } = useParams();
  
  const [datos,setDatos] =useState([])
  const [resultUser,setResultUser] =useState({})
  const [id_client,setId_client] =useState("")

 
  useEffect(() => {

    const busqueda=async()=>{

      // Traemos la consulta de venta de mercado pago
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

      //Traemos el usuario de la BD
        const {data} = await axios.get(`http://localhost:3002/user/${id_client}`)
        setResultUser(data)
        }

        busqueda() 
        }, [payment_id,id_client]);
        
    const handleGuardarDatos=()=>{

      //Cargar los datos  a la BD

      const saveData=async()=>{
        return await axios.post("http://localhost:3002/payment/save",datos)
      }
    saveData()

    navigate(`/user-panel/${id_client}/createWork`)
  
    //Enviar el mensaje de confirmación de pago al usuario

    const dataUser={
      user:resultUser.firstName,
      plan:datos.plan,
      price:datos.price,
      email: resultUser.email
    }

    emailjs
    .send("service_lfymgxc", "template_yjh5uy5", dataUser,"RY2Fv-D-bvjhDwd_H")
    .then((result) => {console.log(result.text)},
      (error) => console.log(error.text));
    
    }

  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "black", color: "lightblue" }}>
      <img src={logoSkillHub} alt="Logo de la empresa" style={{ width: "300px", marginBottom: "20px" }} />
      <p className="title" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", width: "50%", textAlign: "center"}}>
        ¡Listo para llevar tus propuestas al mundo!
      </p>
      <p className="description" style={{ fontSize: "18px", marginBottom: "20px", width: "50%", textAlign: "center"}}>
        En SkillHub, nos complace brindarte una experiencia excepcional. Contáctanos ante cualquier consulta o inquietud.
      </p>
      {datos === null ? (
        <Loader />
      ) : (
        <div>
         <Button className = 'bg-white' variant="outlined" color='black' onClick={handleGuardarDatos}>CONTINUAR</Button>
         </div>
      )}
    </div>
  );
}

export default Next