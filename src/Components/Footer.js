import footerBackground from "./images/Footer.png"
import FooterLogo from "./images/FooterLogo.png"
import YoutubeLogo from "./images/youtube.png"
import LinkedinLogo from "./images/linkedin.png"
import GithubLogo from "./images/github.png"
import DiscordLogo from "./images/discord.png"
import InstagramLogo from "./images/instagram.png"
import TwitterLogo from "./images/twitter.png"
import "./Footer.css"

function Footer() 
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

    const goToTwitter = () =>
    {
      window.open("https://mobile.twitter.com/ieeeualbany?lang=en")
    }

    return(
        <div id = "footer">
          <img src= {footerBackground} id = "footerbackground" alt="Footer"/>
            <div id = "footercontent">
            <div id = "footerlinks" className = "normal">
              <img src= {FooterLogo} id = "footerlogo" className = "normal" alt="Footer logo"/>
              <br/>
                <img src = {YoutubeLogo} id = "youtubelink" className = "footerlinks" onClick = {goToYoutube} alt = "Youtube link"/>
                <img src = {DiscordLogo} id = "discordlink" className = "footerlinks" onClick = {goToDiscord} alt = "Discord link"/>
                <img src = {LinkedinLogo} id = "linkedinlink" className = "footerlinks" onClick = {goToLinkedIn} alt = "Linkedin link"/>
                <img src = {GithubLogo} id = "githublink" className = "footerlinks" onClick = {goToGithub} alt = "Github link"/>
                <img src = {InstagramLogo} id = "instagramlink" className = "footerlinks" onClick = {goToInstagram} alt = "Instagram link"/>
                <img src = {TwitterLogo} id = "twitterlink" className = "footerlinks" onClick = {goToTwitter} alt = "Twitter link"/>
            </div>
            </div>
        </div>
    );
}
export default Footer;