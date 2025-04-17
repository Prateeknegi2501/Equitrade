import React from "react";

const People = () => {
  return (
    <div>
      <div className="container px-5">
        <div className="row align-items-center">
          <h2 className="text-center my-2">People</h2>

          <div className="col-lg-4 col-md-6 col-12 mb-5 d-flex flex-column align-items-center justify-content-center">
            <img
              src="media/images/nithinKamath.jpg"
              alt="ceo"
              style={{
                width: "90%",
                maxWidth: "250px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="text-center mt-4">
              <h4>Nithin Kamath</h4>
              <p className="py-2">Founder, CEO</p>
            </div>
          </div>
          <div
            className="col-lg-8 col-md-6 col-12 "
            style={{ fontSize: "18px" }}
          >
            <p>
              Nithin bootstrapped and founded ZeroEquiTradedha in 2010 to
              overcome the hurdles he faced during his decade-long stint as a
              trader. Today, EquiTrade has changed the landscape of the Indian
              broking industry.
              <br />
              <br />
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC). <br />
              <br /> Playing basketball is his zen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
