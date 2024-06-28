import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="register-img"
          className="max-w-sm rounded-md shadow-2xl"
          height={300}
          src="/register-bg.webp"
          width={340}
        />
        <div className="px-20 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-12">
            Register with us so you can live the experience of offering your
            talent to the world, or find a talent with whom you genuinely
            connect... Welcome!!!
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                className="input input-bordered"
                placeholder="name"
                type="email"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                className="input input-bordered"
                placeholder="email"
                type="email"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                className="input input-bordered"
                placeholder="password"
                type="password"
              />
              <label className="label" htmlFor="sign-in">
                <Link
                  className="link-hover link label-text-alt text-blue-500"
                  href="/sign-in"
                >
                  Do you have an account? Login here!
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info text-white" type="button">
                Register
              </button>
            </div>
            <hr className="mt-4 w-full border-gray-600" />
            <p className="text-center">Or continue with</p>
            <kbd className="kbd kbd-md bg-gray-200 hover:bg-gray-300 hover:transition-colors hover:duration-300 hover:ease-in-out">
              <button type="button">
                <Image
                  alt="google"
                  height={25}
                  src="https://img.icons8.com/?size=256w&id=17949&format=png"
                  width={25}
                />
              </button>
            </kbd>
          </form>
        </div>
      </div>
    </div>
  )
}
