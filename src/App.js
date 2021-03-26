import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="Contact" component={Contact} />
        <Route exact path="Portfolio" component={Portfolio} />
      </Wrapper>
      ;
    </Router>
  );
}

export default App;
