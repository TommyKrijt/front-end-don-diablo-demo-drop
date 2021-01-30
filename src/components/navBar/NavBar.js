import React from "react";
import "./styles.css"

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar-item-container">
                    <li className="navbar-item">UPLOAD</li>
                    <li className="navbar-item">HOME</li>
                    <li className="navbar-item">PROFILE</li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;