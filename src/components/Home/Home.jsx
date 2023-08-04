import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWork } from "../../toolkit/thunks";

import Header from "../Header/Header";
import Card from "./Card";
import Filters from "../filters/Filters";
import Footer from "../Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const { work, isLoading } = useSelector((state) => state.work);

  useEffect(() => {
    dispatch(getWork());
  }, []);

  return (
    <div className="relative justify-center h-screen font-mono">
      <Header />
      <Filters />
      <span className="ml-64">Loading:{isLoading ? "True" : "False"}</span>
      <Card work={work} />
      <Footer />
    </div>
  );
}
