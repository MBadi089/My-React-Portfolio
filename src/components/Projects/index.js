import React from 'react'
import img1 from '../../images/UTA-Project3.png';
import img2 from '../../images/UTA-Project2.png';

export default function Projects() {
    return (
        <div className="projectImages">
            <li className="cardImage"><a href="https://github.com/MBadi089/Glad-You-Game"><img src={img1}/></a></li>
            <li className="cardImage"><a href="https://github.com/AlfonsoCerv7/MovieReddy"><img src={img2}/></a></li>
        </div>
    )
}
