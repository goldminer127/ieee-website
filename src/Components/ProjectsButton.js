import React from 'react';
class ProjectsButton extends React.Component
{   
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

    static getDerivedStateFromProps(props, state)
    {
        return {
            id: props.id,
            display: props.display,
            link: props.link
        };
    }
    
    render()
    {
        return (
            <button id = {this.state.id} onClick = {this.goToLink.bind(this)} onMouseOver = {this.hoverState.bind(this)}
                onMouseLeave = {this.defaultState.bind(this)} style = {{backgroundColor: "rgba(43, 43, 43, 1)", width: "150px",
                height: "50px", textAlign: "left", border: "none"}}>
                    <p style = {{color: "white", fontSize: "16px", position: "relative", left: "5px"}}>
                        {this.state.display}
                    </p>
            </button>
        );
    }
}

export default ProjectsButton;