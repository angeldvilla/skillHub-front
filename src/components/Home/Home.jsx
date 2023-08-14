import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

  const { userCredentials } = useSelector((state) => state.users);
  const { work, isLoading, currentPage } = useSelector((state) => state.work);

  const worksPerPage = 8;
  const totalPages = Math.ceil(work.length / worksPerPage);

  useEffect(() => {
    dispatch(getWork());
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id));
    }
  }, [dispatch, id, userCredentials]);

  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = work.slice(indexOfFirstWork, indexOfLastWork);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {userCredentials && userCredentials.uid === id ? <Nav /> : <Header />}
      <Filters />
      <Paginated totalPages={totalPages} />
      <Card work={currentWorks} />
      <Paginated totalPages={totalPages} />
      <Footer />
    </div>
  );
}
