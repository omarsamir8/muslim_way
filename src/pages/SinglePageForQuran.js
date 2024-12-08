import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../styles/Singlequran.css"; // ملف CSS جديد للتصميم

function QuranDetails() {
  const { QuranID } = useParams(); // الحصول على رقم السورة من الرابط
  const [qurandetail, setQurandetail] = useState({});
  const [ayahs, setAyahs] = useState([]);
  const [sound, setsound] = useState(""); // رابط الصوت
  const audioRef = useRef(null); // مرجع عنصر الصوت

  // جلب تفاصيل السورة
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/surah/${QuranID}`
        );
        setQurandetail(response.data.data);
        setAyahs(response.data.data.ayahs);
      } catch (error) {
        console.error("Error fetching Quran details:", error);
      }
    };
    fetchData();
  }, [QuranID]);
console.log(ayahs)
  // جلب الصوت
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.quran.com/api/v4/chapter_recitations/7/${QuranID}` // معرف التلاوة المناسب
        );
        console.log(response.data)
        setsound(response.data.audio_file.audio_url); // الصوت الأول
      } catch (error) {
        console.error("Error fetching Quran sound:", error);
      }
    };
    fetchData();
  }, [QuranID]);

  // تشغيل الصوت
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    } else {
      alert("الصوت غير متوفر حالياً.");
    }
  };

  return (
    <div className="quran-details">
      <h1 className="sura-name">{qurandetail.name}</h1>
      <div className="controls">
        <button className="play-audio" onClick={playAudio}>
          ▶ تشغيل الصوت
        </button>
        <button className="info-button">معلومات السورة</button>
      </div>
      <audio ref={audioRef} src={sound} /> {/* عنصر الصوت */}
      <div className="ayahs-container">
        <p style={{fontSize:"50px",marginTop:"-30px"}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</p>
        {ayahs.map((ayah, index) => (
    <div key={ayah.number} className="ayah"> 
      <p>{ayah.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "")}</p>
      <span className="ayah-number">﴿{index + 1}﴾</span>
    </div>
  ))}
      </div>
    </div>
  );
}

export default QuranDetails;
