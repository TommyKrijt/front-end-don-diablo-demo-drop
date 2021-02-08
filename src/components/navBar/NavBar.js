import React from "react";
import "./styles.css"
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar-item-container">
                    <li>
                        <NavLink className="navbar-item" activeClassName="active-navbar-item" to="/upload">upload</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-item" activeClassName="active-navbar-item" to="/dashboard">dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-item" exact activeClassName="active-navbar-item" to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-item" activeClassName="active-navbar-item" to="/profile">profile</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;