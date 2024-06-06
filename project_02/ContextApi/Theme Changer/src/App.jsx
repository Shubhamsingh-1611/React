import { useContext, useEffect, useState } from 'react'

import './App.css'

import Btn from './components/Btn'
import Card from './components/Card'
import ThemeContextProvider, { useTheme } from './context/ThemeContextProvider'
import ThemeContext from './context/ThemeContext'

function App() {
const {theme,setTheme}= useContext(ThemeContext);
// //   actual theme change 
useEffect(()=>{
document.querySelector("html").classList.remove("light","dark")
document.querySelector("html").classList.add(theme)
},[theme])
  return (
    <>
       
     <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <Btn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            
    </>
  )
}

export default App
