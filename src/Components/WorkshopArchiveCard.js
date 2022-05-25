import React from "react";
import EmptyThumbnail from "./images/EmptyThumbnail.jpg"
import PlayButton from "./images/YoutubePlayButton.png"
import "./WorkshopArchiveCard.css"
import $ from 'jquery'

class WorkshopArchiveCard extends React.Component
{
    constructor(state)
    {
        super(state);
        this.state = {
            id: undefined,
            name: undefined,
            description: undefined,
            youtube: undefined,
            thumbnail: undefined,
            semester: undefined,
            year: undefined
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        var description = props.description;
        var thumbnail = props.thumbnail;
        if(description === undefined || description === "")
            description = "IEEE Workshop";
        if(thumbnail === undefined || thumbnail === "")
        {
            thumbnail = EmptyThumbnail;
        }
        return{
            id: props.name + props.semester + props.year,
            name: props.name,
            description: description,
            youtube: props.youtube,
            thumbnail: thumbnail,
            semester: props.semester,
            year: props.year
        };
    }

    showSubsection()
    {
        var element = document.getElementById(this.state.id);
        if(element.className === "card-hide")
            element.className = "card-show";
    }

    hideSubsection()
    {
        var element = document.getElementById(this.state.id);
        if(element.className === "card-show")
            element.className = "card-hide";
    }

    goToLink()
    {
        window.open(this.state.youtube);
    }

    render()
    {
        if(this.state.youtube === undefined || this.state.youtube === "")
        {
            return(
                <div className = "workshop-archive-card" onClick={() => this.showSubsection()} onMouseLeave={this.hideSubsection.bind(this)}>
                    <h3>{this.state.name}</h3>
                    <div id = {this.state.id} className="card-hide">
                        <p>{this.state.description}</p>
                        <div className = "archive-card-images">
                            <img className = "archive-thumbnail" alt = "event thumbnail" src = {this.state.thumbnail}/>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div className = "workshop-archive-card" onClick={() => this.showSubsection()} onMouseLeave={this.hideSubsection.bind(this)}>
                    <h3>{this.state.name}</h3>
                    <div id = {this.state.id} className="card-hide">
                        <p>{this.state.description}</p>
                        <div className = "archive-card-images" onClick = {this.goToLink.bind(this)}>
                            <img className = "archive-play-button" alt = "play button" src = {PlayButton}/>
                            <img className = "archive-thumbnail" alt = "event thumbnail" src = {this.state.thumbnail}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default WorkshopArchiveCard;