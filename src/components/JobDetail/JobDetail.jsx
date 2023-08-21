import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailWork, detailReset } from "../../toolkit/thunks";
import { getUser, getUsers } from "../../toolkit/Users/usersHandler";
/* -------------- */
/* COMPONENTS */
import Nav from "../PanelUser/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
/* -------------- */

/* ASSESTS */
import dollarSign from "../../assets/dollar-sign.svg";
import location from "../../assets/location.svg";
import wsp from "../../assets/wsp-logo.png";
import square from "../../assets/square.png";
import {
  Button,
  Card,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
/* -------------- */

export default function JobDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail, isLoading } = useSelector((state) => state.work);
  const { users, user, userCredentials } = useSelector((state) => state.users);
  const infoUser = users.find((user) => user._id === detail.users);
  useEffect(() => {
    userCredentials !== null && dispatch(getUser(userCredentials.uid));
    !users.length && dispatch(getUsers());
    dispatch(getDetailWork(id));
    return () => {
      dispatch(detailReset());
    };
  }, [dispatch, id, userCredentials, users.length]);
  const images = [detail?.image];
  const handleClick = () => {
    userCredentials === null
      ? navigate("/home")
      : navigate(`/user-panel/${user.uid}/home`);
  };

  return (
    <Card className="flex flex-col justify-center items-center">
      {isLoading && <Loader />}
      {userCredentials === null ? <Header /> : <Nav />}

      <div className="max-w-screen-2xl bg-gray-50 font-sans m-5 pb-1 shadow-md border-2 border-gray-200 rounded-md">
        <div className="px-4">
          <Button onClick={handleClick} className="flex w-full mb-4">
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-row py-2">
          <div className="flex px-4 gap-5 max-w-sm">
            <div className="flex flex-col gap-3 w-full">
              {/* Phone number */}
              <div className="bg-white rounded-md">
                <Tooltip
                  content={infoUser?.phoneNumber || "3042594820"}
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                  className="flex items-center justify-center bg-gray-800 text-sm"
                >
                  <Link
                    to={`https://api.whatsapp.com/send?phone=${
                      infoUser?.phoneNumber || "3042594820"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center gap-4 pr-10"
                  >
                    <img src={wsp} alt="wsp-logo" className="h-8 w-8" />
                    <Typography variant="h6" className="mt-1">
                      Contactar por WhatsApp
                    </Typography>
                  </Link>
                </Tooltip>
              </div>

              {/* Price */}
              <div className="flex justify-between py-1.5 px-10 bg-white rounded-md">
                <div className="relative">
                  <Typography variant="h6" className="ml-10 text-center">
                    Precio:
                  </Typography>
                  <img
                    src={dollarSign}
                    alt="dollar-sign"
                    className="absolute top-1 left-0 w-5"
                  />
                </div>
                <Typography
                  variant="small"
                  className="flex justify-between items-center text-center"
                >
                  {detail?.price}
                </Typography>
              </div>

              {/* Location */}
              <div className="flex justify-between py-1.5 px-10 bg-white rounded-md">
                <div className="relative">
                  <Typography variant="h6" className="ml-10 text-center">
                    Ubicación:
                  </Typography>
                  <img
                    src={location}
                    alt="location-logo"
                    className="absolute top-0 left-0 w-5"
                  />
                </div>
                <Typography
                  variant="small"
                  className="flex justify-between items-center text-center"
                >
                  {detail?.address}
                </Typography>
              </div>

              {/* Category */}
              <div className="flex justify-between py-1.5 px-10 bg-white rounded-md">
                <div className="relative">
                  <Typography variant="h6" className="ml-10">
                    Categoría:
                  </Typography>
                  <img
                    src={square}
                    alt="square-logo"
                    className="absolute top-1 left-1 w-4 h-4"
                  />
                </div>
                <ul className="flex flex-col gap-1 place-items-end justify-end">
                  {detail.ability?.map((skill, index) => (
                    <li key={index}>
                      <Typography variant="small">{skill}</Typography>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center h-full py-1.5 px-3 bg-white rounded-md">
                {/* Job Description. */}
                <Typography variant="h6" className="my-1">
                  Descripción
                </Typography>
                <Typography variant="small" className="px-2">
                  {detail?.description}
                </Typography>
              </div>
            </div>
          </div>
          <CardHeader
            floated={false}
            className="flex flex-col justify-center m-0 items-center"
          >
            <Typography variant="h3" className="my-6 text-gray-800">
              {detail?.title}
            </Typography>
            <ImageCarousel images={images} />
          </CardHeader>
        </div>
      </div>
      <Footer />
    </Card>
  );
}
