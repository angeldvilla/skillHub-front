import React from 'react'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const navigate = useNavigate()
  return (
    <div>TU PAGO FUE UN EXITO
        <br/>
        <button onClick={()=>navigate("/CreateWork")} >next</button>
    </div> 
  )
}

export default Message