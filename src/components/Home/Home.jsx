import { useEffect, useState } from "react";
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
import axios from "axios";
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

   //! RELACION DE MODELO USUARIOS CON PAYMENT

   const [allUsersPayment,setAllUseersPayment] = useState([])
   useEffect(() => {
     const usersPaymentResult = async()=>{ //! la base de datos esta modificado
       const resultPaymentUser = await axios(`https://skillhub-back-production.up.railway.app/payment/${id}`)
       setAllUseersPayment(resultPaymentUser.data.filter(element=>element.subscription===true))
     }
     usersPaymentResult()
 
     if(allUsersPayment.length!==0){
       
       const dataPay= { pay:allUsersPayment[0]._id}
       
       const modifDate=async()=>{
         const {data} = await axios.put(`https://skillhub-back-production.up.railway.app/user/${id}`,dataPay)
       }
       modifDate()
     }
   
   }, [id,allUsersPayment.length]);

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
