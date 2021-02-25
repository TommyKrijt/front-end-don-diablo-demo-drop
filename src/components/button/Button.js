import React from "react";
import "./styles.css"

function Button({ children, className, onClick, type }) {
    return (
        <>
            <button className={className}
                    onClick={onClick}
                    type={type}>
                {children}
            </button>
        </>
    );
}

export default Button;