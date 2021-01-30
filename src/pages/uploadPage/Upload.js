import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Upload() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="form-container">
                    <p className="dummy-text">This is the upload page</p>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Upload;