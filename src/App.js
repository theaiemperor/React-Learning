import Navbar from './components/Navbar';
import About from './components/About';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import EditModal from './note/EditModal';



function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<EditModal mode={false} />} />
            <Route exact path="/signin" element={<EditModal mode={true} />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
