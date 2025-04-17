import React from "react";

const BrokerageCalculator = () => {
  return (
    <div
      className="container py-5"
      style={{ borderTop: "1px solid lightgrey", marginTop: "5rem" }}
    >
      <div className="row">
        {/* Left Column - Information List */}
        <div className="col-12 col-md-7 ms-2 mb-4 mb-md-0">
          <h3 className="text-center fs-2 mb-5" style={{ color: "#387FD5" }}>
            Brokerage Calculator
          </h3>
          <ul>
            <li>
              Call and Trade and RMS Auto-Squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Contract Notes will be sent via email.</li>
            <li>
              Physical Copies of Contract Notes, if required, will be charged
              ₹30 per contract note. Courier charges apply.
            </li>
            <li>
              For Non-PIS accounts: ₹100 or 0.5% of the order value for equity
              (whichever is higher).
            </li>
            <li>
              For PIS accounts: ₹300 or 0.5% of the order value for equity
              (whichever is higher).
            </li>
            <li>
              If the account has a debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹30 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Column - List of Charges */}
        <div className="col-12 col-md-4 text-center">
          <h3 style={{ color: "#387FD5" }}>List Of Charges</h3>
        </div>
      </div>
    </div>
  );
};

export default BrokerageCalculator;
