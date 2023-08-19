import React from 'react'
import Home from '../Home/Home'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Admin = () => {
    const URL = "https://skillhub-back-production.up.railway.app/user"
    const {id} =useParams()
    const allUsers=async()=>{
        const users= await axios(`${URL}`)
    }
    const userAdmin=async()=>{
        const users= await axios(``)
    }

    


  return (
    <div>
        <Home/>
    </div>
  )
}

export default Admin