import React from "react";
import './Footer.css'
function Footer(){
    return(
        <>
        <div id="footer" className="footer">
            <div style={{display:"flex",gap:"20px"}}> 
                <i style={{color:"#0A5EB0"}}  onClick={() => {
                    window.open("https://www.facebook.com/profile.php?id=100046391707930&mibextid=ZbWKwL", "_blank");
                    }}  class="fa-brands fa-facebook">
                </i>
                <i  style={{color:"#0A5EB0"}} onClick={() => {
    window.open("https://x.com/OmarSam98214919?t=n-oQ4hUYK9oHKLuxK_uKPw&s=09", "_blank");
  }}  class="fa-brands fa-twitter"></i>
            <i style={{color:"#0A5EB0"}} onClick={() => {
    window.open("https://www.linkedin.com/in/omar-samir-433565278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
  }}  class="fa-brands fa-linkedin"></i> 
     <i style={{color:"#433878"}} onClick={() => {
    window.open("https://www.instagram.com/omarsamir251/profilecard/?igsh=MWFlaDR1dThkODVycA==", "_blank");
  }}  class="fa-brands fa-instagram"></i>
                
                <i style={{color:"#347928"}} onClick={() => {
    window.open("https://wa.me/201558849371", "_blank");
  }}  class="fa-brands fa-square-whatsapp"></i>
            </div>
            <p>Copy Right ©Omar_Samir_Ibrahim</p>
        </div>
        </>
    )
}
export default Footer;