import React, { useState } from 'react'

function Fifth() {

    const [toggle , setToggle ] = useState(false)

    const changeToggle = () =>{
        setToggle(!toggle)
    } 

  return (
    <>
      <h2>Toggle Switch</h2>
      <input type="checkbox" onChange={changeToggle} />
      <label>{toggle ? "yes" : "no"}</label>
    </>
  )
}

export default Fifth