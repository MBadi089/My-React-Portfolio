import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';

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
      </main>
    </div>
  );
}

export default App;
