import React from "react";
//import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
// import Hero from "../Hero";
// a simple wrapper component wrapps all but the navbars in a div
function Wrapper(props) {
  return <div className="Wrapper">{props.children}</div>;
}

export default Wrapper;
