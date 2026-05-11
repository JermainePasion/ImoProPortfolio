import { useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './screens/Home'
import StickyCard from "./components/StickyCard"
import Navbar from './components/Navbar'
import Films from './screens/Films'
import VisDev from './screens/VisDev'
import Graphics from './screens/Graphics'
import Posters from './screens/Posters'

const FADE_MS = 300

const MainLayout = () => {
  const location = useLocation()
  const initialPage = location.state?.page ?? 0

  const [page, setPage] = useState(initialPage)
  const [displayedPage, setDisplayedPage] = useState(initialPage)
  
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/posters" element={<Posters />} />
    </Routes>
  )
}

export default App