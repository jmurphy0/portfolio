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
    //using router for pathing
    <Router>
      {/* Navbar at the top of each page  */}
      <Navbar />
      {/* wrapper component to wrap pages in a div */}
      <Wrapper>
        <>
          {/* routes to about contact and portfolio */}
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </>
      </Wrapper>
      {/* sticky footer for each page  */}
      <Footer />
    </Router>
  );
}

export default App;
