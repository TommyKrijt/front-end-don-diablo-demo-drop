import React, {useState} from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";
import axios from "axios";

function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [createUserSucces, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState()

    async function onSubmit(event) {
        console.log(email, username, password);
        toggleLoading(true);
        setError('');
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username : username,
                email : email,
                password : password,
                role : ["user"]
            })
            console.log(response.data);

            if (response.status === 200) {
                setCreateUserSucces(true);
            }
        } catch (e) {
            console.log(e);
            if(e.message.includes('400')) {
                setError('Username already taken')
            } else {
                setError('Something went wrong, please try again')
            }
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="sign-up-form-container">
                    {createUserSucces === true && <p>User is created!</p>}
                    <form className="sign-up-form"
                          onSubmit={onSubmit}>
                        <h1 className="sign-up-title">create user</h1>
                        <div className="sign-up-form-items">
                            <Input type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}>

                                email
                            </Input>
                            <Input type="text"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}>
                                producername
                            </Input>
                            <Input type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}>
                                password
                            </Input>
                            <Button type="submit"
                                    disabled={loading}>
                                {loading ? "signing up" : "sign up"}
                            </Button>
                            {error && <p>{error}</p>}
                            <p>
                                Already have an account?
                                <Link className="back-link" to="/sign-in"> Click here.</Link>
                            </p>
                        </div>

                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default SignUp;