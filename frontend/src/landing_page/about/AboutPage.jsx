import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import People from "./People";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#DBEAFE" }}>
      <Hero />
      <People />
    </div>
  );
};

export default AboutPage;
