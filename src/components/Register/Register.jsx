import passwordEye from "../../assets/password-eye.svg";
import phone from "../../assets/phone.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import email from "../../assets/email.png";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
      <form className="flex flex-col justify-center items-center bg-sky-950 p-10 rounded-lg">
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
              className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="pl-2 mb-1 text-lg">
              LAST NAME
            </label>
            <input
              type="text"
              name="lastName"
              className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pl-2 mb-1 text-lg">
              EMAIL
            </label>
            <div className="relative">
              <input
                type="text"
                name="email"
                className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img src={email} className="absolute top-0 right-1 w-9 h-9" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="pl-2 mb-1 text-lg">
              PHONE NUMBER
            </label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                className="bg-zinc-200 p-1.5 mb-3 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img src={phone} className="absolute top-0 right-1 w-8 h-8" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pl-2 mb-1 text-lg">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="bg-zinc-200 p-1.5 mb-2 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img
                src={passwordEye}
                className="absolute top-0 right-1 w-8 h-8"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="pl-2 mb-1 text-lg">
              CONFIRM PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                className="bg-zinc-200 p-1.5 mb-2 rounded-md w-80 text-slate-900 text-center outline-none"
              />
              <img
                src={passwordEye}
                className="absolute top-0 right-1 w-8 h-8"
              />
            </div>
          </div>
        </div>
        <button className="p-2 mt-10 mb-12 bg-emerald-600 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-600 hover:shadow-md transition">
          SIGN UP
        </button>
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
