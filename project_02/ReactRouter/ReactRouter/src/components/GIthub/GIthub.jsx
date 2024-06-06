import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom';
export default  function GIthub() { //the useLoaderData hook is used to get the data from loder // we can also write fetch in th loder in main .js
    const data = useLoaderData();
  return (
    
    <div>
      <h1 className='bg-gray-700'>Github follower:{data.followers}</h1>
    </div>
  )
}


 export  const gitfollewer= async()=> {
       const res = await fetch('https://api.github.com/users/hiteshchoudhary')
       return res.json();
 }