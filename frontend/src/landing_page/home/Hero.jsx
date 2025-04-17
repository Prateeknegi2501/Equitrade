import React from "react";

const Hero = () => {
  return (
    <div className="container " style={{ padding: "1px" }}>
      <div style={{ marginTop: "10rem" }}>
        <div className="text-center">
          {/* Image Section */}
          <div
            className="mb-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{
                width: "100%",
                maxWidth: "55rem",
                borderRadius: "1rem",
                objectFit: "cover",
              }}
              src="media/images/stocks.jpg"
              alt="homeHero"
            />
          </div>

          {/* Heading */}
          <h1 style={{ marginTop: "3px", fontSize: "3rem", color: "#424242" }}>
            Invest in everything
          </h1>

          {/* Description */}
          <p className="fs-5 mt-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          {/* Sign Up Button */}
          <button className="btn btn-primary fs-5 px-5 mt-5">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
