import React from 'react';
import ProjectsButton from "./ProjectsButton.js"
import Logo from "./images/logo.png"
import ReducedMenuImg from "./images/menu.png"
import "./EventsBanner.css"
import $ from 'jquery'
class EventsBanner extends React.Component
{   
    showMenu()
    {
        document.getElementById("menubutton").style.pointerEvents = "none";
        document.getElementById("menu").className = "menushow";
    }

    hideMenu()
    {
        document.getElementById("menubutton").style.pointerEvents = "initial";
        document.getElementById("menu").className = "menuhide";
    }

    //Links
    goToProjects()
    {
        if(window.location.href !== document.location.origin + "/events/projects")
        {
            window.location.href=(document.location.origin + "/events/projects");
        }
    }

    goToSchedule()
    {
        if(window.location.href !== document.location.origin + "/events/schedule")
        {
            window.location.href=(document.location.origin + "/events/schedule")
        }
    }

    goToEventsHome()
    {
        if(window.location.href !== document.location.origin + "/events/home")
        {
            window.location.href=(document.location.origin + "/events/home");
        }
    }
    
    extendedMenuShow()
    {
        document.getElementById("extendedmenu").className = "extendedmenushow";
        document.getElementById("leftline").className = "leftline";
        document.getElementById("bottomline").className = "bottomline";
        document.getElementById("rightline").className = "rightline";
        document.getElementById("columns").className = "columns";
        document.getElementById("column1").className = "show";
        document.getElementById("column2").className = "show";
    }

    extendedMenuHide()
    {
        document.getElementById("extendedmenu").className = "extendedmenuhidden";
        document.getElementById("leftline").className = "hidden";
        document.getElementById("bottomline").className = "hidden";
        document.getElementById("rightline").className = "hidden";
        document.getElementById("columns").className = "hidden";
        document.getElementById("column1").className = "hidden";
        document.getElementById("column2").className = "hidden";
    }

    showProjectButtons()
    {
        document.getElementById("project-buttons").className = "show-project-buttons";
    }

    hideProjectButtons()
    {
        document.getElementById("project-buttons").className = "hide-project-buttons";
    }

    render()
    {
        //images
        let banner = this.props.banner;
        let bannerId = "banner";
        let reducedBanner = this.props.reducedBanner;
        let bannerType = this.props.type;
        let color = this.props.color; //Only used if projectbanner is = to yes
        let headerName = "header";

        if(bannerType === "project" && !(banner === undefined || banner === ""))
        {
            bannerId = "projectbanner";
            headerName = "projectHeader";
        }
        else if(bannerType === "event" && !(banner === undefined || banner === ""))
        {
            bannerId = "eventbanner";
            headerName = "eventHeader";
        }

        function setup()
        {
            if(banner === undefined || banner === "")
            {
                document.getElementById(bannerId).style.visibility = "hidden";
                document.getElementById(headerName).style.height = "250px";
            }
            else if(reducedBanner === undefined || reducedBanner === "")
            {
                reducedBanner = banner;
            }
            $("#" + headerName).css({"background-color": color});
        }

        $(window).on('load', function()
        {
            $(window).on('resize', function()
            {
                document.getElementById("menu").className = "menuinitialhide";
            });
            setup()
        });

        return(
        <div id = {headerName}>
            <img src={banner} id={bannerId} alt="Banner"/>
            <div id="navigation">
                <button id = "menubutton">
                    <img src={ReducedMenuImg} id = "reducedmenuimg" alt="Alternative Menu" onClick = {this.showMenu.bind(this)}/>
                </button>
                
                <div id = "menu" className = "menuinitialhide">
                    <div id = "menu-close" onClick={this.hideMenu.bind(this)}>
                        <h1>x</h1>
                    </div>
                    <div id = "menuhome" className = "alt-menu-button" onClick = {this.goToEventsHome.bind(this)}>
                        <h1>
                            About
                        </h1>
                    </div>
                    <div id = "menuschedule" className = "alt-menu-button" onClick = {this.goToSchedule.bind(this)}>
                        <h1>
                            Events
                        </h1>
                    </div>
                    <div id = "menuprojects" className = "alt-menu-button" onClick = {this.goToProjects.bind(this)}
                    onMouseOver = {this.showProjectButtons.bind(this)} onMouseLeave = {this.hideProjectButtons.bind(this)}>
                        <h1>
                            Projects
                        </h1>
                    </div>
                    <div id = "project-buttons" className = "hide-project-buttons" onMouseOver = {this.showProjectButtons.bind(this)} onMouseLeave = {this.hideProjectButtons.bind(this)}>
                        <button className = "mini-alt-menu-button" onClick = {this.goToProjects.bind(this)}>
                            <h1>
                                TShell
                            </h1>
                        </button>
                        <button className = "mini-alt-menu-button" onClick = {this.goToProjects.bind(this)}>
                            <h1>
                                Office Hours
                            </h1>
                        </button>
                    </div>
                </div>

                <img src={Logo} id = "logo" alt="IEEE"/>
                <div id = "navcontainer" onMouseOver = {this.extendedMenuShow.bind(this)} onMouseLeave = {this.extendedMenuHide.bind(this)}>
                    <div className = "enavbutton">
                        <button id = "projectsbutton" onClick = {this.goToProjects.bind(this)}>
                            <h1>
                                Projects
                            </h1>
                            <p style={{ zIndex: "3", color: "white", transform: "translateY(-50%)"}}>
                                Ongoing projects
                            </p>
                        </button>
                    </div>

                    <div className = "enavbutton">
                        <button id = "schedulebutton" onClick = {this.goToSchedule.bind(this)}>
                            <h1>
                                Events
                            </h1>
                            <p style={{ zIndex: "3", color: "white", transform: "translateY(-50%)"}}>
                                Our schedule
                            </p>
                        </button>
                    </div>

                    <div className = "enavbutton">
                        <button id = "homebutton" onClick = {this.goToEventsHome.bind(this)}>
                            <h1>
                                About
                            </h1>
                            <p style={{ zIndex: "3", color: "white",transform: "translateY(-50%)"}}>
                                About our events
                            </p>
                        </button>
                    </div>

                    <div id = "extendedmenu" className = "extendedmenuhidden">
                        <div id = "leftline" className = "hidden"/>
                        <div id = "bottomline" className = "hidden"/>
                        <div id = "rightline" className = "hidden"/>
                        <div id = "columns" className = "hidden">
                            <div id = "column1" className = "hidden">
                                <ProjectsButton id = "TShell" display = "Project TShell" link = {document.location.origin + "/events/projects/TShell"}/>
                                <ProjectsButton id = "OfficeHours" display = "Office Hours" link = {document.location.origin + "/events/projects/OfficeHours"}/>
                            </div>
                            {/* Add new button for every added featured projects */}
                            <div id = "column2" className = "hidden">
                                <ProjectsButton id = "coding-night" display = "Coding Night" link = {document.location.origin +  "/events/coding-night"}/>
                                <ProjectsButton id = "workshop-archive" display = "Past Workshops" link = {document.location.origin + "/events/workshop-archive"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default EventsBanner;