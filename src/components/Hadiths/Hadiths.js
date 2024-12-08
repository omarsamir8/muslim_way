import React, { useEffect } from "react";
import './Hadiths.css'
import hadithimage from '../../Assets/hadith.jpg'
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../languageContext";
function Hadiths(){
    const { language, setlanguage } = useLanguageContext();
    const { t, i18n } = useTranslation();
  
    const changeLanguage = () => {
      i18n.changeLanguage(language);
    };
    useEffect(()=>{
      changeLanguage()
    },[language])
    console.log(language)
    return(
        <>
        <div style={{marginLeft:"3%"}} className="hero">
            <div className="qurandetails">
                <h2>{t('About Hadiths')}</h2>
                <p>{t("A Hadith (plural: Ahadith) is a record of the sayings, actions, approvals, or attributes of the Prophet Muhammad (peace be upon him). Hadiths are an essential source of guidance for Muslims, second only to the Quran, and serve to explain and provide context to Quranic verses.Components of a Hadith:Isnad (Chain of Transmission):This refers to the chain of narrators who passed down the Hadith from the Prophet Muhammad (PBUH) to the compiler. The reliability of the chain is critical in determining the authenticity of the Hadith.Matn (Text of the Hadith):This is the actual content or text of the Hadith, which contains the sayings or actions of the Prophet (PBUH).Major Books of Hadith:Sahih al-Bukhari and Sahih Muslim: Considered the most authentic collections.Sunan Abu Dawood, Jami' at-Tirmidhi, Sunan an-Nasa'i, and Sunan Ibn Majah: Part of the Six Major Books of Hadith (Kutub al-Sittah).Musnad Ahmad ibn Hanbal: A comprehensive collection by Imam Ahmad.")} </p>
                <button onClick={()=>{window.location.href="/hadithpage"}}>{t('Read Hadiths')}</button>
            </div>
            <img style={{borderRadius:"50%",height:"450px",width:"40%",marginTop:"20px"}} src={hadithimage} alt="loading"/>
        </div>
        </>
    )
}
export default Hadiths;