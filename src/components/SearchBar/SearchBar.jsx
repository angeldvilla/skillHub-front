import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWorkForName } from "../../toolkit/thunks";
import { setCurrentPage } from "../../toolkit/slice";
import { Input } from "@material-tailwind/react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [work, setWork] = useState("");

  const handleChange = (event) => {
    setWork(event.target.value);
  };

  // FUNCION PARA BUSCAR SOLO PRESIONANDO LA TECLA ENTER
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(getWorkForName(work));
      setCurrentPage(1);
      setWork("");
    }
  };

  return (
    <div className="flex justify-center items-center px-4">
      <Input
        type="text"
        placeholder="Busca trabajos"
        value={work}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="!border !border-gray-300 bg-gray-200 text-center text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
}
