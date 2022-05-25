import Banner from "../assets/DSC_0509.JPG"
import Header from "../../Components/EventsBanner.js"
import Footer from "../../Components/Footer.js"
import "./EventsHome.css"


function EventsHome() 
{
  const goToDiscord = () =>
  {
    window.open("https://discord.gg/PAqcKu6");
  }

  return (
    <div id = "events-body">
      <Header banner = {Banner}/>
      <div className = "defaultspacing" id = "eventsmaindescription">
        <h1 id = "eventsmaindescriptiontitle">
          Workshops and Weekly Events
        </h1>
        <p id = "eventsmaindescriptionbody">
          We host educational workshops along with weekly events to allow members explore different
          aspects of technological fields either to spark new interests or to gain more knowledge outside
          the classroom. Anyone is welcomed to join, you do not need to be a member to attend
          any events we host. Join our discord server if you are interested or have any questions.
        </p>
        <embed id = "discordwiget" src = "https://discordapp.com/widget?id=685303775052693515&amp;theme=dark" onClick = {goToDiscord}></embed>
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
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/M5cR5Vmvnz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      </div>
      <Footer/>
    </div>
  )
}
export default EventsHome;