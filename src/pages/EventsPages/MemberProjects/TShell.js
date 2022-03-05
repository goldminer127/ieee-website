import ProjectPage from "../../../Components/ProjectPage";

function ProjectTShell()
{
    //To configure project page, change the following properties accordingly
    var banner = "/images/2021-2022/projects/TShell/banner.png"
    var profileImage = "/images/2021-2022/projects/TShell/brandon_tiev.png"
    //Featured images on project page. Limited to 6 images
    var images =
    [
        "/images/2021-2022/projects/TShell/pic1.png",
        "/images/2021-2022/projects/TShell/banner.png",
    ]

    var github = "https://github.com/goldminer127";
    var linkedin = "https://www.linkedin.com/in/brandon-tiev-6a2a681aa/";

    var projectName = "TShell"
    var description = "TShell is a shell used in ComputerCraft, a Minecraft mod that adds computers for automating tasks and communication. It eliminates the need for the users to manually code in their own programs by providing a large set of commands. It is written using Lua. This project is still in development and is currently on version Beta 1.9";
    return(
        <ProjectPage
            mainBanner = {banner}
            colorPattern = "dark"
            images = {images}
            github = {github}
            linkedin = {linkedin}
            avatar = {profileImage}
            name = "Brandon Tiev"
            membership = "IEEE Webmaster"
            projectName = {projectName}
            description = {description}
        />
    );
}
export default ProjectTShell;