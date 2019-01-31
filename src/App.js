import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Home from './components/home';
import Work from './components/works';
import Contact from './components/contact';
import avatar from './circleavatar.png';
import linkedin from './linkedin-logo.png';
import resume from './resume.png';
import twitter from './twitter-logo.png';
import careKeeper from './homeScreen.png';


class App extends Component {
  render() {
    return (
      <div className= "container">
        <div className= "nav">
            <img src={avatar} alt="avatar"/>
            <h1>Mya Williams</h1>
            <h3>UX Enigineer</h3>
            <br/>
            <h3> 
              <ul className="menuOptions">
                <li><a  href="#about">about</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
              </ul>
              <div className="social">
            <img src={twitter}/>
            <img src={linkedin}/>
            <img src={resume}/>
            </div> 
            </h3>

        </div>
        <div className= "portfolio">
        <Home/>
        <a name="about"><About/></a>
        <a name="projects"><Work/></a>
        <a name ="contact"><Contact/></a>
        </div>
      </div>
      
    );
  }
}

export default App;
