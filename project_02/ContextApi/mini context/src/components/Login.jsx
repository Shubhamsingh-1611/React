import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState("")
    const [Password,setPassword] = useState("")

    const {setUser} = useContext(UserContext); // setUser is defined in the UserContextProvider.jsx// UserContext give detail about the userContext because ther are many context in one project
    const handlesubmit=(e)=>{
          e.preventDefault()
          setUser({username,Password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username'/>
      <input type='text' value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      <button onClick={handlesubmit}>Submit</button>

    </div>
  )
}

export default Login
