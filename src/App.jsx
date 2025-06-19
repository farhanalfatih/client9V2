import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gem from './page/Gems/gems'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gem />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
