import React from "react";
import Hero from "../../components/Hero";

function Contact() {
  return (
    <Hero>
      <article id="contactContainer" class="container-m ms-auto content">
        <section class="row">
          <section class="col-md-8 bg-dark pt-3 pb-3">
            <header id="contactHeader">
              <h1>Contact</h1>
            </header>
            <section class="mb-3">
              <label for="exampleFormControlInput1" class="form-label text">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </section>
            <section class="mb-3">
              <label for="exampleFormControlInput1" class="form-label text">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="jack"
              />
            </section>
            <section class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label text">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </section>
            <button type="submit" class="btn btn-primary mb-3">
              Submit
            </button>
          </section>
        </section>
      </article>
    </Hero>
  );
}
export default Contact;
