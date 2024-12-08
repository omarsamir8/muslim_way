import React, { useEffect } from 'react';
import tafsirimage from '../../Assets/tafser.jpg'
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../languageContext";
function Tafsir(){
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
         <div style={{marginLeft:"3%"}} className="hero">
            <div className="qurandetails">
                <h2>{t('About Tafsir')}</h2>
                <p>{t("Tafsir (تفسير) is the Arabic term for the interpretation or explanation of the Quran. It provides a detailed understanding of the meanings, context, and implications of Quranic verses. Tafsir is essential for Muslims to comprehend the Quran’s teachings and apply them to their lives accurately. Importance of Tafsir: Understanding the Quran: It explains the meanings of verses, particularly those that are complex or contain allegory. Contextual Insight: Tafsir clarifies the historical and cultural context of revelations (Asbab al-Nuzul). Practical Application: It provides guidance on how Quranic teachings relate to daily life, law, and ethics. Resolving Ambiguity: It resolves linguistic and interpretative ambiguities. Methodology of Tafsir: Quran Interprets Quran: Understanding a verse by referring to other related verses. Hadith: Using the sayings of the Prophet Muhammad to clarify meanings. Sayings of the Companions (Sahaba): Learning from the interpretations of those who lived with the Prophet. Arabic Language: Examining the linguistic structure and grammar. Context of Revelation (Asbab al-Nuzul): Analyzing historical circumstances of the verse's revelation.")}</p>
                <button>{t('Read Tafsir')}</button>
            </div>
            <img style={{borderRadius:"50%",height:"450px",width:"40%",marginTop:"20px"}} src={tafsirimage} alt="loading"/>
        </div>
        </>
    )
}
export default Tafsir;