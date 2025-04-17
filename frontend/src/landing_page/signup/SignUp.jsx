import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util/error";

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };

    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are mandatory");
    }
    try {
      const url = "http://localhost:3002/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const{success,message,error}=result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
            window.location.href = "http://localhost:5173/login";
        }, 1000);
      } else if (error) {
        const errMsg=error?.details[0]?.message
        handleError(errMsg);
      }
    
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%", marginTop: "5rem" }}
        >
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
                autoFocus
                value={signupInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={signupInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={signupInfo.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="http://localhost:5173/login">Login</Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default SignUp;
