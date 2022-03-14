import React from 'react'
import imgLogo1 from '../../images/reactLogo.png';
import imgLogo2 from '../../images/javascriptLogo.png';
import imgLogo3 from '../../images/htmlLogo.png';
import imgLogo4 from '../../images/cssLogo.png';
import video from '../../components/video/RetroSciFi.mp4';

export default function Skills() {
    return (
        <div className ="skills-container">
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
            <h1 className="myskills">My Skills</h1>

            <section className="row">
                <img src={imgLogo1} className="col"/>
                <div className="textRight col">
                    <h1 className="headerName">React</h1>
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                </div>
            </section>

            <section className="row">                
                <div className="textLeft col">
                    <h1 className="headerName">Javascript</h1>
                    <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
                </div>
                    <img src={imgLogo2} className="col"/>    
            </section>

            <section className="row">
                <img src={imgLogo3} className="col"/>
                <div className="textRight col">
                    <h1 className="headerName">HTML</h1>
                    <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                </div>
            </section>

            <section className="row">                
                <div className="textLeft col">
                    <h1 className="headerName">CSS</h1>
                    <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
                    <img src={imgLogo4} className="col"/>                
            </section>
        </div>
    )
}
