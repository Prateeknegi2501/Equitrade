import React from "react";

const Brokerage = () => {
  return (
    <div className="container mx-2 text-center" style={{ marginTop: "10rem" }}>
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img
            style={{ width: "75%" }}
            src="media/images/pricingEquity.svg"
            alt="pricingEquity"
          />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0
            brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img
            style={{ width: "75%" }}
            src="media/images/intradayTrades.svg"
            alt="intradayTrades"
          />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img
            style={{ width: "75%" }}
            src="media/images/pricingEquity.svg"
            alt="pricingEquity"
          />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
