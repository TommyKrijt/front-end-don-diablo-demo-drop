import React from "react";
import "./styles.css"

function Button({ children }) {
    return (
        <>
            <button>{children}</button>
        </>
    );
}

export default Button;