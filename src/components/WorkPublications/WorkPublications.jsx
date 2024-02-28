import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import { toast } from 'sonner'
import axios from 'axios'

import { getWork } from '../../toolkit/thunks'
import { getUser } from '../../toolkit/Users/usersHandler'
import { getDetailWork } from '../../toolkit/thunks'
import { deleteWokrs } from '../../toolkit/ActionsworkPublications'
import Nav from '../PanelUser/Nav'
import Footer from '../Footer/Footer'
import moneyBag from '../../assets/moneyBag.svg'
import ubication from '../../assets/ubication.svg'
import Loader from '../Loader/Loader'

export default function WorkPublication() {
  const URL = import.meta.env.VITE_URL

  const { id } = useParams()
  const { userCredentials } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const TodosLostrabajos = useSelector((state) => state.work.work)

  const [trabajosDelUsuario, settrabajosDelUsuario] = useState([])

  useEffect(() => {
    dispatch(getWork())
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id))
    }
    settrabajosDelUsuario(
      TodosLostrabajos.filter((trabajo) => trabajo.users === id)
    )
  }, [dispatch, id, userCredentials, TodosLostrabajos])

  let totalWorks = trabajosDelUsuario.length

  function handleClick() {
    dispatch(getWork())
  }
  function eliminar(trabajoId) {
    dispatch(deleteWokrs(trabajoId)) // Pasa solo el ID del trabajo
    toast.error('Trabajo borrado correctamente')
    setTimeout(() => {
      navigate(`/user-panel/${id}/WorkPublications`)
    }, 3000)
  }
  //TRABAJOS PENDIENTES (S/ SUSCRIPCIiON)
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios(`${URL}/user/`)

        setUsuario(data)
      } catch (error) {
        console.error('Error al obtener los usuarios:', error)
      }
    }

    getUser()
  }, [id])

  const filterUser = () => {
    if (
      usuario
        .filter((element) => element.uid === id)
        .map(({ pay }) => pay)[0] === undefined
    ) {
      return 'no hay suscripcion'
    } else if (
      usuario
        .filter((element) => element.uid === id)
        .map(({ pay }) => pay.subscription)[0] === false
    ) {
      return 'no hay suscripcion'
    } else {
      return usuario
        .filter((element) => element.uid === id)
        .map(({ pay }) => pay.plan)[0]
    }
  }

  const filterCantidad = usuario
    .filter((element) => element.uid === id)
    .map(({ cantidadPost }) => cantidadPost)[0]
  let trabajosPendientes = () => {
    if (filterUser() === 'Plan BRONCE') {
      return 2 - filterCantidad
    } else if (filterUser() === 'Plan ORO') {
      return 15 - filterCantidad
    } else if (filterUser() === 'Plan PLATINO') {
      return 'Trabajos ilimitados'
    } else {
      return 'No existe suscripción activa'
    }
  }
  const resulPendientes = trabajosPendientes()

  const findPlan = () => {
    if (filterUser() === 'Plan BRONCE' && filterCantidad === 2) {
      return 'cumplio la cantidad'
    } else if (filterUser() === 'Plan ORO' && filterCantidad === 15) {
      return 'cumplio la cantidad'
    } else if (resulPendientes === 'No existe suscripción activa') {
      return 'cumplio la cantidad'
    } else {
      return 'Verificar suscripcion'
    }
  }
  const result = findPlan()

  return usuario.length === 0 ? (
    <Loader />
  ) : (
    <div>
      <div>
        <div>
          <Nav />
          <Typography textGradient color="blue-gray" variant="small">
            {`Trabajos disponibles según plan actual: ${resulPendientes}`}
          </Typography>
        </div>
        <br />

        {result === 'cumplio la cantidad' ? (
          <div className="flex-grow mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-4 mb-20 bg-gray-200 rounded-lg shadow-md p-6">
              <h1 className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none">
                La suscripción actual no se encuentra activa o se ha alcanzado
                el límite máximo de publicaciones permitidas. Te invitamos que
                actualizar tu plan de suscripción{' '}
              </h1>
              <br />
              <NavLink to={`/user-panel/${id}/memberShip`}>
                <button
                  className="p-2 my-3 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
                  type="button"
                >
                  Actualizar suscripcion{' '}
                </button>
              </NavLink>
            </div>
          </div>
        ) : (
          '.'
        )}
        <div className="flex items-center  gap-10  justify-center mb-28">
          {totalWorks === 0 ? (
            <div className="flex-grow mx-auto flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mt-4 mb-20 bg-gray-200 rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-5 text-center">
                  No tienes trabajos creados
                </h1>
                <NavLink to={`/user-panel/${id}/createWork`}>
                  <button
                    className="p-2 my-3 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
                    type="button"
                  >
                    Crear trabajo
                  </button>
                </NavLink>
              </div>
            </div>
          ) : (
            trabajosDelUsuario.map((trabajo, index) => (
              <Card
                key={index}
                className="flex justify-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 "
              >
                <div className="flex flex-col justify-center">
                  <CardHeader color="blue-gray" floated={false}>
                    <img
                      alt="job"
                      className="w-96 h-64"
                      src={trabajo.image[0]}
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      className="mb-4 uppercase"
                      color="gray"
                      variant="h6"
                    >
                      {trabajo.ability[0]}
                    </Typography>
                    <Typography className="mb-2" color="blue-gray" variant="h4">
                      {trabajo.title.charAt(0).toUpperCase() +
                        trabajo.title.slice(1)}
                    </Typography>
                    <div className="flex items-center justify-between mt-6">
                      <div className="mb-3 flex items-center gap-1">
                        <Typography
                          className="text-center font-normal"
                          color="gray"
                        >
                          <img alt="location" className="w-8" src={ubication} />
                        </Typography>
                        <Typography
                          className="text-center font-semibold"
                          color="gray"
                        >
                          Ubicación:
                        </Typography>
                        <Typography
                          className="text-center font-normal"
                          color="gray"
                        >
                          {trabajo.address.charAt(0).toUpperCase() +
                            trabajo.address.slice(1)}
                        </Typography>
                      </div>
                      <div className="mb-3 flex items-center gap-1">
                        <Typography
                          className="text-center font-normal"
                          color="gray"
                        >
                          <img alt="moneyBag" className="w-9" src={moneyBag} />
                        </Typography>
                        <Typography
                          className="text-center font-semibold"
                          color="gray"
                        >
                          Precio:
                        </Typography>
                        <Typography className="text-center" color="gray">
                          {trabajo.price}
                        </Typography>
                      </div>
                      <div />
                    </div>
                  </CardBody>
                  <Link to={`/user-panel/${id}/Edit-Work/${trabajo._id}`}>
                    <Button
                      className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
                      variant="filled"
                      onClick={handleClick}
                    >
                      Editar
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </Link>
                  <Button
                    className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
                    variant="filled"
                    onClick={() => eliminar(trabajo._id)}
                  >
                    Eliminar
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}
