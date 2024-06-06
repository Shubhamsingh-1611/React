import React, { useContext, useState } from 'react'
import ThemeContext from './ThemeContext'
function ThemeContextProvider({children}) {
    const [theme,setTheme] = useState('light');
    const lightTheme=(mode)=> {
       setTheme("light")
    }
    const darkTheme=(mode) =>{
      setTheme("dark")
    }
  return (
   <ThemeContext.Provider value={{theme,setTheme,lightTheme,darkTheme}}>
    {children}
   </ThemeContext.Provider>

  )
}

export default ThemeContextProvider

export   function useTheme(){
   return(
    useContext(ThemeContext)
   )
}