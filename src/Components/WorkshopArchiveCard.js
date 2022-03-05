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
            id: props.id,
            name: props.name,
            description: description,
            youtube: props.youtube,
            thumbnail: thumbnail,
        };
    }

    showSubsection()
    {
        var element = $("#" + this.state.id);
        if(element.hasClass("card-hide"))
            element.removeClass("card-hide");
        element.addClass("card-show");
    }

    hideSubsection()
    {
        var element = $("#" + this.state.id);
        if(element.hasClass("card-show"))
            element.removeClass("card-show");
        element.addClass("card-hide");
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
                <div id = "workshop-archive-card" className = "normal" onMouseOver={this.showSubsection.bind(this)} onMouseLeave={this.hideSubsection.bind(this)}>
                    <h3>{this.state.name}</h3>
                    <div id = {this.state.id} className="card-hide">
                        <p>{this.state.description}</p>
                        <div id = "archive-card-images">
                            <img id = "archive-thumbnail" src = {this.state.thumbnail}/>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div id = "workshop-archive-card" className = "normal" onMouseOver={this.showSubsection.bind(this)} onMouseLeave={this.hideSubsection.bind(this)}>
                    <h3>{this.state.name}</h3>
                    <div id = {this.state.id} className="card-hide">
                        <p>{this.state.description}</p>
                        <div id = "archive-card-images" onClick = {this.goToLink.bind(this)}>
                            <img id = "archive-play-button" src = {PlayButton}/>
                            <img id = "archive-thumbnail" src = {this.state.thumbnail}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default WorkshopArchiveCard;