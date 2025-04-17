import React from "react";

const Universe = () => {
  return (
    <div>
      <div className="container p-5">
        <h4 className="text-center " style={{ padding: "7rem 0" }}>
          Want to know more about our technology stack? Check out the
          EquiTrade.tech blog.
        </h4>
        <div className="row text-center" style={{ marginTop: "7rem" }}>
          <h2>The EquiTrade Universe</h2>
          <p className="p-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* Partner Platforms Section */}
        <div className="row gx-5">
          {/* EquiTrade Fundhouse */}
          <div className="col-12 col-md-4">
            <img
              style={{ width: "50%", margin: "0 auto", display: "block" }}
              src="media/images/EquiTradeFundhouse.png"
              alt="EquiTrade Fundhouse"
            />
            <p
              style={{
                fontSize: "12px",
                padding: "1rem",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          {/* Sensibull */}
          <div className="col-12 col-md-4">
            <img
              style={{ width: "60%", margin: "0 auto", display: "block" }}
              src="media/images/sensibullLogo.svg"
              alt="sensibullLogo"
            />
            <p
              style={{
                fontSize: "12px",
                padding: "2rem 3rem",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          {/* Tijori */}
          <div className="col-12 col-md-4">
            <img
              style={{
                width: "60%",
                height: "36%",
                margin: "0 auto",
                display: "block",
              }}
              src="https://zerodha.com/static/images/partners/tijori.svg"
              alt="tijori"
            />
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                paddingTop: "5px",
                marginTop: "1rem",
              }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row gx-5">
          {/* Streak */}
          <div className="col-12 col-md-4">
            <img
              style={{ width: "50%", margin: "0 auto", display: "block" }}
              src="media/images/streakLogo.png"
              alt="streakLogo"
            />
            <p
              style={{
                fontSize: "12px",
                padding: "1rem",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          {/* Smallcase */}
          <div className="col-12 col-md-4">
            <img
              style={{ width: "60%", margin: "0 auto", display: "block" }}
              src="media/images/smallcaseLogo.png"
              alt="smallcase Logo"
            />
            <p
              style={{
                fontSize: "12px",
                padding: "1rem 5rem",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          {/* Ditto */}
          <div className="col-12 col-md-4">
            <img
              style={{ width: "35%", margin: "0 auto", display: "block" }}
              src="media/images/dittoLogo.png"
              alt="ditto Logo"
            />
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                padding: "2rem",
                marginTop: "1rem",
              }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free.
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary fs-5 px-5 mt-5 d-block mx-auto"
          style={{ maxWidth: "200px" }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
