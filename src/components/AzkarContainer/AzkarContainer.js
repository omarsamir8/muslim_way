import React, { useEffect, useState } from "react";
import './AzkarContainer.css';
import axios from "axios";

function AzkarContainer() {
    const [azkarcontainer, setAzkarcontainer] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`
                );
                console.log(response.data);
                setAzkarcontainer(response.data);
            } catch (error) {
                console.error("Error fetching Quran details:", error);
            }
        };
        fetchData();
    }, []);

    // دالة لتنظيف النصوص
    const cleanText = (text) => {
        if (!text || text === "stop") return ''; // إذا كانت القيمة غير موجودة أو "stop"، قم بإرجاع نص فارغ
        return text
            .replace(/\\n/g, '') // إزالة السطور الجديدة
            .replace(/['"]/g, '') // إزالة علامات التنصيص المفردة والمزدوجة
            .replace(/,(\s*,)+/g, ',') // إزالة الفواصل المكررة
            .trim(); // إزالة المسافات الزائدة
    };

    return (
        <div className="AzkarContainer">
            <h2>كل الأذكار</h2>
            <div className="azkar-sections">
                {Object.keys(azkarcontainer).map((sectionKey) => (
                    <div key={sectionKey} className="azkar-section">
                        <h3>{sectionKey}</h3>
                        <div className="azkar-list">
                            {azkarcontainer[sectionKey]
                                .filter((azkar) => cleanText(azkar.content) !== '') // تصفية العناصر الفارغة و "stop"
                                .map((azkar, index) => (
                                    <div key={index} className="azkar-item">
                                        {cleanText(azkar.content)}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AzkarContainer;
