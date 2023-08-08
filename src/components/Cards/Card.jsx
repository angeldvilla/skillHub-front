import React from "react";
import moneyBag from '../../assets/moneyBag.svg';
import category from '../../assets/category.svg';
import ubication from '../../assets/ubication.svg';

const Card = ({ work }) => {
  return (
    <div className="flex flex-wrap justify-center ml-32 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-32 rounded-md gap-32 mt-10 items-center">
        {work.map(({ _id, title, image, address, price, ability }) => (
          <div
            key={_id}
            className="flex flex-col bg-gray-400 p-px-20 rounded-lg shadow-lg w-80 ml-16"
          >
            <h2 className="text-black text-center font-bold mt-2 mb-4 uppercase text-lg">
              {title}
            </h2>

            <div className="text-black text-center mb-4 flex justify-center items-center">
              <img
                src={image}
                alt={title}
                className="rounded-md w-58 h-40 object-cover"
              ></img>
            </div>

            <div className="text-black text-center mb-4 flex justify-center items-center">
              <img
                src={moneyBag}
                alt="Money Bag"
                className="w-11 h-12 mr-1"
              />
              <span className="ml-1 text-lg font-medium">Precio: {price}</span>
            </div>

            <div className="ml-20 text-black text-center mb-4 flex items-center">
              <img
                src={category}
                alt="Category"
                className="w-9 h-12"
              />
              <div className="ml-4 text-lg font-medium">
                <span>Categorías:</span>

                {ability.map((element) => (
                  <li key={element}>{element}</li>
                ))}
              </div>
            </div>

            <div className="text-black text-center mb-4 flex justify-center items-center">
              <img
                src={ubication}
                alt="Ubication"
                className="w-9 h-12"
              />
              <span className="ml-2 text-lg font-medium">
                Ubicación: {address.charAt(0).toUpperCase() + address.slice(1)}
              </span>
            </div>

            <div className="flex justify-center">
              <a
                href={`/jobDetail/${_id}`}
                className="bg-blue-900 hover:bg-blue-700 text-white text-center p-2 w-1/2 mb-5 rounded-full inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5 text-lg"
              >
                Más Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
