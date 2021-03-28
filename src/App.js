import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Portfolio from "./pages/Portfolio/index";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
