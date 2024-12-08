import React, { useEffect } from "react";
import './Hero.css';
import quranimage from '../../Assets/quran.jpg'
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../languageContext";
function Hero(){
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
        <div className="hero hero2">
            <img style={{borderRadius:"50%"}} src={quranimage} alt="loading"/>
            <div className="qurandetails">
                <h2>{t('About Quran')}</h2>
                <p>{t("The Qur'an (القرآن) is the holy book of Islam, believed by Muslims to be the literal word of God (Allah) as revealed to the Prophet Muhammad (peace be upon him) over 23 years through the Angel Jibreel (Gabriel). It is written in Arabic and consists of 114 chapters, called Surahs, which vary in length. Each Surah is divided into verses called Ayat.Key Features of the Qur'an:Language: The Qur'an is in classical Arabic, known for its profound linguistic and literary qualities.Structure: It is not organized chronologically but rather by the length of the chapters, with longer ones typically appearing first.Themes:Monotheism (Tawhid): The oneness of God.Guidance: Rules and principles for personal conduct, social justice, and worship.Stories of Prophets: Accounts of earlier prophets like Noah, Abraham, Moses, and Jesus (peace be upon them).")} </p>
                <button onClick={()=>{window.location.href="/quran"}}>{t('Read Quran')}</button>
            </div>
        </div>
        </>
    )
}
export default Hero;