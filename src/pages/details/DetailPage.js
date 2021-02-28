import React, {useEffect, useState} from "react";
import "./styles.css"
import axios from "axios";
import {useParams} from "react-router";
import Button from "../../components/button/Button";
import {useAuthState} from "../../context/AuthContext";

function DetailPage() {
    const {id} = useParams();
    const [error, setError] = useState('');
    const [upload, setUpload] = useState([]);
    const {isAdmin} = useAuthState();
    const [protectedData, setProtectedData] = useState([])
    const [feedback, setFeedback] = useState('');

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
        } catch (e) {
            setError("Something went wrong")
        }
    }

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get('http://localhost:8080/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedData(response.data);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const formData = new FormData()
            formData.append("feedback", feedback);

            await axios.put(`http://localhost:8080/api/files/uploads/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }});
        } catch (e) {
            setError("Something went wrong while uploading feedback, please try again.")
        }
    }

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
                    <audio controls src={upload.downloadUrl} type="audio/mpeg">
                    </audio>
                    <p><a href={upload.downloadUrl}>Download!</a></p>
                        <form className="details-feedback-container" onSubmit={handleSubmit}>
                            <label className="details-feedback-title">Feedback</label>
                            <textarea className="details-feedback-comment"
                                      name="feedback"
                                      rows="6"
                                      maxLength="250"
                                      value={feedback}
                                      onChange={(e) => setFeedback(e.target.value)}
                            />
                            <Button type='submit'>Give Feedback</Button>
                        </form>
                </div>
                <div className="show-feedback">
                    <p>Feedback:</p>
                    <p>{upload.feedback}</p>
                </div>
            </div>
        </>
    );
}

export default DetailPage;