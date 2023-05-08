import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Accommodation from './pages/Accomodation'
import About from './pages/About'
import Error404 from './pages/Error404'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodation/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
