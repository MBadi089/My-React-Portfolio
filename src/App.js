import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  //check the value of current page
  //conditionally return the page that matches the current page
  //fake use state
  const [currentPage, setcurrentPage] = useState()


  return (
    <Router>
      <div>
        <Nav />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        
      </div>
    </Router>
  );
}

export default App;
