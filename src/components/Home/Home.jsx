import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getWork } from "../../toolkit/thunks";
import { getUser } from "../../toolkit/Users/usersHandler";

import Header from "../Header/Header";
import Nav from "../PanelUser/Nav";
import Card from "../Cards/Card";
import Filters from "../filters/Filters";
import Footer from "../Footer/Footer";
import Paginated from "../Paginated/Paginated";
import Loader from "../Loader/Loader";

export default function Home() {

  const { id } = useParams();
  
  const dispatch = useDispatch();

  const  { userCredentials }  = useSelector(state => state.users);

  const { work, isLoading } = useSelector((state) => state.work);

  const numberOfWorks = work.length;

  //paginado
  const [index, setIndex] = useState(0); // se crea este estado dentro de "HomePage" con la finalidad de pasarlo por props al componente "Nav" y utilizarlo, pero el uso principal de este hook es en el componente "Paginado"

  const [workForPage, setWorkForPage] = useState(15);
  const [page, setPage] = useState(1);

  const inicio = (page - 1) * workForPage;

  const final = inicio + workForPage;

  const works = work.slice(inicio, final);
  //----------

  useEffect(() => {
    dispatch(getWork());
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id));
    }
  }, [id, userCredentials]);


  return (
    <div className="relative justify-center items-center h-screen">
      {isLoading 
      ? <Loader/> : (
        <div>
        {
          userCredentials && userCredentials.uid === id ? <Nav/> : <Header/>
        }
            <div>
            <Filters setIndex={setIndex} setPage={setPage} />
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
        </div>
      )
    }
    </div>
  );
}
