import React from "react";
import "./styles.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Dashboard() {
    return (
        <>
            <div className="page-container">
                <Header/>
                 <p className="admin-can-see">this is a dashboard only to be seen by an admin!</p>
                <Footer/>
            </div>
        </>
    );
}

export default Dashboard;