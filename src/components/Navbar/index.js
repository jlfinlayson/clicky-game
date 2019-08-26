import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark text">
            <div className="col-12">
            <h1>
                Score: {props.score} | Top Score: {props.topScore}
            </h1>
            </div>
        </nav>
    )
}

export default Navbar;