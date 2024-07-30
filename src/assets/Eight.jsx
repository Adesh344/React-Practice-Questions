import React, { useState } from 'react'

function Eight() {

    const [input ,setInput] = useState('')
    const [todos , setTodo] = useState([])

    const addTodo = () => {
        if(input.trim()!==''){
            setTodo([...todos,input])
            setInput(' ')
            
        }
    }

    const removeTodo = (index) =>{
        const unpdateTodo = todos.filter((_,i) => i!== index)
        setTodo(unpdateTodo)
    }
    
  return (
    <>
    <h2>Any Another Todo App</h2>
    <div>
        <input type="text" value={input} placeholder='Add your todo here' onChange={(e)=>setInput(e.target.value)}/> 
        <button onClick={ addTodo }>Add </button>
    </div>
    <div>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    {todo} <button onClick={()=>removeTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Eight