import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  //check the value of current page
  //conditionally return the page that matches the current page
  //fake use state

  function mynewFunction() {
    console.log("helloooo")
  };

  return (
    <div>
      <Nav testState={mynewFunction}></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
