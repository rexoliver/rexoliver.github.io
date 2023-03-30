import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
      <div className="App">
        <header className="Section-header">
          <h1>Contact Me</h1>
        </header>
        <div className="main">
          <p>I would love to hear from you! Feel free to reach out using any of the contact methods below:</p>
          <ul>
            <li>Phone: (803) 622-7187</li>
            <li>Email: <a className="App-link" href="mailto:rexoliver12@gmail.com">youremail@example.com</a></li>
            <li>GitHub: <a className="App-link" href="https://github.com/rexoliver" target="_blank" rel="noopener noreferrer">github.com/rexoliver</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Contact;