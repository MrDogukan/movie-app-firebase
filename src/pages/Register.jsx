import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
    createUser(email, password, navigate);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control "
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
