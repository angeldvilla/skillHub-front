import React, { useEffect }from 'react'
import {useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ticket } from '../../toolkit/thunks';
import axios from 'axios';

const Mensaje = async() => {
  // const { payment_id } = useParams();
  // console.log(payment_id)
  
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//     dispatch(ticket(payment_id));
//   }, [dispatch]);

//  const {resultPago} = useSelector(state=>state.work)
//  console.log(resultPago)



  return (
    <div>Mensaje</div>
  )
}

export default Mensaje