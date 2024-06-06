import React, { useContext, useEffect } from 'react'
import { useTheme } from '../context/ThemeContextProvider'

// import ThemeContext from '../context/ThemeContext'
function Test() {
     const {theme,darkTheme} =useTheme()
    useEffect(()=>{
       darkTheme()
       
    },[])
    

  return (
    <div>
      <h1>Theme Mode: {theme}</h1>
    </div>
  )
}

export default Test
