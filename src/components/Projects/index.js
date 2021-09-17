import React from 'react'
import Image from 'react-bootstrap/Image';
import img1 from '../../images/UTA-Project3.png';
import img2 from '../../images/UTA-Project2.png';

export default function Projects() {
    return (
        <div className="container">
            <div class="row">
                <div class="col" xs={6} md={4}>
                    <li className="cardImage"><a href="https://github.com/MBadi089/Glad-You-Game"><img src={img1} thumbnail/></a></li>
                </div>

                <div class="col" xs={6} md={4}>
                    <li className="cardImage"><a href="https://github.com/AlfonsoCerv7/MovieReddy"><img src={img2} thumbnail/></a></li>
                </div>    
            </div>
        </div>
    )
}
