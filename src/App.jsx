import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './routes/Home'
import { CalendlyBtn, Footer, Nav } from './components'

function App() {

  return (
    <div id="root">
      <Nav />

        <Routes>
            <Route index path='/' element={<Home />} />
        </Routes>
        <CalendlyBtn />
      <Footer />

    </div>
  )
}

export default App
