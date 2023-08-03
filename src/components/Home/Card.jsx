import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({work}) => {
    const navigate = useNavigate()
    //console.log(recipesAll.map(ele=>ele.instructions))
    //onClick={()=>navigate(`/detail/${id}`)}

    return(
            <div className='conteiner-product'>
             
                {work.map(({id,title,image,price,category})=>(

                        <div key={id} className='product'>
                           
                                <h2 className='title'>{title}</h2>
                                <img  id='image-card'  src={image} alt={title} />
                                <h3>Price: {price}</h3>
                                <h3>Tipos de tipo_trabajojo: {price}</h3>
                                <h3>Ubicación: {category}</h3>
                         
                        </div>
                        
                    ))}
            </div>
    )
}

export default Card