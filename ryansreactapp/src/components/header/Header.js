import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar from "../../components/About";
import Navbar from "../../components/Work";
import Navbar from "../../components/Resume";
import Navbar from "../../components/Contact";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

class Header extends Component {
  render() {
    return (
      <Hashrouter>
        <header className="header">
          <div><h1>Ryan Evans</h1></div>
        </header>
        <div className="conent">
          <Route exact path="/" render={() => (<Redirect to="/about" />)} />
          <Route path="/work" component={Work} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </Hashrouter>
    )

  }
}





export default Header;
