import React, {Component} from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Work from "../Work/Work";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import "./Header.css"

// By importing the Header.css file, it is added to the DOM whenever this component loads

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header className="header">
          <div><h1>Ryan Evans</h1></div>
        </header>
        <div className="content">
          <Route exact path="/about" render={() => (<Redirect to="/about" />)} /> 
          <Route path="/navbar" component={Navbar}/> 
          <Route path="/work" component={Work}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
        </div>
        </HashRouter>
    )

  }
}


export default Header;
