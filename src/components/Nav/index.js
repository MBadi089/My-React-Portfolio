import React from "react";
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    return (
        <nav>
            <ul className="container-links">
                <Link to="/">
                    <li className="myName-link">Marcos Badillo</li>
                </Link>

                <Link to="/about">
                    <li className="nav-link">About Me</li>
                </Link>

                <Link to="/projects">
                    <li className="nav-link">Projects</li>
                </Link>

                <Link to="/certificate">
                    <li className="nav-link">Certificate</li>
                </Link>

                <Link to="/contact">
                    <li className="nav-link">Contact Me</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
