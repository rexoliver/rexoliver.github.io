import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Layout from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
      <>
        <Layout>
          <Routes>
            <Route path="/" Component={Projects} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </Layout>
      </>
  );
};
export default App;
