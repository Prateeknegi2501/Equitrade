import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5" style={{ color: "#27272a" }}>
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-5 col-md-12 px-3">
          <h2 className="px-5">Unbeatable pricing</h2>
          <p className="px-5 mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            className="px-5 text-decoration-none"
            style={{ fontWeight: 500 }}
            href=""
          >
            See pricing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </div>

        {/* Icon Section */}
        <div className="col-lg-7 col-md-12 mt-5">
          <div className="row">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                style={{ width: "80px" }}
                src="media/images/pricingEquity.svg"
                alt="pricingEquity"
              />
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  paddingTop: "10px",
                  margin: "0",
                }}
              >
                Free account opening
              </p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                style={{ width: "80px" }}
                src="media/images/pricingEquity.svg"
                alt="pricingEquity"
              />
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  paddingTop: "10px",
                  margin: "0",
                }}
              >
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                style={{ width: "80px" }}
                src="media/images/intradayTrades.svg"
                alt="pricingEquity"
              />
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  paddingTop: "10px",
                  margin: "0",
                }}
              >
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
