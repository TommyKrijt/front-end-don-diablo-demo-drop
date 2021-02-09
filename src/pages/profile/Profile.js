import React from 'react';
import { useAuthState } from '../../components/context/AuthContext';
import "./styles.css"

function Profile() {
    const { user } = useAuthState();

    return (
        <>
            <div className="page-container">
                <h1>profile</h1>
                {user && (
                    <>
                        <p><strong>username:</strong> {user.username}</p>
                        <p><strong>email:</strong> {user.email}</p>
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