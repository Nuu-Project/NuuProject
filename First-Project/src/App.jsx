import Navbars from "./Components/Navbars"
import Validations from "./Components/Validations"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Navbar() {
  return <Navbars />
}

function Validation() {
  return <Validations />
}

function App() {
  return (
    <Router>
    <div>
      <Navbars />
    <Routes>
    <Route path="/register" element={<Validation/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default App
