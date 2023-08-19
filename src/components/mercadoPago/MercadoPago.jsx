import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from "../../toolkit/Users/usersHandler";
import Nav from '../PanelUser/Nav';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import axios from 'axios';
import { async } from '@firebase/util';

const MercadoPago = () => {

    const navigate = useNavigate()

    const plan = [{
        id:1,
        plan:"BRONCE",
        pago:9.99,
        beneficios:["5 publicaciones"]
    },
    {   id:2,
        plan:"ORO",
        pago:19.99,
        beneficios:["15 publicaciones"]
    },
    {   id:3,
        plan:"PLATINO",
        pago:29.99,
        beneficios:["Publicaciones ilimitados"]
    }
]

    function CheckIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        );
      }

       //todo-->Necesitamos recibir el id del usuario

    const {userCredentials} = useSelector(state=>state.users);

    const dispatch = useDispatch();
    const { id } = useParams();
    
    //Verificamos si esta suscripto o no//!FALTA MEJORAR
    useEffect(()=>{
        const verificar = async()=>{
            const {data} = await axios(`http://localhost:3001/payment/${id}`)
            const suscriptionVerify= data.filter(element=>element.subscription===true)

            if(data.length>0 && suscriptionVerify.length===1) return navigate(`/user-panel/${id}/createWork`)
            else if (data.length>0 && suscriptionVerify.length>1) return window.alert("existe dos suscripciones, corregir")
        }
        verificar()

    },[])



    const handleBuy = async(element)=>{
            const client = {
                plan:element.plan,
                price:element.pago,
                user:id
            }
            const {data} = await axios.post(`http://localhost:3002/payment/${id}`,client)
            
            return window.location.href=data.preferenceUrl
            
        }
    useEffect(() => {
        if (userCredentials && userCredentials.uid === id) {
            dispatch(getUser(id));
        }
    }, [id, userCredentials]);

  return (
    <div className="relative justify-center items-center h-screen">
        <Nav/>
        <div className="flex justify-center mx-auto mt-20 gap-5 ">
        {plan.map((element,index)=>{
            return(
            <Card key={index} color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase"
                    >
                        {element.plan}
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className="mt-2 text-4xl">${element.pago}</span>
                        <span className="self-end text-4xl">/mes</span>
                    </Typography>
                </CardHeader>

                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        {element.beneficios.map((ele,index)=>{
                            return(
                                <li key={index} className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">{ele}</Typography>
                                </li>
                            )
                        })}        
                    </ul>
                </CardBody>
                
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                        onClick={()=>handleBuy(element)}
                    >
                        SUSCRIBIRSE
                    </Button>
                </CardFooter>
            </Card>

            )
        })}
        </div>
    </div>

  )
}

export default MercadoPago

