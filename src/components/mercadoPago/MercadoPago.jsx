import React from 'react'
import { useSelector } from 'react-redux';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { postMercadoPago } from '../../toolkit/thunks';

import { useLocation } from 'react-router';



const MercadoPago = () => {
    const {search} = useLocation()
    
    console.log(search)

 
    const dispatch= useDispatch()

    const plan = [{
        id:1,
        plan:"PRUEBA",
        pago:0,
        beneficios:["5 publicaciones"]
    },
    {   id:2,
        plan:"PLATINO",
        pago:10,
        beneficios:["20 publicaciones","Otro beneficio"]
    },
    {   id:3,
        plan:"ORO",
        pago:15,
        beneficios:["publicaciones ilimitados0","Otro beneficio","Otro beneficio","Otro beneficio"]
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

    const {resultPago} = useSelector(state=>state.work)

    const id ="64cf388150a7167b36bb1bd4"

 

    const handleBuy = async(element)=>{
        const client = {
            plan:element.plan,
            price:element.pago,
            user:id
        }

            const {data} = await axios.post(`http://localhost:3002/payment/${id}`,client)
            //console.log(data.body.init_point)
            return window.location.href=data.preferenceUrl 
    }

       

    

  return (
    <div className='flex justify-end mt-64 gap-5 mr-32'>

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

  )
}

export default MercadoPago

