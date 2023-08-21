import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../toolkit/Users/usersHandler";
import { Button, Card, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "../../../utils/dashboard";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Loader from "../../Loader/Loader";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [userStatus, setUserStatus] = useState(false);
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
    
  }, [dispatch]);
  

  const handleOnClick = () => {
    setUserStatus(!userStatus);
  };


  return (
    users.length===0?<Loader/>:(<div>
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
            {users.map(({firstName,lastName,email,phoneNumber,pay},index) => (
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
                  {(pay===undefined || pay.subscription===false) ?"No":"Si"} 
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {(pay===undefined || pay.subscription===false) ? "Sin plan":pay.plan} 
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
                      onClick={handleOnClick}
                    >
                      {status ? "Deshabilitar" : "Habilitar"}
                    </Button>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Footer />
    </div>)
  );
}
