import React from 'react'
import imgLogo1 from '../../images/reactLogo.png';
import imgLogo2 from '../../images/javascriptLogo.png';
import imgLogo3 from '../../images/htmlLogo.png';
import imgLogo4 from '../../images/cssLogo.png';
import video from '../../components/video/RetroSciFi.mp4';

export default function Skills() {
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
            <h1 class="myskills">My Skills</h1>
                <div className="skills-container">
                    <li className="imgLogo"><a href=""><img src={imgLogo1} /></a></li>
                    <li className="imgLogo"><a href=""><img src={imgLogo2} /></a></li>
                    <li className="imgLogo"><a href=""><img src={imgLogo3} /></a></li>
                    <li className="imgLogo"><a href=""><img src={imgLogo4} /></a></li>
                </div>
            </div>
    )
}
