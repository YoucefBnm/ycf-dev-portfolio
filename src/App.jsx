import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './routes/Home'
import { Footer, Nav } from './components'

function App() {

  return (
    <>
      <Nav />

        <Routes>
            <Route index path='/' element={<Home />} />
        </Routes>
        
      <Footer />

    </>
  )
}

export default App
