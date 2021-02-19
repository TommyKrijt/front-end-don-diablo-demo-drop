import React, {useEffect, useState} from "react";
import "./styles.css"
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import axios from "axios";

function Upload() {

    const [formError, setFormError] = useState('');
    const [protectedData, setProtectedData] = useState('');

    useEffect(() => {
        async function getProtectedData() {
            setFormError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/users/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedData(response.data[0]);
                console.log(response);
            } catch(e) {
                setFormError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    return (
        <>
            <div className="page-container">
                <div className="upload-form-container">
                    <form className="upload-form">
                        {formError && <p className="message-error">{formError}</p>}
                        <Input value={protectedData.username}>name</Input>
                        <Input value={protectedData.email}>email</Input>
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