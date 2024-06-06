import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='h-screen w-[100%] p-0 m-0' style={{backgroundColor:color}}>
    <h1 >BackGround Changer</h1>
    <div className='w-[600px] bg-white mt-3 h-[70px] rounded-md flex justify-center items-center' >

     <div className="bg-red-500 h-[40px] w-[50px] rounded-lg ml-[20px]" onClick={()=>setColor("red")}>red</div>
     <div className="bg-yellow-500 h-[40px] w-[50px] rounded-lg ml-[20px]"onClick={()=>setColor("yellow")} >yellow</div>
     <div className="bg-orange-500 h-[40px] w-[50px] rounded-lg ml-[20px]"onClick={()=>setColor("orange")} >orange</div>
     <div className="bg-green-500 h-[40px] w-[50px] rounded-lg ml-[20px]" onClick={()=>setColor("green")}>green</div>
     <div className="bg-blue-500 h-[40px] w-[50px] rounded-lg ml-[20px]" onClick={()=>setColor("blue")}>blue</div>
    
    </div>
  </div>
  )
}

export default App
