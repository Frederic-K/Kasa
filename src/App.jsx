import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Accommodation from './pages/Accomodation/Accomodation'
import About from './pages/About/About'
import Error404 from './pages/404/Error404'

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
    </BrowserRouter>
  )
}

export default App
