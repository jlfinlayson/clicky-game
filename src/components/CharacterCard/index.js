import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                {/* <span onClick> */}
                    <img alt={props.name} src={props.image} />
                {/* </span> */}
            </div>
        </div>
    )
}

export default CharacterCard;