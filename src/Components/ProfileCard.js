import React from "react"
import EmptyProfile from "./images/EmptyProfile.jpg"
import Github from "./images/github.png"
import Linkedin from "./images/linkedin.png"
import $ from 'jquery'
import "./ProfileCard.css"

class ProfileCard extends React.Component
{
    static getDerivedStateFromProps(props, state)
    {
        let avatar = props.avatar;
        let membership = props.membership;
        let cardColor = props.cardColor;
        let textColor = props.textColor;
        if(avatar === undefined || avatar === "")
            avatar = EmptyProfile;
        if(membership === undefined || membership === "")
            membership = "IEEE member";
        if(textColor === undefined || textColor === "")
            textColor = "white";
        if(cardColor === undefined || cardColor === "")
            cardColor = "none";
        return {
            avatar: avatar,
            name: props.name,
            membership: membership,
            githubLink: props.github,
            linkedinLink: props.linkedin,
            cardColor: cardColor,
            textColor: textColor,
        };
    }

    goToGithub()
    {
        window.open(this.state.githubLink);
    }

    goToLinkedin()
    {
        window.open(this.state.linkedinLink);
    }

    setup()
    {
        let githubLink = this.state.githubLink;
        let linkedinLink = this.state.linkedinLink;
        if(githubLink === undefined || githubLink === "")
        {
            $("#" + this.state.name + "github").css({"visibility": "hidden", "width": "0px"})
            $("#" + this.state.name + "linkedin").css({"transform": "translateX(-150px)"})
        }
        if(linkedinLink === undefined || linkedinLink === "")
        {
            document.getElementById(this.state.name + "linkedin").style.visibility = "hidden";
        }
    }

    render()
    {
        return(
            <div className = "profilecard" style = {{backgroundColor: this.state.cardColor}}>
                <img src = {this.state.avatar} id = "profileimage" alt = "Profile"/>
                <h1 id = "name" style = {{color: this.state.textColor}}>{this.state.name}</h1>
                <h2 id = "membership" style = {{color: this.state.textColor}}>{this.state.membership}</h2>
                <div id = {this.state.name + "github"} className = "githubbutton" onClick = {this.goToGithub.bind(this)}>
                    <img className = "githubimg" src = {Github} alt = "Github"/>
                    <p className = "githubname">github</p>
                </div>
                <div id = {this.state.name + "linkedin"} className = "linkedinbutton" onClick = {this.goToLinkedin.bind(this)}>
                    <img className = "linkedinimg" src = {Linkedin} alt = "LinkedIn"/>
                    <p className = "linkedinname">linkedin</p>
                </div>
            </div>
        );
    }
}
export default ProfileCard;