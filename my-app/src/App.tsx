import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Layout from './components/Layout';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" Component={Projects} />
          <Route path="/resume" Component={Resume} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Layout>
  );
};
export default App;
