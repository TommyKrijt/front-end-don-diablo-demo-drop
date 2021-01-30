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
                    <p className="welcome-text">Welcome, on the HEXAGON DEMO DROP platform!</p>
                    <p className="welcome-text">Please choose the options above!</p>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;