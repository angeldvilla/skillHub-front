/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import moneyBag from "../../assets/moneyBag.svg";
import ubication from "../../assets/ubication.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../toolkit/Users/usersHandler"

import { deleteWokrs } from "../../toolkit/ActionsworkPublications";
import { toast } from "react-toastify";
import React from "react";


const CardItem = ({ _id, title, image, address, price, ability }) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { userCredentials } = useSelector((state) => state.users);


 const [isAdmin, setIsAdmin] = useState(false)
 useEffect(()=>{
  if (id === "Zqaz0B6durdS841Bd7e3qJdbjEU2")
  setIsAdmin(true)
 }, [])
  



  useEffect(() => {
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id));
    }
  }, [dispatch, id, userCredentials]);




  function handleClick (trabajoId) {
    event.preventDefault();
    const userConfirmation = window.confirm("¿Vas a eliminar este trabajo?");
    if (userConfirmation) {
      dispatch(deleteWokrs(trabajoId))
      console.log("ID del trabajo a eliminar:", trabajoId);
      toast("Trabajo eliminado correctamente")
    }
  }





  


  return (
    
    <React.Fragment>
    {isAdmin  ? (
    <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-black transition-all duration-300 ">
    <div className="flex flex-col justify-center">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="job-image" className="w-96 h-64" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {ability[0]}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Typography>
        <div className="flex items-center gap-4 my-4">
          {ability.map((ability, index) => (
            <Typography key={index} variant="h6" color="gray" className="">
              {" > "} {ability}
            </Typography>
          ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="mb-3 flex items-center gap-1">
            <Typography color="gray" className="text-center font-normal">
              <img src={ubication} alt="location" className="w-8" />
            </Typography>
            <Typography color="gray" className="text-center font-semibold">
              Ubicación:
            </Typography>
            <Typography color="gray" className="text-center font-normal">
              {address.charAt(0).toUpperCase() + address.slice(1)}
            </Typography>
          </div>
          <div className="mb-3 flex items-center gap-1">
            <Typography color="gray" className="text-center font-normal">
              <img src={moneyBag} alt="moneyBag" className="w-9" />
            </Typography>
            <Typography color="gray" className="text-center font-semibold">
              Precio:
            </Typography>
            <Typography color="gray" className="text-center ">
              {price}
            </Typography>
          
          </div>
          <div></div>
        </div>
      </CardBody>
      <a
        href={
          userCredentials && userCredentials.uid === id
            ? `/user-panel/${id}/jobDetail/${_id}`
            : `/jobDetail/${_id}`
        }
      >
        <Button
          variant="filled"
          className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
        >
          Ver detalles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
         <Button
          onClick={()=> handleClick(_id)} 
          variant="filled"
          className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
        >
          Eliminar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      
      </a>
    </div>
  </Card>
  
    ):(
         
    <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ">
    <div className="flex flex-col justify-center">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="job-image" className="w-96 h-64" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {ability[0]}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Typography>
        <div className="flex items-center gap-4 my-4">
          {ability.map((ability, index) => (
            <Typography key={index} variant="h6" color="gray" className="">
              {" > "} {ability}
            </Typography>
          ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="mb-3 flex items-center gap-1">
            <Typography color="gray" className="text-center font-normal">
              <img src={ubication} alt="location" className="w-8" />
            </Typography>
            <Typography color="gray" className="text-center font-semibold">
              Ubicación:
            </Typography>
            <Typography color="gray" className="text-center font-normal">
              {address.charAt(0).toUpperCase() + address.slice(1)}
            </Typography>
          </div>
          <div className="mb-3 flex items-center gap-1">
            <Typography color="gray" className="text-center font-normal">
              <img src={moneyBag} alt="moneyBag" className="w-9" />
            </Typography>
            <Typography color="gray" className="text-center font-semibold">
              Precio:
            </Typography>
            <Typography color="gray" className="text-center ">
              {price}
            </Typography>
          
          </div>
          <div></div>
        </div>
      </CardBody>
      <a
        href={
          userCredentials && userCredentials.uid === id
            ? `/user-panel/${id}/jobDetail/${_id}`
            : `/jobDetail/${_id}`
        }
      >
        <Button
          variant="filled"
          className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
        >
          Conocer más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </a>
    </div>
  </Card>
  
    )}
 </React.Fragment>
  );
};

export default CardItem;