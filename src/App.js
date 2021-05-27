import './App.css';
import background from './background.mp4';
import kingotter from './img/kingotter.jpg'
import react from './img/react.png';
import htmllogo from './img/htmllogo.png';
import csslogo from './img/css.png';
import jslogo from './img/jslogo.png';
import phplogo from './img/php-logo.png';
import mysql from './img/mysql.png';
import github from './img/github.png';
import linkedin from './img/linkedinicon.png';

function App() {
  return (
    <div className="App">
      <div className="header">
          <ul className="nav-menu">
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Resume</a></li>
            <li><a>Contact</a></li>
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
      
      <div className="first-section">
        <div className="profile-card">
            <img src={kingotter} className="profile-pic" alt="profile-img"/>
            <h1>Hi, I'm Yoonsung Kim!</h1>
            <p>Born in Seoul, South Korea and grew up in New York, US. 
              I'm a recent graduate with a Computer Information System (CIS) degree
              from CUNY Baruch College. I enjoy listening to music and playing video games
              as hobbies. I also love eating good foods like pizza and pasta!
            </p>
        </div>

        <div className="wrap">
          <div className="cube">
            <img src={react} className="react-icon" alt="react-logo"/>
            <img src={htmllogo} className="html-icon" alt="html-logo"/>
            <img src={csslogo} className="css-icon" alt="css-logo"/>
            <img src={jslogo} className="js-icon" alt="js-logo"/>
            <img src={phplogo} className="php-icon" alt="php-logo"/>
            <img src={mysql} className="mysql-icon" alt="mysql-logo"/>
          </div>
        </div>
        <div className="second-section">
            <h2>Check Out My Favorite Tools!</h2>
            <p>I enjoy using HTML5, CSS3, and JavaScript for Front-end. I use PHP and MySQL for Back-end and database management!
            I use a JavaScript library called React.js to develop websites and web apps. FYI, this website is built on React! You can also
            check out my previous works on github and my linkedin profile.</p>
        </div>
        
        <div className="third-section">
          <div className="link">
            <a href="https://github.com/jeffkim1118" target="_blank"><img src={github} className="github-icon" alt="github-logo"/></a>
            <a href="https://www.linkedin.com/in/yoonsung-kim-639b30178/" target="_blank"><img src={linkedin} className="linkedin-icon" alt="linkedin-logo"/></a>
          </div>
        </div>

        <div className="fourth-section">
          <div className="resume">
              <h1>Here's My Resume!</h1>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
