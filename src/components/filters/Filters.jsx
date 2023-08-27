import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterName,
  filterPrice,
  filterTypeWork,
  setCurrentPage,
  resetFilters,
} from "../../toolkit/slice";
import SearchBar from "../SearchBar/SearchBar";
import { getTypes } from "../../toolkit/ActionsworkPublications";
import { Button, Select, Option } from "@material-tailwind/react";

export default function Filters() {
  const dispatch = useDispatch();
  const [selectKey, setSelectKey] = useState(0);

  const categories = useSelector((state) => state.formwork.allWorkTypes);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleOrdertitle = (value) => {
    dispatch(filterName(value));
    dispatch(setCurrentPage(1));
  };

  const handleFilterPrice = (value) => {
    dispatch(filterPrice(value));
    dispatch(setCurrentPage(1));
  };

  const handleFilterTypeWork = (value) => {
    dispatch(filterTypeWork(value));
    dispatch(setCurrentPage(1));
  };

  const handleReset = () => {
    setSelectKey((prevKey) => prevKey + 1);
    dispatch(resetFilters());
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="flex justify-between items-center w-full py-5 px-10 border-b-2 bg-gray-900">
      <div className="flex items-center gap-4 px-8">
        <div className="w-60">
          <Select
            label="Ordenar"
            labelProps={{
              className: "text-gray-200",
            }}
            key={selectKey}
            onChange={handleOrdertitle}
          >
            <Option
              value="A-Z"
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
            >
              Ascendente
            </Option>
            <Option
              value="Z-A"
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
            >
              Descendente
            </Option>
          </Select>
        </div>
        <div className="w-60">
          <Select
            label="Precio"
            labelProps={{
              className: "text-gray-200",
            }}
            key={selectKey}
            onChange={handleFilterPrice}
          >
            <Option className="text-gray-800 hover:bg-gray-300 transition duration-150">
              Todos
            </Option>
            <Option
              value="menos de 200$"
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
            >
              Menor 200
            </Option>
            <Option
              value="200$-400$"
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
            >
              200-400
            </Option>
            <Option
              value="400$-600$"
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
            >
              400-600
            </Option>
            <Option
              value="600$-mas"
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
            >
              Mayor a 600
            </Option>
          </Select>
        </div>
        <div className="w-60">
          <Select
            label="Categoría"
            labelProps={{
              className: "text-gray-200",
            }}
            key={selectKey}
            onChange={handleFilterTypeWork}
          >
            {categories.map((element, index) => (
              <Option
                key={index}
                value={element.category}
                className="text-gray-800 hover:bg-gray-300 transition duration-150"
              >
                {element.category}
              </Option>
            ))}
          </Select>
        </div>
        <Button
          color="gray"
          onClick={handleReset}
          className="text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ml-10"
        >
          Limpiar filtros
        </Button>
      </div>
      <div className="flex">
        <SearchBar />
      </div>
    </div>
  );
}
