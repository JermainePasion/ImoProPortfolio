import React from 'react'
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate
} from "react-router-dom"
import Home from './screens/Home'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App