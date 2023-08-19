import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../toolkit/Users/usersHandler";
import {
  Button,
  Card,
  MenuHandler,
  Typography,
} from "@material-tailwind/react";
import { TABLE_HEAD } from "../../utils/dashboard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AdminNavbar from "../Admin/AdminNavbar/AdminNavbar";
import { putUsers } from "../../toolkit/thunks";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({});
  const { users } = useSelector((state) => state.users);
  const [userStatus, setUserStatus] = useState({});
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleOnClick = (_id) => {

       
    setUserStatus((prevStatuses) => ({
      ...prevStatuses,
      [_id]: !prevStatuses[_id],
  }));

    setStatus({ _id, habilitar: !status.habilitar });

    dispatch(putUsers({ _id, habilitar: !status.habilitar }));
  };

  // const habilitado = useSelector((state) => state.users.users);
 console.log(status.habilitar)
  return (
    <div>
      <Header />
      <Typography variant="h2" className="text-center my-8">
        Admin Dashboard
      </Typography>
      <AdminNavbar />
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-center">
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
              ({ _id, firstName, lastName, email, phoneNumber }) => (
                <tr key={firstName} className="even:bg-blue-gray-100">
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
                      False
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Platinum
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
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      False
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
                        color="gray"
                        onClick={() => handleOnClick(_id)}
                      >

                       {userStatus[_id] ? "Deshabilitar" : "Habilitar"}
                        {/* {habilitado.find((elem) => elem._id === _id).habilitar
                          ? "Deshabilitar"
                          : "Habilitar"} */}

                        {/* {habilitado ? "Deshabilitar" : "Habilitar"} */}
                      </Button>
                    </Typography>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
      <Footer />
    </div>
  );
}
