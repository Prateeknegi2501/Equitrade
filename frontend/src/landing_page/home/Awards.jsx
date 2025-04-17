import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 p-3">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 px-5 py-2 d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{ maxWidth: "90%", borderRadius: "1rem" }}
            src="/media/images/largestBroker.svg"
            alt="Largest Stock Broker"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-12 pt-4">
          <h1
            className="mb-2 mt-3"
            style={{ fontSize: "2rem", color: "#424242" }}
          >
            Largest Stock Broker in India
          </h1>
          <p className="fs-5">
            2+ million EquiTrade clients contribute over 15% of the retail order
            volumes in India daily by trading and investing in:
          </p>

          {/* List of Investment Options */}
          <div className="row mt-4 mb-4">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity Derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img
            className="img-fluid"
            style={{ width: "100%", borderRadius: "1rem"   }}
            src="media/images/pressLogos.png"
            alt="Press Logos"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
