import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWork, getDetailWork, detailReset } from "../../toolkit/thunks";
import { getUser, getUsers } from "../../toolkit/Users/usersHandler";
/* -------------- */
/* COMPONENTS */
import Nav from "../PanelUser/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Score from "../Score/Score";
/* -------------- */

/* ASSESTS */
import phone from "../../assets/phone.svg";
import dollarSign from "../../assets/dollar-sign.svg";
import location from "../../assets/location.svg";
import { Button } from "@material-tailwind/react";
/* -------------- */

export default function JobDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { work, detail, isLoading } = useSelector((state) => state.work);
  const { users, user, userCredentials } = useSelector((state) => state.users);
  const infoUser = users.find((user) => user._id === detail.users);

  useEffect(() => {
    !work.length && dispatch(getWork());
    !users.length && dispatch(getUsers());
    !user.length && dispatch(getUser(id));
    dispatch(getDetailWork(id));
    return () => {
      dispatch(detailReset());
    };
  }, [dispatch, id, work.length, users.length, user.length]);

  const images = [detail?.image];

  const handleClick = () => {
    userCredentials && userCredentials.uid === id
      ? navigate(`/user-panel/${id}/home`)
      : navigate("/home");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoading && <Loader />}

      {userCredentials && userCredentials.uid === id ? <Nav /> : <Header />}

      <div className="max-w-screen-2xl bg-gray-50 font-sans m-5 pb-1 shadow-md border-2 border-gray-200 rounded-md">
        <div className="px-4">
          <Button onClick={handleClick} className="w-96 mb-4">
            {"<<"}
          </Button>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col px-4 text-md gap-5">
            {/* Category */}
            <div className="p-5 bg-gray-200 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Categoría</h3>
              <ul className="px-2">
                {detail.ability?.map((skill, index) => (
                  <li key={index}>
                    {">"} {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-gray-200 rounded-md">
              {/* Job Description. */}
              <h3 className="text-xl font-semibold mb-4">Descripción</h3>
              <p className="px-2">
                {"> "}
                {detail?.description}
              </p>
            </div>

            <div className="flex flex-col text-md gap-5 w-full">
              {/* Location */}
              <div className="p-5 bg-gray-200 rounded-md">
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
                  <img
                    src={location}
                    alt="location-logo"
                    className="absolute top-0 right-0 w-6"
                  />
                  <p className="px-2">
                    {"> "}
                    {detail?.address}
                  </p>
                </div>
              </div>

              {/* Phone number */}
              <div className="p-5 bg-gray-200 rounded-md">
                <div className="relative">
                  <img
                    src={phone}
                    alt="phone-logo"
                    className="absolute top-0 right-0 w-5"
                  />
                  <h3 className="text-xl font-semibold mb-4">
                    Número de Teléfono
                  </h3>

                  <p className="px-2">
                    {"> +"} {infoUser?.phoneNumber}
                  </p>
                </div>
              </div>

              {/* Wage */}
              <div className="p-5 bg-gray-200 rounded-md">
                <div className="relative">
                  <img
                    src={dollarSign}
                    alt="dollar-sign"
                    className="absolute top-0 right-0 w-6"
                  />
                  <h3 className="text-xl font-semibold mb-4">Precio</h3>

                  <p className="px-2">
                    {"> "} {detail?.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-12">
            <h1 className="text-4xl text-center font-semibold">
              {detail?.title}
            </h1>
            <ImageCarousel images={images} />
            <Score />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
