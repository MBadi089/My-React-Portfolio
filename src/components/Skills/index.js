import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
            <h1 class="myskills">My Skills</h1>
                <div className="skills-container">
                    <Row>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"><img src={imgLogo1} /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><img src={imgLogo2} /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={imgLogo3} /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={imgLogo4} /></a></Col>
                    </Row>
                    <Row>
                        <Col className="imgLogo"><a href="https://www.mysql.com/"><img src={imgLogo5} /></a></Col>
                        <Col className="imgLogo"><a href="https://en.wikipedia.org/wiki/SQL"><img src={imgLogo6} /></a></Col>
                        <Col className="imgLogo"><a href="https://en.wikipedia.org/wiki/NoSQL"><img src={imgLogo7} /></a></Col>
                        <Col className="imgLogo"><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"><img src={imgLogo8} /></a></Col>
                    </Row>
                    <Row>
                        <Col className="imgLogo"><a href="https://jquery.com/"><img src={imgLogo9} /></a></Col>
                        <Col className="imgLogo"><a href="https://www.mongodb.com/"><img src={imgLogo10} /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/API"><img src={imgLogo11} /></a></Col>
                        <Col className="imgLogo"><a href="https://www.educative.io/blog/object-oriented-programming"><img src={imgLogo12} /></a></Col>
                    </Row>
                    <Row>
                        <Col className="imgLogo"><a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"><img src={imgLogo13} /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Glossary/MVC"><img src={imgLogo14} /></a></Col>
                        <Col className="imgLogo"><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"><img src={imgLogo15} /></a></Col>
                        <Col className="imgLogo"><a href="https://github.com/MBadi089"><img src={imgLogo16} /></a></Col>
                    </Row>
                </div>
            </div>
    )
}
