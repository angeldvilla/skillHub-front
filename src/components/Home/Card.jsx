import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ work }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-around ml-12 font-serif">
      <div className="justify-around m-64 rounded-md grid grid-cols-4 gap-32 mt-10">
        {work.map(({ id, title, image, price, category }) => (
          <div key={id} className="bg-white p-px-12 rounded-lg shadow-lg w-64 flex flex-col">
            <h2 className="text-black text-center font-bold mb-4">{title}</h2>
            <img src={image} alt={title} className="rounded-full w-1/2 mb-5 ml-20 items-center"></img>
            <h3 className="text-black text-center mb-4">Price: {price}</h3>
            <h3 className="text-black text-center mb-4">Tipos de Trabajo: {category}</h3>
            <h3 className="text-black text-center mb-4">Ubicación: {category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
