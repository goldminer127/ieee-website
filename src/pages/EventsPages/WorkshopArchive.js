import Header from "../../Components/EventsBanner.js"
import Footer from "../../Components/Footer.js"
import Archive from "../../Components/Archive.js";
import "./WorkshopArchive.css"

function WorkshopArchive()
{
    return(
        <div>
            <Header color = "rgb(34, 0, 51)"/>
            <Archive/>
            <Footer/>
        </div>
    );
}
export default WorkshopArchive;