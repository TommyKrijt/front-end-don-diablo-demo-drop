import React, {useState} from "react";
import "./styles.css"
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');

        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                email: email,
                password: password,
                role: ["user"],
            });

            if (response.status === 200) {
                setCreateUserSuccess(true);
            }
        } catch(e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('User already exists');
            } else {
                setError('Something went wrong while fetching data');
            }
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="page-container">
                <div className="sign-up-form-container">
                    {createUserSuccess === true && <p>User is created!</p>}
                    <form className="sign-up-form"
                          onSubmit={onSubmit}>
                        <h1 className="sign-up-title">create user</h1>
                        <div className="sign-up-form-items">
                            <Input id="email-field"
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}>
                                email
                            </Input>
                            <Input id="user-name-field"
                                   type="text"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}>
                                username
                            </Input>
                            <Input id="password-field"
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}>
                                password
                            </Input>
                            <Button type="submit"
                                    disabled={loading}>
                                {loading ? "signing up" : "sign up"}
                            </Button>
                            {error && <p>{error}</p>}
                            <p className="back-link">
                                Already have an account?
                                <Link className="back-link" to="/sign-in"><strong> Click here.</strong></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;