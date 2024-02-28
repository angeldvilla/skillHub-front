/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

import moneyBag from '../../assets/moneyBag.svg'
import ubication from '../../assets/ubication.svg'
import { getUser } from '../../toolkit/Users/usersHandler'
import { deleteWokrs } from '../../toolkit/ActionsworkPublications'

function CardItem({ _id, title, image, address, price, ability }) {
  const { id } = useParams()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const location = useLocation()

  const { userCredentials } = useSelector((state) => state.users)
  const { isLoading } = useSelector((state) => state.work)

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (id === 'Zqaz0B6durdS841Bd7e3qJdbjEU2') setIsAdmin(true)
  }, [id])

  useEffect(() => {
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id))
    }
  }, [dispatch, id, userCredentials])

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const handleOnClick = () => {
    setShowDeleteConfirmation(true)
  }

  function handleDeleteService(trabajoId) {
    dispatch(deleteWokrs(trabajoId))
    console.log('ID del trabajo a eliminar:', trabajoId)

    toast.success('Trabajo eliminado con exito!')
    setShowDeleteConfirmation(false)
    setTimeout(() => {
      navigate(location.pathname)
    })
  }

  if (isAdmin) {
    return (
      <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-black transition-all duration-300 ">
        <div className="flex flex-col justify-center">
          <CardHeader color="blue-gray" floated={false}>
            <img alt="job-image" className="w-96 h-64" src={image} />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <Typography className="mb-4 uppercase" color="gray" variant="h6">
              {ability[0]}
            </Typography>
            <Typography className="mb-2" color="blue-gray" variant="h4">
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </Typography>
            <div className="flex items-center gap-4 my-4">
              {ability.map((ability, index) => (
                <Typography key={index} className="" color="gray" variant="h6">
                  {' > '} {ability}
                </Typography>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="mb-3 flex items-center gap-1">
                <Typography className="text-center font-normal" color="gray">
                  <img alt="location" className="w-8" src={ubication} />
                </Typography>
                <Typography className="text-center font-semibold" color="gray">
                  Ubicación:
                </Typography>
                <Typography className="text-center font-normal" color="gray">
                  {address.charAt(0).toUpperCase() + address.slice(1)}
                </Typography>
              </div>
              <div className="mb-3 flex items-center gap-1">
                <Typography className="text-center font-normal" color="gray">
                  <img alt="moneyBag" className="w-9" src={moneyBag} />
                </Typography>
                <Typography className="text-center font-semibold" color="gray">
                  Precio:
                </Typography>
                <Typography className="text-center" color="gray">
                  {price}
                </Typography>
              </div>
            </div>
          </CardBody>
          <a
            href={
              userCredentials && userCredentials.uid === id
                ? `/user-panel/${id}/dashboard/details-services/${_id}`
                : `/jobDetail/${_id}`
            }
          >
            <Button
              className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
              variant="filled"
            >
              Ver detalles
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
          </a>
          <div>
            <Button
              className="flex items-center gap-2 text-red-600 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-red-200"
              variant="filled"
              onClick={handleOnClick}
            >
              Eliminar
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="red"
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
          {showDeleteConfirmation ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Confirmar Eliminación
                </h3>
                <p className="text-md text-gray-600">
                  ¿Estás seguro de borrar este servicio? Esta acción es
                  irreversible.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button
                    color="gray"
                    size="sm"
                    onClick={() => setShowDeleteConfirmation(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="ml-2"
                    color="red"
                    size="sm"
                    onClick={() => handleDeleteService(_id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Card>
    )
  }

  return (
    <div>
      <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ">
        <div className="flex flex-col justify-center">
          {/* Image */}
          <CardHeader color="blue-gray" floated={false}>
            {isLoading ? (
              <div
                className="flex items-center justify-center w-96 h-64 rounded-md bg-gray-400 dark:bg-gray-700 animate-pulse"
                role="status"
              >
                <svg
                  aria-hidden="true"
                  className="w-16 h-16 text-gray-200 dark:text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            ) : (
              <div>
                <img alt="job-image" className="w-96 h-64" src={image} />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </div>
            )}
          </CardHeader>

          {/* Body */}
          <CardBody>
            {/* Main Category */}
            {isLoading ? (
              <div className="max-w-sm animate-pulse" role="status">
                <div className="h-6 px-2 mb-6 bg-gray-400 rounded-md dark:bg-gray-700 w-28" />
              </div>
            ) : (
              <Typography className="mb-4 uppercase" color="gray" variant="h6">
                {ability[0]}
              </Typography>
            )}

            {/* Title */}
            {isLoading ? (
              <div className="max-w-sm animate-pulse" role="status">
                <div className="h-6 px-2 mb-4 bg-gray-400 rounded-md dark:bg-gray-700 w-52" />
              </div>
            ) : (
              <Typography className="mb-2" color="blue-gray" variant="h4">
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </Typography>
            )}

            {/* Categories */}
            {isLoading ? (
              <div className="max-w-sm animate-pulse" role="status">
                <div className="h-6 px-2 mb-2 bg-gray-400 rounded-md dark:bg-gray-700 w-52" />
              </div>
            ) : (
              <div className="flex items-center gap-4 my-4">
                {ability.map((ability, index) => (
                  <Typography
                    key={index}
                    className=""
                    color="gray"
                    variant="h6"
                  >
                    {' > '} {ability}
                  </Typography>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between mt-6">
              {/* Location */}
              {isLoading ? (
                <div
                  className="flex max-w-sm gap-2 mt-2 animate-pulse"
                  role="status"
                >
                  <div className="h-6 w-7 px-2 bg-gray-400 rounded-md dark:bg-gray-700" />
                  <div className="h-6 w-40 px-2 bg-gray-400 rounded-md dark:bg-gray-700" />
                </div>
              ) : (
                <div className="mb-3 flex items-center gap-1">
                  <Typography className="text-center font-normal" color="gray">
                    <img alt="location" className="w-7" src={ubication} />
                  </Typography>
                  <Typography
                    className="text-center font-semibold"
                    color="gray"
                  >
                    Ubicación:
                  </Typography>
                  <Typography
                    className="text-center font-normal truncate"
                    color="gray"
                  >
                    {address.charAt(0).toUpperCase() + address.slice(1)}
                  </Typography>
                </div>
              )}

              {isLoading ? (
                <div
                  className="flex max-w-sm gap-2 mt-2 animate-pulse"
                  role="status"
                >
                  <div className="h-6 w-7 px-2 bg-gray-400 rounded-md dark:bg-gray-700" />
                  <div className="h-6 w-32 px-2 bg-gray-400 rounded-md dark:bg-gray-700" />
                </div>
              ) : (
                <div className="mb-3 flex items-center gap-1">
                  <Typography className="text-center font-normal" color="gray">
                    <img alt="moneyBag" className="w-8" src={moneyBag} />
                  </Typography>
                  <Typography
                    className="text-center font-semibold"
                    color="gray"
                  >
                    Precio:
                  </Typography>
                  <Typography className="text-center truncate" color="gray">
                    {price}
                  </Typography>
                </div>
              )}
            </div>
          </CardBody>
          <a
            href={
              userCredentials && userCredentials.uid === id
                ? `/user-panel/${id}/jobDetail/${_id}`
                : `/jobDetail/${_id}`
            }
          >
            {isLoading ? (
              <div className="max-w-sm animate-pulse" role="status">
                <div className="h-6 mx-5 mt-6 mb-3 bg-gray-400 rounded-md dark:bg-gray-700 w-32" />
              </div>
            ) : (
              <Button
                className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
                variant="filled"
              >
                Conocer más
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
            )}
          </a>
        </div>
      </Card>
    </div>
  )
}

export default CardItem
