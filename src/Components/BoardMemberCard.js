import React from 'react'
import Image from './images/EmptyProfile.jpg'
import Github from "./images/github.png"
import Linkedin from "./images/linkedin.png"
import $ from 'jquery'
import './BoardMemberCard.css'

class BoardMemberCard extends React.Component
{
    static getDerivedStateFromProps(props,state)
    {
        return {
            id: props.id,
            name: props.name,
            position: props.position,
            branch: props.branch,
            start: props.start,
            image: props.image,
            github: props.github,
            linkedin: props.linkedin,
            size: props.size + "rem",
            margin: props.margin + "rem",
        }
    }

    //Background color controlled here
    setColor()
    {
        if(this.state.branch === "eboard")
        {
            return "rgb(163, 49, 49)"
        }
        else if(this.state.branch === "jboard")
        {
            return "rgb(13, 97, 199)"
        }
        else if(this.state.branch === "dboard")
        {
            return "rgb(116, 20, 139)"
        }
        else
        {
            return "rgb(255, 255, 255)"
        }
    }

    setDisplay()
    {
        let element = document.getElementById(this.state.id);
        if(element.className !== "card-selected")
        {
            element.className = "card-selected";
            element.parentElement.style.zIndex = "1";

            let displayCard = document.getElementById(this.state.name + this.state.start + "card");
            let width = 30;
            let height = 25;
            if(visualViewport.width < 600)
            {
                width = 15;
                height = 30;
            }
            displayCard.className = "interactive-card";
            displayCard.style.width = width + "rem";
            displayCard.style.height = height + "rem";
            displayCard.style.backgroundColor = this.setColor();
            displayCard.style.top = ((visualViewport.height / 2) - (element.parentElement.getBoundingClientRect().y)) - ((height * 16) / 2) - 100;
            displayCard.style.left = ((visualViewport.width / 2) - (element.parentElement.getBoundingClientRect().x)) - ((width * 16) / 2);

            let background = document.getElementById(this.state.name + this.state.start + "back");
            background.className = "blur-back";
            background.style.width = $(window).width() + 100;
            background.style.height = $(window).height();
            background.style.top = 0 - element.parentElement.getBoundingClientRect().y;
            background.style.left = 0 - element.parentElement.getBoundingClientRect().x - 50;

            document.body.style.overflow = "hidden";
        }
    }

    removeDisplay()
    {
        try
        {
            let element = document.getElementById(this.state.id);
            element.parentElement.style.zIndex = "auto";
            element.className = "board-card";

            let displayCard = document.getElementById(this.state.name + this.state.start + "card");
            displayCard.className = "hidden";

            let background = document.getElementById(this.state.name + this.state.start + "back");
            background.className = "hidden";

            document.body.style.overflowY = "visible";
        }
        catch(e)
        {
            /*Exception occures when removeDisplay is called but the time period view is
             *changed. The cards from the time period view before the change are called.
             *Since the parent elements no longer exist once the change occured, element.parentElement
             *returns null which causes a null exception. To fix this, this try catch is here to ensure
             *any focused cards are removed from the screen if resize is to occure.
             */
        }
    }

    goToGithub()
    {
        window.open(this.state.github);
    }

    goToLinkedin()
    {
        window.open(this.state.linkedin);
    }

    fixImage(id)
    {
        document.getElementById(id).src = Image;
    }

    doesShowButton(type)
    {
        if(type === "github" && !(this.state.github === "" || this.state.github === undefined))
        {
            return "board-githubbutton";
        }
        else if(type === "linkedin" && !(this.state.linkedin === "" || this.state.linkedin === undefined))
        {
            return "board-linkedinbutton";
        }
        else
        {
            return "hidden";
        }
    }

    render()
    {
       $(window).on('resize', () => this.removeDisplay());
       return(
        <div id = {this.state.id} className = "board-card" style = {{backgroundColor: this.setColor(), width: this.state.size, height: this.state.size, marginLeft: this.state.margin, marginRight: this.state.margin}}>
            <div className = "card-container" onClick = {() => this.setDisplay()}>
                <div className = "board-image">
                    <img id = {this.state.name + this.state.start} src = {this.state.image} alt = {this.state.name + " image"} onError = {() => this.fixImage(this.state.name + this.state.start)}/>
                </div>
                <h1 className = "member-name">{this.state.name}</h1>
                <h3 className = "position">{this.state.position}</h3>
            </div>
            <div id = {this.state.name + this.state.start + "back"} className = "hidden"/>
            <div id = {this.state.name + this.state.start + "card"} className = "hidden">
                <button className = "exit" onClick = {() => this.removeDisplay()}>✕</button>
                <div className = "selected-image">
                    <img id = {this.state.name + this.state.start + "selected"} src = {this.state.image} alt = {this.state.name + " image"} onError = {() => this.fixImage(this.state.name + this.state.start + "selected")}/>
                </div>
                <h1 className = "member-name">{this.state.name}</h1>
                <h3 className = "position">{this.state.position}</h3>
                <div id = {this.state.name + this.state.start + "github"} className = {this.doesShowButton("github")} onClick = {this.goToGithub.bind(this)}>
                    <img className = "board-githubimg" src = {Github} alt = "Github"/>
                    <p className = "board-githubname">github</p>
                </div>
                <div id = {this.state.name + this.state.start + "linkedin"} className = {this.doesShowButton("linkedin")} onClick = {this.goToLinkedin.bind(this)}>
                    <img className = "board-linkedinimg" src = {Linkedin} alt = "LinkedIn"/>
                    <p className = "board-linkedinname">linkedin</p>
                </div>
            </div>
        </div>
       ); 
    }
}
export default BoardMemberCard;