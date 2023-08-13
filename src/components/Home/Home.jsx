import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWork } from "../../toolkit/thunks";

import Header from "../Header/Header";
import Card from "../Cards/Card";
import Filters from "../filters/Filters";
import Footer from "../Footer/Footer";
import Paginated from "../Paginated/Paginated";

export default function Home() {
  const dispatch = useDispatch();

  const { work, isLoading, currentPage } = useSelector((state) => state.work);

  const worksPerPage = 8;
  const totalPages = Math.ceil(work.length / worksPerPage);

  useEffect(() => {
    dispatch(getWork());
  }, [dispatch]);

  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = work.slice(indexOfFirstWork, indexOfLastWork);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Filters />
      <Paginated totalPages={totalPages} />
      <Card work={currentWorks} />
      <Paginated totalPages={totalPages} />
      <Footer />
    </div>
  );
}
