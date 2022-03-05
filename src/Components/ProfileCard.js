import React from "react"
import EmptyProfile from "./images/EmptyProfile.jpg"
import Github from "./images/github.png"
import Linkedin from "./images/linkedin.png"
import $ from 'jquery'
import "./ProfileCard.css"

class ProfileCard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            avatar: undefined,
            name: undefined,
            membership: undefined,
            githubLink: undefined,
            linkedinLink: undefined,
            cardColor: undefined,
            textColor: undefined,
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        var avatar = props.avatar;
        var membership = props.membership;
        var cardColor = props.cardColor;
        var textColor = props.textColor;
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

    render()
    {
        var githubLink = this.state.githubLink;
        var linkedinLink = this.state.linkedinLink;
        function setup()
        {
            if(githubLink === undefined || githubLink === "")
            {
                $("#githubbutton").css({"visibility": "hidden", "width": "0px"})
                $("#linkedinbutton").css({"transform": "translateX(-150px)"})
            }
            if(linkedinLink === undefined || linkedinLink === "")
            {
                document.getElementById("linkedinbutton").style.visibility = "hidden";
            }
        }

        $(window).on('load', function()
        {
            setup();
        });

        return(
            <div className = "normal" id = "profilecard" style = {{backgroundColor: this.state.cardColor}}>
                <img className = "normal" src = {this.state.avatar} id = "profileimage" alt = "Profile"/>
                <h1 className = "normal" id = "name" style = {{color: this.state.textColor}}>{this.state.name}</h1>
                <h2 className = "normal" id = "membership" style = {{color: this.state.textColor}}>{this.state.membership}</h2>
                <div className = "normal" id = "githubbutton" onClick = {this.goToGithub.bind(this)}>
                    <img id = "githubimg" src = {Github} alt = "Github"/>
                    <p id = "githubname">github</p>
                </div>
                <div className = "normal" id = "linkedinbutton" onClick = {this.goToLinkedin.bind(this)}>
                    <img id = "linkedinimg" src = {Linkedin} alt = "LinkedIn"/>
                    <p id = "linkedinname">linkedin</p>
                </div>
            </div>
        );
    }
}
export default ProfileCard;