import React, { useEffect, useState } from 'react'

function Sixth() {

    const [time , setTime ] = useState(10)

    useEffect(()=>{
        if(time > 0 ){
            const timer = setTimeout(()=> setTime(time-1),1000)
            return ()=> clearTimeout(timer)
        }    
    },[time])
    
  return (
    <h3>Time left = {time} second</h3>
  )
}

export default Sixth