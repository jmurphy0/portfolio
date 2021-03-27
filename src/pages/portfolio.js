import React from "react";
import Porjectdata from "../utils/Projectdata";
import Hero from "../components/Hero";
import Projectdata from "../utils/Projectdata";
import Card from "../components/Card";

function Portfolio() {
  let cards = [];
  console.log(Porjectdata);
  Projectdata.forEach((project) => {
    cards.push(Card(project));
  });
  return <Hero>{cards}</Hero>;
}
export default Portfolio;
