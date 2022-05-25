import Board from "../../Components/MembersBoard.js"
import Banner from "../assets/DSC_0497.JPG"
import Footer from "../../Components/Footer.js"
import "./Members.css"

function Members()
{
    return(
        <div id = "members-body">
            <div id = "board-banner-contents">
                <img id = "board-banner" alt = "members banner" src = {Banner}/>
                <div id = "board-shadow"/>
            </div>
            <div id = "board-content">
                <Board/>
            </div>
            <Footer/>
        </div>
    );
}
export default Members;
