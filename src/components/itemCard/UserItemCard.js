import React from "react";
import "./styles.css"

function ItemCard({ title, message,feedback, name}) {
    return (
        <>
            <div className="item-card-container">
                <div className="item-card-title-container">
                    <h1 className="item-card-title">{title}</h1>
                </div>
                <div className="uploaded-by">
                    <p> Uploaded by: {name}</p>
                </div>
                <div className="message-container">
                    <p className="item-card-message">Message: {message}</p>
                </div>
                <div className="message-container">
                    <p className="item-card-feedback">Feedback: {feedback}</p>
                </div>
            </div>
        </>
    );
}

export default ItemCard;