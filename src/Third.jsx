import React , { useState} from 'react'


function Third() {

    const [value , setValue] = useState('');

   

  return (
    <>
    <h1>Values</h1>
    <input type="text" onChange={(e)=>setValue(e.target.value)}/> 
    <p>User Input : {value} </p>
    </>
  )
}

export default Third