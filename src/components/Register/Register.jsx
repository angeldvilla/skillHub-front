/* eslint-disable no-case-declarations */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser, getUsers } from "../../toolkit/Users/usersHandler";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { userLogin } from "../../toolkit/Users/usersSlice";
import { Toaster, toast } from "sonner";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import {
  validateUserData,
  resetUserData,
} from "../../utils/userDataValidation";
import emailjs from "@emailjs/browser";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    setErrors(validateUserData(name, value, userData));
  };

  const handleOnClick = async (e) => {
    const platform = e.currentTarget.getAttribute("data-platform");

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

          const userAuth = {
            uid: googleCredentials.uid,
            firstName: firstName,
            lastName: lastName,
            email: userCredentials.user.email,
            phoneNumber: "",
            image: userCredentials.user.photoURL,
          };


          toast.message("Bienvenido", {
            description: userCredentials.user.displayName,
          });

          dispatch(postUser(userAuth));
          dispatch(userLogin(googleCredentials));
          setErrors({});
          resetUserData(setUserData);

          localStorage.setItem(
            "userCredentials",
            JSON.stringify(googleCredentials)
          );

          // Envío del correo
          const authUser = {
            to_email: userCredentials.user.email,
            user_first_name: firstName,
            user_last_name: lastName,
          };

          const emailJSResponse = await emailjs.send(
            "service_n97ipmm",
            "template_du3d689",
            authUser,
            "M2HzawMtj0qzxyVZx"
          );

          setTimeout(() => {
            const uid = googleCredentials.uid;
            navigate(`/user-panel/${uid}/home`);
          }, 2000);

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
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const { firstName, lastName, email, phoneNumber } = userData;
      const newUser = {
        uid: userCredentials.user.uid,
        firstName,
        lastName,
        email,
        phoneNumber,
        image: "",
      };

      localStorage.setItem(
        "userCredentials",
        JSON.stringify({
          uid: userCredentials.user.uid,
          accessToken: userCredentials.user.accessToken,
        })
      );

      dispatch(postUser(newUser));
      dispatch(
        userLogin({
          uid: userCredentials.user.uid,
          accessToken: userCredentials.user.accessToken,
        })
      );

      toast.message("Bienvenido", {
        description: userCredentials.user.email,
      });

      // Envío del correo
      const registerParams = {
        to_email: userData.email,
        user_first_name: userData.firstName,
        user_last_name: userData.lastName,
      };

      const emailJSResponse = await emailjs.send(
        "service_n97ipmm",
        "template_du3d689",
        registerParams,
        "M2HzawMtj0qzxyVZx"
      );

      setTimeout(() => {
        navigate(`/user-panel/${userCredentials.user.uid}/home`);
      }, 3000);

      resetUserData(setUserData);

      return userCredentials;
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Email en uso");
          break;
        case "auth/invalid-email":
          toast.error("Email inválido");
          break;
        case "auth/missing-password":
          toast.error("Contraseña requerida");
          break;
        case "auth/weak-password":
          toast.error("Contraseña demasiado débil");
          break;
        default:
          break;
      }
      console.error(error);
    }
  };

  const handleReset = () => {
    resetUserData(setUserData);
    setErrors({});
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <Card shadow={false} className="bg-[#f8fafc] p-4 py-10 w-96">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Registrarse
        </Typography>
        <form onSubmit={handleSubmit} className="mt-4 mb-4">
          <div className="mb-4 flex flex-col gap-4">
            {/* First Name */}
            <Input
              type="text"
              size="lg"
              label="Nombre"
              color="black"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="text-center text-sm text-red-500">
                {errors.firstName}
              </span>
            )}

            {/* Last Name */}
            <Input
              type="text"
              size="lg"
              label="Apellido"
              color="black"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="text-center text-sm text-red-500">
                {errors.lastName}
              </span>
            )}

            {/* Email */}
            <Input
              type="text"
              size="lg"
              label="Email"
              color="black"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-center text-sm text-red-500">
                {errors.email}
              </span>
            )}

            {/* Phone Number */}
            <Input
              type="text"
              size="lg"
              label="Número de teléfono"
              color="black"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="text-center text-sm text-red-500">
                {errors.phoneNumber}
              </span>
            )}

            {/* Password */}
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
            {errors.password && (
              <span className="text-center text-sm text-red-500">
                {errors.password}
              </span>
            )}

            {/* Confirm Password */}
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                size="lg"
                label="Confirmar Contraseña"
                color="black"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-6 w-5 text-black" />
                ) : (
                  <EyeIcon className="h-6 w-5 text-black" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <span className="text-center text-sm text-red-500">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col">
            <button
              type="submit"
              data-platform="email"
              className="w-full mt-4 bg-[#242121] rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-gray-500 transition-all font-semibold"
            >
              Registrarse
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full mt-2 bg-gray-700 rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-gray-500 transition-all font-semibold"
            >
              Reiniciar
            </button>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            ¿Ya tienes una cuenta?{" "}
            <a href="/signin" className="font-semibold text-gray-600">
              Ingresa
            </a>
          </Typography>
        </form>

        {/* Authentication */}
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
