import { useState, useRef } from 'react'
import Home from './screens/Home'
import StickyCard from "./components/StickyCard"
import Navbar from './components/Navbar'
import Films from './screens/Films'

const App = () => {
  const [scrolledAway, setScrolledAway] = useState(false)
  const touchStartY = useRef(null)

  const handleWheel = (e) => {
    if (e.deltaY > 30 && !scrolledAway) setScrolledAway(true)
    if (e.deltaY < -30 && scrolledAway) setScrolledAway(false)
  }

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY
    if (diff > 40 && !scrolledAway) setScrolledAway(true)
    if (diff < -40 && scrolledAway) setScrolledAway(false)
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar />
      <Home scrolledAway={scrolledAway} />
      <Films scrolledAway={scrolledAway} />
      <StickyCard visible={scrolledAway}/>
    </div>
  )
}

export default App