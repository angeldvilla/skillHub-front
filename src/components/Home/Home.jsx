import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWork } from "../../toolkit/thunks";

import Header from "../Header/Header";
import Card from "./Card";
import Filters from "../Filters/Filters";
import Footer from "../Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const {work, isLoading } = useSelector((state) => state.work);

  useEffect(() => {
    dispatch(getWork());
  }, []);


  return (
    <div className="relative justify-center h-screen font-mono">
      <Header />
      <Filters />
      <span>Loading:{isLoading ? "True" : "False"}</span>

      <div className="absolute left-0 top-52 w-64 p-px-10 border-3 text-white text-center text-1xl">
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
      <Card work={work}/>

      <Footer />
    </div>
  );
}
