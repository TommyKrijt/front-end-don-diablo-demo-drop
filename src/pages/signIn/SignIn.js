import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";

function SignIn() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="sign-in-form-container">
                    <form className="sign-in-form">
                        <h1 className="sign-in-title">sign in</h1>
                        <div className="sign-in-form-items">
                            <Input>username</Input>
                            <Input>password</Input>
                            <Button className="sign-in-button">sign in</Button>
                            <p className="sign-up-link">Don't have an account?</p>
                            <Link className="sign-up-link" to="/sign-up">Sign up here.</Link>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default SignIn;