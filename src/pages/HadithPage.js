import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HadithContainer from "../components/HadithContainer/HadithContainer";
function HadithPage(){
    return (
        <>
        <div className="HadithPage">
            <Navbar/>
            <HadithContainer/>
            <Footer/>
        </div>
        </>
    )
}
export default HadithPage;