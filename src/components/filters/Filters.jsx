import React from 'react'
import './filters.css'
import { useDispatch } from 'react-redux'
import { filterName, filterPrice } from '../../toolkit/slice'

const Filters = () => {
    const dispatch = useDispatch()

    const handleOrdertitle=(event)=>{
        dispatch(filterName(event.target.value))
    }

    const handleFilterPrice=(event)=>{
        dispatch(filterPrice(event.target.value))
    }



  return (
    <div>
        <section id='section-home'>
            
                <div>
                    <select className='input' placeholder='Orden'onChange={handleOrdertitle} >
                        <option  >Select for name</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>    
                </div>

                <div>
                    <select className='input' placeholder='Type Work' >
                            <option  value="work">type of work</option>
                            {/* {typeWork.map((work)=>(
                            <option  key= {work.id} value={work.name} >{work.name}</option>
                            ))} */}
                    </select>
               </div>
  
               <div>
                    <select className='input' placeholder='Orden'onChange={handleFilterPrice} >
                        <option  >Filter for price</option>
                        <option value="menos de 50$">menos de 50$</option>
                        <option value="50$-100$">50$-100$</option>
                        <option value="100$-200$" >100$-200$</option>
                        <option value="200$-mas">200$-mas</option>

                    </select>
               </div>

                <div>
                    <select className='input' placeholder='Orden' >
                        <option  >Ubication </option>
                        {/* <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option> */}
                    </select>
                </div>

                <div>
                    <button className='input' >Reset</button>
                </div>
            </section>

    </div>
    
  )
}

export default Filters


















// import React, { useEffect } from "react";
// import Card from "./Card";
// import { useDispatch, useSelector } from "react-redux";
// import { getWork } from "../../toolkit/thunks";
// import './home.css'
// import Nav from "../nav/Nav";
// import Filters from "../filters/Filters";

// export default function Home() {
//   const dispatch = useDispatch()
//   const {filterWork,work,isLoading}=useSelector(state=>state.work)

//    useEffect(()=>{
//      dispatch(getWork())
//    },[])

//    console.log(work)
//    console.log(isLoading)


//     return (
//         < div className="conteiner">
//             <h1>ESTOY EN EL HOME</h1>
//             <Nav/>
//             <Filters/>
//             <span>Loading:{isLoading ? 'True' : 'False'}</span>
//             <Card work={work}/>
//         </div>
//       );
// }






