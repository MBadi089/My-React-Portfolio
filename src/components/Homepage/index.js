import React from 'react';
import image from '../../images/Me.png';

function Homepage() {
    return (
      <div className="homepage-container">
        <div className="homepage-row">          
        <img src={image} />
        <div className="homepage-col"> 
        <h2 className="headerTitle">Entry Level Software Developer</h2>
        <p className="about-me">I attended the Full-Stack Web Development at The University of Texas at Austin coding bootcamp and received my certificate. 
                                I am an entry-level Software Developer seeking full time opportunities developing full stack technologies and APIs  .
        </p>
        </div>
        </div>
      </div>
    );
}

export default Homepage;