import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWork } from "../../toolkit/thunks";
import { Link, NavLink, useParams } from "react-router-dom";
import { getUser } from "../../toolkit/Users/usersHandler";
import {  getDetailWork } from "../../toolkit/thunks";

import Nav from "../PanelUser/Nav";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import moneyBag from "../../assets/moneyBag.svg";
import ubication from "../../assets/ubication.svg";

export default function WorkPublication() {

    const { id } = useParams();
    const { userCredentials } = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getWork());
        if(userCredentials && userCredentials.uid === id){
        dispatch(getUser(id));
        }
    }, [dispatch, id, userCredentials]);

    const TodosLostrabajos = useSelector((state) => state.work.work);
    const TodosLosId = TodosLostrabajos.filter(trabajo => trabajo.idUser)

    const trabajosDelUsuario = TodosLostrabajos.filter(trabajo => trabajo.users === id);
    console.log("id del trabajo encontrado", trabajosDelUsuario);

    const totalWorks = trabajosDelUsuario.length;

    function handleClick () {
        dispatch(getWork())
    }

  

    return (
      <div>
        <div>
            <Nav />
            <h1  className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
             > {`Total trabajos publicados: ${totalWorks}`}</h1>

             <div className="flex items-center  gap-10  justify-center mb-28">
                

            {totalWorks === 0 ? (
                <div className="flex items-center   justify-center mb-96">
                    <h1  className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
                    > No tienes trabajos creados </h1>
                    <br />
                    <NavLink to={`/user-panel/${id}/createWork`}>
                        <button className="p-2 my-3 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
                        >
                            Crear trabajo</button>
                    </NavLink>
                </div>
            ) : (
                trabajosDelUsuario.map((trabajo, index) => (
                    <Card key={index} className="flex justify-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ">
                        <div className="flex flex-col justify-center">
                            <CardHeader floated={false} color="blue-gray">
                                <img src={trabajo.image[0]} alt="job-image" className="w-96 h-64" />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    {trabajo.ability[0]}
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    {trabajo.title.charAt(0).toUpperCase() + trabajo.title.slice(1)}
                                </Typography>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="mb-3 flex items-center gap-1">
                                        <Typography color="gray" className="text-center font-normal">
                                            <img src={ubication} alt="location" className="w-8" />
                                        </Typography>
                                        <Typography color="gray" className="text-center font-semibold">
                                            Ubicación:
                                        </Typography>
                                        <Typography color="gray" className="text-center font-normal">
                                            {trabajo.address.charAt(0).toUpperCase() + trabajo.address.slice(1)}
                                        </Typography>
                                    </div>
                                    <div className="mb-3 flex items-center gap-1">
                                        <Typography color="gray" className="text-center font-normal">
                                            <img src={moneyBag} alt="moneyBag" className="w-9" />
                                        </Typography>
                                        <Typography color="gray" className="text-center font-semibold">
                                            Precio:
                                        </Typography>
                                        <Typography color="gray" className="text-center">
                                            {trabajo.price}
                                        </Typography>
                                    </div>
                                    <div></div>
                                </div>
                            </CardBody>
                            <Link to={`/user-panel/${id}/Edit-Work/${trabajo._id}`}>

                                <Button
                                
                                    variant="filled"
                                    className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
                                    onClick={handleClick}
                                >
                                    Editar
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
                                </Link>
                                <button>Eliminar Trabajo</button>
                        </div>
                    </Card>
                ))
            )}
        </div>
        </div>
        <Footer />
        <ToastContainer />
        </div>
        
    );
}

