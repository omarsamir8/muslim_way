import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PrayesTimes from "../components/PrayesTimes/PrayesTimes";
function PrayerPage(){
    return (
        <>
        <div>
           <Navbar/> 
           <PrayesTimes/>
           <Footer/>
        </div>
        
        </>
    )
}
export default PrayerPage;