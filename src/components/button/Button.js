import React from "react";
import "./styles.css"

function Button({ children, className }) {
    return (
        <>
            <button className={className}>{children}</button>
        </>
    );
}

export default Button;