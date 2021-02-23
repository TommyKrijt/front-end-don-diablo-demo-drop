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
    const [formSong, setFormSong] = useState('');
    const [formUploadFile, setformUploadFile] = useState('');
    const [formMessage, setFormMessage] = useState('');


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

    async function makeFileUpload() {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData()
            formData.append("file", file, file.name)
            await axios.post('http://localhost:8080/api/files', formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
            }});
        } catch (e) {
            setUploadError("Something went wrong while uploading, please try again.")
        }
    }

    async function makeFormDataUpload() {
        try {
            const token = localStorage.getItem('token');
            const formData = {
                name: formName,
                email: formEmail,
                song: formSong,
                upload_file: formUploadFile,
                message: formMessage
            }
            await axios.post('http://localhost:8080/api/uploads', formData,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(formData);
        } catch (e) {
            setUploadError("Something went wrong while uploading, please try again.")
        }
    }


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            makeFileUpload();
            makeFormDataUpload();
        }catch (e) {
            setUploadError("something went wrong")
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
                        <Input type="text"
                               value={formSong}
                               onChange={(e) => setFormSong(e.target.value)} >song</Input>
                        <Input type="file"
                               onChange={(e) => setFile(e.target.files[0])}>
                            file
                        </Input>
                        <div className="form-item">
                            <label className="form-title">comment</label>
                            <textarea className="form-input-comment"
                                      name="comment"
                                      rows="6"
                                      value={formMessage}
                                      onChange={(e) => setFormMessage(e.target.value)}
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