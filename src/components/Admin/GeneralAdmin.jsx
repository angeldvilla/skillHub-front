import { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers, getUser } from '../../toolkit/Users/usersHandler'
import Nav from '../PanelUser/Nav'
import Loader from '../Loader/Loader'

import Menu from './Views/Menu'

function Admin() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { users, userCredentials } = useSelector((state) => state.users)
  const location = useLocation()

  const [expanded, setExpanded] = useState(true)
  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    dispatch(getUsers())
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id))
    }
  }, [dispatch, id, userCredentials])

  const isDashboardNavRender =
    location.pathname.includes('list-services') ||
    location.pathname.includes('settings') ||
    location.pathname.includes('details-services')

  return users.length === 0 ? (
    <Loader />
  ) : (
    <div className="flex h-screen w-full overflow-scroll bg-blue-gray-800 bg-opacity-30">
      <style>
        {`
          /* Estilos de scroll */
          ::-webkit-scrollbar {
            width: 12px;
          }
          ::-webkit-scrollbar-track {
            background-color: rgb(55, 71, 79, 0.1); 
          }
          ::-webkit-scrollbar-thumb {
            background: #7e7e7e;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #2f2f2fbd;
          }
        `}
      </style>
      <Menu expanded={expanded} toggleExpand={toggleExpand} />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full">{!isDashboardNavRender && <Nav />}</div>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin
