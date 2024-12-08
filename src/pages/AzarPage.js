import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AzkarContainer from "../components/AzkarContainer/AzkarContainer";
function AzkarPage(){
    return (
        <>
        <div className="Azkarpage">
            <Navbar/>
            <AzkarContainer/>
            <Footer/>
        </div>
        </>
    )
}
export default AzkarPage;