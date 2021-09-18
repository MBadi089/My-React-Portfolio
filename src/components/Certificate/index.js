import React from 'react'
import image from '../../images/UTA-Certificate.png';

export default function Certificate() {
    return (
        <div className ="certificate-container">
            <h1>My Certificate</h1>
            <img src={image} />
        </div>
    )
}
