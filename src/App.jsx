import { useState, useRef } from 'react'
import Home from './screens/Home'
import StickyCard from "./components/StickyCard"
import Navbar from './components/Navbar'
import Films from './screens/Films'
import VisDev from './screens/VisDev'

const App = () => {
  const [page, setPage] = useState(0) 
  const touchStartY = useRef(null)

  const handleWheel = (e) => {
    if (e.deltaY > 30) setPage(prev => Math.min(prev + 1, 2))
    if (e.deltaY < -30) setPage(prev => Math.max(prev - 1, 0))
  }

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY
    if (diff > 40) setPage(prev => Math.min(prev + 1, 2))
    if (diff < -40) setPage(prev => Math.max(prev - 1, 0))
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar />
      <div className="relative flex-1 overflow-hidden">
        <Home scrolledAway={page > 0} />
        <Films scrolledAway={page === 1} page={page} />
        <VisDev scrolledAway={page === 2} />
      </div>
      <StickyCard visible={page > 0} />
    </div>
  )
}

export default App