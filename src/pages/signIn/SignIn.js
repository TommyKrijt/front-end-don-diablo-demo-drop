import React, {useContext, useEffect, useState} from "react";
import "./styles.css"
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {Link, useHistory} from "react-router-dom";
import {AuthContext, useAuthState} from "../../context/AuthContext";
import axios from "axios";

function SignIn() {
    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/');
        }
    }, [isAuthenticated]);

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
            })
            login(response.data);
        } catch(e) {
            console.error(e);
            setError('Inloggen is mislukt');
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="page-container">
                <div className="sign-in-form-container">
                    <form className="sign-in-form"
                          onSubmit={onSubmit}>
                        <h1 className="sign-in-title">sign in</h1>
                        <div className="sign-in-form-items">
                            <Input id="username-field"
                                   type="text"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}>
                                username
                            </Input>
                            <Input id="password-field"
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)} >
                                password
                            </Input>
                            <Button className="sign-in-button"
                                    type="submit">sign in</Button>
                            <p className="sign-up-link">Don't have an account?</p>
                            <Link className="sign-up-link" to="/sign-up"><strong> Create an account here.</strong></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;