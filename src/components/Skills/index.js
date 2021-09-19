import React from 'react'
import imgLogo1 from '../../images/reactLogo.png';
import imgLogo2 from '../../images/javascriptLogo.png';
import imgLogo3 from '../../images/htmlLogo.png';
import imgLogo4 from '../../images/cssLogo.png';

export default function Skills() {
    return (
        <div className ="skills-container">
            <h1 className="myskills">My Skills</h1>

            <section className="imageLeft">
                <img src={imgLogo1}/>
                <p className="textRight">asdfasdfasdfasdfasdfasdf</p>
            </section>

            <section className="imageRight">
                <img src={imgLogo2}/>
                <p className="textLeft">asdfasdfasdfasdfasdf</p>
            </section>

            <section className="imageLeft">
                <img src={imgLogo3}/>
                <p className="textRight">asfasdfasdfasdfasd</p>
            </section>

            <section className="imageRight">
                <img src={imgLogo4}/>
                <p className="textLeft">asdfasdfasdfasdfa</p>
            </section>
        </div>
    )
}
