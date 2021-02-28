import React from "react";
import "./styles.css"

function Input({ children, type, id, value, onChange, accept}) {
    return (
        <>
            <div className="input-item-container">
                <label htmlFor={id}
                       className="input-item-label"
                >
                    {children}
                <input
                    className="input-field"
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    accept={accept}
                    required
                />
                </label>
            </div>
        </>
    );
}

export default Input;