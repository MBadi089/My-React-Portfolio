import React from 'react'
import img1 from '../../images/UTA-Project3.png';
import img2 from '../../images/UTA-Project2.png';
import video from '../../components/video/RetroSciFi.mp4';

export default function Projects() {
    return (
        <div>
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
            <h1 class="myprojects"> My Projects</h1>
                <div className="project-container">              
                    <li className="cardImage"><a href="https://github.com/MBadi089/Glad-You-Game"><img src={img1} alt="" /></a></li>
                    <li className="cardImage"><a href="https://github.com/AlfonsoCerv7/MovieReddy"><img src={img2} alt="" /></a></li>            
                </div>
        </div>
    )
}
