import footerBackground from "./images/Footer.JPG"
import FooterLogo from "./images/FooterLogo.png"
import YoutubeLogo from "./images/youtube.png"
import LinkedinLogo from "./images/linkedin.png"
import GithubLogo from "./images/github.png"
import DiscordLogo from "./images/discord.png"
import InstagramLogo from "./images/instagram.png"
import React from "react"
import "./Footer.css"

class Footer extends React.Component
{
  static getDerivedStateFromProps(props, state)
  {
    let showImage = props.showImage;
    if(showImage === undefined)
    {
      showImage = true;
    }
    return{
      showImage: showImage,
    };
  }

  render()
  {
    const goToYoutube = () =>
    {
      window.open("https://m.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA/featured")
    }

    const goToDiscord = () =>
    {
      window.open("https://discord.gg/PAqcKu6")
    }

    const goToLinkedIn = () =>
    {
      window.open("https://www.linkedin.com/company/ieeeualbany")
    }

    const goToGithub = () =>
    {
      window.open("https://github.com/UAlbany-IEEE-Student-Branch")
    }

    const goToInstagram = () =>
    {
      window.open("https://www.instagram.com/ieee.ualbany/")
    }

    if(this.state.showImage)
    {
      return(
        <div id = "footer">
          <img src= {footerBackground} id = "footerbackground" alt="Footer"/>
            <div id = "footercontent">
            <div id = "footerlinks">
              <img src= {FooterLogo} id = "footerlogo" alt="Footer logo"/>
              <br/>
                <img src = {YoutubeLogo} id = "youtubelink" className = "footerlinks" onClick = {goToYoutube} alt = "Youtube link"/>
                <img src = {DiscordLogo} id = "discordlink" className = "footerlinks" onClick = {goToDiscord} alt = "Discord link"/>
                <img src = {LinkedinLogo} id = "linkedinlink" className = "footerlinks" onClick = {goToLinkedIn} alt = "Linkedin link"/>
                <img src = {GithubLogo} id = "githublink" className = "footerlinks" onClick = {goToGithub} alt = "Github link"/>
                <img src = {InstagramLogo} id = "instagramlink" className = "footerlinks" onClick = {goToInstagram} alt = "Instagram link"/>
            </div>
            </div>
        </div>
      );
    }
    else
    {
      return(
        <div id = "footer-trans">
            <div id = "footercontent">
            <div id = "footerlinks">
              <img src= {FooterLogo} id = "footerlogo" alt="Footer logo"/>
              <br/>
                <img src = {YoutubeLogo} id = "youtubelink" className = "footerlinks" onClick = {goToYoutube} alt = "Youtube link"/>
                <img src = {DiscordLogo} id = "discordlink" className = "footerlinks" onClick = {goToDiscord} alt = "Discord link"/>
                <img src = {LinkedinLogo} id = "linkedinlink" className = "footerlinks" onClick = {goToLinkedIn} alt = "Linkedin link"/>
                <img src = {GithubLogo} id = "githublink" className = "footerlinks" onClick = {goToGithub} alt = "Github link"/>
                <img src = {InstagramLogo} id = "instagramlink" className = "footerlinks" onClick = {goToInstagram} alt = "Instagram link"/>
            </div>
            </div>
        </div>
      );
    }
  }
}
export default Footer;