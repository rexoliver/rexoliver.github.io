import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact Me</h1>
        </header>
        <div className="main">
          <h2>Your Name</h2>
          <p>I would love to hear from you! Feel free to reach out using any of the contact methods below:</p>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: <a className="App-link" href="mailto:youremail@example.com">youremail@example.com</a></li>
            <li>GitHub: <a className="App-link" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Contact;