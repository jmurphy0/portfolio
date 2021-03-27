import React from "react";
import "./style.css";

function Card(props) {
  console.log(props);
  return (
    <section class="col-md-6 mb-5" id="card">
      <a href={props.liveLink} target="_blank">
        <img src={props.img} class="img-thumbnail" alt="PantherChatroom" />
      </a>
      <a href={props.githubLink} target="_blank">
        <p class="ptitle">{props.title}</p>
      </a>
      <p class="text">{props.description}</p>
    </section>
  );
}
export default Card;
