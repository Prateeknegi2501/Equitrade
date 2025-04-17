import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./error.jsx";
import "./login.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) return handleError("Enter email and password");

    try {
      const response = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, token, name, error } = result;
      console.log(token);
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token); 
        console.log(token);

        localStorage.setItem("loggedInUser", name);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        const errMsg = error?.details?.[0]?.message || "Login failed";
        handleError(errMsg);
      }
    } catch (err) {
      handleError(err.message || "Something went wrong");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{ backgroundColor: "#2563EB" }}
        className="fixed top-0 w-full z-[1000] shadow-sm border-b border-blue-700"
      >
        <div className=" mx-8 px-4 py-4 flex items-center justify-between">
          <Link
            to="http://localhost:5174/"
            className="text-white italic font-semibold  text-4xl"
          >
            EquiTrade
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-800 px-2 py-1 border-1 border-zinc-800 rounded-lg focus:outline-none lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out lg:flex lg:items-center w-full lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:ml-auto gap-4 mt-4 lg:mt-0 text-white">
              <li>
                <Link
                  to="http://localhost:5174/signup"
                  className="hover:underline"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:5174/about"
                  className="hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:5174/products"
                  className="hover:underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:5174/pricing"
                  className="hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:5174/support"
                  className="hover:underline"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="min-h-screen pt-24 flex items-center justify-center bg-white">
        <div className="bg-white border-1 border-zinc-200 p-6 shadow-2xl rounded-lg w-full max-w-sm">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-md text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={loginInfo.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-md text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={loginInfo.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300"
            >
              Login
            </button>
            <p className="text-center mt-4 text-md text-gray-600">
              Don't have an account?{" "}
              <Link
                to="http://localhost:5174/signup"
                className="text-blue-600 hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#FBFBFB] px-4 py-8 text-gray-500 font-sans mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-blue-600 italic font-bold text-2xl mb-3">
                EquiTrade
              </h3>
              <p className="text-md">
                © 2010 - 2025, EquiTrade Broking Ltd. All rights reserved.
              </p>
              <div
                className=" flex justify-center md:justify-start gap-5 text-xl mt-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  fontSize: "20px",
                  marginTop: "15px",
                }}
              >
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div
                className="flex justify-center md:justify-start gap-5 text-xl mt-4 "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  fontSize: "20px",
                  marginTop: "15px",
                }}
              >
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-telegram"></i>
              </div>
            </div>

            <div className="lg:ms-20">
              <h4 className="text-xl  font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-md">
                {[
                  "About",
                  "Products",
                  "Pricing",
                  "Referral programme",
                  "Careers",
                  "EquiTrade.tech",
                  "Open source",
                  "Press & media",
                  "EquiTrade Cares (CSR)",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:ms-20">
              <h4 className="text-xl font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-md">
                {[
                  "Contact us",
                  "Support portal",
                  "Z-Connect blog",
                  "List of charges",
                  "Downloads & resources",
                  "Videos",
                  "Market overview",
                  "How to file a complaint?",
                  "Status of your complaints",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:ms-20">
              <h4 className="text-xl font-semibold mb-3">Account</h4>
              <ul className="space-y-2 text-md">
                <li>
                  <a href="#" className="hover:underline">
                    Open an account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Fund transfer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10  pt-6 text-xs text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "NSE",
                "BSE",
                "MCX",
                "Terms & conditions",
                "Policies & procedures",
                "Privacy policy",
                "Disclosure",
                "For investor's attention",
                "Investor charter",
              ].map((item, idx) => (
                <p key={idx} className="hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
