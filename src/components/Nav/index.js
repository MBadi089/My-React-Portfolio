import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
<div className="nav-container">        
   <section className="headerName">                        
        <Link to="/" style={{textDecoration: 'none'}}>
            <li className="myName-link">Marcos Badillo</li>
        </Link>
   </section>

        <nav>
            <ul>
                <div className="container-links">
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <li className="nav-link">My Skills</li>
                    </Link>

                    <Link to="/projects" style={{textDecoration: 'none'}}>
                        <li className="nav-link">Projects</li>
                    </Link>

                    <Link to="/certificate" style={{textDecoration: 'none'}}>
                        <li className="nav-link">Certificate</li>
                    </Link>

                    <Link to="/contact" style={{textDecoration: 'none'}}>
                        <li className="nav-link">Contact Me</li>
                    </Link>
                 </div>    
            </ul>
        </nav>
</div>        
    );
}

export default Nav;
