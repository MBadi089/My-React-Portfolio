//import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Video from './components/Video';

function App() {
 
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/about" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/certificate" component={Certificate}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
