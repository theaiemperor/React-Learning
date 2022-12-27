import Navbar from './components/Navbar';
import TextCapital from './components/TextCapital'
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
        <Navbar title="NB" provides="Products" />
            <Routes>
            <Route exact path="/" element={<TextCapital/>} />
            <Route exact path="/about" element={<About />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
