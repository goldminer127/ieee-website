import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestComponent from './TestFolder/TestComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/ieeeualbany' element={<TestComponent/>}/>
        </Routes>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
