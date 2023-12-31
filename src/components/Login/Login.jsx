/* eslint-disable no-case-declarations */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { userLogin } from "../../toolkit/Users/usersSlice";
import { validateUserData } from "../../utils/userDataValidation";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Toaster, toast } from "sonner";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { getUsers, postUser } from "../../toolkit/Users/usersHandler";

export default function Login() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false);
  const admin = users.find(
    (user) => user.uid === "Zqaz0B6durdS841Bd7e3qJdbjEU2"
  );

  useEffect(() => {
    dispatch(getUsers());
    if (admin) {
      setIsAdmin(true);
    }
  }, [dispatch, admin]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    setErrors(validateUserData(name, value, userData));
  };

  const handleOnClick = async (e) => {
    const platform = e.currentTarget.getAttribute("data-platform");

    const hasEmptyValues = Object.values(userData).some(
      (value) => value === ""
    );
    const hasErrors = Object.keys(errors).length;

    if (platform === "email" && (hasEmptyValues || hasErrors)) {
      toast.error("Datos no validos");
      return;
    }

    try {
      switch (platform) {
        case "google":
          const googleProvider = new GoogleAuthProvider();
          const userCredentials = await signInWithPopup(auth, googleProvider);

          const googleCredentials = {
            uid: userCredentials.user.uid,
            accessToken: userCredentials.user.accessToken,
          };

          const displayName = userCredentials.user.displayName;
          const [firstName, lastName] = displayName.split(" ");

          const newUser = {
            uid: googleCredentials.uid,
            firstName: firstName,
            lastName: lastName,
            email: userCredentials.user.email,
            phoneNumber: "",
            image: userCredentials.user.photoURL,
          };

          const userAuth = users.find(
            (user) => user.uid === googleCredentials.uid
          );
          const usLog = [userAuth].some((user) => user.habilitar === true);

          if (!usLog) {
            toast.error("No tienes acceso a esta plataforma");
            return;
          }

          dispatch(postUser(newUser));

          toast.message("Bienvenido", {
            description: userCredentials.user.displayName,
          });

          dispatch(userLogin(googleCredentials));

          // Almacena las credenciales en el Local Storage
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(googleCredentials)
          );

          setTimeout(() => {
            const uid = googleCredentials.uid;
            if (isAdmin && googleCredentials.uid === "Zqaz0B6durdS841Bd7e3qJdbjEU2") {
              navigate(`/user-panel/${uid}/dashboard/admin`);
            } else {
              navigate(`/user-panel/${uid}/home`);
            }
          });

          break;
        case "github":
          toast.message("GitHub", {
            description: "Próximamente",
          });
          break;
        case "facebook":
          toast.message("Facebook", {
            description: "Próximamente",
          });
          break;
        case "email":
          handleSubmit(e);
          break;
        default:
          break;
      }
    } catch (error) {
      toast.error("Ups, algo salió mal");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const platform = e.currentTarget.getAttribute("data-platform");

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const credentials = {
        uid: userCredentials.user.uid,
        accessToken: userCredentials.user.accessToken,
      };

      const logUser = users.find(
        (user) => user.uid === userCredentials.user.uid
      );
      const userAuth1 = [logUser].some((user) => user.habilitar === true);

      if (!userAuth1) {
        toast.error("No tienes acceso a esta plataforma");
      } else {
        dispatch(userLogin(credentials));

        // Almacena las credenciales en el Local Storage
        localStorage.setItem("userCredentials", JSON.stringify(credentials));

        setUserData({
          email: "",
          password: "",
        });

        toast.message("Bienvenido", {
          description: userCredentials.user.email,
        });

        setTimeout(() => {
          const uid = credentials.uid;
          if (isAdmin && credentials.uid === "Zqaz0B6durdS841Bd7e3qJdbjEU2") {
            navigate(`/user-panel/${uid}/dashboard/admin`);
          } else {
            navigate(`/user-panel/${uid}/home`);
          }
        });
      }
    } catch (error) {
      if (platform === "google" || platform === "email") {
        switch (error.code) {
          case "auth/wrong-password":
            toast.error("Contraseña incorrecta");
            break;
          case "auth/user-not-found":
            toast.error("Usuario no encontrado");
            break;
          case "auth/too-many-requests":
            toast.error("Demasiadas peticiones");
            break;
          case "auth/invalid-email":
            toast.error("Email invalido");
            break;
          case "auth/user-disabled":
            toast.error("Usuario desactivado");
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <Card shadow={false} className="bg-[#f8fafc] p-4 py-10 w-96">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit} className="mt-4 mb-4">
          <div className="mb-4 flex flex-col gap-4">
            <Input
              type="text"
              size="lg"
              label="Email"
              color="black"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                label="Contraseña"
                color="black"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <span
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-5 text-black" />
                ) : (
                  <EyeIcon className="h-6 w-5 text-black" />
                )}
              </span>
            </div>
          </div>
          <button
            data-platform="email"
            onClick={handleOnClick}
            className="w-full mt-4 bg-[#242121] rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-blue-gray-500 transition-all font-semibold"
          >
            INGRESAR
          </button>
          <Typography
            color="gray"
            className="mt-4 text-center text-gray-600 font-normal"
          >
            ¿No tienes una cuenta?{" "}
            <a href="/signup" className="font-semibold text-gray-600">
              Regístrate
            </a>
          </Typography>
        </form>
        <div className="mt-4">
          <Typography className="text-center text-gray-600">
            O continúa con
          </Typography>
          <div className="flex justify-center gap-4 mt-2">
            <Button
              data-platform="google"
              onClick={handleOnClick}
              ripple={true}
              color="white"
            >
              <img src={google} alt="google-logo" className="w-6" />
            </Button>
            <Button
              data-platform="facebook"
              onClick={handleOnClick}
              ripple={true}
              color="white"
            >
              <img src={facebook} alt="facebook-logo" className="w-6" />
            </Button>
            <Button
              data-platform="github"
              onClick={handleOnClick}
              ripple={true}
              color="white"
            >
              <img src={github} alt="github-logo" className="w-6" />
            </Button>
          </div>
        </div>
      </Card>
      <Toaster richColors closeButton />
    </div>
  );
}
