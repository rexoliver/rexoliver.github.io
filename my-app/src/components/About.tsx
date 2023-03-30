import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
      </header>
      <div className="main">
        <h2>Your Name</h2>
        <p>I am a Full Stack Developer with 2 years of experience, skilled in multiple programming languages and frameworks. I'm passionate about learning new technologies and building user-friendly applications.</p>
        <h3>Contact Information:</h3>
        <ul>
          <li>Phone: (123) 456-7890</li>
          <li>Email: <a className="App-link" href="mailto:rexoliver12@gmail.com">rexoliver12@gmail.com</a></li>
          <li>GitHub: <a className="App-link" href="https://github.com/rexoliver" target="_blank" rel="noopener noreferrer">github.com/rexoliver</a></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
