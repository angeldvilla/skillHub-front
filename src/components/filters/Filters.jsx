import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterName, filterPrice, filterTypeWork } from "../../toolkit/slice";
import { getWork } from "../../toolkit/thunks";
import SearchBar from "../SearchBar/SearchBar";


export default function Filters({setIndex, setPage}) {
  //AGREGAMOS LOS TIPOS DE TRABAJOS
  //const { filterWork } = useSelector((state) => state.work);
  const typeWork = ["men's clothing" , "women's clothing", "jewelery",  "electronics"];
  // filterWork.map((ele) => {
  //   if (typeWork.indexOf(ele.category) === -1) typeWork.push(ele.category);
  // });
  //--------------------------------------- cambiar con tipos de trabajo

  const dispatch = useDispatch();

  const handleOrdertitle = (event) => {
    dispatch(filterName(event.target.value));
  };

  const handleFilterPrice = (event) => {
    dispatch(filterPrice(event.target.value));
    setIndex(0);
    setPage(1);
  };

  const handleFilterTypeWork = (event) => {
    dispatch(filterTypeWork(event.target.value));
    setIndex(0);
    setPage(1);
  };

  const resetFilters = () => {
    dispatch(getWork());
    setIndex(0);
    setPage(1);
  };

  return (
    <div className="flex justify-center items-center mb-1 h-10 bg-blue-900 gap-80">
      <div className="gap-5 justify-center items-center space-x-4 p-20 ml-48">
        <select
          onChange={handleOrdertitle}
          className="w-45 h-auto rounded-full items-center justify-center text-black"
        >
          <option>Order Alphabetical</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <select
          onChange={handleFilterPrice}
          className="w-45 h-auto rounded-full items-center justify-center text-black"
        >
          <option>all</option>
          <option value="menos de 100$">menos de 100$</option>
          <option value="100$-200$">100$-200$</option>
          <option value="200$-300$">200$-300$</option>
          <option value="400$-mas">400$-mas</option>
        </select>

        <select
          onChange={handleFilterTypeWork}
          className="w-45 h-auto rounded-full items-center justify-center text-black"
        >
          <option value="all">all</option>
          {typeWork.map((work, index) => (
            <option key={index} value={work}>
              {work}
            </option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
        >
          RESET
        </button>
      </div>

      <SearchBar setIndex={setIndex} setPage={setPage}/>

      {/* COLUMNA IZQUIERDA (FILTRO POR UBICACION) */}
      <div className="absolute left-0 top-40 w-64 p-px-10 border-3 text-white text-center text-1xl">
        <p className="bg-blue-900 mb-6 w-full">
          Services In (country selected)
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Rubro 1</p>
          <p>Rubro 2</p>
          <p>Rubro 3</p>
          <p>Rubro 4</p>
        </div>

        <p className="bg-blue-900 mt-6 mb-6 w-full text-center">
          Users Searches
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Programmer</p>
          <p>Gardener</p>
          <p>Electrician</p>
          <p>Domiciliary</p>
        </div>

        <p className="bg-blue-900 mt-6 mb-6 w-full text-center">
          Others Countrys
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Argentina</p>
          <p>Colombia</p>
          <p>Perú</p>
          <p>Chile</p>
        </div>
      </div>
      {/* COLUMNA IZQUIERDA (FILTRO POR UBICACION) */}
    </div>
  );
}

{ 
  /* <div className="flex justify-center items-center mt-8 mb-80 h-10 bg-blue-900 gap-80">
        <div className="gap-5 justify-center items-center space-x-2 p-20">
          <select className="w-32 h-auto rounded-full items-center justify-center text-white">
            <option value="" className="text-white italic">
              MATH TEACHER
            </option>
            <option value="Programmer" className="text-white italic">
              PROGRAMMER
            </option>
            <option value="Gardener" className="text-white italic">
              GARDENER
            </option>
            <option value="Electrician" className="text-white italic">
              ELECTRICIAN
            </option>
            <option value="Domiciliary" className="text-white italic">
              DOMICILIARY
            </option>
          </select>

          <select className="w-35 h-auto rounded-full items-center justify-center text-white space-x-7">
            <option value="" className="text-white italic">
              CHOOSE COUNTRY
            </option>
            <option value="Argentina" className="text-white italic">
              ARGENTINA
            </option>
            <option value="Colombia" className="text-white italic">
              COLOMBIA
            </option>
            <option value="Perú" className="text-white italic">
              PERÚ
            </option>
          </select>

          <select className="w-32 h-auto rounded-full items-center justify-center text-white">
            <option value="" className="text-white italic">
              CHOOSE CITY
            </option>
          </select>
        </div>

        <div className=" justify-center items-center space-x-7">
          <input
            type="text"
            placeholder="Example: Programmer"
            className="text-center italic"
          />

          <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            ENTER
          </button>
        </div>
      </div> */
}
