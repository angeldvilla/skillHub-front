import logoSkillHub from '../../assets/skillHub.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <nav className='bg-primary'>
        <div className='relative w-32 h-auto '>
          <img
            src={logoSkillHub}
            className="className='absolute -top-16 rounded-full border-4 bg-sky-900 border-sky-800' "
            alt='skillHub Logo'
          />
        </div>
        <span>About Us </span>
        <span> Contact </span>
        <Link
          to='/signin'
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
        >
          Login
        </Link>
      </nav>

      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white max-w-lg mx-auto p-8 shadow-md rounded-lg'>
          <h1 className='text-3xl font-bold mb-4'>Welcome To SkillHub</h1>
          <p className='text-gray-600 mb-6'>Connecting With Talent!</p>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'>
            ¡Get Started!
          </button>
        </div>
      </div>

      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <h3>You dont have an account?</h3>
        <Link to='/signup' color='bg-blue'>
          Sign Up Here
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
