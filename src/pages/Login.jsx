import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../auth/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className="container login-container mt-5">
      <h1 className="text-center text-danger fw-bold">Login</h1>
      <form id="register" onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Please Enter Your Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Please Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <a className="my-2 d-block" href="##">
            Forget Password
          </a>
          <button type="submit" className="btn btn-primary form-control">
            Login
          </button>
          <button
            type="submit"
            className="btn btn-primary form-control mt-2"
            onClick={handleProviderLogin}
          >
            Continue With Google{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
