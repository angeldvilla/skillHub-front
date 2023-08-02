import React from "react"
import logoSkillHub from '../../../public/skillHub.jpg'
import { Link } from "react-router-dom"
import style from './landingPage.module.css'


export default function LandingPage () {
    return(
    <div className={style.landingpage}>
        
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
            <Link to='/home'>
              ¡Get Started!
            </Link>
          </div>

        </div>

        <div>
            <h3>You dont have an account?</h3>
            <Link to='/signup'>Sign Up Here</Link>
        </div>
    
    
    </div>
    );
}