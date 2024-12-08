import React, { useEffect, useState } from "react";
import './PrayesTimes.css';
import prayestimeimage from '../../Assets/prayestimes.jpg';
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../languageContext";
function PrayesTimes() {
    const [Times, setTimes] = useState(null); // الحالة الافتراضية null
    const { language, setlanguage } = useLanguageContext();
    const { t, i18n } = useTranslation();
  
    const changeLanguage = () => {
      i18n.changeLanguage(language);
    };
    useEffect(()=>{
      changeLanguage()
    },[language])
    console.log(language)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.aladhan.com/v1/timingsByCity/02-12-2024?city=cairo&country=egypt`
                );
                console.log(response.data);
                setTimes(response.data.data); // عيّن فقط قسم `data`
            } catch (error) {
                console.error("Error fetching Quran details:", error);
            }
        };
        fetchData();
    }, []);

    if (!Times) {
        return <div>Loading...</div>; // عرض رسالة أثناء تحميل البيانات
    }
console.log(Times)
const convertToArabicNumbers = (number) => {
    return number
      .toString()
      .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
  };

  
    return (
        <>
            <div className="praytimes">
                <img src={prayestimeimage} alt="loading" />
                {/* <p style={{position:"absolute",left:"20px"}}>{Times.date.gregorian.date}</p> */}
                {/* <p style={{position:"absolute",right:"20px"}}>{Times.date.hijri.date}</p> */}
                {/* <p style={{position:"absolute",right:"20px",top:"20px"}}>{convertToArabicNumbers(Times.date.hijri.month.number)} {Times.date.hijri.month.ar}</p> */}
                {/* <p style={{position:"absolute",left:"20px",top:"20px"}}>{Times.date.gregorian.month.number} {Times.date.gregorian.month.en}</p> */}
                <h2 style={{fontFamily:"sans-serif",marginTop:"10px",fontWeight:"bolder"}}>{t('Prayer Times')}</h2>
                <div className="times">
                    <div className="time">
                        <h3 style={{ backgroundColor: "black" }}>{t('Fajr')}</h3>
                        <h3 style={{ backgroundColor: "red" }}>{language==='en'?Times.timings.Fajr:convertToArabicNumbers(Times.timings.Fajr)}</h3>
                    </div>
                    <div className="time">
                        <h3 style={{ backgroundColor: "black" }}>{t('Dhuhr')}</h3>
                        <h3 style={{ backgroundColor: "red" }}>{language==='en'?Times.timings.Dhuhr:convertToArabicNumbers(Times.timings.Dhuhr)}</h3>
                    </div>
                    <div className="time">
                        <h3 style={{ backgroundColor: "black" }}>{t('Asr')}</h3>
                        <h3 style={{ backgroundColor: "red" }}>{language==='en'?Times.timings.Asr:convertToArabicNumbers(Times.timings.Asr)}</h3>
                    </div>
                    <div className="time">
                        <h3 style={{ backgroundColor: "black" }}>{t('Maghrib')}</h3>
                        <h3 style={{ backgroundColor: "red" }}>{language==='en'?Times.timings.Maghrib:convertToArabicNumbers(Times.timings.Maghrib)}</h3>
                    </div>
                    <div className="time">
                        <h3 style={{ backgroundColor: "black" }}>{t('Isha')}</h3>
                        <h3 style={{ backgroundColor: "red" }}>{language==='en'?Times.timings.Isha:convertToArabicNumbers(Times.timings.Isha)}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrayesTimes;
