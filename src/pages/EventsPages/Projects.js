import Banner from "../assets/SideProjBanner.png"
import ReducedBanner from "../assets/ReducedSideProjBanner.png"
import Page from "../../Components/WeeklyEventPage.js"
import "./Projects.css"

function Projects()
{
    //Properties for page
    let title = "Side Project Development Night";
    let subtitle = "Hosted every Friday at 8PM EST";
    let description = "Bored with nothing to do? Maybe it’s time to start a side project. Join us every Friday for Side Project Development Night. Come see what everyone else is working on or better yet, show off what you’re working on. Need help on something? Just ask! Need motivation? We got that too!";
    let hostImage = "/images/2021-2022/officers/emily_stryker.jpg";

    return(
        <Page
            banner = {Banner}
            reducedBanner = {ReducedBanner}
            type = "event"
            title = {title}
            subtitle = {subtitle}
            description = {description}
            hostImage = {hostImage}
            hostName = "Emily Stryker"
            hostMembership = "EBoard Secretary"
            hostLinkedin = "https://www.linkedin.com/in/emily-stryker/"
        />
    );
}
export default Projects;
  