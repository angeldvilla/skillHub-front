import Image from 'next/image'

export default function SignIn() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              alt="login-img"
              className="max-w-sm rounded-lg shadow-2xl"
              height={200}
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              width={200}
            />
            <div className="px-2 text-center">
              <h1 className="text-5xl font-bold">Welcome again!</h1>
              <p className="px-6 py-6">
                Sign in in your account use your credentials or create a new
                account if you dont have one for use our services.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body">
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
              <label className="label" htmlFor="sign-up">
                <a
                  className="link-hover link label-text-alt text-end text-blue-600"
                  href="/sign-up"
                >
                  Dont have an account? Sign up
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success text-white" type="button">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
