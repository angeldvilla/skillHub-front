import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { FaUsers, FaCcMastercard, FaStar, FaFolder } from "react-icons/fa";

const Dashboard = () => {
  const { work } = useSelector((state) => state.work);
  const { users, userCredentials } = useSelector((state) => state.users);
  const totalUsers = users.length;
  const totalServices = work.length;

  const totalPayments = 50;
  const totalRatings = 120;

  return (
    <div className="flex-col space-y-3 items-center mb-10">
        <Typography variant="h2" className="text-center">
          Admin Dashboard
        </Typography>
    
      {/* USERS */}
      <a
      href={`/user-panel/${userCredentials.uid}/dashboard/list-users`}>
        <Card className="bg-red-700">
          <div className="p-4 text-center">
            <Typography variant="h5" color="white">
              Usuarios
            </Typography>
            <Typography variant="h3" className="mt-2 text-white">
              {totalUsers}
            </Typography>
            <div className="mt-4">
              <FaUsers className="text-white text-4xl" />
            </div>
          </div>
        </Card>
        </a>

        <Card className="bg-green-700">
          <div className="p-4 text-center">
            <Typography variant="h5" color="white">
              Servicios
            </Typography>
            <Typography variant="h3" className="mt-2 text-white">
              {totalServices}
            </Typography>
            <div className="mt-4">
              <FaFolder className="text-white text-4xl" />
            </div>
          </div>
        </Card>

        <Card className="bg-blue-500">
          <div className="p-4 text-center">
            <Typography variant="h5" color="white">
              Pagos
            </Typography>
            <Typography variant="h3" className="mt-2 text-white">
              {totalPayments}
            </Typography>
            <div className="mt-4">
              <FaCcMastercard className="text-white text-4xl" />
            </div>
          </div>
        </Card>

        <Card className="bg-yellow-700">
          <div className="p-4 text-center">
            <Typography variant="h5" color="white">
              Calificaciones
            </Typography>
            <Typography variant="h3" className="mt-2 text-white">
              {totalRatings}
            </Typography>
            <div className="mt-4">
              <FaStar className="text-white text-4xl" />
            </div>
          </div>
        </Card>
    </div>
  );
};

export default Dashboard;
