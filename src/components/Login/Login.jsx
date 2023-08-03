import passwordEye from "../../assets/password-eye.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen font-mono">
        <div className="relative w-32 h-auto ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
            alt="user-logo"
            className="absolute -top-16 rounded-full border-4 bg-sky-900 border-sky-800"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-sky-950 p-10 rounded-lg">
          <h1 className="text-3xl text-center leading-10 text-white mt-16 mb-6">
            LOGIN
          </h1>
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
              <img
                src="https://images.vexels.com/media/users/3/136339/isolated/lists/c834c10f66dc085b7bb02489e10e3638-icono-de-trazo-plano-de-mensaje-de-correo.png"
                className="absolute top-0 right-1 w-9 h-9"
              />
            </div>

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
          <button className="p-2 mt-10 mb-12 bg-emerald-600 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-600 hover:shadow-md transition">
            SIGN IN
          </button>
          <div className="bg-slate-500 w-56 h-0.5 mb-5"></div>
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
        </div>
      </div>
    </div>
  );
}
