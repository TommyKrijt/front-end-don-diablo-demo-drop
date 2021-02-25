import React, {useEffect, useState} from "react";
import "./styles.css"
import axios from "axios";
import {useParams} from "react-router";
import Button from "../../components/button/Button";
import {useAuthState} from "../../components/context/AuthContext";

function DetailPage() {
    const {id} = useParams();
    const [error, setError] = useState('');
    const [upload, setUpload] = useState([]);
    const {isAdmin} = useAuthState();

    useEffect(() => {
        getUpload();
    }, [])

    async function getUpload() {
        setError('');
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/files/uploads/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setUpload(response.data);
            console.log(response)
        } catch (e) {
            setError("Something went wrong")
        }
    }
console.log(upload)
    return (
        <>
            <div className="detail-page-container">
                <div className="details">
                    <div className="details-title">
                        <h1>{upload.demo}</h1>
                    </div>
                    <div className="details-upload-by">
                        <p>Uploaded by: {upload.name}</p>
                    </div>
                    <div className="details-description">
                        <p className="details-description-message">
                            {upload.message}
                        </p>
                    </div>
                    <audio controls autoPlay muted>
                        <source src={upload.DownloadUrl} type="audio/mpeg"/>
                        <source src={upload.downloadUrl} type="audio/ogg"/>
                                Your browser does not support the audio element.
                    </audio>
                    <p><a href={upload.downloadUrl}>Download!</a></p>
                    <div className="details-feedback-buttons">
                        <Button>Feedback 1</Button>
                        <Button>Feedback 2</Button>
                    </div>
                    <div className="details-feedback-container">
                        <label className="details-feedback-title">Feedback</label>
                        <textarea className="details-feedback-comment"
                                  name="feedback"
                                  rows="6"
                                  maxLength="250"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPage;