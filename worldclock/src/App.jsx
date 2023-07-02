import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Clock from './component/Clock'
import './App.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/About" element={<Clock/>}/>
        <Route path="/contact" element={<Stopwatch/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
