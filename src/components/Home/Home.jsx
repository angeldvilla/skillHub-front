import React, { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWork } from "../../toolkit/thunks";

import Header from "../Header/Header";
import Card from "../Cards/Card";
import Filters from "../filters/Filters";
import Footer from "../Footer/Footer";
import Paginated from "../Paginated/Paginated";

export default function Home() {
  const dispatch = useDispatch();
  const { work, isLoading } = useSelector((state) => state.work);
  const numberOfWorks= work.length



  //paginado
  const [index,setIndex]=useState(0) // se crea este estado dentro de "HomePage" con la finalidad de pasarlo por props al componente "Nav" y utilizarlo, pero el uso principal de este hook es en el componente "Paginado"
    
  const [workForPage,setWorkForPage] = useState(3)
  const [page,setPage] = useState(1) 

  const inicio = (page - 1) * workForPage;

  const final = inicio + workForPage;

  const works = work.slice(inicio, final);
  //----------

  useEffect(() => {
    dispatch(getWork());
  }, []);

  return (
    <div className="relative justify-center items-center h-screen font-mono">
      <Header />
      <Filters setIndex={setIndex} setPage={setPage}/>
      <span className="ml-64">Loading:{isLoading ? "True" : "False"}</span>
      <Paginated
        numberOfWorks={numberOfWorks}
        workForPage={workForPage}
        page={page}
        setPage={setPage}
        index={index}
        setIndex={setIndex}
      />
      <Card work={works} />
      <Paginated 
        numberOfWorks={numberOfWorks}
        workForPage={workForPage}
        page={page}
        setPage={setPage}
        index={index}
        setIndex={setIndex}
      />
      <Footer />
    </div>
  );
}
