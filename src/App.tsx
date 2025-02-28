import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { SubjectMain } from "./utils/subject/page";
import { CoursesMain } from "./utils/courses/page";
import { RequestATutor } from "./utils/requestAtutor/page";
import { ContactUs } from "./utils/contactus/page";
import ScrollToTop from "./Components/ScrollToTop"; 
import Footer from "./Components/footer";
import { AboutUs } from "./utils/about/page";
import { BlogMain } from "./utils/blog/page";

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<SubjectMain />} />
        <Route path="/courses" element={<CoursesMain />} />
        <Route path="/requestatutor" element={<RequestATutor />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<BlogMain />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
