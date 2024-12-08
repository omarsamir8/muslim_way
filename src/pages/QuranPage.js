import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Quran from "../qurandata/quran";
function QuranPage(){
    return(
        <>
        <div className="quranpage">
            <Navbar/>
            <Quran/>
            <Footer/>
        </div>
        </>
    )
}
export default QuranPage;