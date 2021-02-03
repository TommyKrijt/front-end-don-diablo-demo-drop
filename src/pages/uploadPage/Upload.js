import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function Upload() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="upload-form-container">
                    <form className="upload-form">
                        <Input>name</Input>
                        <Input>email</Input>
                        <div className="form-item">
                            <label className="form-title">comment</label>
                            <textarea className="form-input-comment"
                                      name="comment"
                                      rows="6"
                            />
                        </div>
                        <Button className="form-button">submit</Button>
                    </form>
                </div>

                <Footer/>
            </div>
        </>
    );
}

export default Upload;