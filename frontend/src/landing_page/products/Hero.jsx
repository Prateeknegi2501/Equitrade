import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container" style={{ color: "#27272a", padding: "1px" }}>
      <div className="text-center" style={{ marginTop: "10rem" }}>
        {/* Title */}
        <h1 className="display-4" style={{ fontSize: "4rem" }}>
          EquiTrade Products
        </h1>

        {/* Description */}
        <p className="pt-4 fs-5">
          Sleek, modern, and intuitive trading platforms
        </p>

        {/* Link */}
        <p>
          Check out our
          <Link
            style={{ textDecoration: "none", fontWeight: "500" }}
            to="/pricing"
          >
            investment offerings →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
