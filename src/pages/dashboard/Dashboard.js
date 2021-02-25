import React, {useEffect, useState} from "react";
import "./styles.css"
import ItemCard from "../../components/itemCard/ItemCard";
import axios from "axios";


function Dashboard() {
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
                console.log(response.data);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);
    return (
        <>
            <div className="dashboard-page-container">
                <div className="page-card-container">
                    {uploads.map((upload)=>{
                        return <ItemCard title={upload.demo}
                                         message={upload.message}
                                         key={upload.id}
                                         name={upload.name}
                                         children="open"
                                         download="download"
                                         link={`/api/files/uploads/${upload.id}`}/>
                    })}
                </div>
            </div>
        </>
    );
}

export default Dashboard;