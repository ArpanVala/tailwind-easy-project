import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newslatter from './components/Newslatter'
const App = ()=>{
  return (
    <>
      <Navbar/>
      <Hero/> 
      <Analytics/>
      <Newslatter/>
    </>
  )

}
export default App
