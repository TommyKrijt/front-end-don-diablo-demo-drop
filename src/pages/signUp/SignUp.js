import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="sign-up-form-container">
                    <form className="sign-up-form">
                        <h1 className="sign-up-title">sign up</h1>
                        <div className="sign-up-form-items">
                            <Input>email</Input>
                            <Input>producername</Input>
                            <Input>password</Input>
                            <Button>sign up</Button>
                            <p>
                                Already an account?
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