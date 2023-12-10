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
                <h1 id = "schedule-title">
                    Fall November 16th - December 1st
                </h1>
                <div id = "card-container">
                    <div className = "event-card">
                        <WorkshopCard
                            name = "Intro to Game Development with Unreal Engine"
                            description = "Discover the power of Unreal Engine in our beginner-friendly workshop. Learn why it's the ideal platform for crafting captivating video games. Dive into visual scripting with Blueprints for efficient game development. Unleash your creativity with us and start your journey into the world of 3D game design."
                            date = "November 16th"
                            time = "7:30PM"
                            location = "HU 113"
                            link = "https://discord.gg/PAqcKu6"
                        />
                    </div>
                    <div className = "event-card">
                        <WorkshopCard
                            name = "VR Full Body Tracking Workshop"
                            description = "Being able to interact with a virtual world is cool, but now imagine being able to move your feet and hips in the real world and have it translated to the VR game. In this workshop we will be building these trackers from off the shelf hardware and putting them all together."
                            date = "November 17th"
                            time = "6:00PM"
                            location = "ETEC 190"
                            link = "https://discord.gg/PAqcKu6"

                        />
                        </div>
                        <div className = "event-card" >
                            <WorkshopCard
                            name = "Ava Cryptography Workshop"
                            description = ""
                            date = "November 20th"
                            time = "7:30PM"
                            location = "SS133"
                            link = "https://discord.gg/PAqcKu6"
                            />
                        </div>
                        <div className = "event-card" >
                            <WorkshopCard
                            name = "Blender Workshop"
                            description = ""
                            date = "November 29th"
                            time = "7:30PM"
                            location = "SS133"
                            link = "https://discord.gg/PAqcKu6"
                            />
                            </div>
                        <div className = "event-card" >
                            <WorkshopCard
                            name = "PDN Monzir, Vincent"
                            description = ""
                            date = "December 1st"
                            time = "3:00PM"
                            location = "SS133"
                            link = "https://discord.gg/PAqcKu6"
                            />
                            </div>
                        <div className = "event-card" >
                            <WorkshopCard
                            name = "Final General Meeting For the Semester"
                            description = ""
                            date = "December 1st"
                            time = "5:00PM"
                            location = "SS133"
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