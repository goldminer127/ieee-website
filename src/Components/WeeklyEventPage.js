import React from "react";
import Header from "./EventsBanner.js"
import Footer from "./Footer.js"
import ProfileCard from "./ProfileCard.js"
import "./WeeklyEventPage.css"

class WeeklyEventPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            banner: undefined,
            reducedBanner: undefined,
            type: undefined,
            title: undefined,
            subtitle: undefined,
            description: undefined,
            hostImage: undefined,
            hostName: undefined,
            hostMembership: undefined,
            hostLinkedin: undefined,
            cohostImage: undefined,
            cohostName: undefined,
            cohostMembership: undefined,
            cohostLinkedin: undefined,
            location: undefined,
            link: undefined
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        return {
            banner: props.banner,
            reducedBanner: props.reducedBanner,
            type: props.type,
            title: props.title,
            subtitle: props.subtitle,
            description: props.description,
            hostImage: props.hostImage,
            hostName: props.hostName,
            hostMembership: props.hostMembership,
            hostLinkedin: props.hostLinkedin,
            cohostImage: props.cohostImage,
            cohostName: props.cohostName,
            cohostMembership: props.cohostMembership,
            cohostLinkedin: props.cohostLinkedin,
            location: props.location,
            link: props.link,
        };
    }
    render()
    {
        return(
            <div id = "weekly-event-page-body" className = "normal">
                <Header type = {this.state.type}/>
                <div id = "weekly-event-title-container">
                    <h1 id = "weekly-event-title" className = "normal">{this.state.title}<br/><span id = "weekly-event-subtitle">{this.state.subtitle}</span></h1>
                    <div id = "title-line1-bend"/>
                    <div id = "title-line2-bend"/>
                    <div id = "title-line1-straight"/>
                    <div id = "title-line2-straight"/>
                </div>
                <br/>
                    <br/>
                <br/>
                <div id = "weekly-event-hosts" className = "normal">
                    <h1 style = {{fontSize: "50px", textAlign: "center", color: "white", border: "5px solid rgb(204,102,0)", margin: "0"}}>Event Hosts</h1>
                    <ProfileCard
                        avatar = {this.state.hostImage}
                        name = {this.state.hostName}
                        membership = {this.state.hostMembership}
                        linkedin = {this.state.hostLinkedin}
                    />
                </div>
                <p id = "weekly-event-description" className = "normal">{this.state.description}</p>
                <br/>
                    <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
}
export default WeeklyEventPage;