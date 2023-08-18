import mercadopago from "../../assets/mercadopago.png";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

export default function Footer() {
  const handleOnClick = (e) => {
    toast.message(e.target.name, { description: "Próximamente" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm pt-8 w-full">
      <div className="flex flex-col flex-wrap items-center md:flex-nowrap md:flex-row md:justify-between md:mx-8 lg:mx-12 xl:justify-between xl:mx-32 2xl:mx-48">
      
        <Link to={'/terms-of-use'}> <button
          name="Condiciones de uso"
  
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition"
        >
          Condiciones de uso
        </button>
        </Link>
          <button
            name="Políticas de privacidad"
            className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
          > 
           <Link to={"/privacy-policies"}>
            Políticas de Privacidad
             </Link>
          </button>
       
        <button
          name="Políticas de cookies"
          onClick={handleOnClick}
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
        >
          POLÍTICAS DE COOKIES
        </button>
        <button
          name="Políticas de pago"
          onClick={handleOnClick}
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12 "
        >
          POLÍTICAS DE PAGO
        </button>
        <button
          name="Contacto"
          onClick={handleOnClick}
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
        > 
         CONTÁCTANOS 
         <div><FaRegUser/></div>
        </button>
      </div>
      <div className="md:flex md:flex-row md:justify-around md:px-4 xl:mx-32 xl:mt-8 2xl:mx-64">
        <div className="flex justify-center">
          <img
            src={mercadopago}
            alt="mercadopago-logo"
            className="w-40 hover:cursor-pointer"
            onClick={() => window.open("https://www.mercadopago.com.ar/")}
          />
        </div>
        <div className="flex flex-col justify-center text-center">
          <p className="font-bold text-lg mb-1.5">SKILLHUB INC.</p>
          <p>Henry Bootcamp</p>
          <p>Henry PF</p>
          <p>ARG, COL, PE - +54 123-456-7890</p>
        </div>
        <div className="text-center mt-10 mb-6 md:flex md:items-center">
          <p className="font-bold text-lg">
            Copyright © {new Date().getFullYear()} SkillHub
          </p>
        </div>
      </div>
      <Toaster />
    </footer>
  );
}
