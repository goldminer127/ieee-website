import Banner from "../assets/CodingNightBanner.png"
import Page from "../../Components/WeeklyEventPage.js"
function CodingNight()
{
    //Properties for page
    var title = "Professional Development Night";
    var subtitle = "Hosted every Monday at 8PM EST";
    var description = "Struggled on that last technical interview? Want to get a better understanding of data structures and algorithms? Join us every Monday for Professional Development Night. We offer resume review and host technical interview practice with LeetCode problems where we attempt to solve them and discuss different approaches to them.";
    var hostImage = "/images/2021-2022/officers/matthew_killeen.jpg";

    return(
        <Page
            banner = {Banner}
            type = "event"
            title = {title}
            subtitle = {subtitle}
            description = {description}
            hostImage = {hostImage}
            hostName = "Matthew Killeen"
            hostMembership = "EBoard Treasurer"
            hostLinkedin = "https://www.linkedin.com/in/matthew-r-killeen/"
        />
    );
}
export default CodingNight;