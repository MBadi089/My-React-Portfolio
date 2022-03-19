import React from 'react'
import image from '../../images/UTA-Certificate.png';
import video from '../../components/video/RetroSciFi.mp4';

export default function Certificate() {
    return (
        <div className ="certificate-container">
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
            <h1 className="mycertificate">My Certificate</h1>
            <li className="certImage"><a href="https://techbootcamps.utexas.edu/coding/"><img src={image} alt="" /></a></li>
        </div>
    )
}
