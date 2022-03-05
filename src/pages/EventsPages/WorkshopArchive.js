import Header from "../../Components/EventsBanner.js"
import Footer from "../../Components/Footer.js"
import WorkshopArchiveCard from "../../Components/WorkshopArchiveCard.js"
import "./WorkshopArchive.css"

function WorkshopArchive()
{
    return(
        <div>
            <Header color = "rgb(34, 0, 51)"/>
            <div id = "archive-body">
                <h1 className = "archive-title">Spring 2022</h1>
                <WorkshopArchiveCard
                    id = "wa65"
                    name = "Intro to Blockchain"
                    description = "We go over math.h. We go over the entire keywords list and see if there is anything we don't know. We go over vargs and define macro vargs."
                    youtube = "https://www.youtube.com/watch?v=4rnAlX5iAt4"
                    thumbnail = ""
                />
                <h1 className = "archive-title">Winter 2021</h1>
                <WorkshopArchiveCard
                    id = "wa58"
                    name = "C Crash Course Day 1"
                    description = "Math, Logic, n’ Bits: Declaring variables, Data Types, Operators, CV-Qualifiers, Signed and Unsigned, Basic I/O."
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa59"
                    name = "C Crash Course Day 2"
                    description = "Control, Control, Control! Conditional control flow, Fixed arrays (without pointers), Loops (for, while, and do-while), Functions (pass-by-value)."
                    youtube = "https://www.youtube.com/watch?v=EjfouYm1-m4"
                    thumbnail = "/images/2021-2022/events/winter/cn2.png"
                />
                <WorkshopArchiveCard
                    id = "wa60"
                    name = "C Crash Course Day 3"
                    description = "Pointers without Tears! Pointers, Advanced Functions, Dynamic memory allocation (malloc, calloc, realloc, and free), Structs."
                    youtube = "https://www.youtube.com/watch?v=_2H-khC55fM"
                    thumbnail = "/images/2021-2022/events/winter/cn3.png"
                />
                <WorkshopArchiveCard
                    id = "wa61"
                    name = "C Crash Course Day 4"
                    description = "The Big Picture! Preprocessing directives, Program structuring, Compilation stages, Running Under the hood, The C program inside of Memory."
                    youtube = "https://www.youtube.com/watch?v=e_CbsOzVYu8"
                    thumbnail = "/images/2021-2022/events/winter/cn4.png"
                />
                <WorkshopArchiveCard
                    id = "wa62"
                    name = "C Crash Course Day 5"
                    description = "Strings and Things. We go over the entire String.h library. We go over the entire Stdio.h library"
                    youtube = "https://www.youtube.com/watch?v=LX0faSGKDnA"
                    thumbnail = "/images/2021-2022/events/winter/cn5.png"
                />
                <WorkshopArchiveCard
                    id = "wa63"
                    name = "C Crash Course Day 6"
                    description = "Enums and Unions."
                    youtube = "https://www.youtube.com/watch?v=VQeBlDN2ALU"
                    thumbnail = "/images/2021-2022/events/winter/cn6.png"
                />
                <WorkshopArchiveCard
                    id = "wa64"
                    name = "C Crash Course Day 7"
                    description = "We go over math.h. We go over the entire keywords list and see if there is anything we don't know. We go over vargs and define macro vargs."
                    youtube = "https://www.youtube.com/watch?v=n7HhYtOb_bo"
                    thumbnail = "/images/2021-2022/events/winter/cn7.png"
                />
                <h1 className = "archive-title">Fall 2021</h1>
                <WorkshopArchiveCard
                    id = "wa36"
                    name = "Fall 2021 General Interest Meeting"
                    description = ""
                    youtube = "https://youtu.be/0v3fd-Cpf9g"
                    thumbnail = "/images/2021-2022/events/fall/0_general_interest_meeting_thumbnail_2.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa37"
                    name = "Introduction to Machine Learning with Logistic Regression"
                    description = ""
                    youtube = "https://youtu.be/YOsvIK4b_OI"
                    thumbnail = "/images/2021-2022/events/fall/1_thumbnail_2.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa38"
                    name = "Linux Distributions and Virtual Machines"
                    description = ""
                    youtube = "https://youtu.be/eOyoLZUdGPs"
                    thumbnail = "/images/2021-2022/events/fall/2_thumbnail_2.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa39"
                    name = "How to Get a Job in Tech"
                    description = ""
                    youtube = "https://youtu.be/7e7rMkpUJZM"
                    thumbnail = "/images/2021-2022/events/fall/3_thumbnail_2.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa40"
                    name = "Imposter Syndrome and Burnout"
                    description = ""
                    youtube = "https://youtu.be/3LVPZIXcSqY"
                    thumbnail = "/images/2021-2022/events/fall/4_thumbnail_3.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa41"
                    name = "Kitware OSTP Presentation"
                    description = "Come learn about a program that Kitware offers where they will pay for 100% of your Master's degree while you work there as a full-time software engineer at the same time!"
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa42"
                    name = "Dynamic Programming"
                    description = ""
                    youtube = ""
                    thumbnail = "/images/2021-2022/events/fall/5_thumbnail.png"
                />
                <WorkshopArchiveCard
                    id = "wa43"
                    name = "Intro to Java 8"
                    description = ""
                    youtube = "https://youtu.be/isx7aFhfCJw"
                    thumbnail = "/images/2021-2022/events/fall/6_thumbnail.png"
                />
                <WorkshopArchiveCard
                    id = "wa44"
                    name = "Intro to Unit Testing"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa45"
                    name = "Jahnel Group Company Talk"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa46"
                    name = "How to write a Discord bot"
                    description = ""
                    youtube = "https://www.youtube.com/watch?v=4LbQFLLcFJw"
                    thumbnail = "/images/2021-2022/events/fall/discord_bot.png"
                />
                <WorkshopArchiveCard
                    id = "wa47"
                    name = "LinkedIn and Handshake Workshop"
                    description = "Connect With Other Cyber Students, hosted by the Women in Cyber Security (WiCyS)."
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa48"
                    name = "Learn SQL Workshop"
                    description = "Learn SQL Workshop, co-hosted by the IEEE and WiCyS."
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa49"
                    name = "Analysis of Algorithms and Data Structures Workshop"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa50"
                    name = "IEEE Halloween Party"
                    description = ""
                    youtube = ""
                    thumbnail = "/images/2021-2022/events/fall/IEEE_halloween.png"
                />
                <WorkshopArchiveCard
                    id = "wa51"
                    name = "Talk from former startup owner"
                    description = "Talk from former startup owner, one of the first 10 engineers at Instagram, and current SWE @ a startup."
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa52"
                    name = "Machine Learning with Logistic Regression Workshop"
                    description = ""
                    youtube = ""
                    thumbnail = "/images/2021-2022/events/fall/logistic_regression.png"
                />
                <WorkshopArchiveCard
                    id = "wa53"
                    name = "Frontend Development Part I: Intro to HTML and CSS"
                    description = ""
                    youtube = "https://www.youtube.com/watch?v=5QIo8Z3OP0g"
                    thumbnail = "/images/2021-2022/events/fall/web_p1.png"
                />
                <WorkshopArchiveCard
                    id = "wa54"
                    name = "Frontend Development Part II: Intro to JavaScript"
                    description = ""
                    youtube = ""
                    thumbnail = "/images/2021-2022/events/fall/web_p2.png"
                />
                <WorkshopArchiveCard
                    id = "wa55"
                    name = "Introduction to GraphQL with JavaScript and MongoDB"
                    description = ""
                    youtube = "https://www.youtube.com/watch?v=dnP3gFg-aew"
                    thumbnail = "/images/2021-2022/events/fall/graphQL_mongoDB.png"
                />
                <WorkshopArchiveCard
                    id = "wa56"
                    name = "How Do We Make CPUs?"
                    description = "Presented by Michael Phipps."
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa57"
                    name = "Unit Testing Workshop"
                    description = ""
                    youtube = "https://www.youtube.com/watch?v=KEowEsiJxPI&t=1522s"
                    thumbnail = "/images/2021-2022/events/fall/unit_testing.png"
                />
                <h1 className = "archive-title">Spring 2021</h1>
                <WorkshopArchiveCard
                    id = "wa18"
                    name = "Spring 2021 General Interest Meeting"
                    description = ""
                    youtube = "https://youtu.be/a4z-NOPzAjQ"
                    thumbnail = "/images/2020-2021/events/spring/ieee_spring_general_interest.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa19"
                    name = "Introduction to Time Complexity and Big O Notation"
                    description = ""
                    youtube = "https://youtu.be/d04rW-eezRM"
                    thumbnail = "/images/2020-2021/events/spring/ieee_spring_1.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa20"
                    name = "Introduction to Vim"
                    description = ""
                    youtube = "https://youtu.be/2ZqksQeYS9g"
                    thumbnail = "/images/2020-2021/events/spring/ieee_spring_2.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa21"
                    name = "Preparing for a job in Industry"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa22"
                    name = "A Gentle Introduction to MATLAB"
                    description = ""
                    youtube = "https://youtu.be/8DvwAip9DjE"
                    thumbnail = "/images/2020-2021/events/spring/ieee_spring_3.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa23"
                    name = "Android Studio, reviewing the basics and building a simple surface view camera app"
                    description = ""
                    youtube = "https://youtu.be/9DpOVWKU0rA"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa24"
                    name = "Introduction to The C# Programming Language with Professor Phipps, Live Q & A"
                    description = ""
                    youtube = "https://youtu.be/3WD-lJGQhr4"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa25"
                    name = "Industry Interview Panel"
                    description = ""
                    youtube = "https://youtu.be/7-FQGA_FIAg"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa26"
                    name = "Darknet Diaries Watch Party and Co-Working Stream"
                    description = ""
                    youtube = "https://youtu.be/fxHLwDlFN5A"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa27"
                    name = "Intro to Quantum Computing"
                    description = ""
                    youtube = "https://youtu.be/MzxGlndbGSM"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa28"
                    name = "Kitware Q&A"
                    description = ""
                    youtube = "https://youtu.be/_slqSWYRJeQ"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa29"
                    name = "Intro to REST APIs"
                    description = ""
                    youtube = "https://youtu.be/doJlGLUt308"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa30"
                    name = "Intro to Python Part 1"
                    description = ""
                    youtube = "https://youtu.be/SJJL-GRLNnE"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa31"
                    name = "Intro to Python Part 2"
                    description = ""
                    youtube = "https://youtu.be/T9ptErhtrdk"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa32"
                    name = "Introduction to the Go Programming Language"
                    description = ""
                    youtube = "https://youtu.be/SEe_BQHoG40"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa33"
                    name = "Machine Learning"
                    description = ""
                    youtube = "https://youtu.be/GMjoXHNhQ9M"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa34"
                    name = "Software Design Patterns"
                    description = ""
                    youtube = "https://youtu.be/Uz-to9qeQpI"
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa35"
                    name = "Introduction to Discord Bots"
                    description = ""
                    youtube = "https://youtu.be/wH47NAlSX5w"
                    thumbnail = ""
                />
                <h1 className = "archive-title">Winter 2020</h1>
                <WorkshopArchiveCard
                    id = "wa15"
                    name = "OS Dev Workshop 1: The C programming language"
                    description = ""
                    youtube = "https://youtu.be/FupWk_zDrH4"
                    thumbnail = "/images/2020-2021/events/winter/ieee_winter_1_c.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa16"
                    name = "OS Dev Workshop 2: x86 assembly and its relationship with C"
                    description = ""
                    youtube = "https://youtu.be/T9JoULJAMG4"
                    thumbnail = "/images/2020-2021/events/winter/ieee_winter_2_x86.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa17"
                    name = "OS Dev Workshop 3: Operating System Development, the basics of building your own OS"
                    description = ""
                    youtube = "https://youtu.be/NeSbIyh8VCE"
                    thumbnail = "/images/2020-2021/events/winter/ieee_winter_2_OS.jpg"
                />
                <h1 className = "archive-title">Fall 2020</h1>
                <WorkshopArchiveCard
                    id = "wa1"
                    name = "Intro to remote management with Linux"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa2"
                    name = "Create Your Own Website Portfolio with React"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa3"
                    name = "Brainhack! Esoteric Languages Workshop and Spring 2020 Semester Wrapup"
                    description = ""
                    youtube = ""
                    thumbnail = ""
                />
                <WorkshopArchiveCard
                    id = "wa4"
                    name = "Building Up your Profile with Technologies, Projects, Certifications, Activities, and Experience"
                    description = ""
                    youtube = "https://youtu.be/sWdfyTdyLVo"
                    thumbnail = "/images/2020-2021/events/fall/ieee_1_discord.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa5"
                    name = "Introduction to development with Unity"
                    description = ""
                    youtube = "https://youtu.be/N2L2JaAv-ds"
                    thumbnail = "/images/2020-2021/events/fall/ieee_2_unity.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa6"
                    name = "Prepare for your tech interview with whiteboard coding practice"
                    description = ""
                    youtube = "https://youtu.be/S11zidnaSQc"
                    thumbnail = "/images/2020-2021/events/fall/ieee_3_code.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa7"
                    name = "Android workshop1 - Introduction to Android developement"
                    description = ""
                    youtube = "https://youtu.be/fNyssj8UtpA"
                    thumbnail = "/images/2020-2021/events/fall/ieee_4_android.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa8"
                    name = "Personal Project Showcase"
                    description = ""
                    youtube = "https://youtu.be/6Sxu-_XNJN8"
                    thumbnail = "/images/2020-2021/events/fall/ieee_5_project.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa9"
                    name = "Technical Talk Watch Party - Quantum Computing For Computer Scientists"
                    description = ""
                    youtube = "https://youtu.be/m_ZkFn12npU"
                    thumbnail = "/images/2020-2021/events/fall/ieee_6_quantum.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa10"
                    name = "Android Dev Series: Family Tree"
                    description = ""
                    youtube = "https://youtu.be/om55RNYBy4w"
                    thumbnail = "/images/2020-2021/events/fall/ieee_7_family.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa11"
                    name = "Android workshop2 - Introduction to using the camera in application"
                    description = ""
                    youtube = "https://youtu.be/NGYjqSYWDVw"
                    thumbnail = "/images/2020-2021/events/fall/ieee_8_camera.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa12"
                    name = "Introduction to machine learning with neural networks"
                    description = ""
                    youtube = "https://youtu.be/hqMXhn5GElg"
                    thumbnail = "/images/2020-2021/events/fall/ieee_9_neural.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa13"
                    name = "Introduction to Git and Github"
                    description = ""
                    youtube = "https://youtu.be/ux6q8GxEJgA"
                    thumbnail = "/images/2020-2021/events/fall/ieee_10_github.jpg"
                />
                <WorkshopArchiveCard
                    id = "wa14"
                    name = "Introduction to Game Engines"
                    description = ""
                    youtube = "https://youtu.be/eKaAwsTtF2A"
                    thumbnail = "/images/2020-2021/events/fall/ieee_11_games.jpg"
                />
            </div>
            <Footer/>
        </div>
    );
}
export default WorkshopArchive;