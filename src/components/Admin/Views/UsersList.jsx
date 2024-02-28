import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Typography } from '@material-tailwind/react'

import { getUsers } from '../../../toolkit/Users/usersHandler'
import { TABLE_HEAD } from '../../../utils/dashboard'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Loader from '../../Loader/Loader'
import { getWork, putUsers } from '../../../toolkit/thunks'

export default function UsersList() {
  const dispatch = useDispatch()
  const [status, setStatus] = useState({})
  const { users } = useSelector((state) => state.users)
  const [userStatus, setUserStatus] = useState({})

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getWork())
  }, [dispatch])

  useEffect(() => {
    const initialUserStatus = {}

    for (const user of users) {
      initialUserStatus[user._id] = user.habilitar
    }
    setUserStatus(initialUserStatus)
  }, [users])

  const handleOnClick = (_id) => {
    setUserStatus((prevStatuses) => ({
      ...prevStatuses,
      [_id]: !prevStatuses[_id]
    }))

    setStatus((prevstatus) => ({
      ...prevstatus,
      _id,
      habilitar: !userStatus[_id]
    }))

    dispatch(putUsers({ _id, habilitar: !userStatus[_id] }))
  }

  //! POSTEOS
  const planBRONCE = 2
  const planORO = 15

  return users.length === 0 ? (
    <Loader />
  ) : (
    <>
      <h2 className="text-4xl mb-5 font-semibold font-mono italic">
        Lista de Usuarios
      </h2>
      <AdminNavbar />
      <Card className="flex-1 overflow-scroll">
        <table className="w-20 ml-2 min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-white bg-gray-900 p-5"
                >
                  <Typography
                    className="font-semibold text-white"
                    color="blue-gray"
                    variant="small"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(
              (
                {
                  _id,
                  firstName,
                  lastName,
                  email,
                  phoneNumber,
                  pay,
                  cantidadPost
                },
                index
              ) => (
                <tr key={index} className="even:bg-blue-gray-100">
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {firstName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {lastName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {!phoneNumber ? 'Sin numero' : phoneNumber}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {pay === undefined || pay.subscription === false
                        ? 'No'
                        : 'Si'}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {pay === undefined || pay.subscription === false
                        ? 'Sin plan'
                        : pay.plan}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {cantidadPost}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      className="font-normal"
                      color="blue-gray"
                      variant="small"
                    >
                      {pay !== undefined
                        ? pay.plan === 'Plan BRONCE'
                          ? planBRONCE - cantidadPost
                          : pay.plan === 'Plan ORO'
                            ? planORO - cantidadPost
                            : 'ILIMITADO'
                        : 'NINGUNO'}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      className="font-medium"
                      color="blue-gray"
                      href="#"
                      variant="small"
                    >
                      <Button
                        color={userStatus[_id] ? 'red' : 'green'}
                        variant="filled"
                        onClick={() => handleOnClick(_id)}
                      >
                        {userStatus[_id] ? 'Deshabilitar' : 'Habilitar'}
                      </Button>
                    </Typography>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </>
  )
}
