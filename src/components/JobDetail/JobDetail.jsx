import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailWork, detailReset } from "../../toolkit/thunks";
import { getUser, getUsers } from "../../toolkit/Users/usersHandler";
/* -------------- */
/* COMPONENTS */
import Nav from "../PanelUser/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MaterialCarousel } from "../MaterialCarousel/MaterialCarousel";
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
  const infoUser = users.find((user) => user.uid === detail.users);
  console.log(infoUser);

  useEffect(() => {
    userCredentials !== null && dispatch(getUser(userCredentials.uid));
    dispatch(getDetailWork(id));
    dispatch(getUsers());
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

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (userCredentials.uid === "Zqaz0B6durdS841Bd7e3qJdbjEU2") setIsAdmin(true);
  }, [userCredentials.uid]);
  console.log(isAdmin);

  return (
    <div>
      {
        isAdmin ?  ( 
      <Card className="flex flex-col justify-center items-center">
      <div className="max-w-screen-2xl bg-gray-50 font-sans m-5 pb-1 shadow-md border-2 border-gray-200 rounded-md">

        <div className="flex flex-row py-2">
          <div className="flex px-4 gap-5 max-w-sm w-96">
            <div className="flex flex-col gap-3 w-full">
              {/* Phone number */}
              <div className="bg-white rounded-md">
                {isLoading ? (
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-8 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                  </div>
                ) : (
                  <Tooltip
                    content={infoUser?.phoneNumber || "3015985993"}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    className="flex items-center justify-center bg-gray-800 text-sm"
                  >
                    <Link
                      to={`https://api.whatsapp.com/send?phone=${
                        infoUser?.phoneNumber || "3015985993"
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
                )}
              </div>

              {/* Price */}
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-9 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
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
              )}

              {/* Location */}
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-9 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
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
              )}

              {/* Category */}
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-9 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
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
                  <ul className="flex flex-col gap-1 justify-center items-end">
                    {detail.ability?.map((skill, index) => (
                      <li key={index}>
                        <Typography variant="small">{skill}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description. */}
              {isLoading ? (
                <div role="status" className="max-w-sm mt-2 animate-pulse">
                  <div className="h-[23rem] max-h-full bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-96 py-1.5 px-3 bg-white rounded-md">
                  <Typography variant="h6" className="my-1">
                    Descripción
                  </Typography>
                  <Typography variant="small" className="px-2">
                    {detail?.description}
                  </Typography>
                </div>
              )}
            </div>
          </div>

          <CardHeader
            floated={false}
            className="flex flex-col justify-start m-0"
          >
            {/* Title */}
            {isLoading ? (
              <div
                role="status"
                className="mx-4 h-10 my-6 bg-gray-400 rounded dark:bg-gray-700 animate-pulse"
              >
                <div className="h-96 max-h-full bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
              </div>
            ) : (
              <Typography
                variant="h3"
                className="my-6 text-gray-800 text-center"
              >
                {detail?.title}
              </Typography>
            )}

            {/* Image */}
            {isLoading ? (
              <div
                role="status"
                className="flex items-center justify-center mx-4 w-[635px] h-[400px] rounded-md bg-gray-400 dark:bg-gray-700 animate-pulse"
              >
                <svg
                  className="w-16 h-16 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            ) : (
              <MaterialCarousel images={images} />
            )}
          </CardHeader>
        </div>
      </div>
    </Card>
        )
      
        : (
          <Card className="flex flex-col justify-center items-center">
      {userCredentials === null ? <Header /> : <Nav />}

      <div className="max-w-screen-2xl bg-gray-50 font-sans m-5 pb-1 shadow-md border-2 border-gray-200 rounded-md">
        <div className="px-4">
          <Button onClick={handleClick} className="flex w-full mb-4">
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-row py-2">
          <div className="flex px-4 gap-5 max-w-sm w-96">
            <div className="flex flex-col gap-3 w-full">
              {/* Phone number */}
              <div className="bg-white rounded-md">
                {isLoading ? (
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-8 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                  </div>
                ) : (
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
                )}
              </div>

              {/* Price */}
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-9 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
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
              )}

              {/* Location */}
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-9 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
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
              )}

              {/* Category */}
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-9 bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
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
                  <ul className="flex flex-col gap-1 justify-center items-end">
                    {detail.ability?.map((skill, index) => (
                      <li key={index}>
                        <Typography variant="small">{skill}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description. */}
              {isLoading ? (
                <div role="status" className="max-w-sm mt-2 animate-pulse">
                  <div className="h-[23rem] max-h-full bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-96 py-1.5 px-3 bg-white rounded-md">
                  <Typography variant="h6" className="my-1">
                    Descripción
                  </Typography>
                  <Typography variant="small" className="px-2">
                    {detail?.description}
                  </Typography>
                </div>
              )}
            </div>
          </div>

          <CardHeader
            floated={false}
            className="flex flex-col justify-start m-0"
          >
            {/* Title */}
            {isLoading ? (
              <div
                role="status"
                className="mx-4 h-10 my-6 bg-gray-400 rounded dark:bg-gray-700 animate-pulse"
              >
                <div className="h-96 max-h-full bg-gray-400 rounded-md dark:bg-gray-700 w-full"></div>
              </div>
            ) : (
              <Typography
                variant="h3"
                className="my-6 text-gray-800 text-center"
              >
                {detail?.title}
              </Typography>
            )}

            {/* Image */}
            {isLoading ? (
              <div
                role="status"
                className="flex items-center justify-center mx-4 w-[635px] h-[400px] rounded-md bg-gray-400 dark:bg-gray-700 animate-pulse"
              >
                <svg
                  className="w-16 h-16 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            ) : (
              <MaterialCarousel images={images} />
            )}
          </CardHeader>
        </div>
      </div>
      <Footer />
    </Card>
        )
      }
      
      </div>
    
  );
}
