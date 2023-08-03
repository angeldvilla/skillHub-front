import { useState } from "react";
import {
  validateUserData,
  resetUserData,
} from "../../utils/userDataValidation";
import passwordEye from "../../assets/password-eye.svg";
import phone from "../../assets/phone.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import email from "../../assets/email.png";

export default function Register() {
  const fakeDb = [];

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmptyValues = Object.values(userData).some(
      (value) => value === ""
    );
    const hasErrors = Object.keys(errors).length;

    if (hasEmptyValues || hasErrors) {
      alert("Complete all fields");
      return;
    }

    const { firstName, lastName, email, phoneNumber, password } = userData;

    const newUser = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };

    fakeDb.push(newUser);
    console.log("Users: ", fakeDb);

    // dispatch(postUser(userData));
    resetUserData(setUserData);
    alert("User created successfully");
  };

  const handleReset = () => {
    resetUserData(setUserData);
    setErrors({});
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center bg-sky-950 p-10 rounded-lg"
      >
        <h1 className="text-3xl text-center leading-10 text-white mt-1 mb-6">
          SIGN UP
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="pl-2 mb-1 text-lg">
              FIRST NAME
            </label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
            />
            {errors.firstName && (
              <span className="text-center text-red-500 mb-1">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="pl-2 mb-1 text-lg">
              LAST NAME
            </label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
            />
            {errors.lastName && (
              <span className="text-center text-red-500 mb-1">
                {errors.lastName}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pl-2 mb-1 text-lg">
              EMAIL
            </label>
            <div className="relative">
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img src={email} className="absolute top-0 right-1 w-9 h-9" />
            </div>
            {errors.email && (
              <span className="text-center text-red-500 mb-1">
                {errors.email}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="pl-2 mb-1 text-lg">
              PHONE NUMBER
            </label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img src={phone} className="absolute top-0 right-1 w-8 h-8" />
            </div>
            {errors.phoneNumber && (
              <span className="text-center text-red-500 mb-1">
                {errors.phoneNumber}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pl-2 mb-1 text-lg">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="bg-zinc-200 p-1.5 mb-2 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img
                src={passwordEye}
                className="absolute top-0 right-1 w-8 h-8"
              />
            </div>
            {errors.password && (
              <span className="text-center text-red-500 mb-1">
                {errors.password}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="pl-2 mb-1 text-lg">
              CONFIRM PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                className="bg-zinc-200 p-1.5 mb-2 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img
                src={passwordEye}
                className="absolute top-0 right-1 w-8 h-8"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-center text-red-500 mb-1">
                {errors.confirmPassword}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <button className="p-2 mt-10 bg-emerald-600 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-600 hover:shadow-md transition">
            SIGN UP
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 mt-3 mb-12 bg-gray-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-md transition"
          >
            RESET FORM
          </button>
        </div>
        <div className="bg-zinc-200 w-56 h-0.5 mb-5"></div>
        <h4 className="text-lg mb-5">OR CONTINUE WITH</h4>
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
    </div>
  );
}
