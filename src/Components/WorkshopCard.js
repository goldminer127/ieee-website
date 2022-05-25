import Background from "./images/DefaultFlyer.png"
import React from 'react';
import "./WorkshopCard.css"
class WorkshopCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id: undefined,
            name: undefined,
            description: undefined,
            date: undefined,
            time: undefined,
            location: undefined,
            link: undefined,
            flyer: undefined
        };
    }
    static getDerivedStateFromProps(props, state)
    {
        if(props.flyer !== undefined && props.flyer !== "")
            return{flyer: props.flyer};
        else
            return {
                id: props.id, 
                name: props.name, 
                description: props.description,
                date: props.date,
                time: props.time,
                location: props.location,
                link: props.link
            };
    }

    goToLink()
    {
        window.open(this.state.link);
    }

    render()
    {
        if(this.state.flyer === undefined || this.state.flyer === "")
        {
            return(
                <div id = "workshop-card">
                    <div id = "inner-workshop-card">
                        <div id = "front-workshop-card">
                            <img id = "workshop-background" alt = "workshop background" src = {Background}/>
                            <h2 id = "workshop-name">{this.state.name}</h2>
                            <h3 id = "workshop-day">{this.state.date}</h3>
                            <h4 id = "workshop-time">{this.state.time}</h4>
                            <h4 id = "workshop-location">Location: {this.state.location}</h4>
                        </div>
                        <div id = "back-workshop-card">
                            <img id = "workshop-background" alt = "workshop background" src = {Background}/>
                            <p id = "workshop-description">{this.state.description}</p>
                            <h4 id = "workshop-link" onClick = {this.goToLink.bind(this)}>Click to join!</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div id = "workshop-card">
                    <img id = "workshop-background" alt = "workshop flyer" src = {this.state.flyer}/>
                </div>
            );
        }
    }
}
export default WorkshopCard