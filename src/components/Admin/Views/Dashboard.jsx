import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { FaUsers, FaPaypal, FaStar } from "react-icons/fa";

const Dashboard = () => {
  const { users } = useSelector((state) => state.users);
  const totalUsers = users.length;

  const totalPayments = 50;
  const totalRatings = 120;

  return (
    <div>
      <div className="flex justify-between w-full px-6 py-4 space-x-4">
        <Typography variant="h2" className="text-center my-8">
          Admin Dashboard
        </Typography>
      </div>

      <div className="flex space-x-4">
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

        <Card className="bg-blue-500">
          <div className="p-4 text-center">
            <Typography variant="h5" color="white">
              Pagos
            </Typography>
            <Typography variant="h3" className="mt-2 text-white">
              {totalPayments}
            </Typography>
            <div className="mt-4">
              <FaPaypal className="text-white text-4xl" />
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
    </div>
  );
};

export default Dashboard;
