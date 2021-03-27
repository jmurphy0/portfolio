import React from "react";
import "./style.css";
import bgimg from "../../imgs/bgalt2.jpg";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: bgimg }}>
      {props.children}
    </div>
  );
}

export default Hero;
