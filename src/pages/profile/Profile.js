import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
//might want to do this in React native
function Profile() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <p>this is the profile page</p>
                <Footer/>
            </div>
        </>
    );
}

export default Profile;