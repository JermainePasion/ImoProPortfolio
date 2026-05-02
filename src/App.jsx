import { useState, useRef } from 'react'
import Home from './screens/Home'
import StickyCard from "./components/StickyCard"
import Navbar from './components/Navbar'
import Films from './screens/Films'
import VisDev from './screens/VisDev'
import Graphics from './screens/Graphics'

const FADE_MS = 300

const App = () => {
  const [page, setPage] = useState(0)
  const [displayedPage, setDisplayedPage] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const touchStartY = useRef(null)
  const transitioning = useRef(false)

  const changePage = (next) => {
    if (transitioning.current || next === page) return
    transitioning.current = true
    setPage(next)
    setOpacity(0)

    setTimeout(() => {
      setDisplayedPage(next)
      setOpacity(1)
      setTimeout(() => { transitioning.current = false }, FADE_MS)
    }, FADE_MS)
  }

  const handleWheel = (e) => {
    if (e.deltaY > 30) changePage(Math.min(page + 1, 3))
    if (e.deltaY < -30) changePage(Math.max(page - 1, 0))
  }

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY
    if (diff > 40) changePage(Math.min(page + 1, 3))
    if (diff < -40) changePage(Math.max(page - 1, 0))
  }

  const screens = [Home, Films, VisDev, Graphics]
  const Screen = screens[displayedPage]

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar />

      <div
        className="relative flex-1 overflow-hidden"
        style={{ opacity, transition: `opacity ${FADE_MS}ms ease` }}
      >
        <Screen />
      </div>

      <StickyCard visible={displayedPage > 0} />
    </div>
  )
}

export default App