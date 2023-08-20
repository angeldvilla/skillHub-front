import './acordeonStyle.css'
import { IoArrowDownSharp } from "react-icons/io5";

const Acordeon = ({title,active,setActive,texto})=>{
    return (
        <div className="accordion">
            <div className="accordionHeading">
                <div className="containerAc">
                    <p>{title}</p>
                    <span onClick={()=>setActive(title)}><IoArrowDownSharp/>
                 
                    </span>

                </div>

            </div>
            <div className={(active === title ? "show":"") + "acordionContent"}>

                <div className="containerAc"></div>
                <p>{texto}</p>
            </div>

        </div>
    )
}
export default Acordeon;