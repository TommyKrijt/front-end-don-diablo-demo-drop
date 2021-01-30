import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {
    return (
        <>
            <div className="page-container">
                <Header/>
                <div className="welcome-text-container">
                    <p className="welcome-text">Welcome, to the HEXAGON DEMO DROP platform!</p>
                    <p className="welcome-text">Start uploading by going to the upload page or check your profile settings!</p>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;