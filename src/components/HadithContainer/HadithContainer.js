import React, { useEffect, useState } from "react";
import './HadithContainer.css'
import axios from "axios";
import { Pagination } from '@mui/material'
function HadithContainer(){
    const[hadithcontainer,sethadithcontainer]=useState([]);
    const[page,setpage]=useState("1")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${page}&limit=99`
                );
                console.log(response.data);
                sethadithcontainer(response.data.items)
            } catch (error) {
                console.error("Error fetching Quran details:", error);
            }
        };
        fetchData();
    }, [page]);
    console.log(hadithcontainer)
    return (
        <>
        <div className="HadithContainer">
            <h2>كل الاحاديث</h2>
            <div className="hadithes">
                {hadithcontainer.map((hadith)=>{
                    return (
                        <div className="hadith1">{hadith.arab}</div>
                    )
                })}
            </div>
            <div className="pagination" >
            <Pagination onChange={(e, value) => {
                              setpage(value); // هنا نقوم بتحديث الحالة بناءً على الرقم المختار
                            }}  count={50} variant="outlined" color="secondary" />
            </div>
            
        </div>
        </>
    )
}
export default HadithContainer;