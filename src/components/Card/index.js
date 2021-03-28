import React from "react";
import "./style.css";
// card component takes project info and populates a card with
// the title, img, description, github link, and livelink.
function Card(props) {
  return (
    <section class="col-md-6 mb-5" id="card">
      <a href={props.liveLink} target="_blank">
        <img src={props.img} class="img-thumbnail" alt={props.name} />
      </a>
      <a href={props.githubLink} target="_blank">
        <p class="ptitle">{props.title}</p>
      </a>
      <p class="text">{props.description}</p>
    </section>
  );
}
export default Card;
