import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imgLogo1 from '../../images/reactLogo.png';
import imgLogo2 from '../../images/javascriptLogo.png';
import imgLogo3 from '../../images/htmlLogo.png';
import imgLogo4 from '../../images/cssLogo.png';
import imgLogo5 from '../../images/mysqlLogo.png';
import imgLogo6 from '../../images/sqlLogo.png';
import imgLogo7 from '../../images/nosqlLogo.png';
import imgLogo8 from '../../images/bootstrapLogo.png';
import imgLogo9 from '../../images/jqueryLogo.png';
import imgLogo10 from '../../images/mongodbLogo.png';
import imgLogo11 from '../../images/webapiLogo.png';
import imgLogo12 from '../../images/oopLogo.png';
import imgLogo13 from '../../images/ormLogo.png';
import imgLogo14 from '../../images/mvcLogo.png';
import imgLogo15 from '../../images/pwaLogo.png';
import imgLogo16 from '../../images/githubLogo.png';
import video from '../../components/video/RetroSciFi.mp4';

export default function Skills() {
    return (
        <div>
        <video
            autoPlay
            loop
            muted
            style={{
            position: "fixed",
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
            <h1 className="myskills">Web Development</h1>
                <div className="skills-container">
                    <Row>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"><img src={imgLogo1} alt="React Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><img src={imgLogo2} alt="Javascript Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={imgLogo3} alt="HTML Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={imgLogo4} alt="CSS Icon" /></a></Col>
                    </Row>
                    <Row>
                        <Col className="imgLogo"><a href="https://www.mysql.com/"><img src={imgLogo5} alt="MySQL Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://en.wikipedia.org/wiki/SQL"><img src={imgLogo6} alt="SQL" /></a></Col>
                        <Col className="imgLogo"><a href="https://en.wikipedia.org/wiki/NoSQL"><img src={imgLogo7} alt="NoSQL" /></a></Col>
                        <Col className="imgLogo"><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"><img src={imgLogo8} alt="Bootstrap Icon" /></a></Col>
                    </Row>
                    <Row>
                        <Col className="imgLogo"><a href="https://jquery.com/"><img src={imgLogo9} alt="jQuery Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://www.mongodb.com/"><img src={imgLogo10} alt="MongoDB Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/API"><img src={imgLogo11} alt="Web API" /></a></Col>
                        <Col className="imgLogo"><a href="https://www.educative.io/blog/object-oriented-programming"><img src={imgLogo12} alt="OOP Icon" /></a></Col>
                    </Row>
                    <Row>
                        <Col className="imgLogo"><a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"><img src={imgLogo13} alt="ORM Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Glossary/MVC"><img src={imgLogo14} alt="MVC Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"><img src={imgLogo15} alt="PWA Icon" /></a></Col>
                        <Col className="imgLogo"><a href="https://github.com/MBadi089"><img src={imgLogo16} alt="Github Icon" /></a></Col>
                    </Row>
                </div>
            </div>
    )
}
