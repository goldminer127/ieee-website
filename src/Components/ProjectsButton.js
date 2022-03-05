import React from 'react';
class ProjectsButton extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.state = {link: "error"};
    }

    goToLink()
    {
        if(this.state.link === "error")
            console.log("Could not open link");
        else
            window.location.href = this.state.link;
    }

    hoverState()
    {
        document.getElementById(this.state.id).style.backgroundColor = "indigo";
        document.getElementById(this.state.id).style.cursor = "pointer";
    }

    defaultState()
    {
        document.getElementById(this.state.id).style.backgroundColor = "rgba(43, 43, 43, 1)";
    }
    
    render()
    {
        //"Properties"
        var id = this.props.id;
        var display = this.props.display;
        var link = this.props.link;

        //This is bad practice, only do here. (Change later)
        this.state = {link: link, id: id};
        return (
            <button id = {id} onClick = {this.goToLink.bind(this)} onMouseOver = {this.hoverState.bind(this)}
                onMouseLeave = {this.defaultState.bind(this)} style = {{backgroundColor: "rgba(43, 43, 43, 1)", width: "150px",
                height: "50px", textAlign: "left", border: "none"}}>
                    <p style = {{color: "white", fontSize: "16px", position: "relative", left: "5px"}}>
                        {display}
                    </p>
            </button>
        );
    }
}

export default ProjectsButton;