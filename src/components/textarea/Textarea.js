import React from "react";
import "./styles.css"

function Textarea() {
    return (
        <>
            <div className="form-item">
                <label className="form-title">comment</label>
                <textarea className="form-input-comment"
                          name="comment"
                          rows="6"
                />
            </div>
        </>
    );
}

export default Textarea;