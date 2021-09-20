import React from 'react'
import imgLogo1 from '../../images/reactLogo.png';
import imgLogo2 from '../../images/javascriptLogo.png';
import imgLogo3 from '../../images/htmlLogo.png';
import imgLogo4 from '../../images/cssLogo.png';

export default function Skills() {
    return (
        <div className ="skills-container">
            <h1 className="myskills">My Skills</h1>

            <section className="imageLeft row">
                <img src={imgLogo1} className="col"/>
                <div className="col">
                <h1 className="headerName">React</h1>
                <p className="textRight">React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                </div>
            </section>

            <section className="imageRight row">                
                <div className="col">
                <h1 className="headerName">Javascript</h1>
                <p className="textLeft">JavaScript is a scripting or programming language that allows you to implement complex features on web pages</p>
                </div>
                <img src={imgLogo2} className="col"/>
                
            </section>

            <section className="imageLeft row">
                <img src={imgLogo3} className="col"/>
                <div className="col">
                <h1 className="headerName">HTML</h1>
                <p className="textRight">The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                </div>
            </section>

            <section className="imageRight row">                
                <div className="col">
                <h1 className="headerName">CSS</h1>
                <p className="textLeft">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
                <img src={imgLogo4} className="col"/>
                
            </section>
        </div>
    )
}
