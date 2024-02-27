import React from 'react';
import YoutubeLogo from './images/youtube.svg'
import DiscordLogo from './images/discord.svg'
import LinkedInLogo from './images/linkedin.svg'
import InstagramLogo from './images/instagram.svg'
import FooterLogo from './images/ieeelogo.png'
import "./Footer.css"

const Footer =()=>{
    return(
      <div id = "footer">
        <div id = "footer-logo">
         <img src ={FooterLogo}  className = "footer-ieeeIcon" alt="IEEE"/>
         </div>
           <div className = "footer-socialIcons">
            <img src ={YoutubeLogo}  className = "footer-socialIcon" alt="YouTube"/>
            <img src ={DiscordLogo}  className = "footer-socialIcon" alt="Discord"/>
            <img src ={LinkedInLogo}  className = "footer-socialIcon" alt="LinkedIn"/>
            <img src ={InstagramLogo}  className = "footer-socialIcon" alt="Instagram"/>
        </div>
      </div>
        
    )
}

export default Footer;