import React, { useEffect, useState}from 'react';
import { useAuthState } from '../../components/context/AuthContext';
import "./styles.css"
import Button from "../../components/button/Button";
import axios from "axios";

function Profile() {
    const { user, logout } = useAuthState();

    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState('');

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/users/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedData(response.data);
                console.log(response);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    return (
        <>
            <div className="page-container">
                <h1>profile</h1>
                {user && (
                    <>
                        <p><strong>username: </strong>{user.username }</p>
                        <p><strong>email:</strong> {user.email}</p>
                        {error && <p className="message-error">{error}</p>}
                        <Button onClick={() => logout()}>logout</Button>
                    </>
                )}
                {protectedData &&
                <>
                    <p><strong>username: </strong>{protectedData[0].username}</p>
                    <p><strong>email:</strong> {protectedData[0].email}</p>
                </>}
                {!user &&
                <p>Please <a href="/sign-in"><strong>sign in</strong></a>to view this page!</p>
                }
            </div>
        </>
    );
}

export default Profile;