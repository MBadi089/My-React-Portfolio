import React from 'react'
import image from '../../images/UTA-Certificate.png';

export default function Certificate() {
    return (
        <div className ="certificate-container">
            <h1 className="mycertificate">My Certificate</h1>
            <li className="certImage"><a href="https://techbootcamps.utexas.edu/coding/"><img src={image} /></a></li>
        </div>
    )
}
