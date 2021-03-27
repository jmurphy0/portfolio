import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="Contact" component={Contact} />
        <Route exact path="Portfolio" component={Portfolio} />
      </>
      <Footer />
    </Router>
  );
}

export default App;
