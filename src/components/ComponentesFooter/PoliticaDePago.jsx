import Footer from "../Footer/Footer"
import "./componentes.css"
import Header from "../Header/Header"
import Nav from "../PanelUser/Nav";
import { IoAlertCircleOutline } from "react-icons/io5";
import Acordeon from "./utils/componenteAc/acordeonComponent";
import { useEffect, useState } from "react";
import text from './utils/text'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../toolkit/Users/usersHandler";
import Atras from "../ComponentesFooter/Atras"
export default function PoliticaDePago() {
  const [active, setActive] = useState("Hola")
  const { userCredentials } = useSelector(state => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(id));
  },[dispatch, id])
  return (
 <div> 

    {userCredentials === null ? <Header/> : <Nav/>}
    <div className="bodyStyle">
    <Atras></Atras>
    <h1> Politicas de Pago @SkillHub.netlifly.app </h1>
    <p>Última actualización: hace 5 meses</p>

    <hr />
    <h2> 
    <Acordeon title={'Suscripcion Plantino'} active ={active} setActive={setActive} texto={text.texto1}/>
    <Acordeon title={'Suscripcion Oro'} active ={active} setActive={setActive} texto={text.texto2}/>
    <Acordeon title={'Suscripcion Bronce'} active ={active} setActive={setActive} texto={text.texto3} />
</h2>
    <h2>Según las leyes aplicables en su jurisdicción, puede calificar para un reembolso. Por ejemplo, si está utilizando nuestros servicios para usted mismo (en lugar de en nombre de una empresa):</h2>
    <ul>
      <div className="containerBackgrond"> 
      <li ><IoAlertCircleOutline className="icon"/>. Si vive en Argentina o Colombia, cancelaremos su suscripción con un mes de anticipación y le reembolsaremos la parte restante del período de suscripción.</li>
      <li>. Los ciudadanos de Peru tienen derecho a un reembolso completo durante los 14 días posteriores al inicio de la suscripción.<div>Nota: Este período de 14 días comienza cuando comienza el servicio de suscripción. Por ejemplo, si se registró para una prueba gratuita de un mes, el período comienza el primer día de su prueba gratuita, por lo que no se pagarán tarifas como reembolso.</div> </li>
   <li>.Los ciudadanos de la Unión Europea tienen derecho a un reembolso completo durante los 14 días posteriores al inicio de la suscripción.<div>Nota: Este período de 14 días comienza cuando comienza el servicio de suscripción. Por ejemplo, si se registró para una prueba gratuita de un mes, el período comienza el primer día de su prueba gratuita, por lo que no se pagarán tarifas como reembolso.</div> </li>
   <li>.Si realizó una compra utilizando el débito directo del Área Única de Pagos en Euros (SEPA), tiene derecho a un reembolso de su banco según los términos y condiciones de su acuerdo con su banco. Se debe reclamar un reembolso de débito directo SEPA dentro de las ocho semanas a partir de la fecha en que se debitó su cuenta.</li>
   <li>.Si cree que su situación justifica una excepción, puede enviar su cuenta para su revisión .</li></div>
    </ul>

    

 </div>
 <div> 
    <Footer/>
    </div>
    </div>
  )
}
