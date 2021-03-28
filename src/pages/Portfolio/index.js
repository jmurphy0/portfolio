import React from "react";
import Porjectdata from "../../utils/Projectdata";
import Hero from "../../components/Hero";
import Projectdata from "../../utils/Projectdata";
import Card from "../../components/Card";
import "./style.css";
function Portfolio() {
  let cards = [];
  console.log(Porjectdata);
  Projectdata.forEach((project) => {
    cards.push(Card(project));
  });
  return (
    <Hero>
      <div type="container" id="cardcont">
        {cards}
      </div>
    </Hero>
  );
}
export default Portfolio;
