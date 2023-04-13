import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Navbar from "./component/Navbar";
import Services from "./screens/Services";
import Footer from "./component/Footer";
import FeedbackComp from "./component/FeedbackComp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Routes>
        <FeedbackComp />
        <Footer />
      </Router>
    </>
  );
}

export default App;
