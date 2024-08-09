import Cards from "./Components/Cards";
import Navbars from "./Components/Navbars";
import Validations from "./Components/Validations";
import Accordions from "./Components/Accordions";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login1 } from "./Components/Login1";
import { Sign1 } from "./Components/Sign1";




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
    <Route path="/card" element={<Cards/>} />
    <Route path="/sign" element={<Sign1/>} />
    <Route path="/login" element={<Login1/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default App
