import React from "react";
import "./styles.css"
import Button from "../button/Button";

function ItemCard({ children, title, message, download, link}) {
    return (
        <>
            <div className="item-card-container">
                <div className="title-container">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="message-container">
                    <p>{message}</p>
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