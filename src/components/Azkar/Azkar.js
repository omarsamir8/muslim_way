import React, { useEffect } from "react";
import Azkarimage from '../../Assets/azkar.jpg'
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../languageContext";
function Azkar(){
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
        <div className="hero hero2">
            <img  style={{borderRadius:"20px",height:"100vh"}} src={Azkarimage} alt="loading"/>
            <div className="qurandetails">
                <h2>{t('About EL Azkar')}</h2>
                <p>{t("Azkar (أذكار) are a collection of supplications, praises, and remembrances of Allah (dhikr) recited by Muslims. These phrases and prayers hold significant spiritual value, helping Muslims maintain a connection with Allah throughout their daily lives. Azkar can be recited at specific times, such as in the morning and evening, or during particular situations, like before eating or sleeping. Importance of Azkar: Strengthening Faith: Remembrance of Allah helps deepen one’s faith and reliance on Him. Spiritual Protection: Many azkar serve as a shield against harm, evil, and temptations. Peace of Mind: Dhikr brings tranquility and comfort to the heart, as Allah says in the Quran: 'Indeed, in the remembrance of Allah do hearts find rest.'(Surah Ar-Ra'd, 13:28) Rewards and Blessings: Regular recitation of azkar brings immense rewards, as promised in the Quran and Sunnah. Types of Azkar: Morning and Evening Azkar (أذكار الصباح والمساء): These are recited after Fajr and Asr or Maghrib. Examples: “أعوذ بكلمات الله التامات من شر ما خلق” (I seek refuge in the perfect words of Allah from the evil of what He created.) “اللهم بك أصبحنا وبك أمسينا” (O Allah, by Your grace we have reached the morning and by Your grace, we reach the evening.) Azkar Before Sleeping: Includes reciting Ayat Al-Kursi, Surah Al-Ikhlas, Al-Falaq, and An-Nas, and other supplications like: “باسمك اللهم أموت وأحيا” (In Your name, O Allah, I die and I live.) Azkar for Specific Actions: Before Eating: “بسم الله” (In the name of Allah.) After Eating: “الحمد لله الذي أطعمنا وسقانا وجعلنا مسلمين” (Praise be to Allah who fed us, gave us drink, and made us Muslims.) Leaving the House: “بسم الله توكلت على الله ولا حول ولا قوة إلا بالله” (In the name of Allah, I place my trust in Allah, and there is no power or strength except by Allah.) General Azkar: SubhanAllah (Glory be to Allah). Alhamdulillah (Praise be to Allah). Allahu Akbar (Allah is the Greatest). La ilaha illallah (There is no deity but Allah). Benefits of Regular Azkar: Increased awareness and consciousness of Allah. Protection from the whispers of Shaytan. Purification of the soul. Increased gratitude and humility.")} </p>
                <button  onClick={()=>{window.location.href="/azkarpage"}}> {t('Read Azkar')}</button>
            </div>
        </div>
        </>
    )
}
export default Azkar;