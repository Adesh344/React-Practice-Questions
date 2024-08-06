import React from 'react'

function Fourth() {
  const items = ['Item1' ,'Item2' , 'Item3' , 'Item4' , 'Item5',"Animal"]
  return (
    <>
    <h2>Display The List of Items</h2>
    <ul>
        {items.map((item , index) =>{
            return <li key={index}>{item}</li>
        })}
    </ul>
    </>
    
  )
}

export default Fourth