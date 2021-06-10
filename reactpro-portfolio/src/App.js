import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css';

//  import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      {/* <Navbar /> */}
      <Header />
      < About /> 
      < Work />
      <Resume /> 
      <Contact />
      <Footer />
      
    </div>



  );
}

export default App;
