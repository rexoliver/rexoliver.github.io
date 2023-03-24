import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
