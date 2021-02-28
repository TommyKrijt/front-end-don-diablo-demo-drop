import React, { useEffect, useState}from 'react';
import { useAuthState } from '../../components/context/AuthContext';
import "./styles.css"
import Button from "../../components/button/Button";
import axios from "axios";

function Profile() {
    const { user, logout } = useAuthState();
    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState([]);

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

    return (
        <>
            <div className="page-container">
                <div className="page-content">
                    <h1 className="profile-title">profile</h1>
                    {user &&
                    <>
                        <div className="profile-information">
                            <p className="profile-information-title">username</p>
                            <p className="profile-information-user">{protectedData.username}</p>
                            <p className="profile-information-title">email</p>
                            <p className="profile-information-user">{protectedData.email}</p>
                        </div>
                    </>}
                        <Button onClick={() => logout()}>logout</Button>
                    {error && <p className="message-error">{error}</p>}
                    {!user &&
                    <p>Please <a href="/sign-in"><strong>sign in</strong></a>to view this page!</p>
                    }
                </div>
            </div>
        </>
    );
}

export default Profile;