import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestComponent from './TestFolder/TestComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/ieeeualbany' element={<TestComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
