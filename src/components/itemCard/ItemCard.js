import React from "react";
import "./styles.css"
import Button from "../button/Button";

function ItemCard({ children, title, message, download, link, name}) {
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
                    <p className="item-card-message">{message}</p>
                </div>
                <div className="button-container">
                    <Button><a href={link}>{children}</a></Button>
                    <Button>{download}</Button>
                </div>
            </div>
        </>
    );
}

export default ItemCard;