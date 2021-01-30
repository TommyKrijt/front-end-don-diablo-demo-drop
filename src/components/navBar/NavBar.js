import React from "react";
import "./styles.css"
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar-item-container">
                    <li>
                        <NavLink className="navbar-item" activeClassName="active-navbar-item" to="/upload">UPLOAD</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-item" exact activeClassName="active-navbar-item" to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-item" activeClassName="active-navbar-item" to="/profile">PROFILE</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;