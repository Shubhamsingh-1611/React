import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/Params/User.jsx'
import GIthub from './components/GIthub/GIthub.jsx'
import { gitfollewer } from './components/GIthub/GIthub.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// ! 2nd meth0d to create rrouter

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/github' element={<GIthub/>} loader={gitfollewer}/> // loder is used to fect data as curson on the button more opyimizedapproact
    <Route path='/user/:id' element={<User/>}/> // we have to node down the : ke baad jo bhi likha hai
    //! ye jo colon ke sath likha hua hai uska acess milta hai side use file me jo render ho raha hai

   </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
