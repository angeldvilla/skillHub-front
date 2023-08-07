import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterName, filterPrice, filterTypeWork } from "../../toolkit/slice";
import { getWork } from "../../toolkit/thunks";
import SearchBar from "../SearchBar/SearchBar";
import { getTypes } from "../../toolkit/ActionsworkPublications";



export default function Filters({setIndex, setPage}) {
  const dispatch=useDispatch()

  //AGREGAMOS LAS CATEGORIAS DE TRABAJOS

  const allCategory = useSelector(state=>state.formwork.allWorkTypes)

  useEffect(()=>{
    dispatch(getTypes())
  },[dispatch])

  //--------------------------------------------
 

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
          className="w-45 h-auto rounded-full items-center justify-center text-black font-bold"
        >
          <option className="font-bold">ORDEN</option>
          <option value="A-Z">ASCENDENTE</option>
          <option value="Z-A">DESCENDENTE</option>
        </select>

        <select
          onChange={handleFilterPrice}
          className="w-45 h-auto rounded-full items-center justify-center text-black font-bold"
        >
          <option className="font-bold">TODOS</option>
          <option value="menos de 200$">MENOR A 200</option>
          <option value="200$-400$">200-400</option>
          <option value="400$-600$">400-600</option>
          <option value="600$-mas">MAYOR A 600</option>
        </select>

        <select
          onChange={handleFilterTypeWork}
          className="w-45 h-auto rounded-full items-center justify-center text-black font-bold"
        >
          <option className="font-bold" value="all">TODOS</option>
          {allCategory.map((element, index) => (
            <option key={index} value={element.category}>
              {element.category.toUpperCase()}
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
