import React from "react";
import EmptyThumbnail from "./images/EmptyThumbnail.jpg"
import FolderTop from "./images/FolderTop.png"
import PlayButton from "./images/YoutubePlayButton.png"
import "./WorkshopArchiveCard.css"
import $ from 'jquery'

class WorkshopArchiveCard extends React.Component
{
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
            year: props.year,
        };
    }

    formatImage()
    {
        if(this.state.youtube == "")
        {
            return(<img className = "workshop-archive-thumbnail" src = {this.state.thumbnail}/>);
        }
        else
        {
            return(<img className = "workshop-archive-thumbnail" src = {this.state.thumbnail}/>)
        }
    }

    positionCard()
    {
        let element = document.getElementById(this.state.id);
        element.className = "workshop-archive-card";
        $("#" + this.state.id).css({"position": "absolute", "left": (visualViewport.width/2) - (element.offsetWidth / 2),
        "top": (visualViewport.height / 2) - (element.offsetHeight / 2)});
    }

    render()
    {
        return(
            <div className = "workshop-archive-card">
                <div id = {this.state.id + "text"}>
                    <h2 className = "workshop-archive-text">Hello</h2>
                </div>
                <div id = {this.state.id} className = "hidden">
                    <div className = "folder-top">
                        <img className = "folder-top-img" src = {FolderTop}/>
                    </div>
                    <div className = "folder-body">
                        <div className = "workshop-archive-card-body">
                            <h1 className = "workshop-archive-title">{this.state.name}</h1>
                            <p className = "workshop-archive-description">{this.state.description}</p>
                            {this.formatImage()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WorkshopArchiveCard;