import React from 'react';
import { useAuthState } from '../../components/context/AuthContext';
import "./styles.css"
import Button from "../../components/button/Button";

function Profile() {
    const { user } = useAuthState();
    const { logout } = useAuthState()

    return (
        <>
            <div className="page-container">
                <h1>profile</h1>
                {user && (
                    <>
                        <p><strong>username:</strong> {user.username}</p>
                        <p><strong>email:</strong> {user.email}</p>

                        <Button onClick={() => logout()}>logout</Button>
                    </>
                )}
                {!user &&
                <p>Please <a href="/sign-in"><strong>sign in</strong></a>to view this page!</p>
                }
            </div>
        </>
    );
}

export default Profile;