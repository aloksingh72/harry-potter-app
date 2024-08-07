import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Book from './component/Book'
import Character from "./component/Character"
import Spell from "./component/Spell"
import Movies from "./component/Movies"
import Navbar from './component/Navbar'

function App() {
  

  return (
    <>
    <div className='backgroun'>

    <Navbar path="/"/>
    <Routes>
    
     <Route path="/" element={<Book/>} ></Route>
     <Route path="/spell" element={<Spell/>} ></Route>
     <Route path="/character" element={<Character/>} ></Route>
     <Route path="/movies" element={<Movies/>} ></Route>

    </Routes>
    </div>
    
    </>
  )
}

export default App
