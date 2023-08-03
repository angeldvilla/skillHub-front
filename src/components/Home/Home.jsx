import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative justify-center h-screen font-mono">
      <Header />
      <div className="flex justify-center items-center mt-8 mb-80 h-10 bg-blue-500 gap-80">
        {/* Filtros */}
        <div className="gap-5 justify-center items-center space-x-10 p-20">
        <select className="w-32 h-auto rounded-full items-center justify-center text-white">
            <option value="Programmer" className="text-white">MATH TEACHER</option>
            <option value="Programmer" className="text-white">PROGRAMMER</option>
            <option value="Gardener" className="text-white">GARDENER</option>
            <option value="Electrician" className="text-white">ELECTRICIAN</option>
            <option value="Domiciliary" className="text-white">DOMICILIARY</option>
          </select>

          <select className="w-35 h-auto rounded-full items-center justify-center text-white space-x-7">
            <option value="Programmer" className="text-white">CHOOSE COUNTRY</option>
            <option value="Gardener" className="text-white">ARGENTINA</option>
            <option value="Electrician" className="text-white">COLOMBIA</option>
            <option value="Domiciliary" className="text-white">PERÚ</option>
          </select>

          <select className="w-32 h-auto rounded-full items-center justify-center text-white">
            <option value="Programmer" className="text-white">CHOOSE CITY</option>
          </select>
        </div>

        {/* SearchBar */}
        <div className="justify-center items-center space-x-7">
          <input type="text" placeholder="Search..." />
        
          <Link
            to="/signin"
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-full inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            ENTER
          </Link>
      
        </div>
      </div>


       {/* Columna izquierda */}
       <div className="relative left-0 -mt-5 bg-transparent p-3 -top-1.5">
        {/* Contenido de la columna izquierda */}
        <p className="text-gray-800 font-bold">Información Adicional</p>
        <p>Esta es una columna fija en la parte izquierda</p>
        {/* Agrega más contenido aquí si es necesario */}
      </div>
        
      <Footer />
    </div>
  );
}
