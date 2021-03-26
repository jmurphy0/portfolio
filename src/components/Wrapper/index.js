import React from "react";

export default function Wrapper(props) {
  console.log(props);
  return <main className="Wrapper">{props.children}</main>;
}
