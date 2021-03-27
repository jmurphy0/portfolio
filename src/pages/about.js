import React from "react";

function About() {
  return (
    <div class="container-m md-auto content" id="aboutContainer">
      <div class="row">
        <div class="col-md-8 cards card text-white bg-dark mb-3">
          <h1>About Me</h1>
          <div class="row">
            <div class="col-md-3">
              <img
                src="../imgs/myPic.jpeg"
                class="img-thumbnail mb-3 border-0 bg-dark"
                alt="j murphy"
              />
            </div>
            <div id="abtme" class="col-md-8 mb-3 pb-3">
              <p>
                {" "}
                I am a student at the University of Toronto SCS full-stack
                bootcamp. Currently residing in Toronto, Canada. I received my
                bachelors degree in applied economics from Queen’s University in
                2014. Check out my Github and LinkedIn pages below.
                <br /> Like what you see? Grab a resume!{" "}
              </p>
              <div class="text-center">
                <a href="https://github.com/jmurphy0" target="_blank">
                  <button class="btn btn-secondary">
                    <i class="bi bi-github"></i>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/john-murphy-14b8a165"
                  target="_blank"
                >
                  <button class="btn btn-secondary ">
                    <i class="bi bi-linkedin"></i>
                  </button>
                </a>
                <a href="assets/JMurphyResume.pdf" download>
                  <button class="btn btn-secondary mt-1">John's resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
