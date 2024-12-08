import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import Hero from "../components/Hero/Hero";
import Hadiths from "../components/Hadiths/Hadiths";
import Azkar from "../components/Azkar/Azkar";
import Tafsir from "../components/Tafser/Tafser";
import Footer from "../components/Footer/Footer";

function Home(){
    return (
        <>
        <Navbar/>
        <AboutUs/>
        <Hero/>
        <Hadiths/>
        <Azkar/>
        <Tafsir/>
        <Footer/>
        </>
    )
}
export default Home;