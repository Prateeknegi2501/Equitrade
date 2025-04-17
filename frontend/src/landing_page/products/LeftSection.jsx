import React from "react";

const LeftSection = ({
  image,
  Title,
  description,
  demo,
  link1,
  link2,
  learnmore,
  playstore,
  appstore,
}) => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <div className="row align-items-center">
        <div className="col-lg-7 col-12 d-flex justify-content-center">
          <img
            src={image}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              objectFit: "cover",
            }}
            alt="left-section-image"
          />
        </div>
        <div className="col-lg-5 col-12 mt-4 mt-lg-0">
          <h2>{Title}</h2>
          <p>{description}</p>
          <div className="py-4">
            <a className="text-decoration-none" href={demo}>
              {link1}
            </a>
            <a className="text-decoration-none ms-lg-5" href={learnmore}>
              {link2}
            </a>
          </div>
          <div className="py-3">
            <a href={playstore}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Store"
                style={{ maxWidth: "120px" }}
              />
            </a>
            <a href={appstore} className="ms-3">
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ maxWidth: "120px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
