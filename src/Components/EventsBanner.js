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
        if(window.location.href !== "http://localhost:3000/events/projects")
        {
            window.location.href=("http://localhost:3000/events/projects");
        }
    }

    goToSchedule()
    {
        if(window.location.href !== "http://localhost:3000/events/schedule")
        {
            window.location.href=("http://localhost:3000/events/schedule")
        }
    }

    goToEventsHome()
    {
        if(window.location.href !== "http://localhost:3000/events/home")
        {
            window.location.href=("http://localhost:3000/events/home");
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

    render()
    {
        //images
        var banner = this.props.banner;
        var bannerId = "banner";
        var reducedBanner = this.props.reducedBanner;
        var bannerType = this.props.type;
        var color = this.props.color; //Only used if projectbanner is = to yes
        var headerName = "header";
        var mode = ".normal";

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

        function normalDisplay()
        {
            //fix banner
            var elements = document.querySelectorAll(mode);
            elements.forEach(function (element)
            {
                if(element.id === bannerId && (banner === undefined || banner === ""))
                {
                    element.style.visibility = "hidden";
                }
                else if(element.id === bannerId && !(reducedBanner === undefined || reducedBanner === ""))
                {
                    element.className = "normal";
                    element.src = banner;
                }
                else
                {
                    element.className = "normal";
                }
            });
            mode = ".normal";
        }

        function reducedDisplay()
        {
            var elements = document.querySelectorAll(mode);
            elements.forEach(function (element)
            {
                if(element.id === bannerId && (banner === undefined || banner === ""))
                {
                    element.style.visibility = "hidden";
                }
                else if(element.id === bannerId && !(reducedBanner === undefined || reducedBanner === ""))
                {
                    element.className = "reduced";
                    element.src = reducedBanner;
                }
                else
                {
                    element.className = "reduced";
                }
            });
            mode = ".reduced";
        }

        function mobileDisplay()
        {
            var elements = document.querySelectorAll(mode);
            elements.forEach(function (element)
            {
                if(element.id === bannerId && (banner === undefined || banner === ""))
                {
                    element.style.visibility = "hidden";
                }
                else if(element.id === bannerId && !(reducedBanner === undefined || reducedBanner === ""))
                {
                    element.className = "mobile";
                    element.src = reducedBanner;
                }
                else
                {
                    element.className = "mobile";
                }
            });
            mode = ".mobile";
        }

        function resize()
        {
            var sw = window.screen.width;
            var w = window.innerWidth;
            //Menu control
            if(document.getElementById("menu").className !== "menuinitialhide")
            {
                document.getElementById("menu").className = "menuhide";
            }

            if(sw < 530)
            {
                mobileDisplay()
            }
            else if(w < 900)
            {
                reducedDisplay()
            }
            else
            {
                normalDisplay()
            }
        }

        $(window).on('load', function()
        {
            $(window).resize(function()
            {
                resize()
            });
            resize()
            setup()
        });

        return(
        <div id = {headerName}>
            <img src={banner} id={bannerId} className = "normal" alt="Banner"/>
            <div id="navigation">
                <button id = "menubutton" className = "normal">
                    <img src={ReducedMenuImg} id = "reducedmenuimg" className = "normal" alt="Alternative Menu" onClick = {this.showMenu.bind(this)}/>
                </button>
                
                <div id = "menu" className = "menuinitialhide">
                    <button onClick={this.hideMenu.bind(this)} style = {{backgroundColor: "rgba(0, 0, 0, 0)", color: "white", textAlign: "left", position: "relative", left: "93.7%"}}>
                        X
                    </button>
                    <button id = "menuprojects" className = "menunavbutton" onClick = {this.goToProjects.bind(this)}>
                        <h1>
                            Projects
                        </h1>
                    </button>
                    <button id = "menuschedule" className = "menunavbutton" onClick = {this.goToSchedule.bind(this)}>
                        <h1>
                            Schedule
                        </h1>
                    </button>

                    <button id = "menuhome" className = "menunavbutton" onClick = {this.goToEventsHome.bind(this)}>
                        <h1>
                            Events
                        </h1>
                    </button>
                </div>

                <img src={Logo} id = "logo" className = "normal" alt="IEEE"/>
                <div id = "navcontainer" className = "normal" onMouseOver = {this.extendedMenuShow.bind(this)} onMouseLeave = {this.extendedMenuHide.bind(this)}>
                    <div className = "enavbutton">
                        <button id = "projectsbutton" className = "normal" onClick = {this.goToProjects.bind(this)}>
                            <h1>
                                Projects
                            </h1>
                            <p style={{ zIndex: "3", color: "white", transform: "translateY(-50%)"}}>
                                Ongoing projects
                            </p>
                        </button>
                    </div>

                    <div className = "enavbutton">
                        <button id = "schedulebutton" className = "normal" onClick = {this.goToSchedule.bind(this)}>
                            <h1>
                                Events
                            </h1>
                            <p style={{ zIndex: "3", color: "white", transform: "translateY(-50%)"}}>
                                Our schedule
                            </p>
                        </button>
                    </div>

                    <div className = "enavbutton">
                        <button id = "homebutton" className = "normal" onClick = {this.goToEventsHome.bind(this)}>
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
                                <ProjectsButton id = "TShell" display = "Project TShell" link = "http://localhost:3000/events/projects/TShell"/>
                                <ProjectsButton id = "OfficeHours" display = "Office Hours" link = "http://localhost:3000/events/projects/OfficeHours"/>
                            </div>
                            {/* Add new button for every added featured projects */}
                            <div id = "column2" className = "hidden">
                                <ProjectsButton id = "coding-night" display = "Coding Night" link = "http://localhost:3000/events/coding-night"/>
                                <ProjectsButton id = "workshop-archive" display = "Past Workshops" link = "http://localhost:3000/events/workshop-archive"/>
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