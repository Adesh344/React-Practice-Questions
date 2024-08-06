import React,{useState} from 'react'

function Seventeen() {

    const [color , setColor] = useState('#000000')

    const selectColor = (e) => {
        setColor(e.target.value)
    }

  return (
    <>
    <h2>Select Your Color</h2>
    <input type="color" onChange={selectColor}/>
    <div style={{height : "100px", width : "100px", backgroundColor:color}}>
        
    </div>
    </>
  )
}

export default Seventeen