import React from "react";
import "./styles.css"
import hexagonLogo from "../../assets/hexagonlogo.png";
import NavBar from "../navBar/NavBar";


function Header() {
    return (
        <>
            <header>
                <div className="image-container">
                    <img src={hexagonLogo} alt="hexagon logo" className="hexagon-logo"/>
                </div>
                <NavBar/>
            </header>
        </>
    );
}

export default Header;