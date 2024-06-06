import React, { useState } from 'react'

function App() {
  const [counter,setCounter] = useState(20)
  const add = ()=>{
    if(counter<30) {
      // !by the use of react fiber it do work in bunches . so due to similar work it do it one time only
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // ! to do the following operation we get a callback in the setCounter method that gives current state
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
    }
    return
  }
  const sub = () =>{
    if(counter>0) setCounter(counter-1)
    
    return
  }
  return (
   <>
   <h1>Shubhma Singh</h1>
   <h2>The value of counter is :{counter} </h2>
   <button onClick={add}>Increase count</button>
   <br/>
   <button onClick={sub}>Decrease count</button>
   </>
  )
}

export default App
