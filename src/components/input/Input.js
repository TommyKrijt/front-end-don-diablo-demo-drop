import React from "react";
import "./styles.css"

function Input({ children, className, htmlFor, type }) {
    return (
        <>
            <div className="input-item-container">
                <label htmlFor={htmlFor}
                       className="input-item-label"
                >
                    {children}
                </label>
                <input
                    className="input-field"
                    type={type}
                />
            </div>
        </>
    );
}

export default Input;