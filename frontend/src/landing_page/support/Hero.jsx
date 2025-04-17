import React from "react";

const Hero = () => {
  return (
    <div
      className=" marginTop-0 "
      style={{ backgroundColor: "#387FD5", height: "30rem" }}
    >
      <div className="row">
        <div
          className="col-5"
          style={{ marginTop: "8rem", marginLeft: "8rem", color: "#fff" }}
        >
          <h5>Support Portal</h5>
          <h4 className="py-3">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            className=" text-dark p-3"
            style={{ borderRadius: "5px", border: "none", width: "100%" }}
            type="text"
            placeholder="How do i activat F&O,why is my order getting rejected..."
          />
          <div className="row mt-4 fs-6">
            <div className="col">
              <p>Track account opening</p>
            </div>
            <div className="col">
              <p>Track segment activation</p>
            </div>
            <div className="col">
              <p>Intraday margins</p>
            </div>
          </div>
          <p>Kite user manual</p>
        </div>
        <div
          className="col-4 px-4"
          style={{ marginTop: "8rem",  color: "#fff", marginLeft:"5rem"}}
        >
          <a style={{color:"white", marginLeft:"18rem", fontSize:"18px"}} href="">Track Tickets</a>
          <h4 className="mt-5 ms-2">Featured</h4>
          <ol>
            <li className="mt-3"> <a className style={{color:"white"}} href="">Surveillance measure on scrips - February 2025</a> </li>
            <li  className="mt-3"><a style={{color:"white"}} href="">Latest Intraday leverages and Square-off timings</a> </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
