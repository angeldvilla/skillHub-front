import funcionAtras from "./utils/functionAtras"
import { FiCornerUpLeft } from "react-icons/fi";
const Atras =()=>{
    
   return( 
    <div> 
<button className="functionAtras"
 onClick={funcionAtras}><FiCornerUpLeft/> </button>
    </div>
   ) 
}
export default Atras;