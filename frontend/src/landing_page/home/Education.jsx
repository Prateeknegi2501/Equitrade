import React from "react";

const Education = () => {
  return (
    <div className="container py-5" style={{ color: "#27272a" }}>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 px-5 mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "100%", borderRadius: "1rem" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-12 py-3">
          <h2 className="py-4" style={{ fontSize: "2rem" }}>
            Free and open market education
          </h2>
          <p className="py-1 mt-4" style={{ fontSize: "1.1rem" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="py-2 text-decoration-none" href="">
            Varsity
          </a>

          <p className="py-1 mt-4" style={{ fontSize: "1.1rem" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a className="py-2 text-decoration-none" href="">
            Trading Q&A
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
