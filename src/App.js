import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import SingleProject from "./pages/SingleProject";
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<SingleProject />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
