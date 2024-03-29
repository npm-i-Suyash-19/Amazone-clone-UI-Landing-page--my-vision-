"use client"
import React from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Image from 'next/image'
import Upperfooter from './Components/Footer/Upperfooter'


const App=()=>{
  return(
    <>
    <header><Header></Header></header>
        <main>
          <Main/>
        </main>
    <footer><Upperfooter/></footer>
    </>
  )  
}

export default App 