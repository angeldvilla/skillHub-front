import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../toolkit/Users/usersHandler";
import { Button, Card, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "../../utils/dashboard";
import { putUsers } from "../../toolkit/thunks"
import Nav from "../PanelUser/Nav";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Menu from "./Views/Menu";
import UsersList from "./Views/UsersList";
import Header from "../Header/Header";


export default function Admin() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({});
  const { users } = useSelector((state) => state.users);
  const [userStatus, setUserStatus] = useState({});

  useEffect(
    () => {
      dispatch(getUsers());

   
    }, [dispatch]
  );


  useEffect(() => {
    const initialUserStatus = {};
    for (const user of users) {
      initialUserStatus[user._id] = user.habilitar;
    }
    setUserStatus(initialUserStatus);
  }, [users]);
  


  const handleOnClick = (_id) => {
    setUserStatus((prevStatuses) => ({
      ...prevStatuses,
      [_id]: !prevStatuses[_id],
    }));

    setStatus((prevstatus) => ({
      ...prevstatus,
      _id,
      habilitar: !userStatus[_id],
    }));

    dispatch(putUsers({ _id, habilitar: !userStatus[_id] }));
  };

  return users.length === 0 ? (
    <Loader />
  ) : (
    <div className="flex h-screen">
           <style>
        {`
          /* Estilos de scroll */
          ::-webkit-scrollbar {
            width: 12px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
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
     {/*  <Nav /> */}
      <Menu/>
      <div className="flex-1 flex flex-col justify-center items-center">
     <Header/>
      <Typography variant="h2" className="text-center my-8">
        Admin Dashboard
      </Typography>
        <UsersList/>
      </div>
    </div>
  );
}

//cambios finales