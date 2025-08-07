import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopMenu from './Components/TopMenu'
import SideBar from './Components/SideBar'

function App() {
  
  return (
    <>
      <TopMenu/>
      <SideBar/>    
    </>
  )
}

export default App
