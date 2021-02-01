import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

function SignIn() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="sign-in-form-container">

                    <form className="sign-in-form">
                        <div className="sign-in-form-item">
                            <label htmlFor="username-field"
                                   className="username-field-label"
                            >
                                username
                            </label>
                            <input
                                className="username-field"
                                type="text"
                            />
                        </div>
                        <div className="sign-in-form-item">
                            <label htmlFor="password-field"
                                   className="password-field-label"
                            >
                                password
                            </label>
                            <input
                                className="password-field"
                                type="text"
                            />
                        </div>
                        <Button className="sign-in-button">sign in</Button>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default SignIn;