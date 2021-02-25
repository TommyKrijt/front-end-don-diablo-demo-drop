import React, {useEffect, useState} from "react";
import "./styles.css"
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import axios from "axios";

function Upload() {

    const [formError, setFormError] = useState('');
    const [protectedData, setProtectedData] = useState('');
    const [uploadError, setUploadError] = useState('')
    const [file, setFile] = useState('');
    const [message, setMessage] = useState('');
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');


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

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData()
            formData.append("name", formName,);
            formData.append("email", formEmail)
            formData.append("file", file, file.name);
            formData.append("message", message)

            await axios.post('http://localhost:8080/api/files/uploads/', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
            }});
        } catch (e) {
            setUploadError("Something went wrong while uploading, please try again.")
        }
    }
    return (
        <>
            <div className="page-container">
                <div className="upload-form-container">
                    <form className="upload-form"
                          onSubmit={handleSubmit}>
                        {formError && <p className="message-error">{formError}</p>}
                        {uploadError && <p className="message-error">{uploadError}</p>}
                        <p>Hi {protectedData.username}!</p>
                        <p>Start uploading by selecting a file below!</p>
                        <Input type="text"
                               value={formName}
                               onChange={(e) => setFormName(e.target.value)}>name</Input>
                        <Input type="email"
                               value={formEmail}
                               onChange={(e) => setFormEmail(e.target.value)}>email</Input>
                        {/*<Input type="text"*/}
                        {/*       value={formSong}*/}
                        {/*       onChange={(e) => setFormSong(e.target.value)} >song</Input>*/}
                        <Input type="file"
                               onChange={(e) => setFile(e.target.files[0])}
                               accept=".mp3">
                            file
                        </Input>
                        <div className="form-item">
                            <label className="form-title">comment</label>
                            <textarea className="form-input-comment"
                                      name="comment"
                                      rows="6"
                                      value={message}
                                      onChange={(e) => setMessage(e.target.value)}
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