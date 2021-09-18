import React from 'react';
import img from '../../images/Me';

function About() {
    return (
        <div class="container">
          <h1>Marcos Badillo</h1>
          <h2>Entry Level Software Developer</h2>
          <div class="image" img src={img}></div>
          <p id="about">I attended the Full-Stack Web Development at The University of Texas at Austin coding bootcamp and received my certificate. 
                        I am an entry-level Software Developer seeking full time opportunities developing full stack technologies and APIs  .
          </p>
      </div>
    );
}

export default About;