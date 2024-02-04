import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Posts }  from './components/Posts';
import { User } from './components/User';

function App() {

  const [count, setCount] = useState(0)
  return (
    <>
      <User />
      <NavBar />
      <Banner />
      <Posts />


    </>
  )
}
export default App
