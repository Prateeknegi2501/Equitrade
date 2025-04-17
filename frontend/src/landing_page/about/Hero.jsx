import React from "react";

const Hero = () => {
  return (
    <div className="container" style={{ padding: "1px", }}>
      <div style={{ marginTop:"10rem" }}>
        <h2 className="px-5 pb-3 text-center">
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h2>
        <div className="row py-2">
          <div className="col-lg-6 col-md-12 py-3 px-4 fs-6">
            <p style={{ fontSize: "17px" }}>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company EquiTrade, a combination of Equi and "Trade" <br />
              <br />
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India. <br />
              <br /> Over 1+ Crore clients place millions of orders every day
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 py-3 px-4">
            <p style={{ fontSize: "17px" }}>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.{" "}
              <br />
              <br />
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets. <br />
              <br />
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
