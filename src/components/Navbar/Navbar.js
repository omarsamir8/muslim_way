import React, { useEffect, } from "react";
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import '../../i18n'; 
import { useLanguageContext } from "../../languageContext";
function Navbar(){
    const { t, i18n } = useTranslation();
    const { language, setlanguage } = useLanguageContext();
    const changeLanguage = (lang) => {
      setlanguage(lang);
      localStorage.setItem('language', lang);
      i18n.changeLanguage(lang);
  };
  useEffect(() => {
    // استعادة اللغة من localStorage إذا كانت موجودة
    const savedLanguage = localStorage.getItem('language') || 'en'; // 'en' هي القيمة الافتراضية
    setlanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
}, []);
    return(
        <>
        <nav style={{width:"100%",margin:"auto",paddingLeft:"30px",paddingRight:"30px",}}  class="navbar navbar-expand-lg navbar-light bg-light">
            <div style={{width:"40%"}} class="container-fluid">
                <a style={{fontFamily:"sans-serif",fontSize:"25px"}} class="navbar-brand logoo" href="#logo"><i class="fa-solid fa-mosque"></i> {t('Muslim')} </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div style={{width:"80%"}} class="collapse navbar-collapse itemslist" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a onClick={()=>{window.location.href="/"}}  class="nav-link active" aria-current="page" href="#2">{t('Home')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#aboutus">{t('About Us')}</a>
                </li>
                <li class="nav-item">
                    <a onClick={()=>{window.location.href="/prayertimes"}} class="nav-link active" aria-current="page" href="#2">{t('Salat Times')}</a>
                </li>
                <li class="nav-item">
                    <a onClick={()=>{window.location.href="/quran"}} class="nav-link active" aria-current="page" href="#2">{t('Holy Quran')}</a>
                </li>
                <li class="nav-item">
                    <a onClick={()=>{window.location.href="/hadithpage"}} class="nav-link active" aria-current="page" href="#2">{t('Hadiths')}</a>
                </li>
                <li class="nav-item">
                    <a onClick={()=>{window.location.href="/azkarpage"}} class="nav-link active" aria-current="page" href="#2">{t('Azkar')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#2">
                    <select onChange={(e) => {changeLanguage(e.target.value)}}style={{fontWeight:"bold",width:"120px"}} class="form-select" aria-label="Default select example">
                        <option hidden>Language</option>
                        <option value="ar">Arabic</option>
                        <option value="en">English</option>
                    </select>
                    </a>
                </li>            
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;