import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import Posts  from './components/Posts'
import NavBar2 from './components/NavBar2'

function App() {

  const [count, setCount] = useState(0)
  return (
    <>

      <NavBar />
      <Banner />
      <Posts />
      {/* <NavBar2 /> */}

    </>
  )
}
export default App
