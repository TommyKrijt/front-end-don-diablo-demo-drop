import React, {useEffect, useState} from "react";
import "./styles.css"
import axios from "axios";
import UserItemCard from "../../components/itemCard/UserItemCard";

function UserDashboardPage() {
    const [uploads, setUploads] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/files/uploads/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                setUploads(response.data);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    return (
        <>
            <div className="dashboard-page-container">
                {uploads.length > 0 ?
                    <>
                        <div className="page-card-container">
                            {uploads.map((upload)=>{
                                return <UserItemCard title={upload.demo}
                                                 message={upload.message}
                                                 key={upload.id}
                                                 name={upload.name}
                                                 children="open"
                                                 link={`/api/files/uploads/${upload.id}`}
                                                     feedback={upload.feedback}/>
                            })}
                        </div>
                    </> :
                    <p className="no-uploads-yet">You have no uploads yet. Please start uploading!</p>}
            </div>
        </>
    );
}

export default UserDashboardPage;