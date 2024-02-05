import Homepage from "./Homepage.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Qualifications from "./Qualifications.js";
import Projects from "./Projects.js";
import './Homepage.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact.js";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Qualifications" element={<Qualifications />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<res />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
