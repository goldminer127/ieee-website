import Card from "./BoardMemberCard.js"
import ArrowForward from "./images/arrowforward.png"
import ArrowBackward from "./images/arrowbackward.png"
import React from 'react'
import $ from 'jquery'
import './MembersBoard.css'

class MembersBoard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: require("../Database/Members.json"),
            year: 2021,
            semester: "fall",
            //size is in rem
            size: 16,
            //margin is in rem
            margin: 1
        };
    }

    componentDidUpdate()
    {
        this.doesShowArrows();
    }

    selectedTime(year, semester, color)
    {
        document.getElementById(year + "label").style.color = color;
        document.getElementById(year + semester).style.color = color;
    }

    getEBoard()
    {
        let eboardMembers = this.state.data.filter(member => member.branch === "eboard");
        eboardMembers = eboardMembers.filter(member => (member.startSemester === this.state.semester && member.start === this.state.year) || (this.state.semester === "spring" && member.end === this.state.year && member.start !== this.state.year));
        return eboardMembers.map(member => <Card key = {member.name + member.start + member.startSemester} id = {member.name + member.start + "board"} name = {member.name} position = {member.position} branch = {member.branch} start = {member.start} image = {member.image} size = {this.state.size} margin = {this.state.margin} github = {member.github} linkedin = {member.linkedin}/>);
    }

    getJBoard()
    {
        let jboardMembers = this.state.data.filter(member => member.branch === "jboard");
        jboardMembers = jboardMembers.filter(member => (member.startSemester === this.state.semester && member.start === this.state.year) || (this.state.semester === "spring" && member.end === this.state.year && member.start !== this.state.year));
        return jboardMembers.map(member => <Card key = {member.name + member.start + member.startSemester} id = {member.name + member.start + "board"} name = {member.name} position = {member.position} branch = {member.branch} start = {member.start} image = {member.image} size = {this.state.size} margin = {this.state.margin} github = {member.github} linkedin = {member.linkedin}/>);
    }

    getDBoard()
    {
        let dboardMembers = this.state.data.filter(member => member.branch === "dboard");
        dboardMembers = dboardMembers.filter(member => (member.startSemester === this.state.semester && member.start === this.state.year) || (this.state.semester === "spring" && member.end === this.state.year && member.start !== this.state.year));
        return dboardMembers.map(member => <Card key = {member.name + member.start + member.startSemester} id = {member.name + member.start + "board"} name = {member.name} position = {member.position} branch = {member.branch} start = {member.start} image = {member.image} size = {this.state.size} margin = {this.state.margin} github = {member.github} linkedin = {member.linkedin}/>);
    }

    changeYear(year, semester)
    {
        this.selectedTime(this.state.year, this.state.semester, "white");
        this.setState(
        {
            data: this.state.data,
            year: year,
            semester: semester,
            //size is in rem
            size: this.state.size,
            //margin is in rem
            margin: this.state.margin
        });
        this.selectedTime(year, semester, "orange");
    }

    showSemesters(year)
    {
        document.querySelectorAll(".semester").forEach(this.hideSemesters);
        document.getElementById(year).className = "semester";
    }

    hideSemesters(item)
    {
        item.className = "hide";
    }

    createYear(year)
    {
        return(
            <div className = "year" onClick = {() => this.showSemesters(year)}>
                <h1 id = {year + "label"} className = "year-label">{year}</h1>
                <p id = {year} className = "hide">
                    <p id = {year + "spring"} className = "spring" onClick = {() => this.changeYear(year, "spring")}>Spring</p>
                    <p id = {year + "fall"} className = "fall" onClick = {() => this.changeYear(year, "fall")}>Fall</p>
                </p>
            </div>
        );
    }

    forward(id, list)
    {
        if(visualViewport.width / 2 < document.getElementById(list[list.length - 1].props.id).getBoundingClientRect().left)
        {
            let value = (this.state.size + (this.state.margin * 2)) * 16;
            $("#" + id).css("left", "-=" + value);
        }
    }

    backward(id, list)
    {
        if(visualViewport.width / 2 > document.getElementById(list[0].props.id).getBoundingClientRect().right)
        {
            let value = (this.state.size + (this.state.margin * 2)) * 16;
            $("#" + id).css("left", "+=" + value);
        }
    }

    doesShowArrows()
    {
        let elist = this.getEBoard();
        let jlist = this.getJBoard();
        let dlist = this.getDBoard();
        if(visualViewport.width < elist.length * (this.state.size + this.state.margin * 2) * 16)
        {
            document.getElementById("e-front-arrow").className = "front-arrow";
            document.getElementById("e-back-arrow").className = "back-arrow";
            
            //Center cards
            $("#eboard-members-cards").css("left", "");
            if(elist.length % 2 === 0)
            {
                let value = ((this.state.size + (this.state.margin * 2)) * 16) / 2;
                $("#eboard-members-cards").css("left", "+=" + value);
            }
        }
        else
        {
            document.getElementById("e-front-arrow").className = "hidden";
            document.getElementById("e-back-arrow").className = "hidden";
            $("#eboard-members-cards").css("left", "");
        }

        if(visualViewport.width < jlist.length * (this.state.size + this.state.margin * 2) * 16)
        {
            document.getElementById("j-front-arrow").className = "front-arrow";
            document.getElementById("j-back-arrow").className = "back-arrow";

            //Center cards
            $("#jboard-members-cards").css("left", "");
            if(jlist.length % 2 === 0)
            {
                let value = ((this.state.size + (this.state.margin * 2)) * 16) / 2;
                $("#jboard-members-cards").css("left", "+=" + value);
            }
        }
        else
        {
            document.getElementById("j-front-arrow").className = "hidden";
            document.getElementById("j-back-arrow").className = "hidden";
            $("#jboard-members-cards").css("left", "");
        }

        if(visualViewport.width < dlist.length * (this.state.size + this.state.margin * 2) * 16)
        {
            document.getElementById("d-front-arrow").className = "front-arrow";
            document.getElementById("d-back-arrow").className = "back-arrow";

            //Center cards
            $("#board-members-cards").css("left", "");
            if(dlist.length % 2 === 0)
            {
                let value = ((this.state.size + (this.state.margin * 2)) * 16) / 2;
                $("#board-members-cards").css("left", "+=" + value);
            }
        }
        else
        {
            document.getElementById("d-front-arrow").className = "hidden";
            document.getElementById("d-back-arrow").className = "hidden";
            $("#board-members-cards").css("left", "");
        }
    }

    loadSetup()
    {
        this.doesShowArrows();
        this.selectedTime(this.state.year, this.state.semester, "orange");
        this.showSemesters(this.state.year);
    }

    render()
    {
        $(window).on('resize', () => this.doesShowArrows());
        $(window).on('load', () => this.loadSetup());

        return(
            <div id = "board-body">
                <div id = "years">
                    <div id = "years-container">
                        {this.createYear(2017)}
                        {this.createYear(2018)}
                        {this.createYear(2019)}
                        {this.createYear(2020)}
                        {this.createYear(2021)}
                        {this.createYear(2022)}
                        {this.createYear(2023)}
                    </div>
                </div>
                <div id = "eboard-members-tab">
                    <div id = "eboard-members-cards" className = "member-cards">{this.getEBoard()}</div>
                    <img id = "e-back-arrow" className = "hidden" src = {ArrowBackward} alt = "forward arrow" onClick = {() => this.backward("eboard-members-cards", this.getEBoard())}/>
                    <img id = "e-front-arrow" className = "hidden" src = {ArrowForward} alt = "backward arrow" onClick = {() => this.forward("eboard-members-cards", this.getEBoard())}/>
                </div>
                <div id = "wire1"/>
                <div id = "jboard-members-tab">
                    <div id = "jboard-members-cards" className = "member-cards">{this.getJBoard()}</div>
                    <img id = "j-back-arrow" className = "hidden" src = {ArrowBackward} alt = "forward arrow" onClick = {() => this.backward("jboard-members-cards", this.getJBoard())}/>
                    <img id = "j-front-arrow" className = "hidden" src = {ArrowForward} alt = "backward arrow" onClick = {() => this.forward("jboard-members-cards", this.getJBoard())}/>
                </div>
                <div id = "wire2"/>
                <div id = "board-members-tab">
                    <div id = "board-members-cards" className = "member-cards">{this.getDBoard()}</div>
                    <img id = "d-back-arrow" className = "hidden" src = {ArrowBackward} alt = "forward arrow" onClick = {() => this.backward("board-members-cards", this.getDBoard())}/>
                    <img id = "d-front-arrow" className = "hidden" src = {ArrowForward} alt = "backward arrow" onClick = {() => this.forward("board-members-cards", this.getDBoard())}/>
                </div>
                <div id = "wire3"/>
            </div>
        );
    }
}
export default MembersBoard;