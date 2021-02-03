import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function SignIn() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="sign-in-form-container">
                    <form className="sign-in-form">
                        <div className="sign-in-form-items">
                            <Input>username</Input>
                            <Input>password</Input>
                            <Button>sign in</Button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default SignIn;