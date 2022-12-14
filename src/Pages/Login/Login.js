import React from "react";
import login from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div>
      <div className="hero w-full ">
        <div className="hero-content flex-col gap-20 grid  md:grid-cols-2 grid-cols-1 lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>

            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
