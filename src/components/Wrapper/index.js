import React from "react";
//import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
// import Hero from "../Hero";

function Wrapper(props) {
  return <div className="Wrapper">{props.children}</div>;
}

export default Wrapper;
