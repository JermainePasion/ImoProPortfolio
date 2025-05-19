import React from 'react'
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate
} from "react-router-dom"

import About from './screens/About'
import GeneralWork from './screens/GeneralWork'
import Home from './screens/Home'
import SchoolWork from './screens/SchoolWork'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/generalwork" element = {<GeneralWork/>}/>
          <Route path="/schoolwork" element = {<SchoolWork/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App