import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const categories =[
{
    name: "about",
    description: "Everything about me and my education leading me to this career",
},
{
    name: "projects",
    description: "All the projects I have worked on during my bootcamp course",
},
{
    name: "github",
    description: "A link to my github where all my projects are kept for public viewing",
},
{
    name: "contact",
    description: "A way to contact me",
},
    ];



    return (
        <header>
            <h2>
                <a href="/"> Marcos Badillo </a>
            </h2>
            <nav>
                <ul className ="flex-row">
                    {categories.map(page =>(
                    <li className="mx-3">
                        <a onClick={props.currentPage}>
                            {page.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>            
        </header>
    );
}

export default Nav;
