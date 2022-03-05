import Banner from "../assets/SideProjectInPerson.jpg"
import Thumbnail from "../assets/thumbnail.png"
import Header from "../../Components/EventsBanner.js"
import Footer from "../../Components/Footer.js"
import "./EventsHome.css"


function EventsHome() 
{
    const goToYoutube = () =>
    {
      window.open("https://m.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA/featured")
    }

    const goToDiscord = () =>
    {
      window.open("https://discord.gg/PAqcKu6");
    }

    return (
      <div>
          <Header banner = {Banner}/>

            <div className = "defaultspacing" id = "eventsmaindescription">
                <h1 id = "eventsmaindescriptiontitle" className = "normal">
                    Workshops and Weekly Events
                </h1>
                <p id = "eventsmaindescriptionbody" className = "normal">
                    We host educational workshops along with weekly events to allow members explore different
                    aspects of technological fields either to spark new interests or to gain more knowledge outside
                    the classroom. Anyone is welcomed to join, you do not need to be a member to attend
                    any events we host. Join our discord server if you are interested or have any questions.
                </p>
                <embed id = "discordwiget" className = "normal" src = "https://discordapp.com/widget?id=685303775052693515&amp;theme=dark" onClick = {goToDiscord}></embed>
            </div>
            <div className = "defaultspacing" id = "workshopdescription">
                <h1 id = "workshopdescriptiontitle">
                    About Our Workshops
                </h1>
                <p id = "workshopdescriptionbody">
                    We host both online and in person workshops throughout the school semesters. Our workshops are hosted
                    by our officers along with guest speakers from various companies and professions. We aim to teach
                    students critical elements needed in their field of study as well as explore more about their
                    targetted professions with real world professionals.
                </p>
                <img id = "featuredvideo" src = {Thumbnail} alt = "youtube prop" onClick = {goToYoutube}/>
            </div>
            <Footer/>
      </div>
    )}
  export default EventsHome;