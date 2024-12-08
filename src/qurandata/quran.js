import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuranData } from "../actions/QuranActions";
import './quran.css'
function Quran() {
    const dispatch = useDispatch();
    const { quran, loading, error } = useSelector((state) => state.QuranState);
    // const singlequran = quran.find((q) => q.id === singlequranid);
    useEffect(() => {
      dispatch(fetchQuranData());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    console.log(quran);
  
    const convertToArabicNumbers = (number) => {
      return number
        .toString()
        .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
    };
    return (
      <div className="quran">
        <h2 style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold"}}> القرآن الكريم كامل</h2>
        {/* <div className="bor" style={{display:"flex",flexDirection:"row-reverse",gap:"30px"}}>
          <h3> {convertToArabicNumbers(30)} جزء</h3>
          <h3> {convertToArabicNumbers(114)} سورة</h3>
          <h3> {convertToArabicNumbers(6236)} آيه</h3>
        </div> */}     
        <div className="quransdisplay">
  {quran
    ? quran.map((q) => {
        return (
          <div
            onClick={() => {
              window.location.href = `/quran/${q.number}`;
            }}
            className="soura"
          >
            <p>{convertToArabicNumbers(q.numberOfAyahs)} آيات</p>
            <h5>{q.name}</h5>
            <div className="numberofsoura">{convertToArabicNumbers(q.number)}</div>
          </div>
        );
      })
    : "Please Wait For LOading Data"}
</div>;

      </div>
    );
  }
  
  export default Quran;
  