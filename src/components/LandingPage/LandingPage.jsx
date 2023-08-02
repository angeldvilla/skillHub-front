import React from "react"
import logoSkillHub from '../../../public/skillHub.jpg'
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
    <div>
        <nav>
        <div>
        <img src={logoSkillHub} alt='skillHub Logo'/>
        </div>
        <span>About Us </span> 
        <span> Contact </span>
            <Link to='/signin'>
             Login
            </Link>
        </nav>

        <div>
          
          <div>
            <h1>Welcome To SkillHub</h1>
            <p>
                Connecting With Talent!
            </p>
            <button>
              ¡Get Started!
            </button>
          </div>
        </div>

        <div>
            <h3>You dont have an account?</h3>
            <Link to='/signup'>Sign Up Here</Link>
        </div>
    
    
    </div>
    );
}


export default LandingPage;