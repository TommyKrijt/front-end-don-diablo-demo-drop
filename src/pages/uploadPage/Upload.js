import React from "react";
import "./styles.css"
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function Upload() {
    return (
        <>
            <div className="page-container">
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
            </div>
        </>
    );
}

export default Upload;