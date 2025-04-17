import React from "react";

const RightSection = ({ title, description, learnmore, image, link1 }) => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <div className="row align-items-center">
        <div className="col-lg-4 col-12 py-5">
          <h2>{title}</h2>
          <p className="py-4">{description}</p>
          <a className="text-decoration-none" href={learnmore}>
            {link1}
          </a>
        </div>

        <div className="col-lg-8 col-12 px-5">
          <img
            src={image}
            alt="right-section"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "500px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
