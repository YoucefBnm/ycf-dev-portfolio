import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './routes/Home'
import { Navbar } from './components'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
