import './App.css';
import About from './pages/AboutPages/About.js'
import BoardMembers from './pages/BoardMembers/Members.js'
import Home from './pages/Home.js'
import EventsHome from './pages/EventsPages/EventsHome.js'
import Projects from './pages/EventsPages/Projects.js'
import Schedule from './pages/EventsPages/Schedule.js'
import CodingNight from './pages/EventsPages/CodingNight.js'
import WorkshopArchive from './pages/EventsPages/WorkshopArchive.js';
//Must import any featured projects from members
import TShell from './pages/EventsPages/MemberProjects/TShell.js'
import OfficeHours from './pages/EventsPages/MemberProjects/OfficeHours.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/members" element={<BoardMembers/>}/>
          <Route path="/events/home" element={<EventsHome/>}/>
          <Route path="/events/projects" element={<Projects/>}/>
          <Route path="/events/schedule" element={<Schedule/>}/>
          <Route path="/events/coding-night" element={<CodingNight/>}/>
          <Route path="/events/workshop-archive" element={<WorkshopArchive/>}/>
          {/* Add project name to the end of project route (/projects/name)
              Must also import project file in the same format as the top of the file */}
          <Route path="/events/projects/TShell" element={<TShell/>}/>
          <Route path="/events/projects/OfficeHours" element={<OfficeHours/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
