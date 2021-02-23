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
            const response = await axios.get(`http://localhost:8080/api/uploads/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setUpload(response.data);
            console.log(response.data)
        } catch (e) {
            setError("Something went wrong")
        }
    }



    return (
        <>
            <div className="detail-page-container">
                <div className="details">
                    <div className="details-title">
                        <h1>{upload.song}</h1>
                    </div>
                    <div className="details-description">
                        <p>{upload.message}</p>
                    </div>
                    {isAdmin ? (
                        <>
                            <div className="details-feedback">
                                <Button>Feedback 1</Button>
                                <Button>Feedback 2</Button>
                            </div>
                            <div className="details-feedback-container">
                                <label className="details-feedback-title">Feedback</label>
                                <textarea className="details-feedback-comment"
                                          name="feedback"
                                          rows="6"
                                />
                            </div>
                        </>
                    ) : (
                        <p>An admin will provide you with feedback, check back later.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default DetailPage;