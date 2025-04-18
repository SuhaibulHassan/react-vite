import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home'
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage'
import HiringPage from './pages/HiringPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='blogs' element={<BlogPage/>}></Route>
          <Route path='contactus' element={<ContactPage/>}></Route>
          <Route path='were-hiring' element={<HiringPage/>}></Route>
          <Route path='about-us' element={<AboutPage/>}></Route>
          <Route path='our-team' element={<TeamPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
