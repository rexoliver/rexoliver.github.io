import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Layout from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import WIP from './components/WIP';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
      <>
          <Router>
            <Routes>
              {/* <Route path="/" element={<Projects />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/" element={<WIP/>} />
            </Routes>
          </Router>
      </>
  );
};
export default App;
