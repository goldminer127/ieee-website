import WorkshopArchiveCard from "./WorkshopArchiveCard.js";
import React from "react";
import "./Archive.css";
class Archive extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: require("../Database/PastWorkshops.json"),
            semester: "spring",
            year: "2022",
        };
    }

    getWorkshops(semester, year)
    {
        let workshops = this.state.data;
        workshops = workshops.filter(workshop => workshop.semester === semester && workshop.year === year);
        return workshops.map(workshop => <WorkshopArchiveCard name = {workshop.name} description = {workshop.description} youtube = {workshop.youtube} thumbnail = {workshop.thumbnail} semester = {workshop.semester} year = {workshop.year}/>)
    }

    makeSection(year, semesters)
    {
        return(
            <div className = "section-body">
                <h1 className = "section-name">{year}</h1>
                <div className = "archive-semesters">
                    {semesters.map(semester => <h3 className = "archive-semester" onClick = {() => this.changeDate(semester, year)}>{this.formatSemester(semester)}</h3>)}
                </div>
            </div>
        );
    }

    formatSemester(semester)
    {
        return semester.charAt(0).toUpperCase() + semester.substring(1, semester.length);
    }

    changeDate(semester, year)
    {
        this.setState(
        {
            semester: semester,
            year: year,
        });
    }

    render()
    {
        return(
            <div>
                <div id = "archive-body">
                    <div id = "archive-dates">
                        {this.makeSection("2021", ["spring", "fall", "winter"])}
                    </div>
                    <div id = "archive-section">
                        {this.getWorkshops(this.state.semester, this.state.year)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Archive;