import Header from "../../Components/EventsBanner.js"
import Footer from "../../Components/Footer.js"
import WorkshopCard from "../../Components/WorkshopCard.js"
import "./Schedule.css"

function Schedule()
{
    return(
        <div id = "schedule-page-body">
            <Header color = "rgb(41, 41, 41)"/>
            <div id = "schedule-container">
                <h1 id = "schedule-title" className = "normal">
                    Spring February 6th - 12th
                </h1>
                <div id = "card-container" className = "normal">
                    <div className = "event-card">
                        <WorkshopCard
                            name = "General Interest Meeting for SWE and NSBE"
                            description = "Introducing the Society of Women Engineers (SWE)! Their goal is to empower women to achieve their full potential in careers as engineers and leaders, expand the image of the engineering and technology professions as a positive force in improving the quality of life, and demonstrate the value of diversity and inclusion. Their main purpose is centered around a passion for their members’ success and continues to evolve with the challenges and opportunities reflected in today's exciting engineering and technology specialties."
                            date = "February 10th"
                            time = "8:00PM - 9:00PM EST"
                            location = "Zoom"
                            link = "https://discord.gg/PAqcKu6"
                        />
                    </div>
                    <div className = "event-card">
                        <WorkshopCard
                            flyer = "/images/2021-2022/events/spring/spring-general-interest.jpg"
                        />
                    </div>
                    <div className = "event-card">
                        <WorkshopCard
                            name = "Side Project Development Night"
                            description = "Join us to show off what projects you're working on, get help on a current project, or find motivation to start a new project."
                            date = "February 11th"
                            time = "8:00PM EST"
                            location = "UAlbany Campus"
                            link = "https://discord.gg/PAqcKu6"
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Schedule;