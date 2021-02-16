import React from "react";
import "./styles.css"

function Button({ children, className, onClick }) {
    return (
        <>
            <button className={className}
                    onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default Button;