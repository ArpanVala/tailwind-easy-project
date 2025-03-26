import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newslatter from './components/Newslatter'
import Cards from './components/Cards'
const App = ()=>{
  return (
    <>
      <Navbar/>
      <Hero/> 
      <Analytics/>
      <Newslatter/>
      <Cards/>
    </>
  )

}
export default App
