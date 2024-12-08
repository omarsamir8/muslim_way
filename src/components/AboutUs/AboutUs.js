import React, { useEffect } from "react";
import './AboutUs.css'
import mosque from '../../Assets/7078ec1ef02a79bb8fc8975500579224.jpg'
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../languageContext";
function AboutUs(){
    const { language, setlanguage } = useLanguageContext();
    const { t, i18n } = useTranslation();
  
    const changeLanguage = () => {
      i18n.changeLanguage(language);
    };
    useEffect(()=>{
      changeLanguage()
    },[language])
    console.log(language)
    return (
        <>
        <div id="aboutus" className="aboutus">
            <img style={{width:"100%",height:"70vh",position:"absolute",left:"0",zIndex:"-1"}} src={mosque} alt="loading"/>
            <div className="aboutmuslim">
                <span><i class="fa-solid fa-location-dot"></i> {t('At-Muslim & Islamic Center')}</span>
                <h2>{t("A reliable Islamic Center to Follow the Qur'an & Sunnah")}</h2>
                <p>{t("The Salat is the time when the meeting with Allah and the ascension (Mi'raj) of the bliever takes place")}</p>
                <button>{t('Tour In Muslim')}</button>
            </div>
        </div>
        </>
    )
}
export default AboutUs;