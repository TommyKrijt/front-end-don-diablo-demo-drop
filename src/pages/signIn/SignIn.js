import React, {useContext, useEffect, useState} from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {Link, useHistory} from "react-router-dom";
import {AuthContext, useAuthState} from "../../components/context/AuthContext";
import axios from "axios";



function SignIn() {

    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    // state voor invoervelden (omdat het formulier met Controlled Components werkt!)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // react-router dingen
    const history = useHistory();

    // Deze functie wordt elke keer afgevuurd als isAuthenticated (uit context) veranderd
    useEffect(() => {
        // als hij de waarde true heeft, DAN sturen we de gebruiker door!
        if (isAuthenticated === true) {
            history.push('/');
        }
    }, [isAuthenticated]);

    async function onSubmit(event) {
        // deze hoeft alleen als je controlled components gebruikt
        event.preventDefault();

        try {
            const response = await axios.post('localhost:5432/postgres', {
                username: username,
                password: password,
            })

            // We roepen hier de context-functie "login" aan. De context gaat dan met de data die we hebben
            // teruggekregen alles op de juiste manier in localstorage en state zetten!
            login(response.data);
        } catch(e) {
            // Gaat het mis? Log het in de console!
            console.error(e);
        }
    }

    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="sign-in-form-container">
                    <form className="sign-in-form" onSubmit={onSubmit}>
                        <h1 className="sign-in-title">sign in</h1>
                        <div className="sign-in-form-items">
                            <Input htmlFor="username-field"
                                   type="text"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}>
                                username
                            </Input>
                            <Input type="password"
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
                <Footer/>
            </div>
        </>
    );
}

export default SignIn;