import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Product = () => {
  return (
     <div style={{ backgroundColor: "#DBEAFE" }}>
      <Hero />
      <div className="container ">
        <LeftSection
          image="media/images/kite.png"
          Title="Kite"
          description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          demo=""
          learnmore=""
          link1="Try demo"
          link2="Learn more"
          playstore=""
          appstore=""
        />
        <RightSection
          image="media/images/console.png"
          title="Console"
          description="The central dashboard for your EquiTrade account. Gain insights into your trades and investments with in-depth reports and visualizations."
          demo=""
          link1="Learn more"
          learnmore=""
        />
        <LeftSection
          image="media/images/coin.png"
          Title="Coin"
          description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          demo=""
          link1="Learn more"
          playstore=""
          appstore=""
        />
        <RightSection
          image="media/images/kiteconnect.png"
          title="Kite Connect API"
          description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
          demo=""
          link1="Kite Connect"
          learnmore=""
        />
        <LeftSection
          image="media/images/varsity.png"
          Title="Varsity Mobile"
          description="An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          demo=""
          link1="Learn more"
          playstore=""
          appstore=""
        />
        <Universe />
      </div>
    </div>
  );
};

export default Product;
