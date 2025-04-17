import React from "react";

const Footer = () => {
  return (
    <div
      className="px-4"
      style={{
        backgroundColor: "#FBFBFB",
        padding: "30px 0",
        color: "#6B7280",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="container mt-5">
        <div className="row flex justify-content-between ">
          <div className="col-lg-3 col-md-6 mb-4 text-center text-md-start">
            <h3 className="text-primary text-Blue fst-italic fw-bold mb-3">
              EquiTrade
            </h3>
            <p style={{ fontSize: "14px" }}>
              © 2010 - 2025, EquiTrade Broking Ltd. All rights reserved.
            </p>
            <div
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

          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="mb-3">Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="" style={linkStyle}>
                  About
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Products
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Referral programme
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Careers
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  EquiTrade.tech
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Open source
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Press & media
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  EquiTrade Cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="mb-3">Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="" style={linkStyle}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Support portal
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  List of charges
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Downloads & resources
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Videos
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Market overview
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Status of your complaints
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="mb-3">Account</h4>
            <ul className="list-unstyled">
              <li>
                <a href="" style={linkStyle}>
                  Open an account
                </a>
              </li>
              <li>
                <a href="" style={linkStyle}>
                  Fund transfer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center" style={{ fontSize: "12px" }}>
            <div
              className="d-flex flex-wrap justify-content-center"
              style={{ gap: "15px", marginTop: "20px" }}
            >
              <p style={footerLinkStyle}>NSE</p>
              <p style={footerLinkStyle}>BSE</p>
              <p style={footerLinkStyle}>MCX</p>
              <p style={footerLinkStyle}>Terms & conditions</p>
              <p style={footerLinkStyle}>Policies & procedures</p>
              <p style={footerLinkStyle}>Privacy policy</p>
              <p style={footerLinkStyle}>Disclosure</p>
              <p style={footerLinkStyle}>For investor's attention</p>
              <p style={footerLinkStyle}>Investor charter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const linkStyle = {
  fontWeight: "500",
  textDecoration: "none",
  color: "#696969",
};

const footerLinkStyle = {
  margin: "0 10px",
};

export default Footer;
