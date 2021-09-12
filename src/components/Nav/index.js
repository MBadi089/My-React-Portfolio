import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    return (
        <header>
            <h2>
                <a href="/"> Marcos Badillo </a>
            </h2>
            <nav>
                <ul className ="flex-row">
                    <li className="mx-3">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#github">
                            My GitHub
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>            
        </header>
    );
}

export default Nav;