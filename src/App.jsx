import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import PortfolioCompanyPage from './pages/PortfolioCompanyPage'
import PortfolioIndexPage from './pages/PortfolioIndexPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />

        <Route path="/team"      element={<Team />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/portfolio"        element={<PortfolioIndexPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioCompanyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
