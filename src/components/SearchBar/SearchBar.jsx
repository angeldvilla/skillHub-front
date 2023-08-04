import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWorkName } from "../../toolkit/slice";

export default function SearchBar({setIndex, setPage}) {
  const dispatch = useDispatch();
  const [work, setWork] = useState();

  const handleChange = (event) => {
    setWork(event.target.value)
  };

  const searchName = (name) => {
    dispatch(getWorkName(name))
    setIndex(0);
    setPage(1);
    setWork("");
  };

  return (
    <div className="justify-center items-center space-x-4 mr-5">
      <input
        type="text"
        placeholder="Example: Programmer"
        className="text-center italic"
        value={work}
        onChange={handleChange}
      />

      <button
        onClick={() => searchName(work)}
        className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
      >
        ENTER
      </button>
    </div>
  );
}
