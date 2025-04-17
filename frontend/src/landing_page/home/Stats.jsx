import React from "react";

const Stats = () => {
  return (
    <div className="container p-5" style={{ color: "#525252" }}>
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 pe-5">
          <h2 className="pb-3 px-5">Trust with confidence</h2>
          <div className="px-5 py-3">
            <h5>Customer-first always</h5>
            <p>
              That's why 1.5+ crore customers trust EquiTrade with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="px-5 py-3">
            <h5>No spam or gimmicks</h5>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="px-5 py-3">
            <h5>The EquiTrade universe</h5>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="px-5 py-3">
            <h5>Do better with money</h5>
            <p>
              With initiatives like
              <a className="text-decoration-none" href="">
                Nudge
              </a>
              and
              <a className="text-decoration-none" href="">
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 pe-5 d-flex flex-column align-items-center">
          <img
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" ,borderRadius:"1rem"}}
            src="media/images/ecosystem.png"
            alt=""
          />
          <div
            className="row ms-5 p-5"
            style={{ fontWeight: 500, textAlign: "center" }}
          >
            <div className="col-12 col-md-7 mb-3">
              <a className="text-decoration-none" href="">
                Explore our product <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-12 col-md-5">
              <a className="text-decoration-none" href="">
                Try kite demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
