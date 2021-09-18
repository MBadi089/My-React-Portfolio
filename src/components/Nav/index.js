import React from "react";
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">
                    <li>Marcos Badillo</li>
                </Link>

                <Link to="/about">
                    <li>About Me</li>
                </Link>

                <Link to="/projects">
                    <li>Projects</li>
                </Link>

                <Link to="/contact">
                    <li>Contact Me</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
