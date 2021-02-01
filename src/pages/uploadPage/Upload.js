import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

function Upload() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="upload-form-container">
                    <form className="upload-form">
                        <div className="form-item">
                            <label className="form-title">name</label>
                            <input className="form-input" type="text" name="name" />
                        </div>
                        <div className="form-item">
                            <label className="form-title">email</label>
                            <input className="form-input" type="text" name="email" />
                        </div>
                        <div className="form-item">
                            <label className="form-title">file</label>
                            <input className="form-input" type="text" name="file" />
                        </div>
                        <div className="form-item">
                            <label className="form-title">comment</label>
                            <textarea className="form-input-comment" name="comment" rows="5" />
                        </div>
                        <Button>submit</Button>
                    </form>
                </div>

                <Footer/>
            </div>
        </>
    );
}

export default Upload;