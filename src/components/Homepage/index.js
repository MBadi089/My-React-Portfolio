import React from 'react';
import image from '../../images/Me.png';
import video from '../../components/video/RetroSciFi.mp4';

function Homepage() {
    return (
      <div className="homepage-container">
        <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
        >
          <source src={video} type="video/mp4" />
        </video>
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