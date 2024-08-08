import Cards from "./Components/Cards";
import Navbars from "./Components/Navbars";
import Sign_ins from "./Components/Sign_ins";
import Validations from "./Components/Validations";
import Accordions from "./Components/Accordions";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function Navbar() {
  return <Navbars />
}

function Validation() {
  return <Validations />
}

function Sign_in() {
  return <Sign_ins />
}

function Card() {
  return <Cards />
}

function Accordion() {
  return <Accordions />
}

function App() {
  return (
    <Router>
    <div>
      <Navbar />
    <Routes>
    <Route path="/" element={<Accordion/>} />
    <Route path="/home" element={<Accordion/>} />
    <Route path="/card" element={<Card/>} />
    <Route path="/register" element={<Validation/>} />
    <Route path="/sign" element={<Sign_in/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default App
