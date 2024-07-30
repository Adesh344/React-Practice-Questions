import React,{useState} from 'react'

export default function Sen() {

    const [value , setValue] = useState(0)

  return (
    <div>
      <h1>Counter app</h1>
      <button onClick={()=> setValue(value+1)}>+</button>
      <h3>{value}</h3>
      <button onClick={() => setValue(value-1)}>-</button>
    </div>
  )
}
