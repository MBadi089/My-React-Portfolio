//import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

function App() {
 
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/certificate" component={Certificate}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
