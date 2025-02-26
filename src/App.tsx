import "./App.css";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
