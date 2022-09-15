import React from 'react';
import './App.css';
import pdf from './YoonsungKim.pdf';
import background from './background.mp4';
import ContactUs from './components/Contact.js';
import Projects from './components/Projects.js';
import IMAGES from './img/image';

function App() {
  return (
    <div className="App">
      <div className="header">
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="#first-section">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#fifth-section">Contact</a></li>
          </ul>
      </div>

      <div className="background">
        <video className="videoTag" autoPlay loop muted>
          <source src={background} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <h1>Welcome</h1>
        <h1>This is my website!</h1>
      </div>
      
      <div id="first-section">
        <div className="profile-card">
            <img src={ IMAGES.mypic} className="profile-pic" alt="profile-img"/>
            <h1>Hi, I'm Yoonsung Kim!</h1>
            <p>Born in Seoul, South Korea and grew up in New York, US. 
              I'm a recent graduate with a Computer Information System (CIS) degree
              from CUNY Baruch College. I enjoy listening to music and playing video games
              as hobbies. I also love eating good foods like pizza and pasta!
            </p>
        </div>
      </div>
        <div className="wrap">
          <div className="cube">
            <img src={ IMAGES.logoReact } className="react-icon" alt="react-logo"/>
            <img src={ IMAGES.logoHtml } className="html-icon" alt="html-logo"/>
            <img src={ IMAGES.logoCSS } className="css-icon" alt="css-logo"/>
            <img src={ IMAGES.logoJS } className="js-icon" alt="js-logo"/>
            <img src={ IMAGES.logoRails } className="rails-icon" alt="rails-logo"/>
            <img src={ IMAGES.logoMysql } className="mysql-icon" alt="mysql-logo"/>
          </div>
        </div>

        <div className="second-section">
            <h2>Check Out My Favorite Tools!</h2>
            <p>I enjoy using HTML, CSS, and JavaScript for Front-end. I use Ruby and Ruby on Rails for my backend development!
            I use a JavaScript library called React.js to develop websites and web apps. FYI, this website is built on React! You can also
            check out my previous works on github and my linkedin profile.</p>
        </div>
        
        <div className="third-section">
          <div className="link">
            <a href="https://github.com/jeffkim1118" target="_blank" rel="noreferrer"><img src={ IMAGES.logoGithub } className="github-icon" alt="github-logo"/></a>
            <a href="https://www.linkedin.com/in/yoonsung-kim-639b30178/" target="_blank" rel="noreferrer"><img src={ IMAGES.logoLinkedin } className="linkedin-icon" alt="linkedin-logo"/></a>
          </div>
        </div><br/><br/>

        <div>
          <div id="projects">
              <Projects />
          </div>
          
        </div>

        <div id="parallax"></div>
        <div id="resume"></div>
        <div id="fourth-section">
          <div className="resume">
              <h1>Here's My Resume!</h1>
              <a href={pdf} className="resume-link" target="_blank" rel="noreferrer">RESUME</a>
          </div>
        </div>

        <div id="fifth-section">
          <div className="contact-form-container">
            <ContactUs />
          </div>
        </div>
    </div>
  );
}

export default App;
