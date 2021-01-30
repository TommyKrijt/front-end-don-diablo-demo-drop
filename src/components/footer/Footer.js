import React from "react";
import "./styles.css"
import hexagonIcon from "../../assets/hexagonIcon.png";

function Footer() {
    return (
        <>
            <div className="hexagon-icon-container">
                <img className="hexagon-icon" src={hexagonIcon} alt="hexagon icon"/>
            </div>

        </>
    );
}

export default Footer;