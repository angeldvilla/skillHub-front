import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWork } from "../../toolkit/thunks";
import { getUser } from "../../toolkit/Users/usersHandler";
import axios from "axios";
import Header from "../Header/Header";
import Nav from "../PanelUser/Nav";
import Card from "../Cards/Card";
import Filters from "../filters/Filters";
import Footer from "../Footer/Footer";
import Paginated from "../Paginated/Paginated";


export default function Home() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userCredentials } = useSelector((state) => state.users);
  const { work, currentPage } = useSelector((state) => state.work);

  const worksPerPage = 8;
  const totalPages = Math.ceil(work.length / worksPerPage);

  const [allUsersPayment,setAllUseersPayment] = useState([])
  
  useEffect(() => {
    dispatch(getWork());
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getUser(id));
      
    }
    usersPaymentResult()
  }, [dispatch, id, userCredentials, work.length]);

  
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = work.slice(indexOfFirstWork, indexOfLastWork);

  
  //! RELACION DE MODELO USUARIOS CON PAYMENT
  
  const usersPaymentResult = async()=>{ //! la base de datos esta modificado
    const resultPaymentUser = await axios(`https://skillhub-back-production.up.railway.app/payment/${id}`)
    setAllUseersPayment(resultPaymentUser.data.filter(element=>element.subscription===true))
  }

  const modifDate=async()=>{
    await axios.put(`https://skillhub-back-production.up.railway.app/user/${id}`,{ pay:allUsersPayment[0]._id})
  }

    useEffect(() => {

      allUsersPayment.length !==0?modifDate():allUsersPayment.length
      
    } );



  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (id === "Zqaz0B6durdS841Bd7e3qJdbjEU2") setIsAdmin(true);
  }, [id]);


  return (
    <div className="flex flex-col justify-center items-center">
      {isAdmin ? (
        <div className="ml-3 mr-3 h-screen mt-8">
          <Nav />
          <h2 className="text-4xl mb-5 font-semibold font-mono italic flex justify-center">
            Servicios
          </h2>
          <Filters />
          <Paginated totalPages={totalPages} />
          <Card work={currentWorks} />
          <Paginated totalPages={totalPages} />
        </div>
      ) : (
        <>
          {userCredentials && userCredentials.uid === id ? <Nav /> : <Header />}
          <Filters />
          <Paginated totalPages={totalPages} />
          <Card work={currentWorks} />
          <Paginated totalPages={totalPages} />
          <Footer />
        </>
      )}
    </div>
  );
}
