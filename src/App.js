import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  //check the value of current page
  //conditionally return the page that matches the current page
  //fake use state
  const [currentPage, setcurrentPage] = useState()


  return (
    <div>
      <Nav currentPage={currentPage} />
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
