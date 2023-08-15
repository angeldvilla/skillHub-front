import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterName,
  filterPrice,
  filterTypeWork,
  setCurrentPage,
} from "../../toolkit/slice";
import { getWork } from "../../toolkit/thunks";
import SearchBar from "../SearchBar/SearchBar";
import { getTypes } from "../../toolkit/ActionsworkPublications";

export default function Filters() {
  const dispatch = useDispatch();

  //AGREGAMOS LAS CATEGORIAS DE TRABAJOS

  const allCategory = useSelector((state) => state.formwork.allWorkTypes);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //--------------------------------------------

  const handleOrdertitle = (event) => {
    dispatch(filterName(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleFilterPrice = (event) => {
    dispatch(filterPrice(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleFilterTypeWork = (event) => {
    dispatch(filterTypeWork(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const resetFilters = () => {
    dispatch(getWork());
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="flex justify-between items-center w-full bg-gray-900 text-gray-200 py-2">
      <div className="flex flex-row gap-8 px-40">
        <select onChange={handleOrdertitle} className="text-center rounded-md">
          <option className="font-bold">Orden</option>
          <option value="A-Z">Ascendente</option>
          <option value="Z-A">Descendente</option>
        </select>

        <select onChange={handleFilterPrice} className="text-center rounded-md">
          <option className="font-bold">Todos</option>
          <option value="menos de 200$">Menor 200</option>
          <option value="200$-400$">200-400</option>
          <option value="400$-600$">400-600</option>
          <option value="600$-mas">Mayor a 600</option>
        </select>

        <select
          onChange={handleFilterTypeWork}
          className="text-center rounded-md"
        >
          <option className="font-bold" value="all">
            Todos
          </option>
          {allCategory.map((element, index) => (
            <option key={index} value={element.category}>
              {element.category}
            </option>
          ))}
        </select>
        <button
          onClick={resetFilters}
          className="bg-blue-700 hover:bg-blue-800 transition duration-150 py-1 px-3 rounded-md"
        >
          Limpiar filtros
        </button>
      </div>

      <SearchBar />
    </div>
  );
}
