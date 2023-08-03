import React from 'react'
import { useNavigate } from 'react-router-dom'
//import './home.css'

const Card = ({work}) => {
    const navigate = useNavigate()
    //console.log(recipesAll.map(ele=>ele.instructions))
    //onClick={()=>navigate(`/detail/${id}`)}

    return(
        <div className="flex flex-wrap justify-around ml-32 ">
        <div className="justify-around m-64 rounded-md grid grid-cols-4 gap-32 -mt-1">
          

          {work.map(({id,title,image,price,category})=>(

        <div key={id} className="bg-white p-4 rounded-lg shadow-lg w-52" >
   
                <h2 className='text-black'>{title}</h2>
                <img    src={image} alt={title} />
                <h3 className='text-black'>Price: {price}</h3>
                <h3 className='text-black'>Tipos de tipo_trabajojo: {price}</h3>
                <h3 className='text-black'>Ubicación: {category}</h3>
 
        </div>

))}
            
          </div>
   
      </div>

    )
}

export default Card