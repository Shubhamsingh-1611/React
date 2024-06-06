import { useState,useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// the use ref hook is used to get the reference of the particular html tag

function App() {

  const [length,setLength] = useState(13)
  const [Number,setNumber] = useState(false)
  const [Character,setCharacter] = useState(false)
  const [password,setPassword]= useState("shubham")
   const Password_Generator=useCallback(()=>{  //this is used for the memoziation ; faster working by keeping the repetedly used stuff in the regese
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num = "1234567890"
    const symbol = "!@#$%^&*"
    if(Number) {
      str+=num;
    }
    if(Character) {
      str+=symbol;
    }
    let password =""
    for(let i=0;i<=length;i++) {
     let char = Math.floor(Math.random()*str.length+1)
     password+=str.charAt(char);
    }

   setPassword(password);
   
   },[[length,Character,Number]])
    
   useEffect(()=>{
    Password_Generator()  //this hook is used agar dependendies me kuch bhi change hua to function ko wapas render karega
   },[length,Character,Number])

   const passwordRef = useRef(null);
   // copy ,method
   const copyToClipBoard =useCallback(()=>{
    passwordRef.current?.select()//this is used to give user an good ui current?.setselectionRange(0,3) to select only two words
     window.navigator.clipboard.writeText(password)
   },[password])
   
 
  return (
    <>
     <h1>Password Generator</h1>
     <div>
      <div>
        <input type="text" className='bg-white text-black h-10 w-[400px]' value={password} ref={passwordRef}/> <button onClick={copyToClipBoard}>Copy</button>
      </div>
      <div>
      <label htmlFor='length' className='ml-[10px]' >Length:{length}</label>
        <input id="length" type="range" min={0} max={100} onClick={(e)=>(setLength(e.target.value))}  className='ml-[10px] text-orange-500' />
        <label htmlFor='num' className='ml-[10px]'>Number</label>
        <input id="num" type='checkbox' className='ml-[10px]' onChange={()=>(setNumber((prev)=>!prev))}/>
        <label htmlFor='char' className='ml-[10px]'>Character</label>
        <input id="char" type='checkbox' onChange={()=>(setCharacter((prev)=>!prev))} className='ml-[10px]'/>
        
      </div>
     </div>
    </>
  )
}

export default App
