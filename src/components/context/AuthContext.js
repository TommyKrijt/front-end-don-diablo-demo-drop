import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [admin, setAdmin] = useState(false);
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    })

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getUserInfo() {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setAuthState({
                    ...authState,
                    user: {
                        id: response.id,
                        username: response.username,
                        email: response.email,
                    },
                    status: 'done',
                });

            } catch (e) {
                setAuthState({
                    ...authState,
                    user: null,
                    error: e,
                    status: 'done'
                });
            }
        }

        if (authState.user === null && token) {
            getUserInfo();
        } else {
            setAuthState({
                ...authState,
                error: null,
                user: null,
                status: 'done'
            });
        }
    }, []);

    function login(data) {
        localStorage.setItem('token', data.accessToken);
        setAuthState({
            ...authState,
            user: {
                username: data.username,
                email: data.email,
                roles: data.roles,
            }
        })
        isAdmin(data.roles);
    }

    function isAdmin(data) {
        if (data.roles[0].includes("ROLE_ADMIN")) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }

    function logout() {
        localStorage.clear();
        setAuthState({
            ...authState,
            user: null,
        })
        setAdmin(false);
    }

    function getAdmin() {
        return admin;
    }


    return (
        <AuthContext.Provider value={{ ...authState, login, logout, getAdmin}}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(AuthContext);
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;

    return {
        ...authState,
        isAuthenticated: isAuthenticated,
    }
}

export {
    AuthContext,
    useAuthState,
    AuthContextProvider,
}