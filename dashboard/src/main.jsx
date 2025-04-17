import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/LogIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
