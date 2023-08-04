import React from "react";
import { useDispatch } from "react-redux";
import { filterName, filterPrice } from "../../toolkit/slice";
import "./filters.css";

const Filters = () => {
  let typeWork = [
    "Programmer",
    "Gardener",
    "Painter",
    "Math Teacher",
    "Plumber",
    "Construction Worker",
    "Electrician",
    "Domiciliary",
    "Cabinetmaker",
    "Domestic Servant",
  ];
  const dispatch = useDispatch();

  const handleOrdertitle = (event) => {
    dispatch(filterName(event.target.value));
  };

  const handleFilterPrice = (event) => {
    dispatch(filterPrice(event.target.value));
  };

  return (
    <div className="flex justify-center items-center mt-8 mb-1 h-10 bg-blue-900 gap-80">
      <div className="gap-5 justify-center items-center space-x-2 p-20">
        <select
          onChange={handleOrdertitle}
          className="w-45 h-auto rounded-full items-center justify-center text-white"
        >
          <option>Select for name</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <select
          onChange={handleFilterPrice}
          className="w-45 h-auto rounded-full items-center justify-center text-white"
        >
          <option>Filter for price</option>
          <option value="menos de 50$">menos de 50$</option>
          <option value="50$-100$">50$-100$</option>
          <option value="100$-200$">100$-200$</option>
          <option value="200$-mas">200$-mas</option>
        </select>

        <select className="w-45 h-auto rounded-full items-center justify-center text-white">
          <option value="work">type of work</option>
          {typeWork.map((work, index) => (
            <option key={index} value={work}>
              {work}
            </option>
          ))}
        </select>

        <select
          onChange={handleOrdertitle}
          className="w-45 h-auto rounded-full items-center justify-center text-white"
        >
          <option>Select for name</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
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
    </div>
  );
};

export default Filters;

//   <section id="section-home">
//     <div>
//       <select
//         className="input"
//         placeholder="Orden"
//         onChange={handleOrdertitle}
//       >
//         <option>Select for name</option>
//         <option value="A-Z">A-Z</option>
//         <option value="Z-A">Z-A</option>
//       </select>
//     </div>

//     <div>
//       <select className="input" placeholder="Type Work">
//         <option value="work">type of work</option>
//         {/* {typeWork.map((work)=>(
//                         <option  key= {work.id} value={work.name} >{work.name}</option>
//                         ))} */}
//       </select>
//     </div>

//     <div>
//       <select
//         className="input"
//         placeholder="Orden"
//         onChange={handleFilterPrice}
//       >
//         <option>Filter for price</option>
//         <option value="menos de 50$">menos de 50$</option>
//         <option value="50$-100$">50$-100$</option>
//         <option value="100$-200$">100$-200$</option>
//         <option value="200$-mas">200$-mas</option>
//       </select>
//     </div>

//     <div>
//       <select className="input" placeholder="Orden">
//         <option>Ubication </option>
//         {/* <option value="Ascendente" >Ascendente</option>
//                     <option value="Descendente">Descendente</option> */}
//       </select>
//     </div>

//     <div>
//       <button className="input">Reset</button>
//     </div>
//   </section>

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
