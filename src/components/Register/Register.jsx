import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../toolkit/Users/usersHandler";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import passwordEye from "../../assets/password-eye.svg";
import phone from "../../assets/phone.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import email from "../../assets/email.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateUserData,
  resetUserData,
} from "../../utils/userDataValidation";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    setErrors(validateUserData(name, value, userData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyValues = Object.values(userData).some(
      (value) => value === ""
    );
    const hasErrors = Object.keys(errors).length;

    if (hasEmptyValues || hasErrors) {
      toast.error("Complete all fields");
      return;
    }

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
      };

      dispatch(postUser(newUser));

      setTimeout(() => {
        navigate("/signin");
      }, 3000);

      resetUserData(setUserData);
      toast.success("Usuario registrado. Estás siendo redireccionado");

      return userCredentials;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleReset = () => {
    resetUserData(setUserData);
    setErrors({});
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center bg-blue-800 bg-opacity-20 p-10 rounded-lg shadow-neutral-900 shadow-lg"
      >
        <h1 className="text-3xl text-center text-white mt-1 mb-8">SIGN UP</h1>
        <div className="flex flex-col">
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="pl-2 mb-1 text-lg text-slate-300"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-3 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            {errors.firstName && (
              <span className="text-center text-red-500 mb-1">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="pl-2 mb-1 text-lg text-slate-300"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className="bg-neutral-900 opacity-50 p-1.5 mb-3 rounded-md w-80 text-neutral-100 text-center outline-none"
            />
            {errors.lastName && (
              <span className="text-center text-red-500 mb-1">
                {errors.lastName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="pl-2 mb-1 text-lg text-slate-300">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="bg-neutral-900 opacity-50 p-1.5 mb-3 rounded-md w-80 text-neutral-100 text-center outline-none"
              />
              <img src={email} className="absolute top-0 right-1 w-9 h-9" />
            </div>
            {errors.email && (
              <span className="text-center text-red-500 mb-1">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="pl-2 mb-1 text-lg text-slate-300"
            >
              Phone number
            </label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                className="bg-neutral-900 opacity-50 p-1.5 mb-3 rounded-md w-80 text-neutral-100 text-center outline-none"
              />
              <img src={phone} className="absolute top-0 right-1 w-6 h-9" />
            </div>
            {errors.phoneNumber && (
              <span className="text-center text-red-500 mb-1">
                {errors.phoneNumber}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="pl-2 mb-1 text-lg text-slate-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
              />
              <img
                src={passwordEye}
                className="absolute top-0 right-1 w-7 h-9"
              />
            </div>
            {errors.password && (
              <span className="text-center text-red-500 mb-1">
                {errors.password}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="pl-2 mb-1 text-lg text-slate-300"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                className="bg-neutral-900 opacity-50 p-1.5 mb-2 rounded-md w-80 text-neutral-100 text-center outline-none"
              />
              <img
                src={passwordEye}
                className="absolute top-0 right-1 w-7 h-9"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-center text-red-500 mb-1">
                {errors.confirmPassword}
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col">
          <button className="p-2 mt-10 bg-blue-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-700 hover:shadow-md transition">
            Sign up
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 mt-3 mb-12 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
          >
            Reset form
          </button>
        </div>

        {/* Authentication */}
        <div className="bg-gray-900 w-64 h-0.5 mb-5"></div>
        <h4 className="text-lg mb-5">Or continue with</h4>
        <div className="flex justify-center gap-6">
          <img
            src={google}
            alt="google-logo"
            className="w-9 hover:cursor-pointer transition"
          />
          <img
            src={facebook}
            alt="facebook-logo"
            className="w-10 hover:cursor-pointer transition"
          />
          <img
            src={github}
            alt="github-logo"
            className="w-10 hover:cursor-pointer transition"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
