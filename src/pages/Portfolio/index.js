// importing required components
import React from "react";
import Porjectdata from "../../utils/Projectdata";
import Hero from "../../components/Hero";
import Projectdata from "../../utils/Projectdata";
import Card from "../../components/Card";
import "./style.css";
// Gets projectdata info then calls cards component to populate an array with the data.
function Portfolio() {
  let cards = [];
  console.log(Porjectdata);
  Projectdata.forEach((project) => {
    cards.push(Card(project));
  });
  // returning the card array wrapped in the hero image background
  return (
    <Hero>
      <div type="container" id="cardcont">
        {cards}
      </div>
    </Hero>
  );
}
export default Portfolio;
