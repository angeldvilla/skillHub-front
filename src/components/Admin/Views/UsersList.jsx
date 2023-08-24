import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../toolkit/Users/usersHandler";
import { Button, Card, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "../../../utils/dashboard";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Loader from "../../Loader/Loader";
import { putUsers } from "../../../toolkit/thunks"


export default function UsersList() {
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
<>
<h2 className="text-4xl mb-5 font-semibold font-mono italic">Lista de Usuarios</h2>
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
              variant="small"
              color="blue-gray"
              className="font-semibold text-white"
            >
              {head}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {users.map(
        ({ _id, firstName, lastName, email, phoneNumber, pay }, index) => (
          <tr key={index} className="even:bg-blue-gray-100">
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {firstName}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {lastName}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {email}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {phoneNumber}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {pay === undefined || pay.subscription === false
                  ? "No"
                  : "Si"}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {pay === undefined || pay.subscription === false
                  ? "Sin plan"
                  : pay.plan}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                5
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                15
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                <Button
                  variant="filled"
                  color={userStatus[_id] ? "red" : "green"}
                  onClick={() => handleOnClick(_id)}
                >
                  {userStatus[_id] ? "Deshabilitar" : "Habilitar"}
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